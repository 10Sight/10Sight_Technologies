import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const FeatureSection = ({
    label,
    linePosition = "right",
    imagePosition = "left",
    image,
    children,
    className,
}) => {
    return (
        <section className={cn("py-12 md:py-24 px-4 overflow-hidden", className)}>
            <div className="container mx-auto">
                {/* Label with Line - Full Width Top */}
                <div className="flex items-center gap-4 mb-12 w-full">
                    {linePosition === "left" && (
                        <div className="h-[1px] bg-white/20 flex-grow" />
                    )}

                    <span className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider whitespace-nowrap">
                        {label}
                    </span>

                    {linePosition === "right" && (
                        <div className="h-[1px] bg-white/20 flex-grow" />
                    )}
                    {/* Spacers for alignment balance if needed, but flex-grow on line handles it */}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div
                        className={cn(
                            "relative group order-first",
                            imagePosition === "right" ? "lg:order-last" : "lg:order-first"
                        )}
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            {image && (
                                <img
                                    src={image}
                                    alt={label || "Feature"}
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#01070f]/80 to-transparent" />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col justify-center">
                        {/* Main Content */}
                        <div className="text-lg text-gray-400 space-y-6">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
