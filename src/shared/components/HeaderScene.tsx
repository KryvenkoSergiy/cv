import { useEffect, useRef } from "react";

type P3 = [number, number, number];

const DOT = "110, 231, 183";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

const onSphere = (r: number): P3 => {
  const u = Math.random() * Math.PI * 2;
  const v = Math.acos(2 * Math.random() - 1);
  return [r * Math.sin(v) * Math.cos(u), r * Math.cos(v), r * Math.sin(v) * Math.sin(u)];
};

const spinY = ([x, y, z]: P3, a: number): P3 => [x * Math.cos(a) - z * Math.sin(a), y, x * Math.sin(a) + z * Math.cos(a)];

export interface GlobeIcon {
  title: string;
  /** SVG path data on a 24×24 viewBox (the simple-icons format). */
  path: string;
}

const GLOBE = 0.85;

/** Point `t` of the way along the arc from `a` to `b` (unit vectors), bulging outward mid-way. */
function arc(a: P3, b: P3, t: number): P3 {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const omega = Math.acos(dot);
  const k = Math.sin(omega) || 1;
  const wa = Math.sin((1 - t) * omega) / k;
  const wb = Math.sin(t * omega) / k;
  const r = GLOBE * (1 + Math.sin(t * Math.PI) * 0.12);
  return [(a[0] * wa + b[0] * wb) * r, (a[1] * wa + b[1] * wb) * r, (a[2] * wa + b[2] * wb) * r];
}

/**
 * Skills: technology logos spread evenly over a sphere (a Fibonacci spiral).
 * Each logo is wired to its two nearest neighbours by an arc, and sparks run
 * those arcs logo to logo, making whatever they reach glow for a moment, as
 * if the tools were talking to each other. Inside sits a slow, breathing core
 * of particles, and a faint dust on the surface makes it read as a globe.
 */
function globeScene(icons: GlobeIcon[]) {
  const n = icons.length;
  const units = icons.map((_, i): P3 => {
    const y = 1 - (2 * (i + 0.5)) / n;
    const r = Math.sqrt(1 - y * y);
    const a = i * Math.PI * (3 - Math.sqrt(5));
    return [Math.cos(a) * r, y, Math.sin(a) * r];
  });
  const near = units.map((u, i) =>
    units
      .map((v, j) => ({ j, d: u[0] * v[0] + u[1] * v[1] + u[2] * v[2] }))
      .filter(x => x.j !== i)
      .sort((x, y) => y.d - x.d)
      .slice(0, 2)
      .map(x => x.j),
  );
  const links: [number, number][] = [];
  near.forEach((js, i) => js.forEach(j => !links.some(([a, b]) => (a === j && b === i)) && links.push([i, j])));
  const neighbours = units.map((_, i) => links.flatMap(([a, b]) => (a === i ? [b] : b === i ? [a] : [])));

  const dust = Array.from({ length: 140 }, () => onSphere(GLOBE));
  const core = Array.from({ length: 260 }, () => onSphere(0.15 + Math.cbrt(Math.random()) * 0.3));
  const flash = units.map(() => 0);
  const sparks = Array.from({ length: 7 }, () => {
    const from = Math.floor(Math.random() * n);
    const nb = neighbours[from];
    return { from, to: nb[Math.floor(Math.random() * nb.length)], t: Math.random(), speed: 0.35 + Math.random() * 0.3 };
  });
  let last = 0;

  return (time: number) => {
    const dt = Math.min(0.05, Math.max(0, time - last));
    last = time;
    for (let i = 0; i < n; i++) flash[i] = Math.max(0, flash[i] - dt * 1.2);
    for (const sp of sparks) {
      sp.t += sp.speed * dt;
      if (sp.t < 1) continue;
      flash[sp.to] = 1;
      // Carry on to another neighbour, never straight back.
      const next = neighbours[sp.to].filter(j => j !== sp.from);
      sp.from = sp.to;
      sp.to = next.length ? next[Math.floor(Math.random() * next.length)] : neighbours[sp.to][0];
      sp.t = 0;
    }
    const spin = (p: P3) => spinY(p, time * 0.18);
    const breathe = 1 + Math.sin(time * 1.2) * 0.06;
    return {
      spots: units.map(u => spin([u[0] * GLOBE, u[1] * GLOBE, u[2] * GLOBE])),
      dust: dust.map(spin),
      core: core.map(p => spinY([p[0] * breathe, p[1] * breathe, p[2] * breathe], -time * 0.35)),
      arcs: links.map(([a, b]) => Array.from({ length: 13 }, (_, k) => spin(arc(units[a], units[b], k / 12)))),
      sparks: sparks.map(sp => spin(arc(units[sp.from], units[sp.to], sp.t))),
      flash,
    };
  };
}

