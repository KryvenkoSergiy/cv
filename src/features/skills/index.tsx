import { personalInfo, skillTiers } from "../../shared/data/cv";
import { PageHeader } from "../../shared/components/ui/PageHeader";
import { SkillTier } from "./SkillTier";

export default function Skills() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl pb-section">
      <PageHeader
        eyebrow="Expertise"
        title="Tech"
        titleHighlight="Skills"
        subtitle={`${personalInfo.yearsOfExperience} years across frontend, performance and design systems`}
      />

      <div className="stagger space-y-10">
        {skillTiers.map((tier, i) => (
          <SkillTier key={tier.label} tier={tier} index={i} />
        ))}
      </div>
    </div>
  );
}
