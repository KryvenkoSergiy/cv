import type { SkillCategory } from "../../shared/data/cv";

const badgeColor: Record<string, string> = {
  purple:
    "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/20",
  blue: "bg-blue-500/10   border-blue-500/20   text-blue-300   hover:bg-blue-500/20",
  cyan: "bg-cyan-500/10   border-cyan-500/20   text-cyan-300   hover:bg-cyan-500/20",
  pink: "bg-pink-500/10   border-pink-500/20   text-pink-300   hover:bg-pink-500/20",
  orange:
    "bg-orange-500/10 border-orange-500/20 text-orange-300 hover:bg-orange-500/20",
  green:
    "bg-green-500/10  border-green-500/20  text-green-300  hover:bg-green-500/20",
  fuchsia:
    "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-300 hover:bg-fuchsia-500/20",
  red: "bg-red-500/10    border-red-500/20    text-red-300    hover:bg-red-500/20",
};

const headerColor: Record<string, string> = {
  purple: "text-purple-400",
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  pink: "text-pink-400",
  orange: "text-orange-400",
  green: "text-green-400",
  fuchsia: "text-fuchsia-400",
  red: "text-red-400",
};

const glowColor: Record<string, string> = {
  purple: "group-hover:shadow-purple-900/30",
  blue: "group-hover:shadow-blue-900/30",
  cyan: "group-hover:shadow-cyan-900/30",
  pink: "group-hover:shadow-pink-900/30",
  orange: "group-hover:shadow-orange-900/30",
  green: "group-hover:shadow-green-900/30",
  fuchsia: "group-hover:shadow-fuchsia-900/30",
  red: "group-hover:shadow-red-900/30",
};

interface SkillCategoryCardProps {
  cat: SkillCategory;
}

export const SkillCategoryCard = ({ cat }: SkillCategoryCardProps) => (
  <div
    className={`glassmorphism rounded-2xl p-6 card-hover group transition-shadow duration-300 ${glowColor[cat.color]}`}
  >
    <div className='flex items-center gap-3 mb-4'>
      <div className='text-2xl'>{cat.icon}</div>
      <h3 className={`font-bold text-base ${headerColor[cat.color]}`}>
        {cat.category}
      </h3>
      <span className='ml-auto text-white/20 text-xs'>
        {cat.skills.length} skills
      </span>
    </div>

    <div className='flex flex-wrap gap-2'>
      {cat.skills.map(skill => (
        <span
          key={skill}
          className={`px-3 py-1 text-xs rounded-lg border font-medium transition-colors cursor-default ${badgeColor[cat.color]}`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);
