import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  /** Hover feedback: surface + border shift only, never a transform. */
  interactive?: boolean;
  /** Accent the left edge — reserved for "current" / active state. */
  accentEdge?: boolean;
  className?: string;
}

/**
 * The single card surface. Replaces the `glassmorphism rounded-2xl card-hover`
 * triplet that was duplicated across ten files.
 *
 * No backdrop-filter: the old glass effect carried `will-change: backdrop-filter`
 * on every card, which is a real compositor cost on mobile for an effect the
 * opaque surface scale reproduces more legibly.
 */
export const Card = ({
  children,
  interactive = false,
  accentEdge = false,
  className,
}: CardProps) => (
  <div
    className={clsx(
      "rounded-card border bg-surface-1",
      accentEdge ? "border-l-2 border-l-accent" : "",
      interactive
        ? "border-border transition-colors duration-[var(--dur-fast)] hover:border-border-strong hover:bg-surface-2"
        : "border-border",
      className,
    )}
  >
    {children}
  </div>
);
