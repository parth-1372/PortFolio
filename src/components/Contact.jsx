import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding py-32 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <p className="text-accent font-mono mb-6">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">Get In Touch</h2>
                <p className="text-textSub text-lg leading-relaxed mb-12">
                    I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex gap-4 justify-center mb-12">
                    <a href="mailto:parthmungra.13@gmail.com" className="p-3 bg-surfaceHighlight text-textMain rounded-full hover:bg-primary hover:text-white transition-all"><FiMail size={20} /></a>
                    <a href="https://www.linkedin.com/in/parth-mungra/" target="_blank" rel="noopener noreferrer" className="p-3 bg-surfaceHighlight text-textMain rounded-full hover:bg-primary hover:text-white transition-all"><FiLinkedin size={20} /></a>
                    <a href="https://github.com/parth-1372" target="_blank" rel="noopener noreferrer" className="p-3 bg-surfaceHighlight text-textMain rounded-full hover:bg-primary hover:text-white transition-all"><FiGithub size={20} /></a>
                    <a href="https://x.com/stranger_1332" target="_blank" rel="noopener noreferrer" className="p-3 bg-surfaceHighlight text-textMain rounded-full hover:bg-primary hover:text-white transition-all"><FiTwitter size={20} /></a>
                    <a href="https://www.instagram.com/parth_patel137/" target="_blank" rel="noopener noreferrer" className="p-3 bg-surfaceHighlight text-textMain rounded-full hover:bg-primary hover:text-white transition-all"><FiInstagram size={20} /></a>
                </div>

                <a
                    href="mailto:parthmungra.13@gmail.com"
                    className="inline-block px-8 py-4 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono text-sm tracking-widest"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
