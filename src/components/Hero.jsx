import React from "react";
import { CLOUDINARY_ASSETS } from "../cloudinaryAssets";

const Hero = () => {
    return (
        <div className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-[#052659]">


            {/* Video Background */}
            {/* LCP Optimized Poster Image */}
            <img
                src={CLOUDINARY_ASSETS.HERO.POSTER_IMAGE}
                alt="Hero Background"
                fetchPriority="high"
                loading="eager"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />

            {/* Video Background - Loads after initial paint */}
            <video
                src={CLOUDINARY_ASSETS.HERO.BACKGROUND_VIDEO}
                poster={CLOUDINARY_ASSETS.HERO.POSTER_IMAGE}
                crossOrigin="anonymous"
                autoPlay
                loop
                muted
                playsInline
                preload="none" // Key for LCP: don't download video bytes immediately
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Centered Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1
                    data-aos="fade-up"
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                    10Sight Technologies <br /> <span className="text-blue-400">Designing Clarity</span>
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-lg md:text-xl max-w-2xl text-gray-200 mb-8"
                >
                    We design clarity through strategy, design, and technology. <br /> Building digital systems that are calm, intentional, and future ready.
                </p>
                <button
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="cursor-pointer inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-300 bg-blue-600/80 border border-blue-500/50 rounded-full backdrop-blur-sm hover:bg-blue-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
