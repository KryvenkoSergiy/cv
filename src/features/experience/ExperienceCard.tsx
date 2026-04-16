import type { Experience } from "../../shared/data/cv";

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function getDuration(start: string, end: string): string {
  const parse = (s: string): Date =>
    s === "Present"
      ? new Date()
      : new Date(parseInt(s.split(" ")[1]), MONTHS[s.split(" ")[0]]);
  const months = Math.round(
    (parse(end).getTime() - parse(start).getTime()) /
      (1000 * 60 * 60 * 24 * 30.44),
  );

  const y = Math.floor(months / 12);
  const m = months % 12;

  if (y === 0) return `${m}mo`;
  if (m === 0) return `${y}y`;
  return `${y}y ${m}mo`;
}

type Style = { badge: string; accent: string };

const highlightStyles: Record<string, Style> = {
  "SaaS Platform": {
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    accent: "from-purple-500/50 to-purple-500/10",
  },
  "AI Platform": {
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    accent: "from-violet-500/50 to-violet-500/10",
  },
  EdTech: {
    badge: "bg-pink-500/15 text-pink-300 border-pink-500/30",
    accent: "from-pink-500/50 to-pink-500/10",
  },
  "Crypto / DeFi": {
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    accent: "from-amber-500/50 to-amber-500/10",
  },
  MedTech: {
    badge: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    accent: "from-rose-500/50 to-rose-500/10",
  },
  "African Scale": {
    badge: "bg-green-500/15 text-green-300 border-green-500/30",
    accent: "from-green-500/50 to-green-500/10",
  },
  Google: {
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    accent: "from-blue-500/50 to-blue-500/10",
  },
  "Co-parenting App": {
    badge: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    accent: "from-sky-500/50 to-sky-500/10",
  },
  "B2B Logistics": {
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    accent: "from-orange-500/50 to-orange-500/10",
  },
  "B2C Logistics": {
    badge: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    accent: "from-yellow-500/50 to-yellow-500/10",
  },
  Wargaming: {
    badge: "bg-red-500/15 text-red-300 border-red-500/30",
    accent: "from-red-500/50 to-red-500/10",
  },
  "Mobile Payments": {
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    accent: "from-emerald-500/50 to-emerald-500/10",
  },
  Visa: {
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    accent: "from-cyan-500/50 to-cyan-500/10",
  },
  "Data Analytics": {
    badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    accent: "from-indigo-500/50 to-indigo-500/10",
  },
};

const defaultStyle: Style = {
  badge: "bg-white/8 text-white/50 border-white/10",
  accent: "from-white/20 to-white/5",
};

interface ExperienceCardProps {
  exp: Experience;
}

export const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  const style = exp.highlight
    ? (highlightStyles[exp.highlight] ?? defaultStyle)
    : defaultStyle;
  const duration = getDuration(exp.startDate, exp.endDate);

  return (
    <div className='relative pl-12'>
      {/* Timeline node */}
      <div
        className={`absolute left-0 top-6 w-9 h-9 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300 ${
          exp.current
            ? "bg-purple-600 border-purple-400 shadow-lg shadow-purple-900/50"
            : "bg-[#0d0d24] border-white/15 hover:border-purple-500/40"
        }`}
      >
        {exp.current && (
          <div className='absolute inset-0 rounded-full bg-purple-400/20 animate-ping' />
        )}
        <div
          className={`w-2 h-2 rounded-full ${exp.current ? "bg-white animate-pulse" : "bg-white/30"}`}
        />
      </div>

      {/* Card */}
      <div className='glassmorphism rounded-2xl overflow-hidden card-hover relative'>
        {/* Left accent bar */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-0.75 bg-linear-to-b ${style.accent}`}
        />

        {/* Header */}
        <div className='pl-5 pr-5 pt-4 pb-3'>
          <div className='flex items-start justify-between gap-3'>
            {/* Left: badges → role → company */}
            <div className='flex-1 min-w-0'>
              <div className='flex flex-wrap items-center gap-1.5 mb-2'>
                {exp.highlight && (
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 text-xs rounded-full border font-medium ${style.badge}`}
                  >
                    {exp.highlight}
                  </span>
                )}
                {exp.current && (
                  <span className='inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs rounded-full border bg-green-500/10 text-green-300 border-green-500/25 font-medium'>
                    <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' />
                    Now
                  </span>
                )}
              </div>

              <h3 className='text-white font-bold text-base leading-tight mb-1'>
                {exp.role}
              </h3>

              <div className='flex items-center gap-1.5 flex-wrap'>
                <span className='text-purple-300 font-semibold text-sm'>
                  {exp.company}
                </span>
                {exp.client && (
                  <>
                    <span className='text-white/20 text-xs'>·</span>
                    <span className='text-white/35 text-xs'>{exp.client}</span>
                  </>
                )}
              </div>
            </div>

            {/* Right: dates → duration + team size */}
            <div className='shrink-0 flex flex-col items-end gap-1.5 pt-0.5'>
              <span className='text-white/35 text-xs font-medium tabular-nums whitespace-nowrap'>
                {exp.startDate} - {exp.endDate}
              </span>
              <div className='flex items-center gap-2'>
                <span className='px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/35 text-xs font-mono'>
                  {duration}
                </span>
                <span className='flex items-center gap-1 text-white/25 text-xs'>
                  <svg
                    className='w-3 h-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  {exp.teamSize}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='mx-5 h-px bg-white/5' />

        {/* Description bullets */}
        <ul className='px-5 py-3.5 space-y-2.5'>
          {exp.description.map((point, i) => (
            <li
              key={i}
              className='flex gap-2.5 text-sm leading-relaxed text-white/55 group'
            >
              <span className='text-purple-400/50 shrink-0 mt-0.75 group-hover:text-purple-400 transition-colors text-xs'>
                *
              </span>
              <span className='group-hover:text-white/75 transition-colors'>
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className='px-5 pt-2.5 pb-4 border-t border-white/5 flex flex-wrap gap-1.5'>
          {exp.technologies.map(tech => (
            <span
              key={tech}
              className='px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/40 border border-white/8 hover:border-purple-500/30 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-150 cursor-default'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
