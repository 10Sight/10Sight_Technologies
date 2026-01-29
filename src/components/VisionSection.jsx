import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CLOUDINARY_ASSETS } from '../cloudinaryAssets';

const visionItems = [
    {
        id: 1,
        text: "Strategy meets clarity",
        video: CLOUDINARY_ASSETS.VISION.STRATEGY_VIDEO,
        image: CLOUDINARY_ASSETS.VISION.STRATEGY_IMAGE,
        color: "from-blue-900 to-black"
    },
    {
        id: 2,
        text: "Vision Beyond Limits",
        video: CLOUDINARY_ASSETS.VISION.VISION_LIMITS_VIDEO,
        image: CLOUDINARY_ASSETS.VISION.VISION_LIMITS_IMAGE,
        color: "from-purple-900 to-black"
    }
];

const MediaItem = ({ item, opacity }) => {
    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 w-full h-full"
        >
            {/* Fallback Background Color */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

            {/* Image (Medium Priority) */}
            {item.image && (
                <img
                    src={item.image}
                    alt={item.text}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
            )}

            {/* Video (High Priority) */}
            {item.video && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
                    src={item.video}
                    onError={(e) => e.target.style.display = 'none'}
                />
            )}

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40" />
        </motion.div>
    );
};

const VisionSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Interpolate opacity for the first item (Active 0% - 50%, fade out by 60%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);
    // Interpolate opacity for the second item (Fade in from 40%, Active 60% - 100%)
    const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);

    // Text Scale Effect
    const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const scale2 = useTransform(scrollYProgress, [0.5, 1], [1.2, 1]);

    return (
        <section ref={containerRef} className="md:h-[175vh] sm:h-[150vh] h-[100vh] relative bg-[#01070f]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background Media Layers */}
                <div className="absolute inset-0 w-full h-full">
                    <MediaItem item={visionItems[0]} opacity={opacity1} />
                    <MediaItem item={visionItems[1]} opacity={opacity2} />
                </div>

                {/* Text Layers */}
                <div className="relative z-10 text-center px-4">
                    {/* Text 1 */}
                    <motion.div style={{ opacity: opacity1, scale: scale1 }} className="absolute inset-0 flex items-center justify-center -translate-y-1/2 top-1/2">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 drop-shadow-2xl">
                            {visionItems[0].text}
                        </h2>
                    </motion.div>

                    {/* Text 2 */}
                    <motion.div style={{ opacity: opacity2, scale: scale2 }} className="absolute inset-0 flex items-center justify-center -translate-y-1/2 top-1/2">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 drop-shadow-2xl">
                            {visionItems[1].text}
                        </h2>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default VisionSection;
