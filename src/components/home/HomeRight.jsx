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

/* Option 3: Code Aesthetics */
const CodeSnippet = () => (
    <div className="bg-surface border border-border rounded-3xl p-6 hover:border-primary/30 transition-colors group">
        <div className="flex justify-between items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary"><FiCode size={24} /></div>
            <span className="text-xs font-mono text-textMuted">solver.cpp</span>
        </div>
        <div className="font-mono text-xs text-textSub space-y-1 opacity-70 group-hover:opacity-100 transition-opacity">
            <p><span className="text-purple-400">class</span> <span className="text-yellow-400">Solution</span> {'{'}</p>
            <p className="pl-4"><span className="text-purple-400">void</span> <span className="text-blue-400">solve</span>(HardProblem <span className="text-red-400">p</span>) {'{'}</p>
            <p className="pl-8 text-green-400">// Optimized approach O(n)</p>
            <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-blue-400">optimalResult</span>;</p>
            <p className="pl-4">{'}'}</p>
            <p>{'}'}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
            <p className="text-textMain font-bold">Algorithms Specialist</p>
            <p className="text-xs text-textSub">I write code that doesn't break at scale.</p>
        </div>
    </div>
);

/* Option 4: Status/Activity */
const StatusCard = () => (
    <div className="bg-surface border border-border rounded-3xl p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surfaceHighlight">
                <img src="/src/assets/about.png" alt="Profile" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-surface rounded-full"></div>
        </div>
        <h3 className="text-lg font-bold text-textMain">Parth Mungra</h3>
        <p className="text-xs text-textSub mb-4">Pre-final @ IIIT Gwalior</p>
        <div className="w-full bg-surfaceHighlight rounded-lg p-3 text-sm text-textMain font-mono">
            <span className="text-green-500">● </span> Open to Work
        </div>
    </div>
);

const HomeRight = () => {
    return (
        <div className="space-y-8 sticky top-24">
            {/* 
                USER: DELETE THE WIDGETS YOU DON'T WANT.
                KEEP ONLY 2 for the best look.
             */}

            {/* OPTION 1: High Value Hook */}
            <StartupHook />

            {/* OPTION 2: Resume / Hiring Signal */}
            <StatusCard />

            {/* OPTION 3: Interactive Terminal */}
            <TerminalMe />

            {/* OPTION 4: Code Aesthetic */}
            <CodeSnippet />
        </div>
    );
};

export default HomeRight;
