import React from 'react';
import { motion } from 'framer-motion';

const MapWidget = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-surface border border-border rounded-3xl h-full min-h-[200px] overflow-hidden relative"
        >
            {/* Abstract decorative map representation */}
            <div className="absolute inset-0 bg-[#1a1a1a] opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-primary rounded-full relative z-10"></div>
            </div>

            <div className="absolute bottom-6 left-6 z-10">
                <h4 className="text-white font-bold">Gwalior, India</h4>
                <p className="text-xs text-textSub">Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
            </div>
        </motion.div>
    );
};

export default MapWidget;
