import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiCheck } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss, SiDocker, SiPython } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const HomeLeft = () => {
    const navigate = useNavigate();

    const skillCategories = [
        {
            title: "Languages",
            skills: ["C/C++", "Python", "Javascript", "Typescript", "Java", "Rust", "Go"]
        },
        {
            title: "Frontend",
            skills: ["ReactJS", "NextJS", "Redux", "TailwindCSS", "Framer Motion", "MaterialUI"]
        },
        {
            title: "Backend",
            skills: ["ExpressJS", "NodeJS", "Hono", "Redis", "Actix Web"]
        },
        {
            title: "Database",
            skills: ["MongoDB", "MySQL", "Redis"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git & Github", "Linux", "Firebase", "Docker", "Postman", "Kubernetes", "Grafana"]
        }
    ];

    return (
        <div className="space-y-16">
            {/* 1. Intro */}
            <section className="space-y-6">
                <h1 className="text-5xl font-bold text-textMain tracking-tight">
                    Parth Mungra
                </h1>
                <h2 className="text-2xl text-textSub font-medium">
                    Full Stack Developer & Systems Enthusiast.
                </h2>

                <p className="text-lg text-textSub leading-relaxed max-w-2xl">
                    I'm a pre-final year student at <span className="text-textMain font-semibold">IIIT Gwalior</span>.
                    I don't just write code; I engineer solutions. From optimizing distributed system algorithms
                    to building pixel-perfect React applications.
                </p>

                <div
                    onClick={() => navigate('/about')}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline cursor-pointer group"
                >
                    More About Me
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
            </section>

            {/* 2. Detailed Skills Matrix */}
            <section className="bg-surface border border-border rounded-3xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Industries (Checklist Style) */}
                    <div>
                        <h3 className="font-bold text-textMain mb-4 text-lg">Industries & Skills</h3>
                        <ul className="space-y-3">
                            {["COMPETITIVE PROGRAMMING", "WEB DEVELOPMENT", "SYSTEMS PROGRAMMING", "DISTRIBUTED SYSTEMS"].map(item => (
                                <li key={item} className="flex items-start gap-3 text-sm font-mono font-medium text-textSub">
                                    <FiCheck className="text-green-500 text-lg shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 & 3: Tech Pills */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {skillCategories.map(cat => (
                            <div key={cat.title}>
                                <h4 className="font-bold text-textMain mb-3 text-sm uppercase tracking-wide text-textMuted">{cat.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map(skill => (
                                        <span key={skill} className="bg-surfaceHighlight px-3 py-1 rounded-full text-xs font-medium text-textSub border border-border/50">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Projects */}
            <section className="space-y-8">
                <div className="flex justify-between items-baseline">
                    <h2 className="text-2xl font-bold text-textMain">Featured Projects</h2>
                    <span className="text-textMuted text-sm font-mono cursor-pointer hover:text-primary" onClick={() => navigate('/projects')}>View All</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project 1 */}
                    <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all flex flex-col shadow-sm">
                        <div
                            className="h-48 bg-surfaceHighlight overflow-hidden relative cursor-pointer"
                            onClick={() => window.open("https://github.com/parth-1372/CollegeMaster", "_blank")}
                        >
                            <img src="/assets/projects/Screenshot 2025-01-07 115803.png" alt="University System" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-textMain group-hover:text-primary transition-colors cursor-pointer" onClick={() => window.open("https://github.com/parth-1372/CollegeMaster", "_blank")}>CollegeMaster</h3>
                                <div className="flex gap-3 text-textSub z-10">
                                    <a href="https://github.com/parth-1372/CollegeMaster" target="_blank" className="hover:text-primary p-1 bg-surfaceHighlight rounded-full"><FiGithub size={18} /></a>
                                    {/* <a href="https://universitymanagementsystem.vercel.app/" target="_blank" className="hover:text-primary p-1 bg-surfaceHighlight rounded-full"><FiExternalLink size={18} /></a> */}
                                </div>
                            </div>
                            <p className="text-textSub text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                Unified university management portal. Handles student data, attendance, and faculty modules.
                            </p>
                            <div className="flex gap-2 text-xs font-mono text-textMuted mt-auto">
                                <span className="bg-surfaceHighlight px-2 py-1 rounded">MERN</span>
                                <span className="bg-surfaceHighlight px-2 py-1 rounded">Redux</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all flex flex-col shadow-sm">
                        <div
                            className="h-48 bg-surfaceHighlight overflow-hidden relative cursor-pointer"
                            onClick={() => window.open("https://github.com/parth-1372/BlogSphere", "_blank")}
                        >
                            <img src="/assets/projects/BlogSphere.png" alt="BlogSphere" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-textMain group-hover:text-primary transition-colors cursor-pointer" onClick={() => window.open("https://github.com/parth-1372/BlogSphere", "_blank")}>BlogSphere</h3>
                                <div className="flex gap-3 text-textSub z-10">
                                    <a href="https://github.com/parth-1372/BlogSphere" target="_blank" className="hover:text-primary p-1 bg-surfaceHighlight rounded-full"><FiGithub size={18} /></a>
                                    {/* <a href="http://blogsphere-env-2.eba-3csmpqj8.ap-south-1.elasticbeanstalk.com/" target="_blank" className="hover:text-primary p-1 bg-surfaceHighlight rounded-full"><FiExternalLink size={18} /></a> */}
                                </div>
                            </div>
                            <p className="text-textSub text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                Dynamic blogging platform with markdown support, authentication, and real-time updates.
                            </p>
                            <div className="flex gap-2 text-xs font-mono text-textMuted mt-auto">
                                <span className="bg-surfaceHighlight px-2 py-1 rounded">Node.js</span>
                                <span className="bg-surfaceHighlight px-2 py-1 rounded">EJS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeLeft;
