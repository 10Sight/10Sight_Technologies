import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const GlassServiceGrid = ({ items = [] }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="pb-24 pt-8">
            <div className="container mx-auto px-4 md:px-8">
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative rounded-3xl border border-white/10 bg-[#0b1221]/40 backdrop-blur-md overflow-hidden"
                >
                    {/* Spotlight Overlay */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                        style={{
                            background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.15), transparent 40%)`
                        }}
                    />

                    <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3">
                        {items.map((item, index) => {
                            const isHovered = hoveredIndex === index;
                            const isBlurred = hoveredIndex !== null && hoveredIndex !== index;

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    className={`
                                        relative p-4 md:p-10 transition-all duration-500 ease-out flex flex-col items-start
                                        border-white/10
                                        
                                        border-r border-b
                                        ${/* Mobile (2 Cols): Remove Right on 2n, Remove Bottom on last 2 */ ''}
                                        [&:nth-child(2n)]:border-r-0
                                        [&:nth-last-child(-n+2)]:border-b-0

                                        ${/* Desktop (3 Cols): Reset & Apply New Logic */ ''}
                                        lg:[&:nth-child(2n)]:border-r
                                        lg:[&:nth-child(3n)]:border-r-0
                                        lg:[&:nth-last-child(-n+2)]:border-b
                                        lg:[&:nth-last-child(-n+3)]:border-b-0

                                        ${isBlurred ? 'blur-[2px] opacity-40 scale-95' : 'opacity-100 scale-100'}
                                        hover:bg-white/5
                                    `}
                                >

                                    {/* Icon Container with Glass Effect */}
                                    <div className={`
                                        w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                                        bg-white/5 border border-white/10 text-white
                                        transition-all duration-300
                                        ${isHovered ? 'bg-blue-600/20 border-blue-500/50 text-blue-400 scale-110' : ''}
                                    `}>
                                        {item.icon}
                                    </div>

                                    <h3 className={`text-xl font-bold mb-3 transition-colors ${isHovered ? 'text-white' : 'text-gray-200'}`}>
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlassServiceGrid;
