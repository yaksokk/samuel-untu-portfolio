import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/common";

const HERO_CONTENT = {
    greeting: "Hi, I'm",
    name: "Samuel Untu",
    role: "Frontend Developer",
    bio: "Welcome to my portfolio. I’m a developer who enjoys building web applications and continuously improving my skills.",
    cta: {
        primary: { label: "See My Work", href: "#project" },
        secondary: { label: "Download CV", href: "/cv.pdf" },
    },
    social: [
        { icon: FiGithub, href: "https://github.com/yaksokk", label: "GitHub" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/samuel-untu-0323783a5/", label: "LinkedIn" },
    ],
};

function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 h-120 w-120 rounded-full bg-primary/5 dark:bg-primary-dark/5 blur-3xl"
            />
            <div className="relative z-10 max-w-2xl w-full animate-fade-in">
                <span className="inline-flex items-center gap-2 mb-6 text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-dark animate-pulse" />
                    Available for work
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-stone-900 dark:text-stone-100">
                    {HERO_CONTENT.greeting}{" "}
                    <span className="text-primary dark:text-primary-dark">
                        {HERO_CONTENT.name}
                    </span>
                    .
                    <br />
                    <span className="text-stone-400 dark:text-stone-500">
                        {HERO_CONTENT.role}
                    </span>
                </h1>
                <p className="mt-6 text-base md:text-lg text-stone-500 dark:text-stone-400 max-w-lg leading-relaxed">
                    {HERO_CONTENT.bio}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <Button
                        variant="primary"
                        onClick={() =>
                            document
                                .querySelector(HERO_CONTENT.cta.primary.href)
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        {HERO_CONTENT.cta.primary.label}
                        <FiArrowRight size={16} />
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => window.open(HERO_CONTENT.cta.secondary.href, "_blank")}
                        className="text-stone-900! dark:text-stone-100!"
                    >
                        {HERO_CONTENT.cta.secondary.label}
                    </Button>
                </div>

                <div className="mt-8 flex items-center gap-4">
                    {HERO_CONTENT.social.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-stone-400 dark:text-stone-600 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                        >
                            <Icon size={20} />
                        </a>
                    ))}

                    <span className="h-px w-12 bg-stone-200 dark:bg-stone-700" />
                    <span className="text-xs tracking-wider text-stone-400 dark:text-stone-600">
                        Let's connect
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Hero;