const values = [
  {
    emoji: "⚡",
    title: "Performance First",
    desc: "Focused on fast load times, Core Web Vitals, and smooth, responsive user interactions.",
  },
  {
    emoji: "🤝",
    title: "Team Empowerment",
    desc: "Building strong teams through mentoring, ownership, and clear communication.",
  },
  {
    emoji: "🎨",
    title: "User Experience & Quality",
    desc: "Delivering polished, consistent interfaces with strong attention to detail.",
  },
  {
    emoji: "📐",
    title: "Scalable Architecture",
    desc: "Designing maintainable, scalable systems that support long-term growth.",
  },
];

export const ValuesSection = () => (
  <div className='glassmorphism rounded-2xl p-8 mb-8'>
    <h2 className='text-xl font-bold text-white mb-6'>How I Work</h2>
    <div className='grid sm:grid-cols-2 gap-5'>
      {values.map(v => (
        <div key={v.title} className='flex items-start gap-4 group'>
          <div className='w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-xl shrink-0 group-hover:border-purple-500/30 transition-colors'>
            {v.emoji}
          </div>
          <div>
            <h3 className='text-white font-semibold text-sm mb-1'>{v.title}</h3>
            <p className='text-white/50 text-xs leading-relaxed'>{v.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
