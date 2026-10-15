import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle?: string;
  /** Decorative piece to the right of the title, desktop only. */
  aside?: ReactNode;
}

export const PageHeader = ({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  aside,
}: PageHeaderProps) => (
  <header className="stagger relative mb-14 pt-32">
    <Eyebrow rule className="mb-5">
      {eyebrow}
    </Eyebrow>
    <h1 className="mb-4 text-h1 text-fg">
      {title} <span className="text-fg-muted">{titleHighlight}</span>
    </h1>
    {subtitle && <p className="max-w-xl text-body text-fg-muted">{subtitle}</p>}
    {aside && (
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-[-4.5rem] hidden h-72 w-[26rem] lg:block">
        {aside}
      </div>
    )}
  </header>
);
