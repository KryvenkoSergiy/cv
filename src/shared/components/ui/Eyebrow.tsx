import type { ElementType, ReactNode } from "react";
import clsx from "clsx";

interface EyebrowProps {
  children: ReactNode;
  /** Leading accent hairline. */
  rule?: boolean;
  as?: ElementType;
  className?: string;
}

/** Mono uppercase label: the main hierarchy marker, used instead of coloured badges. */
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
