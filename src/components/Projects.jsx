import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: "CollegeMaster",
            description: "A scalable university management platform streamlining workflows for students and faculty. Features secure authentication and efficient data handling.",
            tech: ["React", "Redux", "Express", "MongoDB"],
            github: "https://github.com/parth-1372/CollegeMaster",
            demo: "https://universitymanagementsystem.vercel.app/",
            image: "/src/assets/projects/Screenshot 2025-01-07 115803.png"
        },
        {
            title: "BlogSphere",
            description: "A full-featured blogging platform where users can create, edit, and comment on posts. Built with server-side rendering for SEO.",
            tech: ["Node.js", "EJS", "MongoDB"],
            github: "https://github.com/parth-1372/BlogSphere",
            demo: "http://blogsphere-env-2.eba-3csmpqj8.ap-south-1.elasticbeanstalk.com/",
            image: "/src/assets/projects/BlogSphere.png"
        },
        {
            title: "PowerBuy",
            description: "Dynamic e-commerce interface with modern styling. Features a seamless shopping cart experience and responsive product grids.",
            tech: ["JavaScript", "Tailwind CSS"],
            github: "https://github.com/parth-1372/E-Commerce",
            demo: "https://e-commerce-seven-rose-24.vercel.app/",
            image: "/src/assets/projects/PowerBuy.png"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container px-6 mx-auto">
                <h2 className="section-title">Some Things I've Built</h2>

                <div className="space-y-24">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Project Image */}
                            <div className="md:w-3/5 relative group cursor-pointer overflow-hidden rounded">
                                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                />
                            </div>

                            {/* Project Info */}
                            <div className={`md:w-2/5 z-20 ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                                <h3 className="text-2xl font-bold text-textMain mb-4 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <div className="bg-secondary p-6 rounded-lg shadow-xl text-textSub mb-4 border border-accent/5">
                                    <p className="text-sm leading-relaxed">{project.description}</p>
                                </div>

                                <ul className={`flex flex-wrap gap-4 text-xs font-mono text-textSub mb-6 ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                                    {project.tech.map(t => <li key={t}>{t}</li>)}
                                </ul>

                                <div className={`flex gap-4 text-xl text-textMain ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                                    <a href={project.github} target="_blank" className="hover:text-accent transition-colors"><FiGithub /></a>
                                    <a href={project.demo} target="_blank" className="hover:text-accent transition-colors"><FiExternalLink /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
