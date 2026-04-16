export const AmbientBackground = () => (
  <>
    <div className='absolute inset-0 overflow-hidden pointer-events-none select-none'>
      <div className='animate-blob-1 absolute -top-16 -left-32 w-125 h-125 bg-purple-700/25 rounded-full blur-3xl' />
      <div className='animate-blob-2 absolute top-1/3 -right-32 w-105 h-105 bg-blue-600/20 rounded-full blur-3xl' />
      <div className='animate-blob-3 absolute bottom-1/4 left-1/4 w-95 h-95 bg-cyan-600/15 rounded-full blur-3xl' />
    </div>
    <div
      className='absolute inset-0 opacity-[0.025] pointer-events-none'
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </>
);
