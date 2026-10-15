import { about, personalInfo } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";

export const ProfileCard = () => (
  <Card className="mb-6 p-8">
    <div className="flex flex-col items-start gap-7 sm:flex-row">
      <span
        aria-hidden
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-card border border-border bg-surface-2 font-mono text-h3 text-accent-fg"
      >
        {personalInfo.initials}
      </span>

      <div>
        <h2 className="mb-1 text-h2 text-fg">{personalInfo.name}</h2>
        <p className="mb-6 font-mono text-label text-fg-dim uppercase">
          {personalInfo.headline}
        </p>

        <div className="max-w-[68ch] space-y-4">
          {about.map((para, i) => (
            <p key={i} className="text-body text-fg-muted">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  </Card>
);
