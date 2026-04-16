import { personalInfo } from "../../shared/data/cv";
import {
  EmailIcon,
  PhoneIcon,
  LinkedInIcon,
} from "../../shared/components/icons";

const contactItems = [
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
  {
    href: personalInfo.linkedin,
    icon: <LinkedInIcon className='w-5 h-5' />,
    label: "LinkedIn",
    value: personalInfo.linkedin.replace("https://www.", "").replace(/\/$/, ""),
    accent: "cyan",
    external: true,
  },
];

const accentMap: Record<string, { card: string; icon: string }> = {
  purple: {
    card: "hover:border-purple-500/30 hover:bg-purple-600/6",
    icon: "bg-purple-600/20 border-purple-500/25 text-purple-300",
  },
  blue: {
    card: "hover:border-blue-500/30 hover:bg-blue-600/6",
    icon: "bg-blue-600/20 border-blue-500/25 text-blue-300",
  },
  cyan: {
    card: "hover:border-cyan-500/30 hover:bg-cyan-600/6",
    icon: "bg-cyan-600/20 border-cyan-500/25 text-cyan-300",
  },
};

export const ContactSection = () => (
  <div className='glassmorphism rounded-2xl p-8'>
    <h2 className='text-xl font-bold text-white mb-2 flex items-center gap-2'>
      <span>📬</span>
      Get in Touch
    </h2>
    <p className='text-white/35 text-sm mb-6'>
      Open to senior engineering and lead roles. Let's talk.
    </p>

    <div className='grid sm:grid-cols-3 gap-4'>
      {contactItems.map(item => {
        const colors = accentMap[item.accent];
        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-4 p-4 rounded-xl bg-white/4 border border-white/8 transition-all duration-200 group ${colors.card}`}
          >
            <div
              className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${colors.icon}`}
            >
              {item.icon}
            </div>
            <div className='min-w-0'>
              <div className='text-white/35 text-xs'>{item.label}</div>
              <div className='text-white text-xs font-medium truncate mt-0.5'>
                {item.value}
              </div>
            </div>
          </a>
        );
      })}
    </div>

    <div className='mt-6 pt-6 border-t border-white/8 text-center'>
      <a
        href={`mailto:${personalInfo.email}`}
        className='inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-900/30 hover:-translate-y-0.5'
      >
        <EmailIcon className='w-5 h-5' />
        Send me an email
      </a>
    </div>
  </div>
);
