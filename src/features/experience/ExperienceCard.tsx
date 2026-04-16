import type { Experience } from "../../shared/data/cv";

const highlightColors: Record<string, string> = {

  "Opinion Stage": "bg-purple-500/15 text-purple-300 border-purple-500/25",
  "AI Platform": "bg-violet-500/15 text-violet-300 border-violet-500/25",
  "Crypto / DeFi": "bg-amber-500/15 text-amber-300 border-amber-500/25",
  "Top African Startup": "bg-green-500/15 text-green-300 border-green-500/25",
  Google: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  Wargaming: "bg-red-500/15 text-red-300 border-red-500/25",
  Visa: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  edTech: "bg-pink-500/15 text-pink-300 border-pink-500/25",
};

interface ExperienceCardProps {
  exp: Experience;
  isOpen: boolean;
  onToggle: () => void;
}

export const ExperienceCard = ({ exp, isOpen, onToggle }: ExperienceCardProps) => (
  <div className='relative pl-12'>
    {/* Timeline node */}
    <div
      className={`absolute left-0 top-5 w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
        exp.current
          ? "bg-purple-600 border-purple-400 shadow-lg shadow-purple-900/50"
          : "bg-[#0d0d24] border-white/15 hover:border-purple-500/40"
      }`}
    >
      <div
        className={`w-2 h-2 rounded-full ${
          exp.current ? "bg-white animate-pulse" : "bg-white/30"
        }`}
      />
    </div>

    {/* Card */}
    <div
      className={`glassmorphism rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen ? "border-purple-500/25" : "border-white/8 hover:border-white/15"
      } card-hover cursor-pointer`}
      onClick={onToggle}
    >
      {/* Card top row */}
      <div className='p-5 pb-4'>
        <div className='flex items-start justify-between gap-3 mb-2 flex-col-reverse md:flex-row'>
          <div className='flex-1 min-w-0'>
            {/* Badges */}
            <div className='flex flex-wrap items-center gap-2 mb-2'>
              {exp.highlight && (
                <span
                  className={`inline-flex items-center px-2 py-0.5 text-xs rounded-full border font-medium ${
                    highlightColors[exp.highlight] ??
                    "bg-purple-500/15 text-purple-300 border-purple-500/25"
                  }`}
                >
                  {exp.highlight}
                </span>
              )}
              {exp.current && (
                <span className='inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border bg-green-500/15 text-green-300 border-green-500/25 font-medium'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' />
                  Current
                </span>
              )}
            </div>

            <h3 className='text-white font-bold text-lg leading-snug'>
              {exp.role}
            </h3>
            <p className='text-purple-300 font-semibold text-sm'>
              {exp.company}
            </p>
            {exp.client && (
              <p className='text-white/35 text-xs mt-0.5'>for {exp.client}</p>
            )}
          </div>

          <div className='text-right text-xs shrink-0 flex flex-row md:flex-col items-end gap-1 mt-2 md:mt-0 justify-between w-full md:w-auto'>
            <div className='text-white/50 font-medium'>
              {exp.startDate} - {exp.endDate}
            </div>
            <div className='text-white/25 mt-0.5'>Team: {exp.teamSize}</div>
          </div>
        </div>

        <p className='text-white/50 text-sm leading-relaxed'>
          {exp.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className='px-5 pb-4 flex flex-wrap gap-1.5'>
        {exp.technologies.map(tech => (
          <span
            key={tech}
            className='px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/50 border border-white/8 hover:border-purple-500/35 hover:text-purple-300 transition-colors'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable responsibilities */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-128" : "max-h-0"
        }`}
      >
        <div className='px-5 pb-5 pt-3 border-t border-white/8'>
          <p className='text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3'>
            Responsibilities
          </p>
          <p className='text-white/80 text-sm leading-relaxed'>
            {exp.responsibilities}
          </p>
        </div>
      </div>

      {/* Expand toggle */}
      <div className='flex items-center justify-center px-5 pb-4 border-t border-white/8 pt-3'>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium transition-all duration-200 ${
          isOpen
            ? "bg-purple-500/15 border-purple-500/35 text-purple-300"
            : "bg-white/5 border-white/10 text-white hover:bg-purple-500/10 hover:border-purple-500/25 hover:text-purple-300"
        }`}>
          <span>{isOpen ? "Hide responsibilities" : "Responsibilities"}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
    </div>
  </div>
);
