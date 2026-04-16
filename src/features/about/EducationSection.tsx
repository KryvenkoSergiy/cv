import { education } from "../../shared/data/cv";

export const EducationSection = () => (
  <div className='glassmorphism rounded-2xl p-8 mb-8'>
    <h2 className='text-xl font-bold text-white mb-6 flex items-center gap-2'>
      <span>🎓</span>
      Education
    </h2>
    <div className='flex flex-col sm:flex-row sm:items-center gap-5'>
      <div className='w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-xl flex-shrink-0'>
        🏛️
      </div>
      <div>
        <h3 className='text-white font-bold'>{education.degree}</h3>
        <p className='text-white/55 text-sm'>{education.field}</p>
        <p className='text-purple-300 text-sm font-medium mt-1'>
          {education.university}
        </p>
        <p className='text-white/30 text-xs mt-0.5'>{education.period}</p>
      </div>
    </div>
  </div>
);
