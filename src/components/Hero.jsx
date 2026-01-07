import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-accent font-mono mb-5 ml-1">Hi, my name is</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-textMain mb-4">
                        Parth Mungra.
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-textSub mb-6">
                        I build digital experiences.
                    </h2>
                    <p className="max-w-xl text-textSub text-lg mb-10 leading-relaxed">
                        I'm a Fullstack Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products and exploring Machine Learning.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 border-2 border-accent text-accent rounded-md hover:bg-accent/10 transition-all duration-300 font-medium tracking-wide"
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
