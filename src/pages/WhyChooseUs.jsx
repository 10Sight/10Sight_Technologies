import React from "react";
import { Helmet } from "react-helmet-async";
import WhyChooseUsComponent from "../components/WhyChooseUs"; // Using the existing component for content below hero if needed, or as part of the page
import FeatureSection from "../components/FeatureSection";

const WhyChooseUs = () => {
    return (
        <>
            <Helmet>
                <title>Why Choose Us | 10Sight Technologies</title>
                <meta
                    name="description"
                    content="We don't sell services. We build outcomes. Discover why 10Sight is the right partner for your digital transformation."
                />
            </Helmet>

            {/* Hero Section based on the image */}
            <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col justify-center items-center bg-[#01070f] text-center px-4 overflow-hidden">

                {/* Background elements to match the dark theme */}
                <div className="absolute inset-0 bg-[#01070f]">
                    {/* Optional: Add subtle background gradient or effect here if needed to match the exact look */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#01070f] via-[#0b121c] to-[#01070f] opacity-50"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Why Choose Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium">
                        We don’t sell services. We build outcomes.
                    </p>
                </div>
            </section>

            {/* Transparent Communication Section */}
            <FeatureSection
                label="Transparent Communication"
                linePosition="right"
                imagePosition="left"
                image="https://res.cloudinary.com/dlcrtc03w/image/upload/v1769597823252/uploaded_media_1769597823252_gopq7j.png" // Using the uploaded image as placeholder or similar asset
            >
                <div className="space-y-6">
                    <p className="text-xl md:text-3xl font-medium text-white leading-relaxed">
                        Anyone can ship code, designs, or dashboards.
                        <br />
                        <span className="text-gray-400">
                            What actually matters is whether those things move your business forward.
                        </span>
                    </p>
                    <p className="text-base md:text-lg">
                        Our work starts with understanding your problem in business terms, not just technical requirements.
                    </p>
                    <ul className="space-y-3 mt-4">
                        {[
                            "Clear scopes",
                            "Defined milestones",
                            "Transparent communication",
                            "Zero guesswork"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white">
                                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </FeatureSection>

            {/* Example 2: Client-Centered Approach */}
            <FeatureSection
                label="Client-Centered Approach"
                linePosition="left"
                imagePosition="right"
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
            >
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-white">Your Vision, Our Mission</h3>
                    <p className="text-base md:text-lg">
                        We prioritize your vision and ensure our solutions align with your business goals. Your success is our primary metric.
                    </p>
                    <ul className="space-y-3 mt-4">
                        {[
                            "Personalized Strategies",
                            "Continuous Feedback Loops",
                            "Dedicated Support",
                            "Long-term Partnership"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white">
                                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </FeatureSection>

            {/* Reuse the detailed WhyChooseUs component or other content here */}
            {/* <WhyChooseUsComponent /> */}
        </>
    );
};

export default WhyChooseUs;
