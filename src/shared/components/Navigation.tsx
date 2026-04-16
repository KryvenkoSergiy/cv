import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";
import { DownloadCvButton } from "../../features/pdf/DownloadCvButton";
import { personalInfo } from "../data/cv";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 right-0 left-0 z-50 border-b transition-colors duration-[var(--dur-base)]",
        /* Opaque rather than backdrop-blur: same legibility over scrolled
           content, none of the compositor cost. */
        scrolled || menuOpen
          ? "border-border bg-canvas/95"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-gutter py-4">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-control border border-border bg-surface-1 font-mono text-label text-fg transition-colors duration-[var(--dur-fast)] group-hover:border-accent group-hover:text-accent-fg">
            {personalInfo.initials}
          </span>
          <span className="hidden font-mono text-label text-fg-dim uppercase transition-colors duration-[var(--dur-fast)] group-hover:text-fg sm:block">
            {personalInfo.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "relative px-3.5 py-2 font-mono text-label uppercase transition-colors duration-[var(--dur-fast)]",
                  "after:absolute after:inset-x-3.5 after:-bottom-px after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-[var(--dur-fast)] after:ease-editorial",
                  isActive
                    ? "text-fg after:scale-x-100"
                    : "text-fg-dim after:scale-x-0 hover:text-fg hover:after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          {/* The primary action lived only inside the joke banner before —
              now it is reachable from every page without scrolling. */}
          <DownloadCvButton
            label="CV"
            ariaLabel="Download CV as PDF"
            busyLabel="…"
            className="ml-3"
          />
          <a
            href="#footer"
            className="ml-1.5 rounded-control bg-accent px-4 py-2 font-mono text-label text-accent-ink uppercase transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="flex cursor-pointer flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={clsx(
              "block h-px w-5 origin-center bg-fg transition-transform duration-[var(--dur-base)]",
              menuOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={clsx(
              "block h-px w-5 bg-fg transition-opacity duration-[var(--dur-fast)]",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={clsx(
              "block h-px w-5 origin-center bg-fg transition-transform duration-[var(--dur-base)]",
              menuOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        navLinks={navLinks}
        currentPath={location.pathname}
        onClose={() => setMenuOpen(false)}
      />
    </nav>
  );
}
