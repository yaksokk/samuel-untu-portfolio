import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { Button } from "@/components/common";
import { useEffect, useState } from "react";

const HERO_CONTENT = {
    greeting: "Hi, I'm",
    name: "Samuel Untu",
    role: "Frontend Developer",
    bio: "I enjoy turning ideas into real web applications focused on frontend, curious about everything else.",
    cta: {
        primary: { label: "See My Work", href: "#project" },
        secondary: { label: "Download CV", href: "/cv.pdf" },
    },
    social: [
        { icon: FiGithub, href: "https://github.com/yaksokk", label: "GitHub" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/samueluntu/", label: "LinkedIn" },
    ],
};

function Hero() {
    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 7) {
                setShowScroll(false);
            } else {
                setShowScroll(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 h-500px w-500px rounded-full bg-primary/10 dark:bg-primary-dark/10 blur-3xl animate-float"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-32 h-400px w-400px rounded-full bg-accent/10 dark:bg-accent-dark/10 blur-3xl animate-float"
                style={{ animationDelay: "2s" }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-600px w-600px rounded-full bg-primary-glow/30 dark:bg-primary-glow-dark/20 blur-3xl animate-float"
                style={{ animationDelay: "4s" }}
            />

            <div className="relative z-10 max-w-2xl w-full">
                <span className="animate-slide-up animation-delay-100 inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-success-soft dark:bg-success-soft-dark border border-success/20 dark:border-success-dark/20 text-xs font-semibold tracking-wider uppercase text-success dark:text-success-dark">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success dark:bg-success-dark opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success dark:bg-success-dark" />
                    </span>
                    Available for work
                </span>

                <h1 className="animate-slide-up animation-delay-200 text-4xl md:text-6xl font-bold leading-tight text-text dark:text-text-dark">
                    {HERO_CONTENT.greeting}{" "}
                    <span className="text-gradient">
                        {HERO_CONTENT.name}
                    </span>
                    <span className="text-text dark:text-text-dark">.</span>
                    <br />
                    <span className="text-text-muted dark:text-text-muted-dark">
                        {HERO_CONTENT.role}
                    </span>
                </h1>

                {/* Bio */}
                <p className="animate-slide-up animation-delay-400 mt-6 text-base md:text-lg text-text-muted dark:text-text-muted-dark max-w-lg leading-relaxed">
                    {HERO_CONTENT.bio}
                </p>

                <div className="animate-slide-up animation-delay-600 mt-10 flex flex-wrap items-center gap-4">
                    <Button
                        variant="primary"
                        onClick={() =>
                            document
                                .querySelector(HERO_CONTENT.cta.primary.href)
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="group relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {HERO_CONTENT.cta.primary.label}
                            <FiArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </span>
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() =>
                            window.open(HERO_CONTENT.cta.secondary.href, "_blank")
                        }
                        className="group border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark transition-all duration-300"
                    >
                        <span className="flex items-center gap-2">
                            <FiDownload
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                            {HERO_CONTENT.cta.secondary.label}
                        </span>
                    </Button>
                </div>

                {/* Social Links */}
                <div className="animate-slide-up animation-delay-700 mt-8 flex items-center gap-5">
                    {HERO_CONTENT.social.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="group flex items-center justify-center w-11 h-11 rounded-xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark text-text-subtle dark:text-text-subtle-dark hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark hover:bg-primary-glow/50 dark:hover:bg-primary-glow-dark/50 transition-all duration-300"
                        >
                            <Icon
                                size={20}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        </a>
                    ))}
                    <span className="h-px w-12 bg-border dark:bg-border-dark" />
                    <span className="text-xs tracking-wider text-text-subtle dark:text-text-subtle-dark font-medium">
                        Let's connect
                    </span>
                </div>
            </div>

            {showScroll && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft transition-opacity duration-500">
                    <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-text-subtle dark:text-text-subtle-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                    >
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </a>
                </div>
            )}
        </section>
    );
}

export default Hero;