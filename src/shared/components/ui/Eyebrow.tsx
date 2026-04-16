import type { ElementType, ReactNode } from "react";
import clsx from "clsx";

interface EyebrowProps {
  children: ReactNode;
  /** Leading accent hairline. Omit for inline kickers inside cards. */
  rule?: boolean;
  as?: ElementType;
  className?: string;
}

/**
 * Mono uppercase label. The workhorse of the hierarchy — it carries the
 * differentiation that 30 badge hues used to carry, at a fraction of the noise.
 */
export const Eyebrow = ({
  children,
  rule = false,
  as: Tag = "p",
  className,
}: EyebrowProps) => (
  <Tag
    className={clsx(
      "flex items-center gap-2.5 font-mono text-label text-fg-dim uppercase",
      className,
    )}
  >
    {rule && (
      <span aria-hidden className="h-px w-6 shrink-0 bg-accent" />
    )}
    {children}
  </Tag>
);
