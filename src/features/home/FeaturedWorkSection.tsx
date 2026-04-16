import { Link } from "react-router-dom";
import { experiences } from "../../shared/data/cv";

const FEATURED_IDS = ["opinion-stage", "google-stadia", "fuzu"];

const accentColors: Record<string, string> = {
  "opinion-stage": "from-purple-500/20 to-transparent border-purple-500/20",
  "google-stadia": "from-blue-500/20 to-transparent border-blue-500/20",
  "fuzu": "from-green-500/20 to-transparent border-green-500/20",
};

const badgeColors: Record<string, string> = {
  "opinion-stage": "bg-purple-500/15 text-purple-300 border-purple-500/25",
  "google-stadia": "bg-blue-500/15 text-blue-300 border-blue-500/25",
  "fuzu": "bg-green-500/15 text-green-300 border-green-500/25",
};

export const FeaturedWorkSection = () => {
  const featured = FEATURED_IDS.map(id => experiences.find(e => e.id === id)!);

  return (
    <section className='py-20 px-6 border-t border-white/5'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-end justify-between mb-8 flex-wrap gap-4'>
          <div>
            <h2 className='text-3xl font-black text-white mb-1'>Featured Work</h2>
            <p className='text-white/35 text-sm'>Standout projects across a decade</p>
          </div>
          <Link
            to='/experience'
            className='text-purple-400 hover:text-purple-200 text-sm font-medium transition-colors'
          >
            Full timeline →
          </Link>
        </div>

        <div className='grid md:grid-cols-3 gap-5'>
          {featured.map(exp => (
            <Link
              key={exp.id}
              to='/experience'
              className={`glassmorphism rounded-2xl p-6 flex flex-col gap-4 card-hover bg-linear-to-b ${accentColors[exp.id]} border transition-all duration-200`}
            >
              <div className='flex items-start justify-between gap-2'>
                <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded-full border font-medium ${badgeColors[exp.id]}`}>
                  {exp.highlight}
                </span>
                {exp.current && (
                  <span className='inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border bg-green-500/15 text-green-300 border-green-500/25 font-medium'>
                    <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' />
                    Now
                  </span>
                )}
              </div>

              <div>
                <h3 className='text-white font-bold text-base leading-snug mb-0.5'>
                  {exp.role}
                </h3>
                <p className='text-white/40 text-xs font-medium'>
                  {exp.company}{exp.client ? ` · ${exp.client}` : ""} · {exp.startDate}–{exp.endDate}
                </p>
              </div>

              <p className='text-white/50 text-sm leading-relaxed line-clamp-3'>
                {exp.description}
              </p>

              <div className='flex flex-wrap gap-1.5'>
                {exp.technologies.slice(0, 4).map(t => (
                  <span key={t} className='px-2 py-0.5 text-xs rounded-md bg-white/5 text-white/40 border border-white/8'>
                    {t}
                  </span>
                ))}
                {exp.technologies.length > 4 && (
                  <span className='px-2 py-0.5 text-xs rounded-md bg-white/5 text-white/30 border border-white/8'>
                    +{exp.technologies.length - 4}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
