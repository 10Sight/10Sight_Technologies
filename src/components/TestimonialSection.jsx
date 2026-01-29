import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Client's Name",
        role: "Co-Founder of Xyz Company",
        text: "We came in with a messy structure and unclear goals. 10Sight didn't jump into design – they slowed the process down, asked the right questions, and rebuilt the site with logic. The final result feels intentional, not decorative.",
    },
    {
        name: "Client's Name",
        role: "Co-Founder of Xyz Company",
        text: "We came in with a messy structure and unclear goals. 10Sight didn't jump into design – they slowed the process down, asked the right questions, and rebuilt the site with logic. The final result feels intentional, not decorative.",
    },
    {
        name: "Client's Name",
        role: "Co-Founder of Xyz Company",
        text: "We came in with a messy structure and unclear goals. 10Sight didn't jump into design – they slowed the process down, asked the right questions, and rebuilt the site with logic. The final result feels intentional, not decorative.",
    },
    {
        name: "Client's Name",
        role: "Co-Founder of Xyz Company",
        text: "We came in with a messy structure and unclear goals. 10Sight didn't jump into design – they slowed the process down, asked the right questions, and rebuilt the site with logic. The final result feels intentional, not decorative.",
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] bg-[#0b1727]/40 border border-white/5 rounded-2xl p-6 md:p-8 mx-4 backdrop-blur-sm hover:border-blue-500/20 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-[#0b1727]" />
                <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-[#0b1727]" />
            </div>
            <div>
                <h4 className="text-white font-semibold text-base md:text-lg">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
            </div>
        </div>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-[15px]">
            {testimonial.text}
        </p>
    </div>
);

const MarqueeRow = ({ direction = "left", speed = 40 }) => (
    <div className="flex overflow-hidden relative w-full select-none gap-0">
        <motion.div
            className="flex flex-shrink-0 items-center justify-around gap-0"
            initial={{ x: direction === "left" ? 0 : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : 0 }}
            transition={{
                ease: "linear",
                duration: speed,
                repeat: Infinity,
            }}
        >
            {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
            ))}
        </motion.div>
        <motion.div
            className="flex flex-shrink-0 items-center justify-around gap-0"
            initial={{ x: direction === "left" ? 0 : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : 0 }}
            transition={{
                ease: "linear",
                duration: speed,
                repeat: Infinity,
            }}
        >
            {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`clone-${i}`} testimonial={t} />
            ))}
        </motion.div>
    </div>
);

const TestimonialSection = () => {
    return (
        <section className="bg-[#01070f] py-24 overflow-hidden relative border-t border-white/5">
            <div className="text-center mb-16 relative z-10 px-4">
                <span className="inline-block py-1 px-4 rounded-full bg-[#112a4f] text-blue-400 text-sm font-medium mb-6">
                    Feedback
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Trusted by teams
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Unfiltered feedback from ongoing and completed work by our partners
                </p>
            </div>

            <div className="relative">
                {/* Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#01070f] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#01070f] to-transparent z-10 pointer-events-none" />

                <div className="mb-8">
                    <MarqueeRow direction="left" speed={80} />
                </div>
                <div>
                    <MarqueeRow direction="right" speed={80} />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
