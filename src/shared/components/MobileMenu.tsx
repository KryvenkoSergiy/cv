import { Link } from "react-router-dom";

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

export default function MobileMenu({ isOpen, navLinks, currentPath, onClose }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className='border-t border-white/10 px-6 py-4 space-y-1'>
        {navLinks.map(link => {
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "text-purple-300 bg-purple-600/15"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href='mailto:kyvenko.sergiy@gmail.com'
          className='block mt-2 px-4 py-2.5 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm font-semibold text-center'
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}
