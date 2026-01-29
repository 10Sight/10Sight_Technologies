import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const MediaGrid = ({ items, className }) => {
    return (
        <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12", className)}>
            {items.map((item, index) => (
                <Link
                    key={index}
                    to={item.href || "#"}
                    className="relative group block rounded-3xl overflow-hidden aspect-square border border-white/5 transition-transform duration-300 hover:scale-[1.02]"
                >
                    {/* Background Layer */}
                    <div className="absolute inset-0 z-0">
                        {item.video ? (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                src={item.video}
                            />
                        ) : item.image ? (
                            <img
                                src={item.image}
                                alt={item.alt || "Contact Option"}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            // Smooth gradient fallback based on item color or default
                            <div
                                className={cn(
                                    "w-full h-full bg-gradient-to-br",
                                    item.colorClass || "from-gray-800 to-black"
                                )}
                            />
                        )}
                        {/* Center Shadow/Gradient Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content Layer (Icon, Text) */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4">
                        {item.icon && (
                            <div className="text-white bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-white/10 group-hover:bg-white/20 transition-colors">
                                {item.icon}
                            </div>
                        )}
                        {item.label && (
                            <span className="mt-3 text-white font-medium text-sm md:text-base tracking-wide">
                                {item.label}
                            </span>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MediaGrid;
