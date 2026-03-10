import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiBootstrap,
    SiPython,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
    SiMysql,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";


const SKILLS = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", icon: SiGithub, color: "text-stone-900 dark:text-stone-100" },
    { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
];

function Skill() {
    return (
        <section id="skill" className="min-h-screen flex items-center px-6 md:px-12 py-24">
            <div className="mx-auto max-w-7xl w-full">

                <div className="mb-16 animate-slide-up">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                        Skills
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                        What I Work With
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {SKILLS.map((skill, i) => (
                        <div
                            key={skill.name}
                            className="animate-slide-up group flex flex-col items-center gap-3 p-6 rounded-2xl
                bg-surface dark:bg-surface-dark
                border border-border dark:border-border-dark
                hover:border-primary dark:hover:border-primary-dark
                hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary-dark/10
                transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                        >
                            <skill.icon size={36} className={`${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                            <span className="text-sm font-medium text-stone-700 dark:text-stone-300 text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skill;