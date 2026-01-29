import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CLOUDINARY_ASSETS } from '../cloudinaryAssets';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Simplified modules
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/effect-cards'; // Commented out potentially crashing import

const content = [
    {
        title: "Our Mission",
        subtitle: "Empowering Growth",
        description: "To empower businesses with cutting-edge technology and creative strategies that drive real, measurable growth.",
        id: 1,
        image: CLOUDINARY_ASSETS.WHY_WE_EXIST.MISSION_IMAGE,
    },
    {
        title: "Our Value",
        subtitle: "Shaping the Future of Digital Possibilities",
        description: "We believe in integrity, innovation, and impact. We don't just build software; we build relationships and sustainable futures.",
        id: 2,
        image: CLOUDINARY_ASSETS.WHY_WE_EXIST.VALUE_IMAGE,
    },
    {
        title: "Our Vision",
        subtitle: "Global Innovation",
        description: "To be the global catalyst for digital transformation, setting new standards for quality, innovation, and client success.",
        id: 3,
        image: CLOUDINARY_ASSETS.WHY_WE_EXIST.VISION_IMAGE,
    },
];

const WhyWeExist = () => {
    const [activeId, setActiveId] = useState(2);

    return (
        <section className="bg-[#01070f] py-24 px-4 overflow-hidden border-t border-white/5 relative">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                    src={CLOUDINARY_ASSETS.WHY_WE_EXIST.BACKGROUND_VIDEO}
                    onError={(e) => e.target.style.display = 'none'}
                />
                <div className="absolute inset-0 bg-[#01070f]/80" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why We Exist</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        At 10Sight, we don't just deliver services — we craft digital experiences that transform brands.
                        Specializing in website development, social media management, and AI/ML solutions.
                    </p>
                </div>

                {/* Mobile View: Swiper (Single Card + Custom Stick) */}
                <div className="block lg:hidden mb-12">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1} // One card per view
                        grabCursor={true}
                        modules={[Autoplay]} // Added Autoplay module (Removed Pagination as requested previously)
                        className="w-full h-[450px]"
                        onSlideChange={(swiper) => setActiveId(swiper.activeIndex + 1)} // Sync state
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {content.map((item) => (
                            <SwiperSlide key={item.id} className="rounded-3xl overflow-hidden bg-[#1e2f45] border border-white/10 relative">
                                {/* Background Image */}
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                )}
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                                {/* Content */}
                                <div className="h-full flex flex-col justify-end p-8 relative z-20">
                                    <h3 className="font-bold text-white text-3xl mb-2">{item.title}</h3>
                                    <h4 className="text-lg text-blue-300 font-semibold mb-3">{item.subtitle}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                    <button className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 w-full py-3 rounded-xl text-base font-medium transition-colors backdrop-blur-md">
                                        Learn More
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Sliding Stick Indicator (Mobile) */}
                    <div className="flex justify-center items-center mt-6">
                        <div className="w-48 h-1 bg-white/10 rounded-full relative overflow-hidden">
                            <motion.div
                                animate={{ x: `${(activeId - 1) * 100}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute top-0 left-0 w-1/3 h-full bg-white rounded-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop View: Accordion (Existing Logic) */}
                <div
                    className="hidden lg:flex flex-row h-[350px] lg:h-[500px] gap-4 max-w-7xl mx-auto mb-12"
                >
                    {content.map((item) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            className={`
                                relative rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                                bg-[#1e2f45] border border-white/10 shadow-2xl
                                ${activeId === item.id ? 'flex-[2.5]' : 'flex-[1]'}
                            `}
                        >
                            {/* ... Content logic same as original Desktop ... */}
                            {/* Background Image */}
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`
                                        absolute inset-0 w-full h-full object-cover transition-transform duration-700
                                        ${activeId === item.id ? 'opacity-50 scale-100' : 'opacity-30 blur-sm scale-105'}
                                    `}
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            )}

                            {/* Card Background Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/60 pointer-events-none" />

                            {/* Content Container */}
                            <div className="h-full flex flex-col justify-between p-10 relative z-20">
                                {/* Top Title */}
                                <div>
                                    <h3 className="font-bold text-white text-3xl">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Bottom Content */}
                                <div className={`transition-all duration-300 transform ${activeId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    {activeId === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex flex-row items-center justify-between gap-4 mt-auto"
                                        >
                                            <div className="max-w-md">
                                                <h4 className="text-xl text-white font-semibold mb-2">{item.subtitle}</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <button className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors backdrop-blur-md whitespace-nowrap">
                                                Learn More
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Slider Indicator (Desktop) - Hidden on Mobile */}
                <div className="hidden lg:flex justify-center items-center">
                    <div className="w-48 h-1 bg-white/10 rounded-full relative overflow-hidden">
                        <motion.div
                            animate={{ x: `${(activeId - 1) * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute top-0 left-0 w-1/3 h-full bg-white rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeExist;
