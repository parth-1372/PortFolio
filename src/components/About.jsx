import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="section-title">01. About Me</h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 text-textSub space-y-6 text-lg"
                    >
                        <p>
                            Hello! My name is <span className="text-accent">Parth Mungra</span> and I enjoy creating things that live on the internet. My interest in web development started back in university when I decided to build a management system for my college.
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working on various projects, from <span className="text-accent">full-stack web applications</span> to <span className="text-accent">Machine Learning models</span>. My goal is to always build scalable and efficient solutions that provide a great user experience.
                        </p>
                        <p>
                            I am also highly active in <span className="text-accent">Competitive Programming</span>, which has sharpened my problem-solving skills and deepened my understanding of data structures and algorithms.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="grid grid-cols-2 gap-y-2 gap-x-4 font-mono text-sm">
                            <li className="flex items-center"><span className="text-accent mr-3 mb-1">▹</span> JavaScript (ES6+)</li>
                            <li className="flex items-center"><span className="text-accent mr-3 mb-1">▹</span> React / Redux</li>
                            <li className="flex items-center"><span className="text-accent mr-3 mb-1">▹</span> Node.js</li>
                            <li className="flex items-center"><span className="text-accent mr-3 mb-1">▹</span> MongoDB</li>
                            <li className="flex items-center"><span className="text-accent mr-3 mb-1">▹</span> Python (ML)</li>
                            <li className="flex items-center"><span className="text-accent mr-3 mb-1">▹</span> C++ (CP/DSA)</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 flex justify-center"
                    >
                        <div className="relative group w-full max-w-[300px] aspect-square">
                            <div className="absolute inset-0 border-2 border-accent rounded-sm translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                            <div className="relative h-full w-full bg-accent rounded-sm overflow-hidden">
                                <img
                                    src="/src/assets/about.png"
                                    alt="Parth Mungra"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 mix-blend-multiply hover:mix-blend-normal"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
