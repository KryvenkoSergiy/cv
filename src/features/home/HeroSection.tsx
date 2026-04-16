import { Link } from "react-router-dom";
import { personalInfo, heroDescription } from "../../shared/data/cv";
import { CoreStackCard } from "./CoreStackCard";

export const HeroSection = () => (
  <section className="flex min-h-screen flex-col justify-center pt-32 pb-12">
    <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1fr_minmax(0,22rem)]">
      <div className="stagger">
        {personalInfo.available && (
          <p className="mb-8 inline-flex items-center gap-2 font-mono text-label text-fg-dim uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            Available for new opportunities
          </p>
        )}

        <h1 className="mb-6 text-display">
          <span className="block text-fg">{personalInfo.firstName}</span>
          <span className="block text-fg-muted">{personalInfo.lastName}</span>
        </h1>

        {/* Static on purpose: the positioning is the one line a recruiter
            must be able to read at a glance, not wait for. */}
        {/* Two deliberate lines, told apart by type rather than a separator:
            the role reads as prose, the specialty as an accent kicker. */}
        <p className="mb-8">
          <span className="block text-body-lg font-medium text-fg">
            {personalInfo.title}
          </span>
          {/* Tighter tracking on phones keeps it to one line; relaxed leading
              keeps it legible if a narrow screen still wraps it. */}
          <span className="mt-1.5 block font-mono text-label leading-relaxed text-accent-fg uppercase max-sm:tracking-normal">
            {personalInfo.specialty}
          </span>
        </p>

        <p className="mb-10 max-w-[58ch] text-body-lg text-fg-muted">
          {heroDescription}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#footer"
            className="rounded-control bg-accent px-5 py-2.5 font-mono text-label text-accent-ink uppercase transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover"
          >
            Get in touch
          </a>
          <Link
            to="/experience"
            className="rounded-control border border-border bg-surface-1 px-5 py-2.5 font-mono text-label text-fg-muted uppercase transition-colors duration-[var(--dur-fast)] hover:border-border-strong hover:bg-surface-2 hover:text-fg"
          >
            View Experience
          </Link>
        </div>
      </div>

      <CoreStackCard />
    </div>
  </section>
);
