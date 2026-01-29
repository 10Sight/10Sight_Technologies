import React from 'react';

const ServiceVideoSection = ({
    videoUrl,
    imageUrl,
    fallbackColor = "#0b1221"
}) => {
    return (
        <section className="py-16 md:py-24 bg-[#01070f] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center group"
                    style={{ backgroundColor: fallbackColor }}
                >

                    {/* Media Render Logic */}
                    {videoUrl ? (
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    ) : imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="Service Video Thumbnail"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : null}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

                    {/* Content */}
                    <div className="relative z-10 text-center p-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceVideoSection;
