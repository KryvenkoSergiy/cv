import { PageHeader } from "../../shared/components/ui/PageHeader";
import { HeaderScene } from "../../shared/components/HeaderScene";
import { personalInfo } from "../../shared/data/cv";
import { ProfileCard } from "./ProfileCard";
import { LanguagesSection } from "./LanguagesSection";
import { EducationSection } from "./EducationSection";

export default function About() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl pb-section">
      <PageHeader
        eyebrow="Who I am"
        title="About"
        titleHighlight="Me"
        subtitle="The short version."
        aside={<HeaderScene kind="about" initials={personalInfo.initials} />}
      />

      <ProfileCard />
      <LanguagesSection />
      <EducationSection />
    </div>
  );
}
