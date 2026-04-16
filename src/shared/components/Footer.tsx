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
    icon: <LinkedInIcon className="h-4 w-4" />,
    label: "LinkedIn",
    value: personalInfo.linkedinDisplay,
    external: true,
  },
  {
    href: personalInfo.github,
    icon: <GitHubIcon className="h-4 w-4" />,
    label: "GitHub",
    value: personalInfo.githubDisplay,
    external: true,
  },
  {
    href: personalInfo.upwork,
    icon: <UpworkIcon className="h-4 w-4" />,
    label: "Upwork",
    value: personalInfo.upworkDisplay,
    external: true,
  },
  {
    href: `mailto:${personalInfo.email}`,
    icon: <EmailIcon className="h-4 w-4" />,
    label: "Email",
    value: personalInfo.email,
  },
  {
    href: `tel:${personalInfo.phone}`,
    icon: <PhoneIcon className="h-4 w-4" />,
    label: "Phone",
    value: personalInfo.phone,
  },
];

export const Footer = () => (
  <footer id="footer" className="mt-section border-t border-border">
    <div className="mx-auto max-w-5xl px-gutter py-16">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span aria-hidden className="mb-5 block h-px w-6 bg-accent" />
          <h2 className="mb-2 text-h2 text-fg">Get in Touch</h2>
          {personalInfo.available && (
            <p className="text-body text-fg-muted">
              Open to senior and lead frontend roles. Let's talk.
            </p>
          )}
        </div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-control bg-accent px-5 py-2.5 font-mono text-label text-accent-ink uppercase transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover sm:self-auto"
        >
          <EmailIcon className="h-3.5 w-3.5" />
          Send me an email
        </a>
      </div>

      <ul className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {contactItems.map(item => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex h-full items-center gap-3.5 bg-surface-1 p-4 transition-colors duration-[var(--dur-fast)] hover:bg-surface-2"
            >
              <span className="text-fg-dim transition-colors duration-[var(--dur-fast)] group-hover:text-accent-fg">
                {item.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-label text-fg-dim uppercase">
                  {item.label}
                </span>
                <span className="mt-1 block truncate text-small text-fg">
                  {item.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 border-t border-border-soft pt-6 font-mono text-label text-fg-dim uppercase">
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
    </div>
  </footer>
);
