import { useRef, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { bringMeInTo } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";
import { Eyebrow } from "../../shared/components/ui/Eyebrow";
import { Icon } from "../../shared/components/icons";

/** Max tilt either way, in degrees. */
const TILT = 6;

const canTilt = () =>
  matchMedia("(pointer: fine)").matches &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The hero's side card, the one place a card moves: it tilts toward the
 * pointer, a spotlight follows it, and a light runs around its border (CSS).
 * Tilt and spotlight are written to CSS variables on the element, so pointer
 * moves never re-render React.
 */
export const BringMeInCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !canTilt()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * TILT * 2}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * TILT * 2}deg`);
  };

  const onLeave = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className='group/card border-run rounded-card transition-transform duration-(--dur-base) ease-editorial transform-[perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]'
    >
      <Card className='relative overflow-hidden p-6 shadow-[0_16px_40px_-26px_rgb(16_185_129/0.25)] bg-surface-1/70'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-(--dur-base) group-hover/card:opacity-100'
          style={{
            background:
              "radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgb(16 185 129 / 0.13), transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className='absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent'
        />

        <div className='relative mb-5 flex items-center justify-between gap-4'>
          <Eyebrow rule as='h2'>
            Bring me in to
          </Eyebrow>
          <Link
            to='/skills'
            className='link-underline font-mono text-label text-fg-dim uppercase transition-colors duration-(--dur-fast) hover:text-fg'
          >
            Stack →
          </Link>
        </div>

        <ul className='stagger relative space-y-1'>
          {bringMeInTo.map(item => (
            <li
              key={item.lead}
              className='group/row flex items-center gap-3.5 rounded-control px-2 py-2 transition-colors duration-(--dur-fast) hover:bg-surface-2'
            >
              <span className='grid h-9 w-9 shrink-0 place-items-center rounded-control border border-accent/25 bg-accent-soft text-accent-fg transition-colors duration-(--dur-fast) group-hover/row:border-accent/60 group-hover/row:bg-accent group-hover/row:text-accent-ink'>
                <Icon name={item.icon} className='h-4 w-4' />
              </span>
              <span className='min-w-0'>
                <span className='block text-body font-medium text-fg'>
                  {item.lead}
                </span>
                <span className='block text-small text-fg-dim'>
                  {item.rest}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
