import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const projects = [
    {
        title: "AWS Cloud Infrastructure & Web Hosting",
        subtitle: "AWS S3, CloudFront CDN, EC2, IAM",
        description:
            "Architected and deployed static and dynamic web application hosting on AWS S3 and EC2 Linux instances with CloudFront CDN integration, reducing global latency by 25% and maintaining 99.9% system uptime.",
        highlights: [
            "25% Global Latency Reduction via CloudFront CDN & S3",
            "99.9% Uptime Deployment on EC2 Linux Instances",
            "IAM Policy Enforcement & Security Group Configuration",
            "Lighthouse Performance Optimization",
        ],
        tech: [
            "AWS S3",
            "CloudFront CDN",
            "AWS EC2",
            "AWS IAM",
            "Linux Shell",
        ],
        github: "https://github.com/mohansaikrishnaj/mohan-portfolio",
        live: "https://mohan-portfolio-mohan.vercel.app/",
        image: "",
        accent: "from-[#85c4b9]/40",
    },
    {
        title: "Eduverse – Cloud & Microservices Learning System",
        subtitle: "Java Spring Boot, MySQL, REST APIs, System Design",
        description:
            "Designed and integrated backend microservices and database architecture for a modular learning platform across 15+ interconnected modules with optimized MySQL schemas and Spring Boot REST APIs.",
        highlights: [
            "15+ Interconnected Service Modules",
            "20% Data Fetching Latency Decrease via Spring Boot REST APIs",
            "15% MySQL Database Response Efficiency Improvement",
            "30% Component Redundancy Reduction",
        ],
        tech: [
            "Java Spring Boot",
            "MySQL Schemas",
            "REST APIs",
            "Cloud Architecture",
            "OOP & Data Structures",
        ],
        github: "https://github.com/mohansaikrishnaj/eduverse-ai-app",
        live: "/project/eduverse",
        image: "",
        accent: "from-[#00ffff]/40",
    },
    {
        title: "PhotoShare – AWS Cloud Infrastructure",
        subtitle: "VPC, EC2, RDS, S3, Lambda, ALB, IAM, KMS, CloudWatch",
        description:
            "Built a production-grade, secure cloud architecture for a photo-sharing app on AWS: custom VPC with public/private subnets, IAM least-privilege roles, KMS-encrypted RDS in private subnets, private S3 storage, ALB-fronted Dockerized EC2, serverless Lambda image processing, and CloudWatch monitoring.",
        highlights: [
            "Zero Hardcoded Credentials via IAM Roles & Secrets Manager",
            "RDS Isolated in Private Subnets – No Public Access",
            "Serverless Lambda Triggered on S3 ObjectCreated Events",
            "CloudWatch Alarm for Instant Lambda Failure Detection",
        ],
        tech: [
            "Amazon VPC",
            "Amazon EC2",
            "Amazon RDS",
            "Amazon S3",
            "AWS Lambda",
            "Application Load Balancer",
            "AWS IAM",
            "AWS KMS",
            "Amazon CloudWatch",
            "Docker",
        ],
        github: "",
        live: "/project/photoshare",
        image: "",
        accent: "from-[#06b6d4]/40",
    },
];

const ProjectCard = ({ project }: { project: any }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (!project.live) return;
        if (project.live.startsWith('/')) {
            navigate(project.live);
        } else {
            window.open(project.live, '_blank', 'noreferrer');
        }
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            onClick={handleCardClick}
            className="group rounded-xl border border-gray-700/40 bg-gray-900/20 backdrop-blur overflow-hidden cursor-pointer"
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
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            <FaGithub size={18} />
                        </a>
                    )}
                    {project.live && (
                        project.live.startsWith('/') ? (
                            <Link
                                to={project.live}
                                onClick={(e) => e.stopPropagation()}
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
                                onClick={(e) => e.stopPropagation()}
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
