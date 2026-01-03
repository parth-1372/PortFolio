import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-2xl' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold text-accent font-sans tracking-widest cursor-pointer z-[101]"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    P.M.
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-textSub hover:text-accent transition-all duration-300 text-sm font-mono tracking-wider"
                        >
                            <span className="text-accent mr-1">0{i + 1}.</span> {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="/Parth_Resume.pdf"
                        target="_blank"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 text-sm font-mono"
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden z-[101]">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-accent focus:outline-none p-2"
                    >
                        {mobileMenuOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-primary/98 z-[100] flex flex-col items-center justify-center space-y-8 md:hidden h-screen"
                    >
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-textMain hover:text-accent text-3xl font-mono tracking-widest"
                            >
                                <span className="text-accent block text-center text-sm mb-2">0{i + 1}.</span> {link.name}
                            </a>
                        ))}
                        <a
                            href="/Parth_Resume.pdf"
                            target="_blank"
                            className="mt-6 px-10 py-4 border border-accent text-accent rounded text-xl font-mono"
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
