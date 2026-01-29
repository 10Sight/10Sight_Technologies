import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ServiceDetailList = ({ title, items }) => {
    const [activeHover, setActiveHover] = useState(null);

    return (
        <section className="py-16 md:py-24 border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                    {/* Left Side: Title */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-bold text-white sticky top-24 md:top-32">{title}</h2>
                    </div>

                    {/* Right Side: List */}
                    <div className="lg:w-2/3 flex flex-col relative" onMouseLeave={() => setActiveHover(null)}>
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setActiveHover(index)}
                                className="group relative flex items-center justify-between py-4 px-2 md:py-6 md:px-6 cursor-pointer border-b border-white/5 last:border-0 rounded-xl overflow-hidden"
                            >
                                {/* Sliding Background Highlight */}
                                {activeHover === index && (
                                    <motion.div
                                        layoutId={`active-bg-${title}`}
                                        className="absolute inset-0 bg-white/5 -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <div className="flex items-center gap-4 md:gap-10 w-full z-10">
                                    {/* Number Indicator */}
                                    <div className={`
                        w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 shrink-0
                        ${activeHover === index ? 'bg-blue-600 text-white scale-110 border-blue-500' : 'bg-[#112a4f] text-gray-400'}
                    `}>
                                        <span className="font-mono text-base md:text-lg font-bold">
                                            {String(item.id).padStart(2)}
                                        </span>
                                    </div>

                                    {/* Text Link */}
                                    <Link
                                        to={item.link || '#'}
                                        className={`
                        text-lg md:text-2xl font-medium transition-colors duration-300 relative inline-block
                        ${activeHover === index ? 'text-white' : 'text-gray-400'}
                    `}
                                    >
                                        {item.text}
                                        {/* Sliding Underline */}
                                        <span className={`
                        absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ease-out
                        ${activeHover === index ? 'w-full' : 'w-0'}
                    `} />
                                    </Link>
                                </div>

                                {/* Shared Sliding Arrow */}
                                <motion.div
                                    className="ml-2 md:ml-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: activeHover === index ? 1 : 0, x: activeHover === index ? 0 : -20 }}
                                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    <FaRegArrowAltCircleRight
                                        size={28}
                                        className="text-white w-5 h-5 md:w-7 md:h-7"
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailList;
