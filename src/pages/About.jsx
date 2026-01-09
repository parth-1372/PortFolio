import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiGit, SiTensorflow } from 'react-icons/si';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-16"
            >
                {/* Header */}
                <section className="flex flex-col md:flex-row gap-10 items-center border-b border-border pb-12">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surfaceHighlight shrink-0">
                        <img src="/src/assets/about.png" alt="Parth Mungra" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-4">Parth Mungra</h1>
                        <p className="text-xl text-textSub leading-relaxed">
                            I'm a pre-final year student at <span className="text-primary font-semibold">IIIT Gwalior</span> (B.Tech + M.Tech in IT).
                            I am a competitive programmer and software developer with experience in building scalable systems and web applications.
                        </p>
                        <div className="flex gap-4 mt-6 text-2xl text-textSub">
                            {/* Social Icons would go here */}
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-2xl font-bold text-textMain mb-8 border-l-4 border-primary pl-4">Education</h2>
                    <div className="space-y-8">
                        <div className="bg-surface p-6 rounded-xl border border-border">
                            <div className="flex flex-col md:flex-row justify-between mb-2">
                                <h3 className="text-xl font-bold text-textMain">Indian Institute of Information Technology and Management (IIIT), Gwalior</h3>
                                <span className="font-mono text-sm text-accent">Nov 2022 - June 2027 (Expected)</span>
                            </div>
                            <p className="text-textSub">Integrated B.Tech + M.Tech in Information Technology</p>
                            <p className="text-textMuted mt-2 text-sm">CGPA: 8.30/10</p>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-2xl font-bold text-textMain mb-8 border-l-4 border-primary pl-4">Experience</h2>
                    <div className="space-y-8 relative border-l border-border ml-2 pl-8">
                        <div className="relative">
                            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                            <h3 className="text-xl font-bold text-textMain">Software Developer Intern</h3>
                            <p className="text-primary text-sm font-mono mb-4">TechStartups Inc. (Remote) • May 2025 - July 2025</p>
                            <ul className="list-disc list-outside ml-4 text-textSub space-y-2">
                                <li>Developed responsive frontend components using React and Tailwind CSS, improving load times by 20%.</li>
                                <li>Collaborated with the backend team to integrate REST APIs for real-time data handling.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-2xl font-bold text-textMain mb-8 border-l-4 border-primary pl-4">Technical Arsenal</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { n: "C/C++", i: SiCplusplus }, { n: "Python", i: SiPython },
                            { n: "JavaScript", i: SiJavascript }, { n: "React", i: SiReact },
                            { n: "Node.js", i: SiNodedotjs }, { n: "MongoDB", i: SiMongodb },
                            { n: "Docker", i: SiDocker }, { n: "TensorFlow", i: SiTensorflow }
                        ].map(s => (
                            <div key={s.n} className="flex items-center gap-3 p-3 bg-surface rounded border border-border">
                                <s.i className="text-xl text-primary" />
                                <span className="text-textSub font-mono text-sm">{s.n}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievements */}
                <section>
                    <h2 className="text-2xl font-bold text-textMain mb-8 border-l-4 border-primary pl-4">Achievements</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-start">
                            <span className="text-accent mt-1">▹</span>
                            <div>
                                <strong className="text-textMain">CodeForces Specialist</strong>
                                <p className="text-textSub text-sm">Max Rating: 1450 (Top 15% in contests)</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-accent mt-1">▹</span>
                            <div>
                                <strong className="text-textMain">Smart India Hackathon 2024 Finalist</strong>
                                <p className="text-textSub text-sm">Selected among top 50 teams nationwide.</p>
                            </div>
                        </li>
                    </ul>
                </section>

            </motion.div>
        </div>
    );
};

export default About;
