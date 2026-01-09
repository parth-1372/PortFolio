import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-background text-textMain transition-colors duration-300 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
