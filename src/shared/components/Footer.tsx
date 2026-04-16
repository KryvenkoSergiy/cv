import { personalInfo } from "../data/cv";
import {
  EmailIcon,
  PhoneIcon,
  LinkedInIcon,
  GitHubIcon,
  UpworkIcon,
} from "./icons";

const contactItems = [
  {
    href: personalInfo.linkedin,
    icon: <LinkedInIcon className='w-5 h-5' />,
    label: "LinkedIn",
    value: "linkedin.com/in/kryvenkosergiy",
    accent: "cyan",
    external: true,
  },
  {
    href: personalInfo.github,
    icon: <GitHubIcon className='w-5 h-5' />,
    label: "GitHub",
    value: "github.com/KryvenkoSergiy",
    accent: "green",
    external: true,
  },
  {
    href: personalInfo.upwork,
    icon: <UpworkIcon className='w-5 h-5' />,
    label: "Upwork",
    value: "upwork.com/freelancers/~017…",
    accent: "emerald",
    external: true,
  },
  {
    href: `mailto:${personalInfo.email}`,
    icon: <EmailIcon className='w-5 h-5' />,
    label: "Email",
    value: personalInfo.email,
    accent: "purple",
  },
  {
    href: `tel:${personalInfo.phone}`,
    icon: <PhoneIcon className='w-5 h-5' />,
    label: "Phone",
    value: personalInfo.phone,
    accent: "blue",
  },
];

const accentMap: Record<string, { card: string; icon: string }> = {
  purple:  { card: "hover:border-purple-500/30  hover:bg-purple-600/6",  icon: "bg-purple-600/20  border-purple-500/25  text-purple-300"  },
  blue:    { card: "hover:border-blue-500/30    hover:bg-blue-600/6",    icon: "bg-blue-600/20    border-blue-500/25    text-blue-300"    },
  cyan:    { card: "hover:border-cyan-500/30    hover:bg-cyan-600/6",    icon: "bg-cyan-600/20    border-cyan-500/25    text-cyan-300"    },
  green:   { card: "hover:border-green-500/30   hover:bg-green-600/6",   icon: "bg-green-600/20   border-green-500/25   text-green-300"   },
  emerald: { card: "hover:border-emerald-500/30 hover:bg-emerald-600/6", icon: "bg-emerald-600/20 border-emerald-500/25 text-emerald-300" },
};

export const Footer = () => (
  <footer id='footer' className='relative border-t border-purple-500/20 mt-8'>
    <div className='absolute inset-x-0 top-0 h-64 bg-linear-to-b from-purple-600/10 via-blue-600/5 to-transparent pointer-events-none' />
    <div className='relative max-w-6xl mx-auto px-6 py-10'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8'>
        <div>
          <h2 className='text-lg font-bold text-white flex items-center gap-2 mb-1'>
            <span>📬</span> Get in Touch
          </h2>
          <p className='text-white/35 text-sm'>
            Open to senior engineering and lead roles. Let's talk.
          </p>
        </div>
        <a
          href={`mailto:${personalInfo.email}`}
          className='inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-900/30 hover:-translate-y-0.5 shrink-0'
        >
          <EmailIcon className='w-4 h-4' />
          Send me an email
        </a>
      </div>

      <div className='flex flex-wrap justify-center gap-3 mb-8'>
        {contactItems.map(item => {
          const colors = accentMap[item.accent];
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-3 p-4 rounded-xl bg-white/4 border border-white/8 transition-all duration-200 w-full sm:w-[calc(33.333%-8px)] ${colors.card}`}
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${colors.icon}`}>
                {item.icon}
              </div>
              <div className='min-w-0'>
                <div className='text-white/35 text-xs'>{item.label}</div>
                <div className='text-white text-xs font-medium truncate mt-0.5'>{item.value}</div>
              </div>
            </a>
          );
        })}
      </div>

      <div className='border-t border-white/8 pt-6'>
        <p className='text-white/20 text-xs text-center'>
          © {new Date().getFullYear()} Sergii Kryvenko
        </p>
      </div>
    </div>
  </footer>
);
