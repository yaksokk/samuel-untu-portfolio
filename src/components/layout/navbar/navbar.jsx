import { useEffect, useState } from "react";
import logo from "@/assets/img/logo-gradient.png";

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skill" },
    { label: "Project", href: "#project" },
    { label: "Certificates", href: "#certificate" },
    { label: "Interests", href: "#interests" },
    { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navBgClass = isScrolled
        ? "bg-surface-dark/90 shadow-lg shadow-black/20"
        : "bg-transparent";

    return (
        <nav
            role="navigation"
            aria-label="Main Navigation"
            className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500 backdrop-blur-md ${navBgClass}`}
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-12">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-9 drop-shadow-[-8px_-4px_6px_rgba(30,144,255,0.3)]" />
                </div>

                <ul className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <li key={item.href} className="group relative text-sm font-medium">
                            <a href={item.href} className="text-text-muted-dark hover:text-text-dark transition-colors duration-300">
                                {item.label}
                            </a>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-center scale-x-0 bg-primary-dark transition-transform duration-300 ease-in-out group-hover:scale-x-75" />
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="px-4 py-2 rounded-lg bg-primary-dark text-white text-sm font-semibold hover:opacity-90 transition-all duration-300"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>

                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-text-dark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-text-dark transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-text-dark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-surface-dark/95 backdrop-blur-md border-t border-border-dark px-6 py-4 space-y-3">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm font-medium text-text-muted-dark hover:text-primary-dark transition-colors duration-300 py-2"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
