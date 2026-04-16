import { about, personalInfo } from "../../shared/data/cv";

export const ProfileCard = () => (
  <div className='glassmorphism rounded-2xl p-8 mb-8'>
    <div className='flex flex-col sm:flex-row items-start gap-7'>
      <div className='w-20 h-20 rounded-2xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-black shrink-0 shadow-xl shadow-purple-900/40 animate-float'>
        SK
      </div>

      <div>
        <h2 className='text-2xl font-black text-white mb-0.5'>
          {personalInfo.name}
        </h2>
        <p className='text-purple-300 font-semibold mb-5'>
          {personalInfo.title} · Team & Tech Lead
        </p>

        <div className='space-y-4'>
          {about.map((para, i) => (
            <p key={i} className='text-white/55 leading-relaxed text-sm'>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);
