import { useEffect, useState } from "react";
import logo from "@/assets/img/logo-gradient.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skill" },
    { label: "Project", href: "#project" },
    { label: "Certificates", href: "#certificate" },
    { label: "Interests", href: "#interests" },
    { label: "Contact", href: "#contact" },
];

  // Toggle cukup ubah state, useEffect yang urus DOM
  const toggleDarkMode = () => setIsDark((prev) => !prev);

  const navBgClass = isScrolled
    ? isDark
      ? "bg-(--color-surface-dark) text-(--color-text-dark)"
      : "bg-white/95 text-gray-800 shadow-sm"
    : "bg-transparent";

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`
        fixed top-0 left-0 right-0 z-9999 h-100px py-3
        transition-[background-color] duration-500 backdrop-blur-md
        ${navBgClass}
      `}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 md:justify-between md:px-12">

        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-9.5 drop-shadow-[-8px_-4px_6px_rgba(2,2,228,0.2)]"
          />
        </div>

        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.href} className="group relative text-[1.05rem] font-medium">
              <a href={item.href} className="text-inherit transition-colors duration-300 hover:text-(--color-primary)">
                {item.label}
              </a>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-center scale-x-0 bg-(--color-primary) transition-transform duration-300 ease-in-out group-hover:scale-x-75" />
            </li>
          ))}

          <li>
            <button
              onClick={toggleDarkMode}
              className="
                ml-4 rounded px-3 py-1
                border border-current
                transition-colors duration-300
                hover:bg-(--color-primary) hover:text-white hover:border-(--color-primary)
              "
              aria-label="Toggle Dark Mode"
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>

      </div>
    </nav >
  );
}

export default Navbar;