interface PageHeaderProps {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export const PageHeader = ({
  eyebrow,
  eyebrowColor,
  title,
  titleHighlight,
  subtitle,
}: PageHeaderProps) => (
  <div className='mb-14'>
    <p
      className={`${eyebrowColor} text-sm font-semibold tracking-widest uppercase mb-3`}
    >
      {eyebrow}
    </p>
    <h1 className='text-5xl lg:text-6xl font-black text-white leading-tight mb-3'>
      {title} <span className='gradient-text'>{titleHighlight}</span>
    </h1>
    <p className='text-white/40'>{subtitle}</p>
  </div>
);
