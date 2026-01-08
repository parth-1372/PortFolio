import React from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const stats = [
    { platform: "CodeForces", handle: "Specialist", rating: "1400+", icon: SiCodeforces, color: "#1f8acb" },
    { platform: "LeetCode", handle: "Knight", rating: "1800+", icon: SiLeetcode, color: "#FFA116" },
];

const CodingStats = () => {
    return (
        <section className="py-20 bg-surfaceHighlight/20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-around items-center gap-8 bg-surface border border-white/5 p-8 rounded-2xl"
                >
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-textMain mb-2">Competitive Programming</h3>
                        <p className="text-textSub">Problem solving is my cardio.</p>
                    </div>

                    <div className="flex gap-8">
                        {stats.map((stat, i) => (
                            <div key={stat.platform} className="text-center group">
                                <stat.icon className="text-4xl mx-auto mb-2 transition-transform group-hover:scale-110" style={{ color: stat.color }} />
                                <div className="font-mono font-bold text-textMain">{stat.rating}</div>
                                <div className="text-xs text-textMuted uppercase tracking-wider">{stat.platform}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodingStats;
