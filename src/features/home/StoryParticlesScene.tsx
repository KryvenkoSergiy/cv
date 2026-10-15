import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type P3 = [number, number, number];

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

const DOT = "110, 231, 183";
const GLOW = "167, 243, 208";
const STEPS = 5;
/** How fast the scene catches up with the scroll (gathering and morphing): ~1 s to settle. */
const FOLLOW = 2.2;

/**
 * 0 until 15% of a viewport has scrolled, 1 by half a viewport (about half
 * the hero). Early on purpose: with the easing behind it, the cards are
 * fully formed by the time Featured Work comes into view, not as it leaves.
 */
const heroFade = () => clamp((scrollY - innerHeight * 0.15) / (innerHeight * 0.35));

/**
 * Where the viewport centre sits among the sections marked `data-scene`
 * (Featured Work, How I work, Now): 0 on the first, 1 on the second, 2 on
 * the third. It holds near each section and blends across the middle 70% of
 * the gap, so a formation stays put while its section is being read.
 */
const sectionProgress = () => {
  const centres = [...document.querySelectorAll("[data-scene]")].map(el => {
    const r = el.getBoundingClientRect();
    return r.top + r.height / 2;
  });
  const mid = innerHeight / 2;
  if (!centres.length || mid <= centres[0]) return 0;
  for (let i = 0; i < centres.length - 1; i++) {
    if (mid < centres[i + 1]) {
      const f = (mid - centres[i]) / (centres[i + 1] - centres[i]);
      return i + smooth(clamp((f - 0.15) / 0.7));
    }
  }
  return centres.length - 1;
};

const lerp3 = (a: P3, b: P3, t: number): P3 => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];

/** The "How I work" path: a gentle wave left to right. */
const pathAt = (u: number): P3 => {
  const x = -1.7 + u * 3.4;
  return [x, Math.sin(x * 1.6) * 0.32, Math.cos(x * 1.1) * 0.25];
};

/** Each particle carries its own random seeds; each formation turns those seeds into a spot. */
function buildParticles(count: number) {
  return Array.from({ length: count }, () => ({
    seed: [Math.random(), Math.random(), Math.random(), Math.random()] as const,
    cloud: [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 3.5, (Math.random() - 0.5) * 3] as P3,
  }));
}
type Particle = ReturnType<typeof buildParticles>[number];

function cards({ seed: [a, b, c] }: Particle): P3 {
  const card = Math.floor(a * 3);
  const cx = (card - 1) * 1.15;
  const angle = (card - 1) * -0.35;
  const w = 0.46;
  const h = 0.62;
  let x: number;
  let y: number;
  if (b < 0.62) {
    // Outline.
    const d = c * 2 * (w + h) * 2;
    if (d < 2 * w) [x, y] = [-w + d, -h];
    else if (d < 2 * w + 2 * h) [x, y] = [w, -h + (d - 2 * w)];
    else if (d < 4 * w + 2 * h) [x, y] = [w - (d - 2 * w - 2 * h), h];
    else [x, y] = [-w, h - (d - 4 * w - 2 * h)];
  } else {
    // Content lines: a title bar and a few text rows.
    const row = Math.floor(((b - 0.62) / 0.38) * 5);
    y = -h + 0.18 + row * 0.2;
    x = -w + 0.1 + c * (row === 0 ? 0.5 : 0.75 - (row % 2) * 0.25);
  }
  return [cx + x * Math.cos(angle), y, Math.abs(card - 1) * 0.25 + x * Math.sin(angle)];
}

function pipeline({ seed: [a, b, c, d] }: Particle, time: number): P3 {
  if (a < 0.5) {
    // The path itself, slightly fuzzy, flowing left to right.
    const u = (b + time * 0.05) % 1;
    const p = pathAt(u);
    return [p[0], p[1] + (c - 0.5) * 0.05, p[2] + (d - 0.5) * 0.05];
  }
  // A small ring at each step.
  const step = Math.floor(b * STEPS);
  const centre = pathAt(step / (STEPS - 1));
  const t = c * Math.PI * 2;
  const r = 0.16 + (d - 0.5) * 0.03;
  return [centre[0] + Math.cos(t) * r, centre[1] + Math.sin(t) * r, centre[2]];
}