/** Points filling the given initials, in scene units, centred. */
function textPoints(text: string, count: number): P3[] {
  const c = document.createElement("canvas");
  c.width = 240;
  c.height = 120;
  const g = c.getContext("2d");
  if (!g) return [];
  g.font = `700 100px Inter, system-ui, sans-serif`;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(text, 120, 64);
  const data = g.getImageData(0, 0, 240, 120).data;
  const filled: [number, number][] = [];
  for (let y = 0; y < 120; y += 2) for (let x = 0; x < 240; x += 2) if (data[(y * 240 + x) * 4 + 3] > 128) filled.push([x, y]);
  if (!filled.length) return [];
  return Array.from({ length: count }, () => {
    const [x, y] = filled[Math.floor(Math.random() * filled.length)];
    return [((x - 120) / 120) * 1.15, ((y - 60) / 120) * 1.15, (Math.random() - 0.5) * 0.12];
  });
}

/**
 * About: a turning sphere of particles that, every 10 s, flows into
 * the initials, holds them, and melts back into the sphere.
 */
function aboutScene(initials: string) {
  const count = 700;
  const sphere = Array.from({ length: count }, () => onSphere(0.85));
  let letters = textPoints(initials, count);
  // Inter may still be loading on first paint; redo the letters once it is.
  document.fonts?.ready.then(() => (letters = textPoints(initials, count)));
  const delays = sphere.map(() => Math.random());
  const CYCLE = 10;
  return (time: number) => {
    const phase = (time % CYCLE) / CYCLE;
    // 0-0.35 sphere, 0.35-0.5 into letters, 0.5-0.8 letters, 0.8-0.95 back.
    const into = clamp((phase - 0.35) / 0.15);
    const out = clamp((phase - 0.8) / 0.15);
    const k = into - out;
    const world = sphere.map((s, i) => {
      const spun = spinY(s, time * 0.5);
      const l = letters[i] ?? spun;
      const t = smooth(clamp(k * 1.4 - delays[i] * 0.4));
      return [spun[0] + (l[0] - spun[0]) * t, spun[1] + (l[1] - spun[1]) * t, spun[2] + (l[2] - spun[2]) * t] as P3;
    });
    return { world, lettersShown: smooth(k) };
  };
}

interface Props {
  kind: "skills" | "about";
  /** Skills: the logos on the globe. */
  icons?: GlobeIcon[];
  /** About: the initials the sphere flows into. */
  initials?: string;
}

/**
 * A small 3D particle piece that sits beside a page title (Skills, About). It
 * turns toward the pointer a little, pauses while off screen, and holds one
 * still frame for reduced motion. Hidden below lg by PageHeader: on phones
 * the title gets the room.
 */
