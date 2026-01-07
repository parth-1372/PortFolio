import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiCplusplus, SiTailwindcss, SiGit, SiDocker, SiRedis, SiNextdotjs, SiTypescript } from 'react-icons/si';

const skillsData = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
        ]
    },
    {
        category: "Tools & DevOps",
        items: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "C++ (DSA)", icon: SiCplusplus, color: "#00599C" },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section-padding py-24 bg-surface/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-textMain mb-12 flex items-center gap-4">
                    <span className="text-accent font-mono text-xl">02.</span> Technical Arsenal
                    <span className="h-px bg-white/10 flex-grow max-w-[200px]"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
                        >
                            <h3 className="text-xl font-bold text-textMain mb-6 text-center border-b border-white/5 pb-4">{category.category}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                                        <skill.icon className="text-3xl group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all" style={{ color: skill.color }} />
                                        <span className="text-sm font-mono text-textSub group-hover:text-textMain">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
