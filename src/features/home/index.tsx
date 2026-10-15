import { jokeBanners } from "../../shared/data/cv";
import { HeroBackdrop } from "./HeroBackdrop";
import { StoryParticlesScene } from "./StoryParticlesScene";
import { HeroSection } from "./HeroSection";
import { FeaturedWorkSection } from "./FeaturedWorkSection";
import { HowIWorkSection } from "./HowIWorkSection";
import { NowSection } from "./NowSection";
import { JokeBanner } from "../../shared/components/ui/JokeBanner";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <HeroBackdrop />
      <StoryParticlesScene />

      <HeroSection />
      <FeaturedWorkSection />
      <HowIWorkSection />
      <NowSection />

      {/* The joke closes the page, next to the contact block, instead of
          interrupting the pitch right under the hero. */}
      <div className="mx-auto max-w-3xl">
        <JokeBanner {...jokeBanners.home} />
      </div>
    </div>
  );
}
