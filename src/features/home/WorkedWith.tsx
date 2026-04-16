import { Link } from "react-router-dom";
import { experiences, workedWithIds } from "../../shared/data/cv";
import { Eyebrow } from "../../shared/components/ui/Eyebrow";

export const WorkedWith = () => (
  <section className="py-12">
    <div className="mx-auto flex max-w-5xl flex-col gap-5 md:flex-row md:items-center md:gap-10">
      <Eyebrow rule as="h2" className="shrink-0">
        Worked with
      </Eyebrow>
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {workedWithIds.map(id => {
          const exp = experiences.find(e => e.id === id);
          if (!exp) return null;
          return (
            <li key={id}>
              <Link
                to={`/experience#${id}`}
                className="text-h3 text-fg-muted transition-colors duration-[var(--dur-fast)] hover:text-fg"
              >
                {exp.client ?? exp.company}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
