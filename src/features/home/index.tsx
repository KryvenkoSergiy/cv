import { jokeBanners } from "../../shared/data/cv";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroSection } from "./HeroSection";
import { WorkedWith } from "./WorkedWith";
import { FeaturedWorkSection } from "./FeaturedWorkSection";
import { JokeBanner } from "../../shared/components/ui/JokeBanner";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <HeroBackdrop />

      <HeroSection />
      <WorkedWith />
      <FeaturedWorkSection />

      {/* The joke closes the page, next to the contact block, instead of
          interrupting the pitch right under the hero. */}
      <div className="mx-auto max-w-3xl">
        <JokeBanner {...jokeBanners.home} />
      </div>
    </div>
  );
}
