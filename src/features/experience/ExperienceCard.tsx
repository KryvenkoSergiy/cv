import type { Experience } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";
import { UsersIcon, ExternalLinkIcon } from "../../shared/components/icons";
import { getDuration } from "../../shared/utils/duration";

interface ExperienceCardProps {
  exp: Experience;
}

export const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  const duration = getDuration(exp.startDate, exp.endDate);

  return (
    // scroll-mt-24 clears the fixed nav when linked to by hash.
    <div id={exp.id} className="relative scroll-mt-24 pl-10 sm:pl-12">
      {/* Timeline node. Accent is reserved for the current role — the one
          distinction on this page that carries real information. */}
      <span
        aria-hidden
        className={`absolute top-6 left-0 flex h-9 w-9 items-center justify-center rounded-full border ${
          exp.current
            ? "border-accent bg-accent"
            : "border-border bg-surface-2"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            exp.current ? "bg-accent-ink" : "bg-fg-dim"
          }`}
        />
      </span>

      <Card interactive accentEdge={exp.current}>
        <div className="grid gap-x-8 gap-y-4 p-6 md:grid-cols-[150px_minmax(0,1fr)]">
          {/* Meta rail — everything quantitative, in mono. */}
          <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:flex-col md:items-start md:gap-2">
            <span className="font-mono text-code whitespace-nowrap text-fg-muted tabular-nums">
              {exp.startDate} - {exp.endDate}
            </span>
            {duration && (
              <span className="rounded-chip border border-border bg-surface-2 px-2 py-0.5 font-mono text-label text-fg-dim">
                {duration}
              </span>
            )}
            {exp.partTime && (
              <span className="rounded-chip border border-border bg-surface-2 px-2 py-0.5 font-mono text-label text-fg-dim uppercase">
                Part-time
              </span>
            )}
            <span className="flex items-center gap-1.5 font-mono text-label text-fg-dim">
              <UsersIcon className="h-3.5 w-3.5" />
              {exp.teamSize}
            </span>
            {exp.current && (
              <span className="inline-flex items-center gap-1.5 font-mono text-label text-live uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-live" />
                Now
              </span>
            )}
          </div>

          {/* Content column, capped at a readable measure. */}
          <div className="max-w-[68ch]">
            {exp.highlight && (
              <p className="mb-2.5 flex items-center gap-2.5 font-mono text-label text-fg-dim uppercase">
                <span aria-hidden className="h-px w-3 bg-border-strong" />
                {exp.highlight}
              </p>
            )}

            <h3 className="mb-1 text-h3 text-fg">{exp.role}</h3>

            <p className="mb-4 flex flex-wrap items-center gap-x-1.5 text-small">
              <span className="text-accent-fg">{exp.company}</span>
              {exp.client && (
                <>
                  <span className="text-fg-dim">·</span>
                  <span className="text-fg-dim">{exp.client}</span>
                </>
              )}
              {exp.url && (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-label text-fg-dim uppercase transition-colors duration-[var(--dur-fast)] hover:text-accent-fg"
                >
                  Live site
                  <ExternalLinkIcon className="h-3 w-3" />
                </a>
              )}
            </p>

            <ul className="mb-5 list-none space-y-2.5">
              {exp.description.map((point, i) => (
                <li key={i} className="flex gap-3 text-body text-fg-muted">
                  {/* An em-rule, not a glyph — sidesteps every font-metric
                      alignment problem a bullet character has. */}
                  <span
                    aria-hidden
                    className="mt-[0.72em] h-px w-2.5 shrink-0 bg-border-strong"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-1.5 border-t border-border-soft pt-4">
              {exp.technologies.map(tech => (
                <li
                  key={tech}
                  className="rounded-chip border border-border bg-surface-2 px-2 py-0.5 font-mono text-code text-fg-dim"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};
