import { Link } from "react-router-dom";
import { personalInfo } from "../../shared/data/cv";
import { useTypewriter } from "../../shared/hooks/useTypewriter";
import {
  EmailIcon,
  PhoneIcon,
  LinkedInIcon,
} from "../../shared/components/icons";
import { CodeCard } from "./CodeCard";

const contactLinks = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: <EmailIcon />,
    label: "Email",
  },
  {
    href: `tel:${personalInfo.phone}`,
    icon: <PhoneIcon />,
    label: "Phone",
  },
  {
    href: personalInfo.linkedin,
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    external: true,
  },
];

export const HeroSection = () => {
  const role = useTypewriter(personalInfo.roles);
  const scrollText = useTypewriter([
    "scroll down",
    "check my experience",
    "explore my skills",
    "learn about me",
  ]);

  return (
    <section className='relative min-h-screen flex items-center pt-24 pb-16'>
      <div className='max-w-6xl mx-auto px-6 w-full'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <div className='animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-7'>
              <span className='w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse' />
              Available for new opportunities
            </div>

            <h1 className='animate-fade-in-up delay-100 text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-5'>
              <span className='text-white block'>Sergii</span>
              <span className='gradient-text block'>Kryvenko</span>
            </h1>

            <div className='animate-fade-in-up delay-200 flex items-center gap-1.5 mb-6 h-8'>
              <span className='text-xl text-white/60 font-light tracking-wide'>
                {role}
              </span>
              <span className='w-0.5 h-6 bg-purple-400 rounded-full animate-blink' />
            </div>

            <p className='animate-fade-in-up delay-300 text-white/45 text-base leading-relaxed mb-9 max-w-lg'>
              10+ years building scalable and high-performance web applications.
              Specialized in React and modern frontend architecture, with a
              focus on performance, user experience, and leading engineering
              teams to deliver impactful products.
            </p>

            <div className='animate-fade-in-up delay-400 flex flex-wrap gap-3 mb-9'>
              <Link
                to='/experience'
                className='px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40 hover:-translate-y-0.5'
              >
                View Experience
              </Link>
              <Link
                to='/skills'
                className='px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5'
              >
                Explore Skills
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className='px-6 py-3 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-600/10 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5'
              >
                Get in Touch
              </a>
            </div>

            <div className='animate-fade-in-up delay-500 flex items-center gap-5'>
              {contactLinks.map(({ href, icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className='flex items-center gap-1.5 text-white/35 hover:text-purple-300 transition-colors text-sm'
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className='hidden lg:block animate-fade-in delay-300'>
            <CodeCard />
          </div>
        </div>
      </div>

      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/20 text-xs animate-float uppercase'>
        <span>{scrollText}</span>
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </section>
  );
};
