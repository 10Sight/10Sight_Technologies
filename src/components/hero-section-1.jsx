import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/videos/Reel Preview.mp4";
import { Link } from "react-router-dom";

const HeroSection1 = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section className="bg-gray-100 py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <div className="sm:flex sm:items-center sm:justify-between gap-8 text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary sm:w-2/3">
              Where Vision Meets Innovation
            </h1>
            <p className="mt-6 sm:mt-0 text-lg leading-8 text-primary sm:w-1/3">
              At 10Sight, we craft digital experiences that transform brands.
              From bespoke websites to AI-powered solutions and strategic social
              media management, we blend creativity with technology to drive
              growth and impact.
            </p>
          </div>

          <div className="mt-8 flex gap-x-4 justify-center sm:justify-start">
            <Link
              to="/contact-us"
              className="rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              Get started
            </Link>
            <Link
              to="/about-us"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 transition-all duration-1000 ease-in-out">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className={`mx-auto h-auto rounded-lg shadow-lg transition-all duration-1000 ease-in-out ${
            isInView ? "w-full" : "w-[70%]"
          }`}
        />
      </div>
    </section>
  );
};

export default HeroSection1;
