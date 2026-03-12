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
    SiExpress,
    SiLaravel
} from "react-icons/si";
import { TbBrandReactNative, TbBrandVscode } from "react-icons/tb";
// import { BiLogoVisualStudio } from "react-icons/bi";


const SKILLS = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500", featured: true },
    { name: "CSS", icon: SiCss3, color: "text-blue-500", featured: true },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", featured: true },
    { name: "React.js", icon: SiReact, color: "text-cyan-400", featured: true },
    { name: "React Native", icon: TbBrandReactNative, color: "text-cyan-400", featured: false },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400", featured: true },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", featured: false },
    { name: "Python", icon: SiPython, color: "text-blue-500", featured: false },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", featured: false },
    { name: "Express.js", icon: SiExpress, color: "text-stone-900 dark:text-stone-100", featured: false },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500", featured: false },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600", featured: true },
    { name: "Git", icon: SiGit, color: "text-orange-500", featured: true },
    { name: "GitHub", icon: SiGithub, color: "text-stone-900 dark:text-stone-100", featured: true },
    { name: "VS Code", icon: TbBrandVscode, color: "text-blue-400", featured: true },
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
                            className={`animate-slide-up group flex flex-col items-center gap-3 p-6 rounded-2xl
                                bg-surface dark:bg-surface-dark
                                hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary-dark/10
                                transition-all duration-300 cursor-default
                                ${skill.featured
                                    ? "border border-primary dark:border-primary-dark"
                                    : "border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark"
                                }`}
                            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                        >
                            <skill.icon size={36} className={`${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                            <span className="text-sm font-medium text-stone-700 dark:text-stone-300 text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-xs text-stone-400 dark:text-stone-600 flex items-center gap-2">
                    <span className="inline-block w-4 h-0.5 border-t border-primary dark:border-primary-dark" />
                    Tools & technologies I use most frequently
                </p>

            </div>
        </section>
    );
}

export default Skill;