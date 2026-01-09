import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const HomeLeft = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-12">
            {/* 1. Narrative Intro */}
            <section className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20">
                    Available for Remote Internships
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold text-textMain tracking-tight">
                    Building scalable systems <br />
                    <span className="text-textSub">& solving hard problems.</span>
                </h1>

                <p className="text-lg text-textSub leading-relaxed max-w-2xl">
                    I'm Parth, a pre-final year student at <span className="text-textMain font-semibold">IIIT Gwalior</span>.
                    I don't just write code; I engineer solutions. From optimizing distributed system algorithms
                    to building pixel-perfect React applications, I focus on performance, scalability, and user experience.
                </p>

                <div className="flex gap-4 pt-2">
                    <button onClick={() => navigate('/projects')} className="px-6 py-3 bg-textMain text-background font-bold rounded-lg hover:bg-primary transition-colors flex items-center gap-2">
                        View Projects <FiArrowRight />
                    </button>
                    <button onClick={() => navigate('/about')} className="px-6 py-3 border border-border text-textMain font-medium rounded-lg hover:bg-surfaceHighlight transition-colors">
                        More About Me
                    </button>
                </div>
            </section>

            <hr className="border-border" />

            {/* 2. Featured Context */}
            <section className="space-y-8">
                <div className="flex justify-between items-baseline">
                    <h2 className="text-2xl font-bold text-textMain">Selected Work</h2>
                    <span className="text-textMuted text-sm font-mono cursor-pointer hover:text-primary" onClick={() => navigate('/projects')}>View All</span>
                </div>

                {/* Featured Item 1 */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
                    onClick={() => window.open("https://universitymanagementsystem.vercel.app/", "_blank")}
                >
                    <div className="aspect-video w-full bg-surfaceHighlight relative overflow-hidden">
                        <img src="/src/assets/projects/Screenshot 2025-01-07 115803.png" alt="University System" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">CollegeMaster System</h3>
                                <p className="text-textSub line-clamp-2">
                                    I noticed university administration was fragmented using Excel sheets and legacy portals. I built a unified MERN stack solution that handles student data, attendance, and faculty communication in real-time.
                                </p>
                            </div>
                            <FiExternalLink className="text-2xl text-textSub group-hover:text-primary" />
                        </div>
                        <div className="flex gap-3 text-xs font-mono text-textMuted uppercase tracking-wide mt-4">
                            <span>React</span> • <span>Node.js</span> • <span>MongoDB</span> • <span>Redux</span>
                        </div>
                    </div>
                </motion.div>

                {/* Featured Item 2 (Smaller) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-surface border border-border rounded-2xl hover:border-accent/50 transition-colors group">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-bold text-textMain text-lg">Smart India Hackathon</h3>
                            <FiArrowRight className="text-textSub -rotate-45 group-hover:rotate-0 transition-transform" />
                        </div>
                        <p className="text-textSub text-sm mb-4">
                            Top 50 finalist. Built a decentralized evidence management system integration for judicial transparency using Blockchain.
                        </p>
                        <span className="text-xs font-mono text-accent">Leadership & Blockchain</span>
                    </div>

                    <div className="p-6 bg-surface border border-border rounded-2xl hover:border-accent/50 transition-colors group">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-bold text-textMain text-lg">CodeForces Max</h3>
                            <FiArrowRight className="text-textSub -rotate-45 group-hover:rotate-0 transition-transform" />
                        </div>
                        <p className="text-textSub text-sm mb-4">
                            Achieved Specialist rank (1450+). Solved 500+ problems demonstrating strong grasp of DP, Graphs, and Greedy algorithms.
                        </p>
                        <span className="text-xs font-mono text-accent">DSA & Problem Solving</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeLeft;
