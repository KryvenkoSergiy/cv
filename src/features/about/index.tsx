import { PageHeader } from "../../shared/components/ui/PageHeader";
import { ProfileCard } from "./ProfileCard";
import { ValuesSection } from "./ValuesSection";
import { EducationSection } from "./EducationSection";
import { ContactSection } from "./ContactSection";
import { JokeBanner } from "../../shared/components/ui/JokeBanner";

export default function About() {
  return (
    <div className='min-h-screen bg-[#05051a] pt-20 pb-24 relative'>
      <div className='absolute top-0 inset-x-0 h-64 bg-linear-to-b from-cyan-900/8 to-transparent pointer-events-none' />

      <div className='max-w-4xl mx-auto px-6 relative'>
        <PageHeader
          eyebrow='Who I am'
          eyebrowColor='text-cyan-400'
          title='About'
          titleHighlight='Me'
          subtitle='Engineering craft, team leadership, scalable thinking'
        />

        <JokeBanner
          emoji='👀'
          title='You made it to the About page.'
          joke="Most people stop at the hero section. You're different. I like that."
          buttonLabel='Download PDF CV (you deserve it)'
          loadingLabel='Preparing your reward…'
        />

        <ProfileCard />
        <ValuesSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}
