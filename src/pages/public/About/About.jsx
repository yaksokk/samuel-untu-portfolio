import profilePhoto from "@/assets/img/samuel2.jpg";

const ABOUT_CONTENT = {
    bio: [
        "Hello, I’m Samuel Untu, a Computer Science graduate with an interest in technology and software development. I’m interested in learning how technology can be used to create solutions for various problems.",
        "Currently, I continue to learn and develop my skills as a developer.",
    ],
};

function About() {
    return (
        <section id="about" className="min-h-screen flex items-center px-6 md:px-12">
            <div className="mx-auto max-w-7xl w-full">

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    <div className="w-full md:w-auto shrink-0">
                        <div className="relative w-48 h-64 md:w-60 md:h-80 mx-auto md:mx-0">
                            <img
                                src={profilePhoto}
                                alt="Samuel Untu"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary dark:border-primary-dark -z-10" />
                        </div>
                    </div>

                    <div className="flex-1 space-y-5">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                        About Me
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                        Who I Am
                    </h2>

                        {ABOUT_CONTENT.bio.map((paragraph, i) => (
                            <p key={i} className="text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;