import profilePhoto from "@/assets/img/samuel2.jpg";

const ABOUT_CONTENT = {
    bio: [
        "A Computer Science graduate with a passion for technology and software development. I enjoy building things for the web — currently focusing on front-end development while continuing to explore the full-stack world.",
        "Always curious, always learning.",
    ],
    education: [
        {
            institution: "Sam Ratulangi University",
            major: "Computer Science",
            year: "2021 – 2025",
        },
    ],
};

function About() {
    return (
        <section id="about" className="min-h-screen flex items-center px-6 md:px-12">
            <div className="mx-auto max-w-7xl w-full">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    <div className="w-full md:w-auto shrink-0 animate-slide-right">
                        <div className="relative w-48 h-64 md:w-60 md:h-80 mx-auto md:mx-0">

                            <div className="absolute inset-0 rounded-2xl bg-primary/20 dark:bg-primary-dark/20 blur-2xl scale-110 -z-10" />

                            <img
                                src={profilePhoto}
                                alt="Samuel Untu"
                                className="relative w-full h-full object-cover rounded-2xl shadow-xl shadow-black/20 dark:shadow-black/50"
                            />

                            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary dark:border-primary-dark -z-10" />

                            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-primary dark:bg-primary-dark opacity-60" />
                        </div>
                    </div>

                    <div className="flex-1 space-y-5">
                        <span className="animate-slide-up animation-delay-200 inline-block text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                            About Me
                        </span>
                        <h2 className="animate-slide-up animation-delay-400 text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                            Who I Am
                        </h2>

                        {ABOUT_CONTENT.bio.map((paragraph, i) => (
                            <p
                                key={i}
                                className={`animate-slide-up text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed ${i === 0 ? "animation-delay-400" : "animation-delay-600"}`}
                            >
                                {paragraph}
                            </p>
                        ))}
                        <div className="animate-slide-up animation-delay-600 pt-2 border-t border-border dark:border-border-dark">
                            <p className="text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark mb-3">
                                Education
                            </p>
                            {ABOUT_CONTENT.education.map((edu, i) => (
                                <div key={i}>
                                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-stone-500 dark:text-stone-400">
                                        {edu.major}
                                    </p>
                                    <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">
                                        {edu.year}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;