import { Link } from "react-router-dom";

const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "TanStack Query",
  "Tailwind CSS",
  "GraphQL",
  "Redux",
  "React Native",
];

export const CoreStackSection = () => (
  <section className='py-20 px-6 border-t border-white/5'>
    <div className='max-w-6xl mx-auto'>
      <div className='flex items-end justify-between mb-8 flex-wrap gap-4'>
        <div>
          <h2 className='text-3xl font-black text-white mb-1'>Core Stack</h2>
          <p className='text-white/35 text-sm'>
            Technologies I work with every day
          </p>
        </div>
        <Link
          to='/skills'
          className='text-purple-400 hover:text-purple-200 text-sm font-medium transition-colors'
        >
          All skills →
        </Link>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
        {coreStack.map(tech => (
          <div
            key={tech}
            className='glassmorphism rounded-xl px-4 py-3 flex items-center gap-2.5 card-hover group'
          >
            <div className='w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-cyan-400 transition-colors shrink-0' />
            <span className='text-white/70 text-sm font-medium group-hover:text-white transition-colors'>
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
