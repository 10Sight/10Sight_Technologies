import React from 'react';
import HeroFeatureGrid from './HeroFeatureGrid';
import ThreeScene from './ThreeScene';

const ServiceHero = ({
    title,
    subtitle,
    category,
    points,
    gradientFrom = "from-green-200",
    gradientVia = "via-green-600",
    gradientTo = "to-green-900",
    modelType
}) => {
    return (
        <section className="bg-[#01070f] pt-32 pb-16 md:pt-48 md:pb-24 px-4 overflow-hidden relative">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
                    {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
                </div>

                {/* Section Divider */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-gray-400 text-sm font-medium whitespace-nowrap">{category}</span>
                    <div className="h-[1px] w-full bg-white/10"></div>
                </div>

                {/* Content Layout */}
                <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* Left Side: Gradient Card */}
                    <div className="lg:w-1/3 relative min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} opacity-90`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        {modelType && (
                            <div className="absolute inset-0 z-10 w-full h-full">
                                <ThreeScene modelType={modelType} />
                            </div>
                        )}
                    </div>

                    {/* Right Side: 2x2 Grid with Hero Feature */}
                    <HeroFeatureGrid points={points} />

                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
