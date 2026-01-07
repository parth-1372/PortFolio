import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
    {
        title: "CollegeMaster",
        description: "A comprehensive university management platform that automates administrative tasks and streamlines communication between students and faculty. Features role-based access control and real-time updates.",
        tech: ["React", "Node.js", "MongoDB", "Redux"],
        github: "https://github.com/parth-1372/CollegeMaster",
        demo: "https://universitymanagementsystem.vercel.app/",
        featured: true
    },
    {
        title: "BlogSphere",
        description: "A dynamic blogging ecosystem supporting user authentication, markdown content creation, and real-time updates. Optimized for SEO and performance.",
        tech: ["Node.js", "Express", "MongoDB", "EJS"],
        github: "https://github.com/parth-1372/BlogSphere",
        demo: "http://blogsphere-env-2.eba-3csmpqj8.ap-south-1.elasticbeanstalk.com/",
        featured: true
    },
    {
        title: "PowerBuy",
        description: "Modern E-commerce solution featuring intuitive product discovery, secure checkout simulation, and a highly responsive mobile-first design.",
        tech: ["Vite", "React", "Tailwind", "JavaScript"],
        github: "https://github.com/parth-1372/E-Commerce",
        demo: "https://e-commerce-seven-rose-24.vercel.app/",
        featured: false
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-textMain mb-12 flex items-center gap-4">
                    <span className="text-accent font-mono text-xl">03.</span> Create. Build. Ship.
                    <span className="h-px bg-white/10 flex-grow max-w-[200px]"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-surface rounded-xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 relative flex flex-col items-start"
                        >
                            <div className="flex justify-between w-full items-center mb-6">
                                <span className="text-accent text-4xl"><FiFolder /></span>
                                <div className="flex gap-4 text-xl text-textSub">
                                    <a href={project.github} target="_blank" className="hover:text-accent transition-colors"><FiGithub /></a>
                                    <a href={project.demo} target="_blank" className="hover:text-accent transition-colors"><FiExternalLink /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-textMain mb-3 group-hover:text-accent transition-colors">{project.title}</h3>

                            <p className="text-textSub text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-textMuted mt-auto">
                                {project.tech.map(t => <li key={t}>{t}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
