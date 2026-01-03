import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: "CollegeMaster",
            description: "A comprehensive university management platform that automates administrative tasks and streamlines communication between students and faculty. Built with a focus on user experience and data security.",
            tech: ["React", "Redux", "Node.js", "MongoDB"],
            github: "https://github.com/parth-1372/CollegeMaster",
            demo: "https://universitymanagementsystem.vercel.app/",
            image: "/src/assets/projects/Screenshot 2025-01-07 115803.png"
        },
        {
            title: "BlogSphere",
            description: "A dynamic blogging ecosystem supporting user authentication, markdown content, and real-time updates. Designed for optimal SEO and performance across all devices.",
            tech: ["Node.js", "Express", "EJS", "MongoDB"],
            github: "https://github.com/parth-1372/BlogSphere",
            demo: "http://blogsphere-env-2.eba-3csmpqj8.ap-south-1.elasticbeanstalk.com/",
            image: "/src/assets/projects/BlogSphere.png"
        },
        {
            title: "PowerBuy",
            description: "Modern E-commerce solution featuring a intuitive product discovery, secure checkout simulation, and a highly responsive design tailored for mobile shopping experiences.",
            tech: ["JavaScript", "Tailwind CSS", "Vite"],
            github: "https://github.com/parth-1372/E-Commerce",
            demo: "https://e-commerce-seven-rose-24.vercel.app/",
            image: "/src/assets/projects/PowerBuy.png"
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="section-title">03. Project Showcase</h2>

                <div className="space-y-32 mt-16">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`relative flex flex-col items-center gap-12 lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Project Image */}
                            <div className="w-full lg:w-3/5 relative group rounded shadow-2xl overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-500 scale-100 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Info */}
                            <div className={`w-full lg:w-2/5 z-20 flex flex-col ${i % 2 !== 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                                <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                                <h3 className="text-3xl font-bold text-textMain mb-6 hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <div className="bg-secondary p-8 rounded shadow-xl text-textSub mb-6 border border-accent/5 backdrop-blur-sm lg:relative lg:z-30 lg:w-[120%] 
                  ${i % 2 !== 0 ? 'lg:-mr-20' : 'lg:-ml-20'}">
                                    <p className="text-sm md:text-base leading-relaxed">{project.description}</p>
                                </div>

                                <ul className={`flex flex-wrap gap-4 text-xs font-mono text-textSub mb-8 ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                                    {project.tech.map(t => <li key={t} className="px-2 py-1 bg-primary/50 rounded">{t}</li>)}
                                </ul>

                                <div className={`flex gap-6 text-2xl text-textMain ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                                    <a href={project.github} target="_blank" className="hover:text-accent transition-all duration-300 hover:-translate-y-1"><FiGithub /></a>
                                    <a href={project.demo} target="_blank" className="hover:text-accent transition-all duration-300 hover:-translate-y-1"><FiExternalLink /></a>
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
