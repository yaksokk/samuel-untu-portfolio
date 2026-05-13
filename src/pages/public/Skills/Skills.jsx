import {
    SiJavascript, SiReact, SiTailwindcss, SiGit, SiGithub,
    SiBootstrap, SiPython, SiNodedotjs, SiHtml5, SiCss3,
    SiMysql, SiExpress, SiLaravel, SiTypescript, SiVercel, SiPostgresql
} from "react-icons/si";
import { TbBrandReactNative, TbBrandVscode } from "react-icons/tb";

const SKILLS = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500", featured: true },
    { name: "CSS", icon: SiCss3, color: "text-blue-500", featured: true },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", featured: true },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", featured: false },
    { name: "React.js", icon: SiReact, color: "text-cyan-400", featured: true },
    { name: "React Native", icon: TbBrandReactNative, color: "text-cyan-400", featured: false },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400", featured: true },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", featured: false },
    { name: "Python", icon: SiPython, color: "text-blue-500", featured: false },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", featured: false },
    { name: "Express.js", icon: SiExpress, color: "text-stone-300", featured: false },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500", featured: false },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600", featured: true },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", featured: false },
    { name: "Git", icon: SiGit, color: "text-orange-500", featured: true },
    { name: "GitHub", icon: SiGithub, color: "text-stone-300", featured: true },
    { name: "VS Code", icon: TbBrandVscode, color: "text-blue-400", featured: true },
    { name: "Vercel", icon: SiVercel, color: "text-stone-300", featured: false },
];

function Skill() {
    return (
        <section id="skill" className="py-24 px-6 md:px-12">
            <div className="mx-auto max-w-6xl w-full">
                <div className="mb-16">
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-xs font-semibold tracking-wider uppercase">
                        Skills
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-text dark:text-text-dark">
                        What I <span className="text-gradient">Work With</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {SKILLS.map((skill, i) => (
                        <div
                            key={skill.name}
                            className={`group flex flex-col items-center gap-3 p-5 rounded-2xl
                                bg-surface dark:bg-surface-dark
                                hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary-dark/10
                                transition-all duration-300 cursor-default
                                ${skill.featured
                                    ? "border border-primary/50 dark:border-primary-dark/50"
                                    : "border border-border dark:border-border-dark hover:border-primary/50 dark:hover:border-primary-dark/50"
                                }`}
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <skill.icon size={32} className={`${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                            <span className="text-xs font-medium text-text-muted dark:text-text-muted-dark text-center leading-tight">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="mt-6 text-xs text-text-subtle dark:text-text-subtle-dark flex items-center gap-2">
                    <span className="inline-block w-4 h-px border-t border-primary dark:border-primary-dark" />
                    Tools & technologies I use most frequently
                </p>
            </div>
        </section>
    );
}

export default Skill;
