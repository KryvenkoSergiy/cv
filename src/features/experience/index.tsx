import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { recentExperiences, earlierExperiences } from "../../shared/data/cv";
import { PageHeader } from "../../shared/components/ui/PageHeader";
import { ExperienceCard } from "./ExperienceCard";
import { EarlierWork } from "./EarlierWork";

export default function Experience() {
  const { hash } = useLocation();

  // Home links straight to a role (/experience#fuzu). ScrollRestoration only
  // resets to the top, so jump to the card ourselves; scroll-mt clears the nav.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <div className="mx-auto min-h-screen max-w-5xl pb-section">
      <PageHeader
        eyebrow="Career timeline"
        title="Work"
        titleHighlight="Experience"
      />

      {/* The rail wraps only the full cards, so the hairline terminates
          naturally at the last one rather than running past Earlier work. */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute top-3 bottom-3 left-4.5 w-px bg-border"
        />

        <div className="space-y-5">
          {recentExperiences.map(exp => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>

      <EarlierWork roles={earlierExperiences} />
    </div>
  );
}
