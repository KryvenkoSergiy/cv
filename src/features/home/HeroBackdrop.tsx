import { useEffect, useRef } from "react";

/** Distance between graph nodes, in CSS pixels. */
const SPACING = 96;
/** Length of a pulse's fading tail, in CSS pixels. */
const TRAIL = 42;
const LINE = "rgba(52, 211, 153, 0.11)";
const NODE = "rgba(110, 231, 183, 0.38)";
const GLOW = "110, 231, 183";

interface GraphNode {
  x: number;
  y: number;
  links: number[];
  flash: number;
}

interface Pulse {
  from: number;
  to: number;
  t: number;
  speed: number;
  age: number;
}

const pick = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];

/** A jittered grid, with each node linked to some of its right, lower and diagonal neighbours. */
function buildGraph(w: number, h: number): GraphNode[] {
  const cols = Math.ceil(w / SPACING) + 1;
  const rows = Math.ceil(h / SPACING) + 1;
  const nodes: GraphNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      nodes.push({
        x: (c + (Math.random() - 0.5) * 0.7) * SPACING,
        y: (r + (Math.random() - 0.5) * 0.7) * SPACING,
        links: [],
        flash: 0,
      });
    }
  }
  const link = (a: number, b: number) => {
    nodes[a].links.push(b);
    nodes[b].links.push(a);
  };
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      if (c + 1 < cols && Math.random() < 0.65) link(i, i + 1);
      if (r + 1 < rows && Math.random() < 0.65) link(i, i + cols);
      if (c + 1 < cols && r + 1 < rows && Math.random() < 0.2) link(i, i + cols + 1);
    }
  }
  return nodes;
}

function drawGraph(ctx: CanvasRenderingContext2D, nodes: GraphNode[]) {
  ctx.strokeStyle = LINE;
  ctx.lineWidth = 1;
  ctx.beginPath();
  nodes.forEach((n, i) => {
    for (const j of n.links) {
      if (j < i) continue;
      ctx.moveTo(n.x, n.y);
      ctx.lineTo(nodes[j].x, nodes[j].y);
    }
  });
  ctx.stroke();

  ctx.fillStyle = NODE;
  for (const n of nodes) {
    if (!n.links.length) continue;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.links.length > 2 ? 2 : 1.25, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * A static graph map behind the hero, with pulses wandering its edges at
 * random. The graph is drawn once per resize into an offscreen layer; each
 * frame only copies it and draws the pulses. Paused while off screen; reduced
 * motion gets the graph without pulses.
 */
export const HeroBackdrop = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const layer = document.createElement("canvas");
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes: GraphNode[] = [];
    let linked: number[] = [];
    let pulses: Pulse[] = [];
    let w = 0;
    let h = 0;
    let frame = 0;
    let last = 0;

    const spawn = (): Pulse => {
      const from = pick(linked);
      return { from, to: pick(nodes[from].links), t: 0, speed: 70 + Math.random() * 90, age: 0 };
    };

    const step = (p: Pulse, dt: number) => {
      const a = nodes[p.from];
      const b = nodes[p.to];
      p.age += dt;
      p.t += (p.speed * dt) / Math.hypot(b.x - a.x, b.y - a.y);
      if (p.t < 1) return;
      b.flash = 1;
      // Usually carry on to a neighbour, never straight back; sometimes stop
      // and let a fresh pulse fade in somewhere else.
      const next = b.links.filter(j => j !== p.from);
      if (!next.length || Math.random() < 0.15) {
        Object.assign(p, spawn());
      } else {
        p.from = p.to;
        p.to = pick(next);
        p.t = 0;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(layer, 0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const n of nodes) {
        if (n.flash <= 0) continue;
        ctx.strokeStyle = `rgba(${GLOW}, ${n.flash * 0.5})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2 + (1 - n.flash) * 9, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (const p of pulses) {
        const a = nodes[p.from];
        const b = nodes[p.to];
        const len = Math.hypot(b.x - a.x, b.y - a.y);
        const alpha = Math.min(p.age / 0.5, 1);
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const tail = Math.max(0, p.t - TRAIL / len);
        const tx = a.x + (b.x - a.x) * tail;
        const ty = a.y + (b.y - a.y) * tail;

        const gradient = ctx.createLinearGradient(tx, ty, x, y);
        gradient.addColorStop(0, `rgba(${GLOW}, 0)`);
        gradient.addColorStop(1, `rgba(${GLOW}, ${0.85 * alpha})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${GLOW}, ${0.12 * alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${GLOW}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 1;
    };

    const setup = () => {
      const dpr = Math.min(devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = layer.width = Math.round(w * dpr);
      canvas.height = layer.height = Math.round(h * dpr);

      nodes = buildGraph(w, h);
      linked = nodes.flatMap((n, i) => (n.links.length ? [i] : []));
      const layerCtx = layer.getContext("2d");
      if (!layerCtx || !linked.length) return;
      layerCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawGraph(layerCtx, nodes);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Start mid-edge so the first frame isn't every pulse leaving a node.
      pulses = still
        ? []
        : Array.from({ length: Math.ceil(linked.length / 8) }, () => ({
            ...spawn(),
            t: Math.random(),
            age: 1,
          }));
      draw();
    };

    const tick = (now: number) => {
      // Clamp so a long stall resumes smoothly instead of jumping.
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      for (const n of nodes) n.flash = Math.max(0, n.flash - dt * 1.5);
      for (const p of pulses) step(p, dt);
      draw();
      frame = requestAnimationFrame(tick);
    };

    const resize = new ResizeObserver(setup);
    resize.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      last = 0;
      if (entry.isIntersecting && !still) frame = requestAnimationFrame(tick);
    });
    visibility.observe(canvas);

    return () => {
      resize.disconnect();
      visibility.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-x-gutter top-0 -z-10 h-screen min-h-[44rem] overflow-hidden"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Keeps the hero copy legible over the graph. */}
      <div className="absolute inset-0 bg-canvas/40 lg:bg-transparent lg:bg-linear-to-r lg:from-canvas/75 lg:via-canvas/10 lg:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-canvas" />
    </div>
  );
};
