import {
  siClaude,
  siCypress,
  siFramer,
  siGithubactions,
  siGooglegemini,
  siGraphql,
  siJavascript,
  siJest,
  siMobx,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siReactquery,
  siRedux,
  siSass,
  siSentry,
  siShadcnui,
  siStorybook,
  siSupabase,
  siTailwindcss,
  siTestinglibrary,
  siTypescript,
  siVercel,
  siVite,
  siZod,
} from "simple-icons";
import { skillTiers, skillsSubtitle } from "../../shared/data/cv";
import { HeaderScene, type GlobeIcon } from "../../shared/components/HeaderScene";
import { PageHeader } from "../../shared/components/ui/PageHeader";
import { SkillTier } from "./SkillTier";

/**
 * Logos for the header globe: a selection of tools from the skill list.
 * Only these icons are imported, so only these reach the bundle.
 */
const globeIcons: GlobeIcon[] = [
  siReact, siNextdotjs, siTypescript, siJavascript, siReactquery, siRedux, siMobx,
  siZod, siTailwindcss, siShadcnui, siSass, siStorybook, siTestinglibrary, siJest,
  siCypress, siVite, siGraphql, siNodedotjs, siSupabase, siVercel, siGithubactions,
  siSentry, siGooglegemini, siClaude, siFramer,
];

export default function Skills() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl pb-section">
      <PageHeader
        eyebrow="Expertise"
        title="Tech"
        titleHighlight="Skills"
        subtitle={skillsSubtitle}
        aside={<HeaderScene kind="skills" icons={globeIcons} />}
      />

      <div className="stagger space-y-10">
        {skillTiers.map((tier, i) => (
          <SkillTier key={tier.label} tier={tier} index={i} />
        ))}
      </div>
    </div>
  );
}
