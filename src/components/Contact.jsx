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

                <a
                    href="mailto:your.email@example.com"
                    className="inline-block px-8 py-4 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono text-sm tracking-widest"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
