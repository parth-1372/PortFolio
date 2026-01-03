import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center py-0">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p className="text-accent font-mono mb-5 text-sm md:text-base">Hi, my name is</p>
                    <h1 className="text-5xl md:text-8xl font-bold text-textMain mb-4 tracking-tight">
                        Parth Mungra.
                    </h1>
                    <h2 className="text-4xl md:text-7xl font-bold text-textSub mb-8 leading-tight">
                        I craft data-driven digital experiences.
                    </h2>
                    <p className="max-w-2xl text-textSub text-lg md:text-xl mb-12 leading-relaxed">
                        I'm a <span className="text-accent">Fullstack Developer</span> & <span className="text-accent">ML Enthusiast</span> dedicated to building scalable, user-centric solutions. From complex university systems to intelligent algorithms, I love turning ideas into reality.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <a
                            href="#projects"
                            className="px-8 py-5 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono text-sm tracking-widest"
                        >
                            Check out my work!
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
