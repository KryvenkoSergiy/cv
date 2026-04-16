import { Link } from "react-router-dom";
import { skillCategories } from "../../shared/data/cv";

export const SkillPreviewSection = () => (
  <section className='pb-24 px-6 border-t border-white/5 pt-20'>
    <div className='max-w-6xl mx-auto'>
      <div className='flex items-end justify-between mb-8 flex-wrap gap-4'>
        <div>
          <h2 className='text-3xl font-black text-white mb-1'>What I Bring</h2>
          <p className='text-white/35 text-sm'>Skill areas at a glance</p>
        </div>
        <Link
          to='/experience'
          className='text-purple-400 hover:text-purple-200 text-sm font-medium transition-colors'
        >
          See my experience →
        </Link>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {skillCategories.slice(0, 4).map(cat => (
          <div
            key={cat.category}
            className='glassmorphism rounded-2xl p-5 card-hover group'
          >
            <div className='text-2xl mb-3'>{cat.icon}</div>
            <h3 className='text-white font-semibold text-sm mb-2'>
              {cat.category}
            </h3>
            <p className='text-white/35 text-xs leading-relaxed'>
              {cat.skills.slice(0, 3).join(", ")}
              {cat.skills.length > 3 ? "…" : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
