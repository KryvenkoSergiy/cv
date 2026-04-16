import { stats } from "../../shared/data/cv";

export const StatsRow = () => (
  <section className='border-t border-b border-white/5 py-6 px-6'>
    <div className='max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden'>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`bg-[#05051a] px-6 py-5 flex flex-col items-center text-center ${
            i < stats.length - 1 ? "" : ""
          }`}
        >
          <span className='text-3xl font-black gradient-text leading-none mb-1'>
            {s.value}
          </span>
          <span className='text-white/35 text-xs font-medium'>{s.label}</span>
        </div>
      ))}
    </div>
  </section>
);
