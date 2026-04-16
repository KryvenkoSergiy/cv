import { Link } from "react-router-dom";
import { experiences, featuredWork } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";
import { ArrowRightIcon } from "../../shared/components/icons";

export const FeaturedWorkSection = () => (
  <section className="border-t border-border py-section">
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span aria-hidden className="mb-5 block h-px w-6 bg-accent" />
          <h2 className="mb-1.5 text-h2 text-fg">Featured Work</h2>
          <p className="text-small text-fg-muted">Selected case studies</p>
        </div>
        <Link
          to="/experience"
          className="link-underline font-mono text-label text-fg-dim uppercase transition-colors duration-[var(--dur-fast)] hover:text-fg"
        >
          Full timeline →
        </Link>
      </div>

      <div className="stagger grid gap-5 md:grid-cols-3">
        {featuredWork.map(({ id, title }) => {
          const exp = experiences.find(e => e.id === id);
          if (!exp) return null;
          return (
            // The whole card is the link, so nothing inside it is an anchor.
            <Link key={id} to={`/experience#${id}`} className="group block">
              <Card interactive className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-label text-fg-dim uppercase">
                    {exp.startDate}–{exp.endDate}
                    {exp.partTime && " · Part-time"}
                  </span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-label text-live uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-live" />
                      Now
                    </span>
                  )}
                </div>

                {/* Outcome first; the job title is context, not the headline. */}
                <div>
                  <h3 className="mb-1.5 text-h3 text-fg">{title}</h3>
                  <p className="text-small text-fg-dim">
                    {exp.client ?? exp.company} · {exp.role}
                  </p>
                </div>

                <p className="line-clamp-3 text-small text-fg-muted">
                  {exp.description[0]}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.slice(0, 3).map(t => (
                    <span
                      key={t}
                      className="rounded-chip border border-border bg-surface-2 px-2 py-0.5 font-mono text-label text-fg-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="flex items-center gap-2 font-mono text-label text-fg-dim uppercase transition-colors duration-[var(--dur-fast)] group-hover:text-accent-fg">
                  View in timeline
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-editorial group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);
