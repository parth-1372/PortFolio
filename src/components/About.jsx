import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container px-6 mx-auto">
                <h2 className="section-title">About Me</h2>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="md:w-3/5"
                    >
                        <div className="text-textSub space-y-4 text-lg">
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
                            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm list-none">
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> JavaScript (ES6+)</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> React / Redux</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> Node.js</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> MongoDB</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> Python (ML)</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> C++ (CP/DSA)</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:w-2/5 flex justify-center"
                    >
                        <div className="relative group max-w-[300px]">
                            <div className="absolute inset-0 border-2 border-accent rounded transition-all duration-300 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <div className="relative bg-accent rounded overflow-hidden">
                                <img
                                    src="/src/assets/about.png"
                                    alt="Parth Mungra"
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-500 mix-blend-multiply hover:mix-blend-normal"
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
