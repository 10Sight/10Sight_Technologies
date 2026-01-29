import React from 'react';
import { Link } from 'react-router-dom';

const LetsBuildCTA = () => {
    return (
        <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center bg-[#01070f] relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Pill Badge */}
                <div className="mb-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm md:text-base font-medium backdrop-blur-sm">
                    Get Started
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                    Let's Build
                </h2>

                {/* Subtitle */}
                <p className="text-gray-400 text-lg md:text-xl mb-12 font-light tracking-wide">
                    Something that make sense.
                </p>

                {/* Connect Button */}
                <Link
                    to="/contact-us"
                    className="group relative px-8 py-4 bg-gradient-to-b from-[#1E3A8A] to-[#172554] text-white rounded-full text-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,58,138,0.5)] hover:scale-105 border border-white/10 overflow-hidden"
                >
                    <span className="relative z-10">Connect With Us</span>
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
            </div>
        </section>
    );
};

export default LetsBuildCTA;
