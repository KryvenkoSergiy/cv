import { Eyebrow } from "./Eyebrow";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle?: string;
}

export const PageHeader = ({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
}: PageHeaderProps) => (
  <header className="stagger mb-14 pt-32">
    <Eyebrow rule className="mb-5">
      {eyebrow}
    </Eyebrow>
    <h1 className="mb-4 text-h1 text-fg">
      {title} <span className="text-fg-muted">{titleHighlight}</span>
    </h1>
    {subtitle && <p className="max-w-xl text-body text-fg-muted">{subtitle}</p>}
  </header>
);
