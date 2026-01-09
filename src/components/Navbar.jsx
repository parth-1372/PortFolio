import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
                <NavLink
                    to="/"
                    className="text-2xl font-bold font-mono text-primary flex items-center gap-2"
                >
                    &lt;Parth /&gt;
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-textSub'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-surfaceHighlight transition-colors text-textMain"
                    >
                        {theme === 'dark' ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
                    </button>

                    <a
                        href="/resume.pdf"
                        download="Parth_Mungra_Resume.pdf"
                        className="px-5 py-2 border border-border bg-surface hover:bg-surfaceHighlight text-textMain rounded transition-all font-mono text-xs font-semibold"
                    >
                        RESUME
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-surfaceHighlight transition-colors text-textMain"
                    >
                        {theme === 'dark' ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
                    </button>
                    <div className="text-2xl text-textMain cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-lg font-medium ${isActive ? 'text-primary' : 'text-textMain'}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <a
                                href="/resume.pdf"
                                download
                                className="px-5 py-2 border border-border bg-surface text-textMain rounded font-mono text-sm"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
