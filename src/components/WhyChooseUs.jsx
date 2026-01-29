import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CLOUDINARY_ASSETS } from '../cloudinaryAssets';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reasons = [
    {
        title: "Client-Centered Approach",
        description: "We prioritize your vision and ensure our solutions align with your business goals. Your success is our primary metric.",
        id: 1,
        image: CLOUDINARY_ASSETS.WHY_CHOOSE_US.APPROACH_IMAGE,
    },
    {
        title: "Tailored Solutions",
        description: "We build strategies and tools that are unique to your brand, audience, and objectives. No cookie-cutter templates.",
        id: 2,
        image: CLOUDINARY_ASSETS.WHY_CHOOSE_US.SOLUTIONS_IMAGE,
    },
    {
        title: "End-to-End Expertise",
        description: "From idea to deployment, our expert team handles every stage with finesse. We are your one-stop technical partner.",
        id: 3,
        image: CLOUDINARY_ASSETS.WHY_CHOOSE_US.EXPERTISE_IMAGE,
    },
    {
        title: "Transparent Communication",
        description: "No technical jargon—just honest, timely updates you can understand. We keep you in the loop at every step.",
        id: 4,
        image: CLOUDINARY_ASSETS.WHY_CHOOSE_US.COMMUNICATION_IMAGE,
    },
    {
        title: "Scalable & Future-Proof",
        description: "Our digital products adapt as your business grows, ensuring long-term value and reduced technical debt.",
        id: 5,
        image: CLOUDINARY_ASSETS.WHY_CHOOSE_US.SCALABLE_IMAGE,
    },
];

const WhyChooseUs = () => {
    const [activeId, setActiveId] = useState(3);
    // Manual auto-slide interval removed in favor of Swiper Autoplay

    return (
        <section className="bg-[#01070f] py-24 px-4 overflow-hidden relative">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90" // Subtle background effect
                    src={CLOUDINARY_ASSETS.WHY_CHOOSE_US.BACKGROUND_VIDEO}
                    onError={(e) => e.target.style.display = 'none'}
                />
                <div className="absolute inset-0 bg-[#01070f]/80" /> {/* Overlay to blend with theme */}
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        At 10Sight, we don't just deliver services — we craft digital experiences that transform brands.
                        Specializing in website development, social media management, and AI/ML solutions.
                    </p>
                </div>

                {/* Mobile View: Swiper */}
                <div className="block lg:hidden mb-12">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        grabCursor={true}
                        modules={[Autoplay]}
                        className="w-full h-[500px]"
                        onSlideChange={(swiper) => setActiveId(swiper.activeIndex + 1)}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {reasons.map((item) => (
                            <SwiperSlide key={item.id} className="rounded-3xl overflow-hidden bg-[#4d3b4d] border border-white/5 relative">
                                {/* Background Image */}
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                )}
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />

                                {/* Content */}
                                <div className="h-full flex flex-col justify-end p-8 relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <div className="h-1 w-20 bg-blue-500 mb-6 rounded-full" />
                                    <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 w-fit px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 backdrop-blur-sm">
                                        Learn More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Sliding Stick Indicator (Mobile) - 5 items so 1/5 width */}
                    <div className="flex justify-center items-center mt-6">
                        <div className="w-64 h-1 bg-white/10 rounded-full relative overflow-hidden">
                            <motion.div
                                animate={{ x: `${(activeId - 1) * 100}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute top-0 left-0 w-1/5 h-full bg-white rounded-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop View: Accordion (Existing Logic) */}
                <div
                    className="hidden lg:flex flex-col lg:flex-row h-[400px] lg:h-[500px] gap-2 lg:gap-4 max-w-7xl mx-auto mb-12"
                // Removed onMouseEnter/onMouseLeave pause logic as internal state is now only for desktop hover usually, 
                // and mobile uses Swiper's own autoplay.
                >
                    {reasons.map((item) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            className={`
                                relative rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                                ${activeId === item.id ? 'flex-[10] lg:flex-[3]' : 'hidden lg:flex lg:flex-[0.5] hover:opacity-100'}
                                bg-[#4d3b4d] border border-white/5
                            `}
                        >
                            {/* ... Content logic same as original Desktop ... */}
                            {/* Background Image (Optional with Fallback) */}
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`
                                        absolute inset-0 w-full h-full object-cover transition-all duration-700
                                        ${activeId === item.id ? 'opacity-40 scale-100' : 'opacity-30 blur-sm scale-110'}
                                    `}
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            )}

                            {/* Card Background Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />

                            {/* Content Container */}
                            <div className={`
                                h-full flex flex-col justify-end p-6 lg:p-10 relative z-10
                                ${activeId === item.id ? 'opacity-100' : 'opacity-0 lg:opacity-100'}
                            `}>
                                {/* Active State Content */}
                                {activeId === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.3 }}
                                    >
                                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                            {item.title}
                                        </h3>
                                        <div className="h-1 w-20 bg-blue-500 mb-6 rounded-full" />
                                        <p className="text-gray-200 text-lg mb-8 max-w-lg leading-relaxed">
                                            {item.description}
                                        </p>
                                        <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 backdrop-blur-sm">
                                            Learn More <ArrowRight size={18} />
                                        </button>
                                    </motion.div>
                                )}

                                {/* Collapsed State Title (Vertical for Desktop) */}
                                {activeId !== item.id && (
                                    <div className="hidden lg:flex items-center justify-center h-full absolute inset-0">
                                        <span className="-rotate-90 whitespace-nowrap text-white/50 font-semibold text-xl tracking-wider">
                                            {item.title}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Slider Indicator (Desktop) - Hidden on Mobile */}
                <div className="hidden lg:flex justify-center items-center">
                    <div className="w-64 h-1 bg-white/10 rounded-full relative overflow-hidden">
                        <motion.div
                            animate={{ x: `${(activeId - 1) * 100}%` }} // Assessing index based on ID (assuming sequential 1-5)
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute top-0 left-0 w-1/5 h-full bg-white rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
