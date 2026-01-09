import React from 'react';
import HomeLeft from '../components/home/HomeLeft';
import HomeRight from '../components/home/HomeRight';

const Home = () => {
    return (
        <div className="pb-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column - Main Feed (66%) */}
                <div className="lg:col-span-2">
                    <HomeLeft />
                </div>

                {/* Right Column - Creative / Sticky (33%) */}
                <div className="lg:col-span-1">
                    <HomeRight />
                </div>
            </div>
        </div>
    );
};

export default Home;