function aiCore({ seed: [a, b, c, d] }: Particle, time: number): P3 {
  if (a < 0.4) {
    // Core: a sphere shell.
    const u = b * Math.PI * 2;
    const v = Math.acos(2 * c - 1);
    const r = 0.5 + (d - 0.5) * 0.04;
    return [r * Math.sin(v) * Math.cos(u), r * Math.cos(v), r * Math.sin(v) * Math.sin(u)];
  }
  // Three tilted orbits; a third of each orbit's particles bunch into an agent.
  const orbit = Math.floor(((a - 0.4) / 0.6) * 3);
  const tilt = [0.4, -0.9, 1.4][orbit];
  const speed = [0.35, -0.25, 0.2][orbit];
  const agent = c < 0.33;
  const t = agent ? time * speed * 2 + (b - 0.5) * 0.18 : b * Math.PI * 2 + time * speed;
  const R = [0.95, 1.15, 1.35][orbit] + (agent ? (d - 0.5) * 0.08 : 0);
  const x = Math.cos(t) * R;
  const z = Math.sin(t) * R;
  return [x, z * Math.sin(tilt), z * Math.cos(tilt)];
}

/**
 * The home page's background after the hero, tied to the content: particles
 * form three project cards while Featured Work is on screen, a five-step
 * pipeline for How I work, and an AI core with orbiting agents for Now,
 * flowing from one formation to the next between sections. Plain canvas with
 * a hand-rolled projection. Portalled to <body>: the page transition
 * transforms an ancestor, which would make `fixed` scroll with the page.
 * Reduced motion: no drift or morphing, the formation just switches.
 */
export const StoryParticlesScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles = buildParticles(innerWidth < 768 ? 700 : 1500);
    let w = 0;
    let h = 0;
    let frame = 0;
    let last = 0;
    let time = 0;
    // The formation on screen, easing toward sectionProgress() rather than
    // jumping with it, so even a fast scroll morphs over about a second.
    let shown = sectionProgress();
    // Same easing for the first appearance: how far the cloud has gathered.
    let gathered = 0;

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, w, h);
      const fade = heroFade();
      const ease = 1 - Math.exp(-dt * FOLLOW);
      gathered = still ? fade : gathered + (fade - gathered) * ease;
      if (gathered <= 0.001) return;
      const target = sectionProgress();
      shown = still ? Math.round(target) : shown + (target - shown) * ease;
      const s = shown;

      const from = Math.min(1, Math.floor(s));
      const t = smooth(clamp(s - from));
      const shapes = [
        (pt: Particle) => cards(pt),
        (pt: Particle) => pipeline(pt, time),
        (pt: Particle) => aiCore(pt, time),
      ];
      const yaw = Math.sin(time * 0.25) * 0.25;
      const pitch = 0.18 + s * 0.08;
      const focal = Math.min(w, h * 1.6) * 0.42;
      const [sy, cyaw, sp, cp] = [Math.sin(yaw), Math.cos(yaw), Math.sin(pitch), Math.cos(pitch)];

      ctx.globalAlpha = smooth(gathered) * 0.85;
      for (const pt of particles) {
        // Particles leave a bit late or early, so formations flow rather than snap.
        const lag = clamp(t * 1.5 - pt.seed[3] * 0.5);
        const goal = lerp3(shapes[from](pt), shapes[from + 1](pt), smooth(lag));
        // Gathering is staggered the same way: some particles arrive first.
        const enter = smooth(clamp(gathered * 2 - pt.seed[2] * 0.6));
        const [x, y, z] = lerp3(pt.cloud, goal, enter);
        const x1 = x * cyaw - z * sy;
        const z1 = x * sy + z * cyaw;
        const y1 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp;
        const scale = (focal / (3.6 + z2)) * 1.8;
        const depth = clamp((1.5 - z2) / 3);
        const size = 1.2 + depth * 1.6;
        ctx.fillStyle = `rgba(${DOT}, ${0.3 + depth * 0.6})`;
        ctx.fillRect(w / 2 + x1 * scale - size / 2, h / 2 + y1 * scale - size / 2, size, size);
      }

      // How I work: a spark runs the pipeline while that section is on screen.
      const onPipeline = clamp(1 - Math.abs(s - 1) * 2);
      if (onPipeline > 0) {
        const p = pathAt((time * 0.18) % 1);
        const x1 = p[0] * cyaw - p[2] * sy;
        const z1 = p[0] * sy + p[2] * cyaw;
        const scale = (focal / (3.6 + (p[1] * sp + z1 * cp))) * 1.8;
        const x = w / 2 + x1 * scale;
        const y = h / 2 + (p[1] * cp - z1 * sp) * scale;
        ctx.globalCompositeOperation = "lighter";
        const g = ctx.createRadialGradient(x, y, 0, x, y, 22);
        g.addColorStop(0, `rgba(${GLOW}, ${onPipeline})`);
        g.addColorStop(1, `rgba(${GLOW}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
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

    const observer = new ResizeObserver(() => {
      const dpr = Math.min(devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(0);
    });
    observer.observe(canvas);
    if (still) addEventListener("scroll", onScroll, { passive: true });
    else frame = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return createPortal(
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-full"
    />,
    document.body,
  );
};
