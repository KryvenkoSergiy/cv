import { Link } from "react-router-dom";
import { coreStack } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";
import { Eyebrow } from "../../shared/components/ui/Eyebrow";

export const CoreStackCard = () => (
  <Card className="p-6">
    <div className="mb-5 flex items-center justify-between gap-4">
      <Eyebrow rule as="h2">
        Core Stack
      </Eyebrow>
      <Link
        to="/skills"
        className="link-underline font-mono text-label text-fg-dim uppercase transition-colors duration-[var(--dur-fast)] hover:text-fg"
      >
        All skills →
      </Link>
    </div>

    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-control border border-border bg-border">
      {coreStack.map(tech => (
        <li
          key={tech}
          className="bg-surface-1 px-4 py-3 font-mono text-code text-fg-muted transition-colors duration-[var(--dur-fast)] hover:bg-surface-2 hover:text-fg"
        >
          {tech}
        </li>
      ))}
    </ul>
  </Card>
);
