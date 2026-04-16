import { useState } from "react";
import { experiences } from "../../shared/data/cv";
import { PageHeader } from "../../shared/components/ui/PageHeader";
import { ExperienceCard } from "./ExperienceCard";
import { JokeBanner } from "../../shared/components/ui/JokeBanner";

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className='min-h-screen bg-[#05051a] pt-20 pb-24 relative'>
      <div className='absolute top-0 inset-x-0 h-64 bg-linear-to-b from-purple-900/10 to-transparent pointer-events-none' />

      <div className='max-w-4xl mx-auto px-6 relative'>
        <PageHeader
          eyebrow='Career timeline'
          eyebrowColor='text-purple-400'
          title='Work'
          titleHighlight='Experience'
          subtitle={`10+ years · ${experiences.length}+ projects · Countless cups of coffee`}
        />

        {/* Timeline */}
        <div className='relative'>
          <div
            className='absolute left-4.5 top-2 bottom-2 w-px'
            style={{
              background:
                "linear-gradient(180deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)",
              opacity: 0.25,
            }}
          />

          <div className='space-y-6'>
            {experiences.map((exp, i) => (
              <>
                <ExperienceCard
                  key={exp.id}
                  exp={exp}
                  isOpen={expanded === exp.id}
                  onToggle={() =>
                    setExpanded(expanded === exp.id ? null : exp.id)
                  }
                />

                {i === 0 && (
                  <div className="ml-12">
                    <JokeBanner
                      emoji='😅'
                      title='Too much scrolling?'
                      joke='I compressed 10+ years into a PDF. The deleted scenes were better anyway.'
                      buttonLabel='Download the "short" version'
                      loadingLabel='Compressing 10 years…'
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
