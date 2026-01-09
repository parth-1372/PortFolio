import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCode, FiZap, FiTerminal } from 'react-icons/fi';

/* Option 1: Startup Value Prop */
const StartupHook = () => (
    <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-3xl text-white relative overflow-hidden">
        <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Why hire me?</h3>
            <ul className="space-y-3 mb-6 font-medium opacity-90">
                <li className="flex gap-2 items-center"><FiZap /> I ship MVPs fast.</li>
                <li className="flex gap-2 items-center"><FiCode /> Clean, maintainable code.</li>
                <li className="flex gap-2 items-center"><FiClock /> Timezone aligned (IST).</li>
            </ul>
            <a href="mailto:your@email.com" className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-opacity">
                Let's Build Together
            </a>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
    </div>
);

/* Option 2: Terminal Interactive */
const TerminalMe = () => (
    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden font-mono text-sm border border-border shadow-2xl">
        <div className="bg-[#2d2d2d] px-4 py-2 flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-400 ml-2">parth@portfolio ~</span>
        </div>
        <div className="p-4 text-green-400 space-y-2">
            <div>
                <span className="text-blue-400">➜</span> <span className="text-purple-400">~</span> <span className="text-yellow-400">npm</span> start
            </div>
            <div className="text-gray-300">
                > starting dev server...<br />
                > compilation success (142ms)<br />
                > loaded: <span className="text-blue-300">React, Node, MongoDB</span><br />
                > status: <span className="text-green-300">READY_TO_HIRE</span>
            </div>
            <div className="animate-pulse">
                <span className="text-blue-400">➜</span> <span className="text-purple-400">~</span> <span className="w-2 h-4 bg-gray-400 inline-block align-middle ml-1"></span>
            </div>
        </div>
    </div>
);

const HomeRight = () => {
    return (
        <div className="space-y-8 sticky top-24">
            {/* 
                User selected options:
             */}

            {/* 1. Value Prop */}
            <StartupHook />

            {/* 2. Interactive Terminal */}
            <TerminalMe />
        </div>
    );
};

export default HomeRight;
