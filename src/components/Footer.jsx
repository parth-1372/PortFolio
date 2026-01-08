import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="py-8 bg-surface/30 border-t border-white/5 text-center">
            <div className="flex justify-center gap-6 mb-4 text-xl text-textSub">
                <a href="https://github.com/parth-1372" target="_blank" className="hover:text-accent transition-colors"><FiGithub /></a>
                <a href="#" className="hover:text-accent transition-colors"><FiLinkedin /></a>
                <a href="#" className="hover:text-accent transition-colors"><FiTwitter /></a>
                <a href="#" className="hover:text-accent transition-colors"><FiInstagram /></a>
            </div>
            <p className="text-xs font-mono text-textMuted">
                Designed & Built by Parth Mungra
            </p>
        </footer>
    );
};

export default Footer;
