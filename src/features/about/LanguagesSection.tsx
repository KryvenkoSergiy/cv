import { spokenLanguages } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";
import { Eyebrow } from "../../shared/components/ui/Eyebrow";

export const LanguagesSection = () => (
  <Card className="mb-6 p-8">
    <Eyebrow rule as="h2" className="mb-6">
      Languages
    </Eyebrow>
    <dl className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
      {spokenLanguages.map(l => (
        <div
          key={l.language}
          className="flex items-baseline justify-between gap-4 border-b border-border-soft pb-3"
        >
          <dt className="text-h3 text-fg">{l.language}</dt>
          <dd className="font-mono text-code text-fg-muted">{l.level}</dd>
        </div>
      ))}
    </dl>
  </Card>
);
