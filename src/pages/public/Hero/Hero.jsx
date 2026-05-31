import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { Button } from "@/components/common";
import { useEffect, useState } from "react";

const HERO_CONTENT = {
    greeting: "Hi, I'm",
    name: "Samuel Untu",
    roles: ["Frontend Developer", "React Developer", "Web Developer"],
    bio: "Frontend Developer with freelance experience, focused on React and building things that work well. Currently expanding into TypeScript and PostgreSQL.",
    cta: {
        primary: { label: "See My Work", href: "#project" },
        secondary: { label: "Download CV", href: "https://drive.google.com/file/d/1Mb4hf8RsFsKigNiyoP8OT23vFz-3pC9w/view?usp=sharing" },
    },
    social: [
        { icon: FiGithub, href: "https://github.com/yaksokk", label: "GitHub" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/samueluntu/", label: "LinkedIn" },
    ],
};

function TypewriterText({ texts }) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = texts[textIndex];
        const speed = isDeleting ? 40 : 80;
        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, charIndex + 1));
                if (charIndex + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                } else {
                    setCharIndex((c) => c + 1);
                }
            } else {
                setDisplayText(current.slice(0, charIndex - 1));
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setTextIndex((i) => (i + 1) % texts.length);
                    setCharIndex(0);
                } else {
                    setCharIndex((c) => c - 1);
                }
            }
        }, speed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex, texts]);

    return (
        <span className="text-text-muted-dark">
            {displayText}
            <span className="inline-block w-0.5 h-10 md:h-14 bg-primary-dark ml-1 animate-pulse" />
        </span>
    );
}

function Hero() {
    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        const handleScroll = () => setShowScroll(window.scrollY <= 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-animated pt-24">
            <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-dark/10 blur-3xl animate-float" />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-dark/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-600px w-600px rounded-full bg-primary-dark/5 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

            <div className="relative z-10 max-w-4xl w-full">
                <div className="animate-slide-up animation-delay-100 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-success-soft-dark border border-success-dark/20 text-xs font-semibold tracking-wider uppercase text-success-dark">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-dark opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success-dark" />
                    </span>
                    Available for work
                </div>

                <h1 className="animate-slide-up animation-delay-200 text-4xl md:text-6xl font-bold leading-tight">
                    <span className="text-text-dark">{HERO_CONTENT.greeting} </span>
                    <span className="text-gradient">{HERO_CONTENT.name}</span>
                    <span className="text-text-dark">.</span>
                    <br />
                    <TypewriterText texts={HERO_CONTENT.roles} />
                </h1>

                <p className="animate-slide-up animation-delay-400 mt-6 text-base md:text-lg text-text-muted-dark leading-relaxed">
                    {HERO_CONTENT.bio}
                </p>

                <div className="animate-slide-up animation-delay-600 mt-10 flex flex-wrap items-center gap-4">
                    <Button variant="primary" onClick={() => document.querySelector(HERO_CONTENT.cta.primary.href)?.scrollIntoView({ behavior: "smooth" })} className="group relative overflow-hidden px-6 py-3 text-base">
                        <span className="relative z-10 flex items-center gap-2">
                            {HERO_CONTENT.cta.primary.label}
                            <FiArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </Button>
                    <Button variant="outline" onClick={() => window.open(HERO_CONTENT.cta.secondary.href, "_blank")} className="group px-6 py-3 text-base border-border-dark text-text-muted-dark hover:border-primary-dark hover:text-primary-dark transition-all duration-300">
                        <span className="flex items-center gap-2">
                            <FiDownload size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                            {HERO_CONTENT.cta.secondary.label}
                        </span>
                    </Button>
                </div>

                <div className="animate-slide-up animation-delay-700 mt-10 flex items-center gap-4">
                    {HERO_CONTENT.social.map(({ icon: Icon, href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group flex items-center justify-center w-11 h-11 rounded-xl bg-surface-dark border border-border-dark text-text-subtle-dark hover:border-primary-dark hover:text-primary-dark hover:bg-primary-glow-dark transition-all duration-300">
                            <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                        </a>
                    ))}
                    <span className="h-px w-12 bg-border-dark" />
                    <span className="text-xs tracking-wider text-text-subtle-dark font-medium">Let's connect</span>
                </div>
            </div>

            {showScroll && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
                    <a href="#about" className="flex flex-col items-center gap-2 text-text-subtle-dark hover:text-primary-dark transition-colors duration-300">
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </a>
                </div>
            )}
        </section>
    );
}

export default Hero;