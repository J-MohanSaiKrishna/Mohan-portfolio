import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaGitAlt,
    FaHtml5,
    FaCss3,
    FaPython,
    FaJava,
    FaLinux,
    FaDatabase,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiJavascript,
    SiPostgresql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";

const categories = {
    frontend: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    backend: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "REST/SOAP", icon: <TbApi /> },
        { name: "OIC", icon: <FaDatabase /> },
    ],
    database: [
        { name: "SQL", icon: <SiPostgresql /> },
    ],
    cloud_devops: [
        { name: "AWS", icon: <FaAws /> },
        { name: "GitHub", icon: <FaGitAlt /> },
        { name: "Linux", icon: <FaLinux /> },
    ],
};

const others = [
    { name: "C", icon: <span className="text-xl font-bold">C</span> },
    { name: "Data Processing", icon: <span className="text-xl font-bold">DP</span> },
];

const tabs = ["all", "frontend", "backend", "database", "cloud_devops"];

const Stack = () => {
    const [active, setActive] = useState("all");

    const Capsule = ({ tech }: { tech: any }) => (
        <motion.div
            whileHover={{ y: -6 }}
            className="group flex items-center gap-3 px-4 sm:px-5 py-3
        rounded-full border border-gray-700/40
        bg-gray-900/40 backdrop-blur transition-all"
        >
            <span className="text-xl text-gray-400 group-hover:text-[#27CBCB] transition-colors">
                {tech.icon}
            </span>
            <span className="text-sm sm:text-md font-medium text-gray-200">{tech.name}</span>
        </motion.div>
    );

    return (
        <motion.section
            id="stack"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 sm:px-6 md:px-8 lg:p-5 space-y-8 md:space-y-12 max-w-6xl mx-auto py-20"
        >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
                <div className="max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#85c4b9] text-center lg:text-left">Technical Arsenal</h2>
                    <p className="text-[#8da399] text-base sm:text-lg mt-2 text-center lg:text-left">
                        The core technologies I use to build scalable cloud solutions and web applications.
                    </p>
                </div>
                <div className="w-full lg:w-60 bg-gray-900/40 backdrop-blur-sm py-4 px-5 rounded-xl border border-gray-700/40 hidden lg:block">
                    <p className="text-gray-200 text-sm italic leading-relaxed mb-3">
                        &quot;The tools are just a means to solve the problem.&quot;
                    </p>
                    <div className="flex items-center">
                        <div className="flex-1">
                            <span className="text-gray-400 text-xs font-medium">
                                ~ Engineering Focus
                            </span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#85c4b9]"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
                {tabs.map((key) => (
                    <button
                        key={key}
                        onClick={() => setActive(key)}
                        className={`cursor-pointer relative px-3 sm:px-4 py-2 text-sm sm:text-md font-medium rounded-lg transition-all capitalize
              ${active === key
                                ? "text-white bg-[#85c4b9]/20"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {key.replace("_", " & ")}
                        {active === key && (
                            <motion.span
                                layoutId="underline"
                                className="absolute left-0 bottom-0 h-1 w-full bg-[#85c4b9]"
                            />
                        )}
                    </button>
                ))}
            </div>
            {active === "all" ? (
                <div className="space-y-6 md:space-y-7 max-w-5xl">
                    {Object.entries(categories).map(([group, techs]) => (
                        <div key={group} className="space-y-3 sm:space-y-4">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-300 uppercase tracking-wide text-center lg:text-left">
                                {group.replace("_", " & ")}
                            </h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                                {techs.map((tech) => (
                                    <Capsule key={tech.name} tech={tech} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } },
                    }}
                    className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start max-w-4xl"
                >
                    {categories[active as keyof typeof categories].map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={{
                                hidden: { opacity: 0, y: 12 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Capsule tech={tech} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
            <div className="space-y-3 sm:space-y-4">
                <p className="font-mono text-sm sm:text-md text-gray-500 text-center lg:text-left">
                    {"// Also comfortable with:"}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                    {others.map((tech) => (
                        <motion.div
                            key={tech.name}
                            whileHover={{ y: -4 }}
                            className="flex items-center gap-2 px-3 sm:px-4 py-2
          rounded-lg border border-gray-700/40
          bg-gray-900/30 backdrop-blur cursor-pointer"
                        >
                            <span className="text-lg text-gray-400">{tech.icon}</span>
                            <span className="text-sm text-gray-300">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Stack;
