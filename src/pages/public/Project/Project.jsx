import { FiTool } from "react-icons/fi";

function Project() {
    return (
        <section id="project" className="min-h-screen flex items-center px-6 md:px-12">
            <div className="mx-auto max-w-7xl w-full">

                <div className="animate-slide-up">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                        Projects
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                        What I've Built
                    </h2>
                </div>

                <div className="mt-16 flex flex-col items-center justify-center gap-4 py-24">
                    <FiTool size={48} className="text-primary dark:text-primary-dark" />
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                        Coming Soon
                    </h3>
                    <p className="text-stone-500 dark:text-stone-400 text-center max-w-md">
                        I'm currently working on some projects. Check back soon!
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Project;