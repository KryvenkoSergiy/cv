import { careerHighlights } from "../../shared/data/cv";

export const HighlightsStrip = () => (
  <div className='mt-10 grid sm:grid-cols-3 gap-5'>
    {careerHighlights.map(item => (
      <div
        key={item.title}
        className='glassmorphism rounded-2xl p-6 card-hover flex flex-col gap-4'
      >
        <div>
          <div
            className={`h-0.5 w-10 rounded-full bg-linear-to-r ${item.gradient} mb-4`}
          />
          <div className='text-white/30 text-xs font-semibold uppercase tracking-wider mb-1'>
            {item.label}
          </div>
          <div className='text-white font-bold text-sm'>{item.title}</div>
        </div>
        <ul className='space-y-2'>
          {item.points.map((point, i) => (
            <li key={i} className='flex items-start gap-2'>
              <span
                className={`mt-1.5 w-1 h-1 rounded-full bg-linear-to-r ${item.gradient} shrink-0`}
              />
              <span className='text-white/50 text-xs leading-relaxed'>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