export const HeaderScene = ({ kind, icons = [], initials = "" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skills = kind === "skills" ? globeScene(icons) : null;
    const shapes = icons.map(icon => new Path2D(icon.path));
    const about = kind === "about" ? aboutScene(initials) : null;
    let w = 0;
    let h = 0;
    let frame = 0;
    let last = 0;
    let time = still ? 2 : 0;
    let appear = still ? 1 : 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const yaw = pointer.x * 0.5;
      const pitch = 0.25 + pointer.y * 0.3;
      const [sy, cyaw, sp, cp] = [Math.sin(yaw), Math.cos(yaw), Math.sin(pitch), Math.cos(pitch)];
      const unit = Math.min(w * 0.36, h * 0.42);
      const project = ([x, y, z]: P3) => {
        const x1 = x * cyaw - z * sy;
        const z1 = x * sy + z * cyaw;
        const y1 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp;
        const s = (unit * 3.4) / (3.4 + z2);
        return { x: w / 2 + x1 * s, y: h / 2 + y1 * s, depth: clamp((1.2 - z2) / 2.4) };
      };
      ctx.globalAlpha = smooth(appear);

      if (skills) {
        const scene = skills(time);
        // Behind everything: the core, the arcs, the surface dust.
        for (const point of scene.core) {
          const p = project(point);
          ctx.fillStyle = `rgba(${DOT}, ${0.1 + p.depth * 0.35})`;
          ctx.fillRect(p.x - 0.8, p.y - 0.8, 1.6, 1.6);
        }
        ctx.lineWidth = 1;
        for (const line of scene.arcs) {
          const pts = line.map(project);
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.04 + pts[6].depth * 0.18})`;
          ctx.beginPath();
          pts.forEach((p, k) => (k ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
          ctx.stroke();
        }
        for (const point of scene.dust) {
          const p = project(point);
          ctx.fillStyle = `rgba(${DOT}, ${0.06 + p.depth * 0.25})`;
          ctx.fillRect(p.x - 0.75, p.y - 0.75, 1.5, 1.5);
        }
        ctx.globalCompositeOperation = "lighter";
        for (const point of scene.sparks) {
          const p = project(point);
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 9);
          g.addColorStop(0, `rgba(167, 243, 208, ${0.35 + p.depth * 0.6})`);
          g.addColorStop(1, "rgba(167, 243, 208, 0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";

        // Back to front, so nearer logos sit on top.
        const placed = scene.spots
          .map((point, i) => ({ ...project(point), i }))
          .sort((a, b) => a.depth - b.depth);
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        for (const { x, y, depth, i } of placed) {
          // Everything blends, nothing switches at a threshold: size, opacity
          // and colour follow depth, and a spark arriving lights a logo briefly.
          const f = scene.flash[i];
          const lit = Math.max(smooth(clamp((depth - 0.5) / 0.4)), f);
          const [r, g, b] = [183 + (110 - 183) * lit, 191 + (231 - 191) * lit, 204 + (183 - 204) * lit].map(Math.round);
          const colour = `rgba(${r}, ${g}, ${b}, ${Math.min(1, 0.12 + depth * 0.78 + f * 0.3)})`;
          const size = 14 + depth * 14 + f * 3;
          ctx.save();
          ctx.translate(x - size / 2, y - size / 2);
          ctx.scale(size / 24, size / 24);
          ctx.fillStyle = colour;
          ctx.fill(shapes[i]);
          ctx.restore();
          // The name fades in under the logos nearest the viewer.
          const label = clamp((depth - 0.78) / 0.12);
          if (label > 0) {
            ctx.font = `500 10px "JetBrains Mono", monospace`;
            ctx.fillStyle = `rgba(183, 191, 204, ${label * 0.8})`;
            ctx.fillText(icons[i].title, x, y + size / 2 + 4);
          }
        }
      }

      if (about) {
        const scene = about(time);
        for (const point of scene.world) {
          const p = project(point);
          const size = 1.2 + p.depth * 1.3 + scene.lettersShown * 0.4;
          const k = scene.lettersShown;
          ctx.fillStyle = `rgba(${Math.round(110 + 57 * k)}, ${Math.round(231 + 12 * k)}, ${Math.round(183 + 25 * k)}, ${0.3 + p.depth * 0.6})`;
          ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);
        }
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      time += dt;
      appear += (1 - appear) * (1 - Math.exp(-dt * 2.2));
      // Ease toward the pointer so the tilt never jerks.
      pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 1.8));
      pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 1.8));
      draw();
      frame = requestAnimationFrame(tick);
    };
    const onPointer = (e: PointerEvent) => {
      pointer.tx = (e.clientX / innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / innerHeight - 0.5) * 2;
    };

    const resize = new ResizeObserver(() => {
      const dpr = Math.min(devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    });
    resize.observe(canvas);
    // Animate only while on screen; zero width means PageHeader hid it below lg.
    const visibility = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      last = 0;
      if (entry.isIntersecting && !still && entry.boundingClientRect.width > 0) frame = requestAnimationFrame(tick);
    });
    visibility.observe(canvas);
    if (!still) addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      resize.disconnect();
      visibility.disconnect();
      removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(frame);
    };
  }, [kind, icons, initials]);

  return <canvas ref={canvasRef} aria-hidden className="h-full w-full" />;
};
