import React, { useEffect } from 'react';
import ProfileCard from '../components/bento/ProfileCard';
import TechStack from '../components/bento/TechStack';
import FeaturedProject from '../components/bento/FeaturedProject';
import MapWidget from '../components/bento/MapWidget';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="pb-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
            >
                {/* Row 1 */}
                <div className="md:col-span-2 md:row-span-2">
                    <ProfileCard />
                </div>
                <div className="md:col-span-1 md:row-span-1">
                    <MapWidget />
                </div>
                <div className="md:col-span-1 md:row-span-1">
                    <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 h-full flex flex-col justify-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-3xl font-bold mb-1 relative z-10">Pre-final</h3>
                        <p className="opacity-90 relative z-10">Year Student @ IIIT Gwalior</p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="md:col-span-2 md:row-span-1">
                    <TechStack />
                </div>

                {/* Row 3 */}
                <div className="md:col-span-2 md:row-span-1" onClick={() => navigate('/projects')}>
                    <FeaturedProject />
                </div>
                <div
                    onClick={() => navigate('/projects')}
                    className="md:col-span-2 md:row-span-1 bg-surface border border-border rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-textMain">See All Projects</h3>
                        <p className="text-textSub group-hover:text-primary transition-colors">Web Apps, ML Models & more</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-textMain flex items-center justify-center group-hover:bg-textMain group-hover:text-background transition-all">
                        →
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
