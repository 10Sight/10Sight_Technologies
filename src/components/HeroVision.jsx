import React from "react";
import { CLOUDINARY_ASSETS } from "../cloudinaryAssets";

const HeroVision = () => {
    return (
        <div className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-[#052659]">


            {/* Video Background */}
            <video
                src={CLOUDINARY_ASSETS.HERO.BACKGROUND_VIDEO}
                crossOrigin="anonymous"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Bottom Left Content */}
            <div className="relative z-20 flex flex-col justify-end h-full text-white px-8 pb-16 md:px-16 md:pb-24">
                <h1
                    data-aos="fade-up"
                    className="text-3xl md:text-6xl font-bold tracking-tight"
                >
                    10sightTechnologies.
                </h1>
            </div>
        </div>
    );
};

export default HeroVision;
