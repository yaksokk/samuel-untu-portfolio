import { FaLocationDot } from "react-icons/fa6";

const ABOUT_CONTENT = {
    bio: [
        "I'm a Computer Science graduate from Universitas Sam Ratulangi who fell in love with coding and never looked back. I enjoy turning ideas into working applications and I'm always looking for ways to improve my craft.",
    ],
    location: "Manado, Indonesia",
    education: [
        {
            institution: "Universitas Sam Ratulangi",
            major: "Teknik Informatika",
            year: "2021 – 2025",
        },
    ],
};

function About() {
    const profilePhoto = "https://res.cloudinary.com/ddim50bkl/image/upload/v1776965120/1706660573242_hp0dqs.jpg"
    return (
        <section id="about" className="min-h-screen flex items-center px-6 md:px-12">
            <div className="mx-auto max-w-7xl w-full">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    <div className="w-full md:w-auto shrink-0 animate-slide-right">
                        <div className="relative w-48 h-64 md:w-60 md:h-80 mx-auto md:mx-0">
                            <div className="absolute inset-0 rounded-2xl bg-primary/20 dark:bg-primary-dark/20 blur-2xl scale-110 -z-10" />
                            <img src={profilePhoto} alt="Samuel Untu" className="relative w-full h-full object-cover rounded-2xl shadow-xl shadow-black/20 dark:shadow-black/50" />
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
                            <p key={i} className="animate-slide-up animation-delay-400 text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}

                        <p className="animate-slide-up animation-delay-600 text-sm text-stone-400 dark:text-stone-600 flex items-center gap-2">
                            <FaLocationDot /> {ABOUT_CONTENT.location}
                        </p>

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