const expertise = [
  {
    title: "React Ecosystem",
    desc: "React, Next.js, and React Native - building scalable UI architectures from reusable components to production-grade applications.",
    color: "from-purple-500 to-violet-400",
  },
  {
    title: "JavaScript / TypeScript",
    desc: "Modern JavaScript and TypeScript at scale - advanced typing, architectural patterns, and runtime performance optimization.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Team & Tech Leadership",
    desc: "Led and mentored engineering teams (4-14 engineers) across startups, scale-ups, and Google, driving architecture and delivery.",
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "Performance Optimization",
    desc: "Improving Core Web Vitals through code splitting, lazy loading, rendering optimization, and real-time UI performance tuning.",
    color: "from-orange-500 to-amber-400",
  },
];

export const CoreExpertise = () => (
  <div className='glassmorphism rounded-2xl p-5 mb-6'>
    <h2 className='text-sm font-bold text-white/70 uppercase tracking-wider mb-4'>
      Core Expertise
    </h2>
    <div className='grid md:grid-cols-2 gap-4'>
      {expertise.map(item => (
        <div key={item.title}>
          <div className='flex items-center gap-3 mb-1.5'>
            <div
              className={`h-1 w-6 rounded-full bg-linear-to-r ${item.color} shrink-0`}
            />
            <span className='text-white font-semibold text-sm'>
              {item.title}
            </span>
          </div>
          <p className='text-white/45 text-sm leading-relaxed pl-9'>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);
