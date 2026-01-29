import React from "react";
import HeroVision from "@/components/HeroVision";
import CoreValues from "@/components/CoreValues";
import ContactSection from "@/components/ContactSection";

const OurVision = () => {
    return (
        <div className="bg-[#01070f] min-h-screen">
            <HeroVision />

            {/* Our Vision */}
            <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-500 text-sm md:text-base font-medium mb-6">
                        Our Vision
                    </p>
                    <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
                        At 10Sight, our vision is to become a global leader in delivering
                        innovative technology solutions that empower businesses to thrive in
                        the digital age.
                        <br />
                        <br /> We envision a future where our expertise in strategy, design,
                        and technology drives transformative growth for our clients,
                        fostering lasting partnerships built on trust, excellence, and
                        shared success.
                    </h2>
                </div>
            </div>
            <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-500 text-sm md:text-base font-medium mb-6">
                        Our Mission
                    </p>
                    <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
                        At 10Sight, our mission is to design clarity through strategy,
                        design, and technology.
                        <br />
                        <br />
                        We are committed to building digital systems
                        that are calm, intentional, and future-ready, enabling our clients to
                        navigate the complexities of the digital landscape with confidence
                        and ease.
                    </h2>
                </div>
            </div>

            {/* Core Values Section */}
            <CoreValues />
            <ContactSection />
        </div>
    );
};

export default OurVision;
