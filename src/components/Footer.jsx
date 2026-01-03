import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <p className="text-accent font-mono mb-4 text-sm tracking-widest">04. What's Next?</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-textMain mb-8">Get In Touch</h2>
                    <p className="max-w-lg mx-auto text-textSub mb-12 text-lg leading-relaxed">
                        I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:parthmungra1372@gmail.com"
                        className="px-10 py-5 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono tracking-widest text-sm mb-16"
                    >
                        Say Hello
                    </a>

                    <div className="flex gap-8 mb-12 lg:hidden">
                        <a href="https://github.com/parth-1372" target="_blank" className="text-2xl text-textSub hover:text-accent transition-all duration-300"><FiGithub /></a>
                        <a href="https://linkedin.com" target="_blank" className="text-2xl text-textSub hover:text-accent transition-all duration-300"><FiLinkedin /></a>
                        <a href="mailto:parthmungra1372@gmail.com" className="text-2xl text-textSub hover:text-accent transition-all duration-300"><FiMail /></a>
                    </div>

                    <div className="font-mono text-[10px] text-textSub tracking-[0.2em] opacity-60 uppercase">
                        <p>Designed & Built by Parth Mungra</p>
                        <p className="mt-2">© 2026 Portfolio Remake</p>
                    </div>
                </motion.div>
            </div>

            {/* Side Socials - Desktop Only */}
            <div className="hidden lg:block fixed bottom-0 left-12 z-50">
                <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-textSub after:mt-6">
                    <a href="https://github.com/parth-1372" target="_blank" className="text-xl text-textSub hover:text-accent hover:-translate-y-1 transition-all duration-300"><FiGithub /></a>
                    <a href="https://linkedin.com" target="_blank" className="text-xl text-textSub hover:text-accent hover:-translate-y-1 transition-all duration-300"><FiLinkedin /></a>
                    <a href="https://instagram.com" target="_blank" className="text-xl text-textSub hover:text-accent hover:-translate-y-1 transition-all duration-300"><FiInstagram /></a>
                </div>
            </div>

            <div className="hidden lg:block fixed bottom-0 right-12 z-50">
                <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-textSub after:mt-6">
                    <a
                        href="mailto:parthmungra1372@gmail.com"
                        className="text-xs font-mono text-textSub hover:text-accent hover:-translate-y-1 transition-all duration-300 vertical-text tracking-widest"
                    >
                        parthmungra1372@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
