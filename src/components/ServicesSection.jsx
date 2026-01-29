import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, BarChart3, Share2, Square, Sparkles, Database, Triangle } from 'lucide-react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { CLOUDINARY_ASSETS } from '../cloudinaryAssets';

const services = [
    {
        id: 1,
        title: "Website Development",
        link: "/services/web-development",
        icon: Square,
        video: CLOUDINARY_ASSETS.SERVICES.WEB_DEV_VIDEO,
        color: "from-blue-600 to-cyan-500"
    },
    {
        id: 2,
        title: "AI/ML Solutions",
        link: "/services/ai-ml-models",
        icon: Sparkles,
        video: CLOUDINARY_ASSETS.SERVICES.AI_ML_VIDEO,
        color: "from-purple-600 to-pink-500"
    },
    {
        id: 3,
        title: "Data Analysis",
        link: "/services/data-analytics",
        icon: Database,
        video: CLOUDINARY_ASSETS.SERVICES.DATA_ANALYSIS_VIDEO,
        color: "from-emerald-600 to-teal-500"
    },
    {
        id: 4,
        title: "Social Media Management",
        link: "/services/social-media-management",
        icon: Triangle,
        video: CLOUDINARY_ASSETS.SERVICES.SOCIAL_MEDIA_VIDEO,
        color: "from-orange-600 to-red-500"
    }
];

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(services[0]);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section className="bg-[#01070f] py-24 px-4 overflow-hidden relative">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100" // Low opacity for subtle effect
                    src={CLOUDINARY_ASSETS.SERVICES.BACKGROUND_VIDEO}
                    onError={(e) => e.target.style.display = 'none'}
                />
                <div className="absolute inset-0 bg-[#01070f]/80" /> {/* Overlay to blend with theme */}
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">

                    {/* Column 1: Heading */}
                    <div className="lg:col-span-2 text-center lg:text-left relative">
                        <Link to="/services" className="sticky top-5 inline-block lg:block w-fit mx-auto lg:mx-0">
                            <h2 className="text-4xl md:text-5xl font-bold text-white hover:text-blue-500 transition-colors duration-300">Services</h2>
                        </Link>
                    </div>

                    {/* Column 2: Service List */}
                    <div
                        className="lg:col-span-6 flex flex-col pt-2 relative" // Added relative here
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                onMouseEnter={() => setActiveService(service)}
                                onClick={() => setActiveService(service)} // Add click for mobile
                                className="group relative z-0 flex flex-col justify-center cursor-pointer py-5 border-b border-white/5"
                            // Removed redundant inline style
                            >
                                {/* Sliding Background Highlight */}
                                {activeService.id === service.id && (
                                    <motion.div
                                        layoutId="active-bg"
                                        className="absolute inset-0 bg-white/5 -z-10 rounded-lg"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <div className="flex items-center justify-between w-full pl-4 pr-12 z-10"> {/* Added padding-right for arrow */}
                                    <div className="flex items-center gap-6 transition-transform duration-300 group-hover:translate-x-2 w-full"> {/* Added w-full */}
                                        {/* Number Indicator */}
                                        <div className={`
                                        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 shrink-0
                                        ${activeService.id === service.id ? 'bg-blue-600 text-white scale-110 border-blue-500' : 'bg-[#112a4f] text-gray-400'}
                                    `}>
                                            <span className={`
                                            font-mono text-base font-bold transition-opacity duration-300
                                            ${(!isHovering || activeService.id === service.id) ? 'opacity-100' : 'opacity-0'}
                                        `}>
                                                {String(index + 1).padStart(2)}
                                            </span>
                                        </div>

                                        <Link
                                            to={service.link}
                                            className={`
                                            text-xl md:text-2xl font-medium transition-colors duration-300 relative inline-block
                                            ${activeService.id === service.id ? 'text-white' : 'text-gray-500'}
                                        `}
                                        >
                                            {service.title}
                                            {/* Sliding Underline */}
                                            <span className={`
                                                absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ease-out
                                                ${activeService.id === service.id ? 'w-full' : 'w-0'}
                                            `} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Shared Sliding Arrow - Positioned Absolute Right */}
                                {activeService.id === service.id && (
                                    <motion.div
                                        layoutId="active-arrow"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20" // Centered vertically
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: isHovering || activeService.id === service.id ? 1 : 0, x: isHovering || activeService.id === service.id ? 0 : -20 }} // Show on active state too for mobile
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                            opacity: { duration: 0.2 }
                                        }}
                                    >
                                        <FaRegArrowAltCircleRight
                                            size={30}
                                            className="text-white"
                                        />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Column 3: Video Preview */}
                    <div className="lg:col-span-4 h-[300px] lg:h-[500px] relative sticky top-32">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-3xl overflow-hidden bg-[#0b1727]"
                            >
                                {/* Video Element */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover relative z-10"
                                    src={activeService.video}
                                    onError={(e) => e.target.style.display = 'none'}
                                />

                                {/* Fallback Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-20 -z-0`} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
