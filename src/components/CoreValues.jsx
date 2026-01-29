import React from "react";
import {
    Lightbulb,
    Atom,
    Target,
    Trophy,
    Network,
    TrendingUp,
    Workflow // Fallback for network/collaboration if needed
} from "lucide-react";

const CoreValues = () => {
    const values = [
        {
            title: "Innovation",
            description: "We constantly push the boundaries of technology and creativity to deliver smarter solutions.",
            icon: <Lightbulb className="w-6 h-6 text-white" />,
        },
        {
            title: "Integrity",
            description: "Honesty and transparency are at the core of everything we do—from communication to delivery.",
            icon: <Atom className="w-6 h-6 text-white" />,
        },
        {
            title: "Client Success",
            description: "We succeed when our clients succeed. Their growth is our biggest achievement.",
            icon: <Target className="w-6 h-6 text-white" />,
        },
        {
            title: "Excellence",
            description: "We are obsessed with quality and strive to exceed expectations in every project.",
            icon: <Trophy className="w-6 h-6 text-white" />,
        },
        {
            title: "Collaboration",
            description: "We work hand-in-hand with clients and teams to co-create effective, lasting solutions.",
            icon: <Workflow className="w-6 h-6 text-white" />, // Using Workflow as it looks like a tree/structure
        },
        {
            title: "Growth Mindset",
            description: "We embrace learning and adapt quickly to stay ahead in a fast-moving digital world.",
            icon: <TrendingUp className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <section className="py-20 bg-[#01070f] text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="mb-16">
                    <p className="text-gray-400 text-sm md:text-base mb-4 uppercase tracking-wider font-medium">
                        Our Values
                    </p>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-12">
                        The Core Values That Drive 10Sight
                    </h2>

                    {/* Divider with Label - simulating the image style */}
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-12">
                        <span className="whitespace-nowrap">Our Values</span>
                        <div className="h-[1px] w-full bg-white/10"></div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl p-4 md:p-8 flex flex-col items-start gap-4 md:gap-6 group overflow-hidden"
                        >
                            {/* Gradient Background - fades out to bottom right */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0b121c] via-[#0b121c] to-transparent opacity-100 z-0 rounded-2xl" />

                            {/* Thin gradient border simulation */}
                            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent -z-10" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors mb-4 md:mb-6">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-xl font-semibold mb-2 md:mb-3 leading-tight">{item.title}</h3>
                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoreValues;
