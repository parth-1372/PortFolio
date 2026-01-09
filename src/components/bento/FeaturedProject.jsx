import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const FeaturedProject = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface border border-border rounded-3xl p-8 h-full relative group overflow-hidden cursor-pointer"
        >
            <div className="absolute top-8 right-8 text-2xl text-textSub group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                <FiArrowUpRight />
            </div>

            <div className="h-full flex flex-col justify-between z-10 relative">
                <div>
                    <span className="text-accent font-mono text-xs mb-2 block">FEATURED</span>
                    <h3 className="text-2xl font-bold text-textMain mb-2">CollegeMaster</h3>
                    <p className="text-textSub text-sm line-clamp-3">
                        A comprehensive university management system built with the MERN stack. Streamlines admin tasks and student portals.
                    </p>
                </div>
                <div className="mt-6 flex gap-2">
                    <span className="text-xs font-mono bg-surfaceHighlight px-2 py-1 rounded text-textMuted">React</span>
                    <span className="text-xs font-mono bg-surfaceHighlight px-2 py-1 rounded text-textMuted">Node.js</span>
                </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all"></div>
        </motion.div>
    );
};

export default FeaturedProject;
