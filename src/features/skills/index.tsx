import { skillCategories } from "../../shared/data/cv";
import { PageHeader } from "../../shared/components/ui/PageHeader";
import { CoreExpertise } from "./CoreExpertise";
import { SkillCategoryCard } from "./SkillCategoryCard";
import { HighlightsStrip } from "./HighlightsStrip";
import { JokeBanner } from "../../shared/components/ui/JokeBanner";

export default function Skills() {
  return (
    <div className='min-h-screen bg-[#05051a] pt-20 pb-24 relative'>
      <div className='absolute top-0 inset-x-0 h-64 bg-linear-to-b from-blue-900/10 to-transparent pointer-events-none' />

      <div className='max-w-5xl mx-auto px-6 relative'>
        <PageHeader
          eyebrow='Expertise'
          eyebrowColor='text-blue-400'
          title='Tech'
          titleHighlight='Skills'
          subtitle='A decade of sharpening the craft'
        />

        <CoreExpertise />

        <div className='max-w-3xl mx-auto'>
          <JokeBanner
            emoji='🤓'
            title='Impressive, right?'
            joke="40+ technologies. Still can't explain what I do at family dinners."
            buttonLabel='Bundle everything into PDF'
            loadingLabel='Googling the rest…'
          />
        </div>

        <div className='grid md:grid-cols-2 gap-5'>
          {skillCategories.map(cat => (
            <SkillCategoryCard key={cat.category} cat={cat} />
          ))}
        </div>

        <HighlightsStrip />
      </div>
    </div>
  );
}
