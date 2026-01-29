import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroFeatureGrid = ({ points }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="lg:w-2/3 relative">
            {/* Unified Container for Border and Background */}
            <div
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0b1221]/40 backdrop-blur-md group"
                onMouseMove={(e) => {
                    const { currentTarget: target } = e;
                    const rect = target.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    target.style.setProperty("--mouse-x", `${x}px`);
                    target.style.setProperty("--mouse-y", `${y}px`);
                }}
            >

                {/* Spotlight Overlay */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.15), transparent 40%)`
                    }}
                />

                {/* --- Background Logo/Image Layer --- */}
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                >
                    {points.map((point, index) => (
                        <motion.img
                            key={point.id}
                            src={point.image}
                            alt="Background Feature"
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                            animate={{
                                opacity: hoveredIndex === index ? 0.8 : 0,
                                scale: hoveredIndex === index ? 1 : 0.9,
                                filter: hoveredIndex === index ? 'blur(0px) brightness(1.5)' : 'blur(20px) brightness(1)'
                            }}
                            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                            className="absolute w-[90%] h-auto object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.6)]"
                        />
                    ))}
                </div>

                {/* --- Grid Content --- */}
                <div
                    className="grid grid-cols-2 relative z-10"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {points.map((point, index) => {
                        const isHovered = hoveredIndex === index;
                        const isBlurred = hoveredIndex !== null && hoveredIndex !== index;

                        return (
                            <div
                                key={point.id}
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={`
                                    relative p-4 md:p-12 transition-all duration-500 ease-out
                                    border-white/10
                                    ${/* Item 1: Top Left */ index === 0 ? 'border-b border-r' : ''}
                                    ${/* Item 2: Top Right */ index === 1 ? 'border-b' : ''}
                                    ${/* Item 3: Bot Left */ index === 2 ? 'border-r' : ''}
                                    ${/* Item 4: Bot Right */ index === 3 ? '' : ''}
                                    ${isBlurred ? 'blur-[2px] opacity-40 scale-95' : 'opacity-100 scale-100'}
                                    hover:bg-white/5
                                `}
                            >
                                {/* Number Badge */}
                                <div className={`
                                    w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4 md:mb-6 text-lg md:text-xl font-bold border transition-colors duration-300
                                    ${isHovered
                                        ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                                        : 'bg-[#162137] text-gray-500 border-white/5'}
                                `}>
                                    {point.id}
                                </div>

                                {/* Content */}
                                <h3 className={`text-sm md:text-xl font-semibold mb-2 md:mb-3 transition-colors ${isHovered ? 'text-white' : 'text-gray-200'}`}>
                                    {point.title}
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HeroFeatureGrid;

