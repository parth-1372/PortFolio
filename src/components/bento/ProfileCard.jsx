import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const ProfileCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface border border-border rounded-3xl p-8 flex flex-col justify-between h-full relative overflow-hidden group"
        >
            <div className="z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary mb-6">
                    <img src="/src/assets/about.png" alt="Profile" className="w-full h-full object-cover" />
                </div>

                <h2 className="text-3xl font-bold text-textMain mb-2">Parth Mungra</h2>
                <p className="text-textSub mb-4">Full Stack Developer & ML Enthusiast</p>

                <div className="flex items-center gap-2 text-sm text-textMuted mb-6">
                    <FiMapPin />
                    <span>IIIT Gwalior, India</span>
                </div>

                <div className="flex gap-4 text-xl text-textMain">
                    <a href="#" className="hover:text-primary transition-colors"><FiGithub /></a>
                    <a href="#" className="hover:text-primary transition-colors"><FiLinkedin /></a>
                    <a href="#" className="hover:text-primary transition-colors"><FiTwitter /></a>
                </div>
            </div>

            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
        </motion.div>
    );
};

export default ProfileCard;
