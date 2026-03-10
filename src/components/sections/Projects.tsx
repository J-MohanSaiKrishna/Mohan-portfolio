import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
    {
        title: "Eduverse",
        subtitle: "AI Adaptive Learning Platform",
        description:
            "A highly personalized learning ecosystem powered by artificial intelligence, designed to adapt to individual learning styles and cognitive states.",
        highlights: [
            "AI-Powered Personalization",
            "Adaptive Learning Paths",
            "Real-Time Tracking",
        ],
        tech: [
            "Machine Learning",
            "React",
            "Cloud Architecture",
            "Adaptive Systems",
        ],
        github: "https://github.com/mohansaikrishnaj/eduverse-ai-app",
        live: "/project/eduverse",
        image: "",
        accent: "from-[#00ffff]/40",
    },
    {
        title: "Oracle Integration Cloud Recipes",
        subtitle: "Enterprise Automation Integrations",
        description:
            "Built REST/SOAP integrations using OIC accelerators to automate manual HR data transfer between systems, improving accuracy and significantly reducing manual workload.",
        highlights: [
            "REST & SOAP APIs",
            "OIC Accelerators",
            "Data Transfer Automation",
        ],
        tech: [
            "Oracle Integration Cloud",
            "REST",
            "SOAP",
            "Cloud Architecture",
        ],
        github: "https://github.com/mohansaikrishnaj",
        live: "",
        image: "", // Placeholder or colored div
        accent: "from-[#27CBCB]/40",
    },
    {
        title: "Modern Web Portfolio",
        subtitle: "React-based interactive showcase",
        description:
            "Developed a responsive and highly interactive React portfolio application hosted on AWS, showcasing responsive design, animations, and cloud deployment.",
        highlights: [
            "Framer Motion animations",
            "Tailwind CSS styling",
            "AWS Cloud Deployment",
        ],
        tech: [
            "React",
            "Tailwind",
            "TypeScript",
            "AWS",
        ],
        github: "https://github.com/mohansaikrishnaj/mohan-portfolio",
        live: "https://mohan-portfolio-mohan.vercel.app/",
        image: "",
        accent: "from-violet-400/40",
    },
    {
        title: "Python Automation Toolkit",
        subtitle: "Data Preparation & Reporting Scripts",
        description:
            "Developed Python scripts for data cleaning and reporting, cutting processing time by 30% and improving data consistency across the workflow.",
        highlights: [
            "Data Cleaning",
            "Automated Reporting",
            "Processing optimization",
        ],
        tech: [
            "Python",
            "SQL",
            "Data Processing",
            "Scripting",
        ],
        github: "https://github.com/mohansaikrishnaj",
        live: "",
        image: "",
        accent: "from-amber-400/40",
    },
];

const ProjectCard = ({ project }: { project: any }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="group rounded-xl border border-gray-700/40 bg-gray-900/20 backdrop-blur overflow-hidden"
        >
            <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-900 flex items-center justify-center">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover scale-105 blur-[2px] group-hover:blur-0 group-hover:scale-100 transition-all duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-all duration-500" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <motion.div
                    initial={{ x: "-60%" }}
                    whileHover={{ x: "60%" }}
                    transition={{ duration: 1.2 }}
                    className={`absolute inset-0 bg-gradient-to-r ${project.accent} to-transparent opacity-60`}
                />
                <div className="absolute bottom-3 left-4 z-10">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{project.title}</h3>
                    <p className="text-xs text-[#85c4b9]">{project.subtitle}</p>
                </div>
            </div>

            <div className="px-4 sm:px-5 py-3 sm:py-4 space-y-3 sm:space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2 text-xs text-gray-400">
                    {project.highlights.map((h: string) => (
                        <span key={h} className="text-xs">• {h}</span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech
                        .slice(0, expanded ? project.tech.length : 4)
                        .map((t: string) => (
                            <motion.span
                                key={t}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="px-2 py-1 text-xs rounded-md bg-gray-950 border border-gray-700/40 text-gray-400"
                            >
                                {t}
                            </motion.span>
                        ))}
                    {project.tech.length > 4 && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="px-2 py-1 text-xs rounded-md border border-gray-700/40 text-[#85c4b9] hover:bg-[#85c4b9]/10 transition-colors cursor-pointer"
                        >
                            {expanded ? "− less" : `+${project.tech.length - 4}`}
                        </button>
                    )}
                </div>

                <div className="flex gap-4 text-gray-400 pt-2 z-20 relative">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            <FaGithub size={18} />
                        </a>
                    )}
                    {project.live && (
                        project.live.startsWith('/') ? (
                            <Link
                                to={project.live}
                                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                            >
                                <span className="text-xs font-semibold">Case Study</span>
                                <ExternalLink size={16} />
                            </Link>
                        ) : (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                            >
                                <span className="text-xs font-semibold">Live Site</span>
                                <ExternalLink size={16} />
                            </a>
                        )
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 sm:px-6 md:px-8 lg:p-5 space-y-6 sm:space-y-8 max-w-6xl mx-auto py-20"
        >
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#85c4b9] text-center lg:text-left">
                    Things I&apos;ve Built
                </h2>
                <p className="mt-2 text-[#8da399] text-base sm:text-lg max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                    Selected projects demonstrating problem solving using Cloud integrations, modern web technologies, and Python automation.
                </p>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12 } },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </motion.div>

            <div className="flex justify-center text-[#85c4b9] mt-10">
                <a
                    href="https://github.com/mohansaikrishnaj"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 group cursor-pointer"
                >
                    <span className="relative">
                        View all on GitHub
                        <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-[#85c4b9] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                    </span>
                    <ExternalLink
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                </a>
            </div>
        </motion.section>
    );
};

export default Projects;
