import { FiGithub, FiExternalLink, FiLock } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const PROJECTS = [
    {
        id: 1,
        title: "StockTracker IDX",
        description: "Indonesian stock market tracking website with real-time watchlist, portfolio tracker, and data visualization using Yahoo Finance API. Features JWT authentication and Redis caching.",
        image: "https://camo.githubusercontent.com/20ec5628b2659fd7315ea14b701f236b87f5539691cd7f7fa7387c8d9cb34db4/687474703a2f2f7777772e6d61726b657463616c6c732e696e2f77702d636f6e74656e742f75706c6f6164732f323032342f30362f53637265656e73686f742d323032342d30362d32332d61742d392e34302e3431254532253830254146414d2e706e67",
        tags: ["React", "Express", "PostgreSQL", "Redis", "Yahoo Finance API"],
        github: "https://github.com/yaksokk",
        demo: null,
        isPrivate: false,
    },
    {
        id: 2,
        // english
        title: "PPDB System",
        description: "New Student Admission System with multi-role authentication, document verification based on approval, 4-stage progress tracker, multi-step form, and admin dashboard.",
        image: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777046708/Screenshot_2026-04-25_000411_jhjoza.png",
        tags: ["React", "Laravel 12", "MySQL", "Redis", "Spatie"],
        github: "https://github.com/yaksokk",
        demo: null,
        isPrivate: false,
    },
    {
        id: 3,
        title: "School Library Management System",
        description: "School library management system with multi-role authentication (Admin/Teacher/Member), digital book catalog, online borrowing, and automatic due date notification.",
        image: "https://s3-alpha.figma.com/hub/file/6681133804/81a57c0b-6e08-4206-b3f0-e4676a57c70d-cover.png",
        tags: ["React", "Express", "MySQL", "JWT"],
        github: null,
        demo: null,
        isPrivate: true,
    },
    {
        id: 4,
        title: "License Plate Detection System",
        description: "Final project using YOLO11 for vehicle license plate detection and recognition. Training accuracy 99% mAP, operational 80% mAP under optimal conditions.",
        image: "https://cdn.prod.website-files.com/5fe2250e2f83ccd437fefc04/683a51f5d7c8ad07329597ba_6528e15abbea9ba28c4f927d_license_plate_recognition_lpr_improve_operations.webp",
        tags: ["YOLO11", "Python", "Google Colab", "OpenCV"],
        github: null,
        demo: null,
        isPrivate: true,
    },
];

function ProjectCard({ project, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`group relative bg-surface dark:bg-surface-dark rounded-2xl border border-border dark:border-border-dark overflow-hidden card-lift transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Image Container */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    {project.isPrivate ? (
                        <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-dark/80 border border-border-dark text-text-dark text-sm font-medium backdrop-blur-sm">
                            <FiLock size={16} />
                            Private Repository
                        </span>
                    ) : (
                        <>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-dark/80 border border-border-dark text-text-dark text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 backdrop-blur-sm"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FiGithub size={16} />
                                    Source Code
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/90 text-white text-sm font-medium hover:bg-primary transition-all duration-300 backdrop-blur-sm"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FiExternalLink size={16} />
                                    Live Demo
                                </a>
                            )}
                        </>
                    )}
                </div>
                {/* Private badge */}
                {project.isPrivate && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-dark/70 backdrop-blur-sm border border-border-dark/50 text-xs font-medium text-text-dark flex items-center gap-1.5">
                        <FiLock size={12} />
                        Private
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-xs font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors duration-300">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Bottom links - always visible for non-private */}
                {!project.isPrivate && (
                    <div className="mt-5 pt-5 border-t border-border dark:border-border-dark flex items-center gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                            >
                                <FiGithub size={16} />
                                <span className="underline-animate">GitHub</span>
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                            >
                                <FiExternalLink size={16} />
                                <span className="underline-animate">Live Demo</span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function Project() {
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="project" className=" px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div
                    ref={titleRef}
                    className={`mb-16 transition-all duration-700 ${
                        titleVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-xs font-semibold tracking-wider uppercase">
                        Projects
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-text dark:text-text-dark mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-text-muted dark:text-text-muted-dark max-w-xl text-base md:text-lg">
                        Some of the projects I have worked on, ranging from freelance, academic assignments, to personal projects.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;