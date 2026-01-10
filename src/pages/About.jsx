import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiGit, SiNextdotjs, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiRedux, SiFlask, SiGraphql, SiPostgresql, SiMysql, SiPrisma, SiGithub, SiGitlab, SiLinux, SiAmazonwebservices, SiGooglecloud, SiNginx, SiFigma } from 'react-icons/si';
import { FiBriefcase, FiAward, FiBook, FiUsers, FiCpu, FiDatabase, FiLayout, FiTerminal } from 'react-icons/fi';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto pb-20 space-y-20">

            {/* 1. Profile Header */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row gap-10 items-center border-b border-border/50 pb-12"
            >
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surfaceHighlight shrink-0 shadow-xl">
                    <img src="/src/assets/about.png" alt="Parth Mungra" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-4">Parth Mungra</h1>
                    <p className="text-xl text-textSub leading-relaxed">
                        Pre-final year B.Tech + M.Tech (IT) student at <span className="text-primary font-semibold">IIIT Gwalior</span>.
                        Passionate about distributed systems, competitive programming, and scalable web solutions.
                    </p>
                </div>
            </motion.section>

            {/* 2. Experience */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <FiBriefcase className="text-3xl text-primary" />
                    <h2 className="text-3xl font-bold text-textMain">Experience</h2>
                </div>

                <div className="space-y-12 relative border-l-2 border-border ml-3 pl-8 pb-4">
                    {/* Experience 1 */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                        <h3 className="text-xl font-bold text-textMain">Software Developer Intern</h3>
                        <p className="text-textSub font-mono text-sm mb-4">Netlarx Pvt Ltd • Hybrid • Mar 2025 - May 2025</p>
                        <ul className="list-disc list-outside ml-4 text-textSub space-y-2 max-w-2xl">
                            <li>Engineered real-world web solutions using the <span className="text-textMain font-medium">MERN Stack</span>.</li>
                            <li>Implemented <strong>Razorpay</strong> payment gateway integration for secure transactions.</li>
                            <li>Optimized backend performance by <strong>~90%</strong>: Replaced individual status-based API calls with response bundling and implemented client-side filtering to drastically reduce server load.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Education */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <FiBook className="text-3xl text-primary" />
                    <h2 className="text-3xl font-bold text-textMain">Education</h2>
                </div>

                <div className="grid gap-6">
                    <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-colors">
                        <div className="flex flex-wrap justify-between items-start mb-2 gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-textMain">IIIT Gwalior</h3>
                                <p className="text-textSub">Integrated B.Tech + M.Tech in Information Technology</p>
                            </div>
                            <span className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">2022 - 2027</span>
                        </div>
                        <p className="text-textMuted mt-2 text-sm">CGPA: 9.00/10</p>
                        <p className="text-textMuted mt-4 text-sm"><strong className="text-textMain">Coursework:</strong> Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, Distributed Systems.</p>
                    </div>

                    <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-colors opacity-90">
                        <div className="flex flex-wrap justify-between items-start mb-2 gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-textMain">Jawahar Navodaya Vidyalaya, Jamnagar</h3>
                                <p className="text-textSub">Secondary & Higher Secondary Education</p>
                            </div>
                            <span className="font-mono text-sm text-textSub bg-surfaceHighlight px-3 py-1 rounded-full">2015 - 2022</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <span className="text-xs bg-surfaceHighlight text-textMuted px-2 py-1 rounded">Residential Schooling</span>
                            <span className="text-xs bg-surfaceHighlight text-textMuted px-2 py-1 rounded">House Captain</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Technical Skills */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <FiCpu className="text-3xl text-primary" />
                    <h2 className="text-3xl font-bold text-textMain">Technical Skills</h2>
                </div>

                <div className="space-y-8">
                    {/* Languages */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-4 ml-1">Programming Languages</h3>
                        <div className="flex flex-wrap gap-3">
                            {["JavaScript", "TypeScript", "Java", "Python", "C++", "C", "SQL", "Bash"].map(s => (
                                <span key={s} className="px-4 py-2 bg-surface border border-border rounded-lg text-textMain dark:text-gray-200 text-sm font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-4 ml-1">Frameworks & Libraries</h3>
                        <div className="flex flex-wrap gap-3">
                            {["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Node.js", "Express.js", "Flask", "GraphQL", "Axios", "Prisma", "Mongoose.js"].map(s => (
                                <span key={s} className="px-4 py-2 bg-surface border border-border rounded-lg text-textMain dark:text-gray-200 text-sm font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-4 ml-1">Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-3">
                            {["GitHub", "GitLab", "VS Code", "Linux", "Docker", "Kubernetes", "AWS", "GCP", "NGINX", "Figma", "Postman"].map(s => (
                                <span key={s} className="px-4 py-2 bg-surface border border-border rounded-lg text-textMain dark:text-gray-200 text-sm font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Achievements */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <FiAward className="text-3xl text-primary" />
                    <h2 className="text-3xl font-bold text-textMain">Achievements</h2>
                </div>

                <div className="grid gap-4">
                    {[
                        { t: "Programming", d: "LeetCode Guardian (Top 1.28%) | Codeforces Specialist (1440+)" },
                        { t: "Meta HackerCup", d: "Achieved a worldwide rank of 1683 in Level 2." },
                        { t: "Hacktoberfest 2024", d: "Contributed to open-source projects with 4+ merged pull requests." },
                        { t: "Smart India Hackathon", d: "Finalist at College Level internal selection." },
                    ].map((ach, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-border">
                            <div className="min-w-[4px] h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <div>
                                <h3 className="font-bold text-textMain text-lg">{ach.t}</h3>
                                <p className="text-textSub">{ach.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Positions of Responsibility */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <FiUsers className="text-3xl text-primary" />
                    <h2 className="text-3xl font-bold text-textMain">Positions of Responsibility</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { r: "Placement Representative", desc: "Key liaison for batch-wide placement activities (Batch 2027)." },
                        { r: "GSSoC Mentor", desc: "Guided open-source contributors and applied SDLC principles." },
                        { r: "Problem Tester", desc: "Authored technical problems for Coderush, Infotsav'24." },
                        { r: "Campus Leadership", desc: "Led Uthaan cultural events & mentored in WebKirti contest." },
                    ].map((pos, i) => (
                        <div key={i} className="bg-surface p-6 rounded-xl border border-border hover:shadow-md transition-all">
                            <h3 className="font-bold text-textMain mb-2">{pos.r}</h3>
                            <p className="text-sm text-textSub">{pos.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default About;
