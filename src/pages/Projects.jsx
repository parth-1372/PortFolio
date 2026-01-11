import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: "CollegeMaster",
        desc: "Comprehensive university management platform automating administrative tasks.",
        stack: ["React", "Node", "Mongo"],
        img: "/public/assets/projects/Screenshot 2025-01-07 115803.png",
        links: { git: "https://github.com/parth-1372/CollegeMaster", demo: "https://universitymanagementsystem.vercel.app/" }
    },
    {
        title: "BlogSphere",
        desc: "Dynamic blogging ecosystem with markdown support and auth.",
        stack: ["Node", "Express", "EJS"],
        img: "/public/assets/projects/BlogSphere.png",
        links: { git: "https://github.com/parth-1372/BlogSphere", demo: "http://blogsphere-env-2.eba-3csmpqj8.ap-south-1.elasticbeanstalk.com/" }
    },
    {
        title: "PowerBuy",
        desc: "Modern E-commerce solution with cart and checkout simulation.",
        stack: ["React", "Tailwind", "Vite"],
        img: "/public/assets/projects/PowerBuy.png",
        links: { git: "https://github.com/parth-1372/E-Commerce", demo: "https://e-commerce-seven-rose-24.vercel.app/" }
    }
];

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto pb-20">
            <h1 className="text-4xl font-bold text-textMain mb-12">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 shadow-sm"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-textMain group-hover:text-primary transition-colors">{p.title}</h3>
                                <div className="flex gap-3 text-lg text-textSub">
                                    <a href={p.links.git} target="_blank" className="hover:text-primary"><FiGithub /></a>
                                    <a href={p.links.demo} target="_blank" className="hover:text-primary"><FiExternalLink /></a>
                                </div>
                            </div>

                            <p className="text-textSub text-sm mb-6 line-clamp-3">
                                {p.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {p.stack.map(t => (
                                    <span key={t} className="px-2 py-1 bg-surfaceHighlight rounded text-xs font-mono text-textMuted">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
