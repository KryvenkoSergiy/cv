import { Link } from "react-router-dom";
import clsx from "clsx";
import { DownloadCvButton } from "../../features/pdf/DownloadCvButton";

interface NavLink {
  path: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  currentPath: string;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  navLinks,
  currentPath,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      /* Without `inert` these links stay focusable while the menu is
         visually collapsed, so keyboard users tab into invisible targets. */
      inert={!isOpen}
      className={clsx(
        "overflow-hidden transition-all duration-[var(--dur-base)] ease-editorial md:hidden",
        isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0",
      )}
    >
      <div className="space-y-1 border-t border-border px-gutter py-4">
        {navLinks.map(link => {
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "block rounded-control px-4 py-2.5 font-mono text-label uppercase transition-colors duration-[var(--dur-fast)]",
                isActive
                  ? "bg-surface-2 text-accent-fg"
                  : "text-fg-dim hover:bg-surface-2 hover:text-fg",
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <DownloadCvButton
          label="Download CV"
          className="mt-3 w-full justify-center"
        />
        <a
          href="#footer"
          onClick={onClose}
          className="mt-2 block rounded-control bg-accent px-4 py-2.5 text-center font-mono text-label text-accent-ink uppercase transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}
