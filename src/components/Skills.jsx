import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiCplusplus, SiTailwindcss, SiGit } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <SiReact /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "REST APIs", icon: <SiGit /> },
            ]
        },
        {
            title: "Other",
            skills: [
                { name: "Python (ML)", icon: <SiPython /> },
                { name: "C++ (DSA)", icon: <SiCplusplus /> },
                { name: "Git", icon: <SiGit /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container px-6 mx-auto">
                <h2 className="section-title">My Technical Toolkit</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-secondary p-8 rounded-lg border border-accent/10 hover:border-accent/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-accent mb-6 font-mono">{category.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-2 group">
                                        <span className="text-3xl text-textSub group-hover:text-accent transition-colors duration-300">
                                            {skill.icon}
                                        </span>
                                        <span className="text-xs text-textSub font-mono uppercase tracking-tighter">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
