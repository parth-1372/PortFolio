import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiMail, FiLinkedin, FiCheck } from 'react-icons/fi';
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
            <section className="space-y-4">
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
            </section>

            {/* 2. Detailed Skills Matrix */}
            <section className="bg-surface border border-border rounded-3xl p-8">
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
                                <h4 className="font-bold text-textMain mb-3">{cat.title}</h4>
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
                    <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer flex flex-col"
                        onClick={() => window.open("https://universitymanagementsystem.vercel.app/", "_blank")}>
                        <div className="h-48 bg-surfaceHighlight overflow-hidden relative">
                            <img src="/src/assets/projects/Screenshot 2025-01-07 115803.png" alt="University System" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">CollegeMaster</h3>
                            <p className="text-textSub text-sm leading-relaxed mb-4 flex-grow">
                                Unified university management portal. Handles student data, attendance, and faculty modules.
                            </p>
                            <div className="flex gap-2 text-xs font-mono text-textMuted mt-auto">
                                <span className="bg-surfaceHighlight px-2 py-1 rounded">MERN</span>
                                <span className="bg-surfaceHighlight px-2 py-1 rounded">Redux</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer flex flex-col"
                        onClick={() => window.open("http://blogsphere-env-2.eba-3csmpqj8.ap-south-1.elasticbeanstalk.com/", "_blank")}>
                        <div className="h-48 bg-surfaceHighlight overflow-hidden relative">
                            <img src="/src/assets/projects/BlogSphere.png" alt="BlogSphere" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">BlogSphere</h3>
                            <p className="text-textSub text-sm leading-relaxed mb-4 flex-grow">
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

            <hr className="border-border" />

            {/* 4. Contact Anchor */}
            <section id="contact-section" className="bg-surfaceHighlight/50 border border-border rounded-2xl p-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-2xl font-bold text-textMain mb-2">Let's Connect</h2>
                    <p className="text-textSub max-w-md">
                        Always open to discussing new opportunities, distributed systems, or just a friendly hello.
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href="mailto:your.email@example.com" className="p-4 bg-surface border border-border rounded-full text-textMain hover:text-primary hover:border-primary transition-all shadow-sm">
                        <FiMail size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="p-4 bg-surface border border-border rounded-full text-textMain hover:text-primary hover:border-primary transition-all shadow-sm">
                        <FiLinkedin size={24} />
                    </a>
                    <a href="https://github.com/parth-1372" target="_blank" className="p-4 bg-surface border border-border rounded-full text-textMain hover:text-primary hover:border-primary transition-all shadow-sm">
                        <FiGithub size={24} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HomeLeft;
