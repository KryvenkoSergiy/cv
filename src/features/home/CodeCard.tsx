import { stats } from "../../shared/data/cv";

export const CodeCard = () => (
  <div className='glassmorphism rounded-2xl p-6 card-hover'>
    {/* Window chrome */}
    <div className='flex items-center gap-1.5 mb-5'>
      <div className='w-3 h-3 rounded-full bg-red-400/80' />
      <div className='w-3 h-3 rounded-full bg-yellow-400/80' />
      <div className='w-3 h-3 rounded-full bg-green-400/80' />
      <span className='text-white/25 text-xs ml-3 font-mono'>
        sergii.config.ts
      </span>
    </div>

    {/* Pseudo-code */}
    <div className='font-mono text-sm leading-7 space-y-0.5'>
      <p>
        <span className='text-blue-400'>const</span>{" "}
        <span className='text-white'>engineer</span>{" "}
        <span className='text-white/40'>=</span> {"{"}
      </p>
      <p className='pl-5'>
        <span className='text-purple-300'>name</span>
        <span className='text-white/40'>:</span>{" "}
        <span className='text-green-300'>'Sergii Kryvenko'</span>
        <span className='text-white/40'>,</span>
      </p>
      <p className='pl-5'>
        <span className='text-purple-300'>role</span>
        <span className='text-white/40'>:</span>{" "}
        <span className='text-green-300'>'Frontend Engineer'</span>
        <span className='text-white/40'>,</span>
      </p>
      <p className='pl-5'>
        <span className='text-purple-300'>experience</span>
        <span className='text-white/40'>:</span>{" "}
        <span className='text-orange-300'>10</span>
        <span className='text-white/40'>,</span>
      </p>
      <p className='pl-5'>
        <span className='text-purple-300'>stack</span>
        <span className='text-white/40'>: [</span>
      </p>
      <p className='pl-10'>
        <span className='text-green-300'>'React'</span>
        <span className='text-white/40'>,</span>{" "}
        <span className='text-green-300'>'TypeScript'</span>
        <span className='text-white/40'>,</span>
      </p>
      <p className='pl-10'>
        <span className='text-green-300'>'Next.js'</span>
        <span className='text-white/40'>,</span>{" "}
        <span className='text-green-300'>'GraphQL'</span>
        <span className='text-white/40'>,</span>
      </p>
      <p className='pl-5'>
        <span className='text-white/40'>],</span>
      </p>
      <p className='pl-5'>
        <span className='text-purple-300'>leadership</span>
        <span className='text-white/40'>:</span>{" "}
        <span className='text-cyan-300'>true</span>
        <span className='text-white/40'>,</span>
      </p>
      <p className='pl-5'>
        <span className='text-purple-300'>available</span>
        <span className='text-white/40'>:</span>{" "}
        <span className='text-cyan-300'>true</span>
        <span className='text-white/40'>,</span>
      </p>
      <p>{"}"}</p>
    </div>

    {/* Stats grid */}
    <div className='grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/8'>
      {stats.map(s => (
        <div key={s.label} className='text-center py-2'>
          <div className='text-2xl font-black gradient-text'>{s.value}</div>
          <div className='text-xs text-white/35 mt-0.5'>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);
