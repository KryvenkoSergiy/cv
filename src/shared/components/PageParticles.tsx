import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type P3 = [number, number, number];
type Seed = readonly [number, number, number, number];

const DOT = "110, 231, 183";
const LIT = "167, 243, 208";
/** How fast the cloud gathers on page load: ~1 s, like the home scene. */
const FOLLOW = 2.2;
/** Narrower side margins than this get no backdrop at all (phones, tablets, small windows). */
const MIN_GUTTER = 180;

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

/** A gently winding timeline, a ring at each role. */
function timeline([a, b, c, d]: Seed, nodes: number): { p: P3; u: number } {
  const along = (u: number): P3 => [Math.sin(u * Math.PI * 2) * 0.3, -1.4 + u * 2.8, Math.cos(u * Math.PI * 2) * 0.3];
  if (a < 0.6) {
    const p = along(b);
    return { p: [p[0] + (c - 0.5) * 0.04, p[1], p[2] + (d - 0.5) * 0.04], u: b };
  }
  const u = Math.floor(b * nodes) / (nodes - 1);
  const centre = along(u);
  const t = c * Math.PI * 2;
  return { p: [centre[0] + Math.cos(t) * 0.14, centre[1], centre[2] + Math.sin(t) * 0.14], u };
}

interface Props {
  /** Rings on the timeline: one per role. */
  count: number;
}

/**
 * The Experience page's backdrop, from the same family as the home scene: the
 * particles gather from a cloud when the page opens into a winding 3D
 * timeline, a ring per role, that slowly turns; the stretch already scrolled
 * past is lit. Drawn only in the right margin beside the content column,
 * never behind the text; with no room for it (phones, small windows), it
 * isn't drawn. The column is measured from a hidden anchor in the page's own
 * container. The canvas is portalled to <body> for the same reason as the
 * home scene: the page transition transforms an ancestor, which breaks
 * `fixed`.
 */
export const PageParticles = ({ count }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const column = anchorRef.current?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !column || !ctx) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles = Array.from({ length: 600 }, () => ({
      seed: [Math.random(), Math.random(), Math.random(), Math.random()] as Seed,
      cloud: [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3] as P3,
    }));
    let w = 0;
    let h = 0;
    let frame = 0;
    let last = 0;
    let time = 0;
    let gathered = still ? 1 : 0;
    let visible = false;

    const draw = (dt: number) => {
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      gathered += (1 - gathered) * (1 - Math.exp(-dt * FOLLOW));
      const scrolled = clamp(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight));
      const yaw = time * 0.08 + scrolled * 0.8;
      const pitch = 0.15;
      // Units to px. The timeline is tall and thin (±1.4 high, ±0.45 wide):
      // h * 0.255 gives it ~70% of the screen height, w * 0.85 keeps it in a narrow margin.
      const unit = Math.min(w * 0.85, h * 0.255);
      const [sy, cyaw, sp, cp] = [Math.sin(yaw), Math.cos(yaw), Math.sin(pitch), Math.cos(pitch)];

      ctx.globalAlpha = smooth(gathered) * 0.6;
      for (const pt of particles) {
        const { p: goal, u } = timeline(pt.seed, count);
        // Top of the timeline is the newest role, so it lights first.
        const lit = u <= scrolled * 1.1 + 0.05 ? 1 : 0;
        const enter = smooth(clamp(gathered * 2 - pt.seed[2] * 0.6));
        const x = pt.cloud[0] + (goal[0] - pt.cloud[0]) * enter;
        const y = pt.cloud[1] + (goal[1] - pt.cloud[1]) * enter;
        const z = pt.cloud[2] + (goal[2] - pt.cloud[2]) * enter;
        const x1 = x * cyaw - z * sy;
        const z1 = x * sy + z * cyaw;
        const y1 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp;
        const scale = (unit * 3.6) / (3.6 + z2);
        const depth = clamp((1.5 - z2) / 3);
        const size = 1 + depth * 1.4 + lit * 0.4;
        ctx.fillStyle = `rgba(${lit ? LIT : DOT}, ${0.2 + depth * 0.5 + lit * 0.25})`;
        ctx.fillRect(w / 2 + x1 * scale - size / 2, h / 2 + y1 * scale - size / 2, size, size);
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      time += dt;
      draw(dt);
      frame = requestAnimationFrame(tick);
    };
    const onScroll = () => draw(0);

    const layout = () => {
      const right = column.getBoundingClientRect().right;
      w = Math.floor(innerWidth - right);
      h = innerHeight;
      visible = w >= MIN_GUTTER;
      canvas.style.display = visible ? "block" : "none";
      if (!visible) return;
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.style.left = `${right}px`;
      canvas.style.width = `${w}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(0);
    };
    layout();
    addEventListener("resize", layout);
    if (still) addEventListener("scroll", onScroll, { passive: true });
    else frame = requestAnimationFrame(tick);

    return () => {
      removeEventListener("resize", layout);
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [count]);

  return (
    <>
      <span ref={anchorRef} hidden />
      {createPortal(
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none fixed top-0 -z-10 hidden h-screen"
        />,
        document.body,
      )}
    </>
  );
};
