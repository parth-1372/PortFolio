import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiNodedotjs, SiNextdotjs } from 'react-icons/si';

const techs = [
    { icon: SiCplusplus, color: "#00599C" },
    { icon: SiPython, color: "#3776AB" },
    { icon: SiJavascript, color: "#F7DF1E" },
    { icon: SiReact, color: "#61DAFB" },
    { icon: SiNodedotjs, color: "#339933" },
    { icon: SiNextdotjs, color: "" }, // Default color
];

const TechStack = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface border border-border rounded-3xl p-8 h-full flex flex-col justify-center"
        >
            <h3 className="text-xl font-bold text-textMain mb-6">Tech Arsenal</h3>
            <div className="flex flex-wrap gap-4">
                {techs.map((T, i) => (
                    <div key={i} className="p-3 bg-surfaceHighlight rounded-xl border border-white/5 text-2xl text-textMain hover:scale-110 transition-transform cursor-default">
                        <T.icon style={{ color: T.color }} />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default TechStack;
