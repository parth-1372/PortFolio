import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent font-mono text-lg tracking-wide"
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-8xl font-bold text-textMain tracking-tight"
                    >
                        Parth Mungra.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-7xl font-bold text-textSub"
                    >
                        I build <span className="gradient-text">distributed systems</span> for the web.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-xl text-textMuted text-lg leading-relaxed pt-4"
                    >
                        I'm a Fullstack Developer & ML Enthusiast specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="pt-10 flex gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-primary text-white rounded font-medium hover:bg-primaryDark transition-all shadow-lg shadow-primary/25 cursor-pointer">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-border text-textMain rounded font-medium hover:bg-white/5 transition-all cursor-pointer">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
