import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiCplusplus, SiTailwindcss, SiGit } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <SiReact /> },
                { name: "JS (ES6+)", icon: <SiJavascript /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
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
        <section id="skills" className="py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="section-title">02. My Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-secondary p-8 rounded border border-accent/5 hover:border-accent/20 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-accent mb-8 font-mono tracking-tight">{category.title}</h3>
                            <div className="grid grid-cols-3 gap-6">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-3 group">
                                        <span className="text-4xl text-textSub group-hover:text-accent transition-colors duration-300">
                                            {skill.icon}
                                        </span>
                                        <span className="text-[10px] text-textSub font-mono uppercase tracking-widest text-center">
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
