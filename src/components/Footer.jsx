import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 border-t border-accent/5">
            <div className="container px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-accent font-mono mb-4">04. What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">Get In Touch</h2>
                    <p className="max-w-lg mx-auto text-textSub mb-10 text-lg">
                        I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex justify-center gap-8 mb-12">
                        <a href="https://github.com/parth-1372" target="_blank" className="text-2xl text-textSub hover:text-accent transition-all duration-300 hover:-translate-y-1">
                            <FiGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="text-2xl text-textSub hover:text-accent transition-all duration-300 hover:-translate-y-1">
                            <FiLinkedin />
                        </a>
                        <a href="mailto:parthmungra@example.com" className="text-2xl text-textSub hover:text-accent transition-all duration-300 hover:-translate-y-1">
                            <FiMail />
                        </a>
                    </div>

                    <a
                        href="mailto:parthmungra@example.com"
                        className="px-10 py-4 border-2 border-accent text-accent rounded-md hover:bg-accent/10 transition-all duration-300 font-mono"
                    >
                        Say Hello
                    </a>

                    <div className="mt-24 text-textSub font-mono text-xs">
                        <p>Designed & Built by Parth Mungra</p>
                        <p className="mt-2 opacity-50">© 2026 All rights reserved</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
