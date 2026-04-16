import { education } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";
import { Eyebrow } from "../../shared/components/ui/Eyebrow";
import { GraduationCapIcon } from "../../shared/components/icons";

export const EducationSection = () => (
  <Card className="p-8">
    <Eyebrow rule as="h2" className="mb-6">
      Education
    </Eyebrow>
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control border border-border bg-surface-2 text-accent-fg">
        <GraduationCapIcon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="mb-1 text-h3 text-fg">{education.degree}</h3>
        <p className="text-small text-fg-muted">{education.field}</p>
        <p className="mt-1 text-small text-accent-fg">{education.university}</p>
        <p className="mt-2 font-mono text-label text-fg-dim">
          {education.period}
        </p>
      </div>
    </div>
  </Card>
);
