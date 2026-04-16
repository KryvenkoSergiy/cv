import { AmbientBackground } from "./AmbientBackground";
import { HeroSection } from "./HeroSection";
import { StatsRow } from "./StatsRow";
import { FeaturedWorkSection } from "./FeaturedWorkSection";
import { CoreStackSection } from "./CoreStackSection";
import { JokeBanner } from "../../shared/components/ui/JokeBanner";

export default function Home() {
  return (
    <div className='min-h-screen bg-[#05051a] relative overflow-hidden'>
      <AmbientBackground />

      <HeroSection />
      <StatsRow />
      <div className='max-w-2xl mx-auto px-6 mt-8'>
        <JokeBanner
          emoji='🤷'
          title='Most CVs are PDFs.'
          joke='I tried to keep this simple. Clearly failed'
          buttonLabel='Download my “simple” PDF CV'
          loadingLabel='Generating…'
        />
      </div>
      <CoreStackSection />
      <FeaturedWorkSection />
    </div>
  );
}
