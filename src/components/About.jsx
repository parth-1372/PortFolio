import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
                <div className="space-y-6 text-textSub text-lg leading-relaxed">
                    <h2 className="text-3xl font-bold text-textMain flex items-center gap-4">
                        <span className="text-accent font-mono text-xl">01.</span> About Me.
                        <span className="h-px bg-white/10 flex-grow max-w-[200px]"></span>
                    </h2>

                    <p>
                        Hello! My name is <strong className="text-primary">Parth</strong> and I enjoy creating things that live on the internet. My interest in web development started back in university when I decided to build a management system for my college.
                    </p>
                    <p>
                        Fast-forward to today, and I've had the privilege of working on various projects, from <span className="text-textMain">full-stack web applications</span> to <span className="text-textMain">Machine Learning models</span>. My goal is to always build scalable and efficient solutions that provide a great user experience.
                    </p>
                    <p>
                        I am also highly active in <span className="text-accent">Competitive Programming</span>, which has sharpened my problem-solving skills in C++ and DSA.
                    </p>

                    <div>
                        <p className="mb-4 font-mono text-sm text-textMain">Recent technologies I've been working with:</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
                            {['JavaScript (ES6+)', 'React', 'Node.js', 'MongoDB', 'Python (ML)', 'C++ (DSA)'].map(tech => (
                                <li key={tech} className="flex items-center gap-2">
                                    <span className="text-accent">▹</span> {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative group mx-auto max-w-sm">
                    <div className="absolute inset-0 bg-accent rounded-lg translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <div className="relative rounded-lg overflow-hidden border-2 border-surface bg-surfaceHighlight z-10 w-full aspect-square">
                        <img
                            src="/src/assets/about.png"
                            alt="Parth Mungra"
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
