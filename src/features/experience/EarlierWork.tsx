import type { Experience } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";
import { Eyebrow } from "../../shared/components/ui/Eyebrow";
import { UsersIcon } from "../../shared/components/icons";
import { getDuration } from "../../shared/utils/duration";

interface EarlierWorkProps {
  roles: Experience[];
}

/**
 * Roles older than `lastFullExperienceId`, compacted — the same cut as the PDF,
 * whose "Full timeline" link lands on #earlier-work. Everything still renders —
 * role, company, client, dates, team size, the bullets, the highlight and the
 * full tech list — just denser. Deliberately not a <details> disclosure: collapsed text is
 * unreliable for Ctrl+F and invisible in print, and Wargaming's "4.5M+
 * players" and Visa's "30+ countries" need to stay findable.
 */
export const EarlierWork = ({ roles }: EarlierWorkProps) => {
  if (roles.length === 0) return null;

  const oldest = roles[roles.length - 1];
  const newest = roles[0];

  return (
    <section id="earlier-work" className="mt-8 scroll-mt-24">
    <Card className="p-6 sm:p-8">
      <Eyebrow rule as="h2" className="mb-1.5">
        Earlier work
      </Eyebrow>
      <p className="mb-6 font-mono text-label text-fg-dim">
        {oldest.startDate} – {newest.endDate} · {roles.length} roles
      </p>

      <ul className="divide-y divide-border-soft">
        {roles.map(exp => {
          const duration = getDuration(exp.startDate, exp.endDate);
          return (
          <li
            key={exp.id}
            id={exp.id}
            className="grid scroll-mt-24 gap-x-6 gap-y-2 py-5 first:pt-0 last:pb-0 md:grid-cols-[130px_minmax(0,1fr)]"
          >
            <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-2">
              <span className="font-mono text-code whitespace-nowrap text-fg-muted tabular-nums">
                {exp.startDate} - {exp.endDate}
              </span>
              <span className="flex items-center gap-3">
                {duration && (
                  <span className="font-mono text-label text-fg-dim">
                    {duration}
                  </span>
                )}
                <span className="flex items-center gap-1.5 font-mono text-label text-fg-dim">
                  <UsersIcon className="h-3.5 w-3.5" />
                  {exp.teamSize}
                </span>
              </span>
            </div>

            <div className="max-w-[68ch]">
              <h3 className="text-h3 text-fg">{exp.role}</h3>
              <p className="mt-0.5 mb-2 text-small">
                <span className="text-accent-fg">{exp.company}</span>
                {exp.client && (
                  <>
                    <span className="text-fg-dim"> · </span>
                    <span className="text-fg-dim">{exp.client}</span>
                  </>
                )}
              </p>
              <p className="mb-3 text-small text-fg-muted">
                {exp.description.join(" ")}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {exp.highlight && (
                  <li className="rounded-chip border border-border bg-surface-2 px-2 py-0.5 font-mono text-label text-fg-dim uppercase">
                    {exp.highlight}
                  </li>
                )}
                {exp.technologies.map(tech => (
                  <li
                    key={tech}
                    className="rounded-chip border border-border bg-surface-2 px-2 py-0.5 font-mono text-label text-fg-dim"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          );
        })}
      </ul>
    </Card>
    </section>
  );
};
