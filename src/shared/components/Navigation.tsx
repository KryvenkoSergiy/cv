import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";

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
      className={`fixed top-0 left-0 right-0 z-50 border transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#05051a]/95 md:backdrop-blur-md md:bg-[#05051a]/70 border-white/10 shadow-xl shadow-black/40"
          : "bg-transparent border-transparent shadow-none"
      }`}
    >
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link to='/' className='flex items-center gap-3 group'>
          <div className='w-9 h-9 rounded-xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-purple-900/40 group-hover:shadow-purple-700/50 transition-shadow'>
            SK
          </div>
          <span className='hidden sm:block text-white/50 text-sm font-medium group-hover:text-white/80 transition-colors'>
            Sergii Kryvenko
          </span>
        </Link>

        <div className='hidden md:flex items-center gap-1'>
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ",
                  {
                    "bg-purple-600/25 text-purple-300 border border-purple-500/30":
                      isActive,
                    "text-white/50 hover:text-white hover:bg-white/6 border border-transparent":
                      !isActive,
                  },
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href='mailto:kyvenko.sergiy@gmail.com'
            className='ml-3 px-4 py-2 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-purple-900/30'
          >
            Hire Me
          </a>
        </div>

        <button
          className='md:hidden flex flex-col gap-1.5 p-2 group'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span
            className={`block w-5 h-0.5 bg-white/70 origin-center transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/70 origin-center transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
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
