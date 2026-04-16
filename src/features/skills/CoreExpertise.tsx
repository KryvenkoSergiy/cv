import { coreExpertise } from "../../shared/data/cv";

export const CoreExpertise = () => (
  <div className='glassmorphism rounded-2xl p-5 mb-6'>
    <h2 className='text-sm font-bold text-white/70 uppercase tracking-wider mb-4'>
      Core Expertise
    </h2>
    <div className='grid md:grid-cols-2 gap-4'>
      {coreExpertise.map(item => (
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
