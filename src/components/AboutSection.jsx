import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

import about1 from "../assets/about/about1.jpg";

const AboutSection = ({ btn }) => {
  // Initialize AOS on mount


  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div className="flex bg-white flex-col px-[5vw] gap-8 lg:flex-row lg:justify-around items-center justify-center py-28 lg:pb-40">
      <div
        className="max-w-[28rem] w-full aspect-w-4 aspect-h-3 relative sm:mb-5 md:mb-0 sm:mr-16 md:mr-0 lg:mr-20"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="800"
      >
        <img src={about1} alt="image" className="w-full h-full object-cover rounded-xl shadow-md" />
      </div>
      <div className="max-w-[33rem] md:max-w-[30rem] md:mt-2">
        <h1
          className="sora-600 leading-[3rem] mb-4 text-4xl text-primary font-bold"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          About 10Sight Technologies
        </h1>
        <p
          className="sora-400 leading-[1.85rem] mb-5 text-[#535760]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200"
        >
          At 10Sight, we don’t just deliver services — we craft digital
          experiences that transform brands. Specializing in website
          development, social media management, and AI/ML solutions, we combine
          vision with innovation to help your business stand out in the digital
          world. Rooted in elegance and driven by technology, our mission is
          simple: Empower your growth with smart, stunning, and scalable
          solutions.
        </p>
        {/* <div
          className="flex my-12"
          ref={counterRef}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200"
        >
          <div className="w-[50%]">
            <p className="sora-600 text-5xl leading-[3rem] tracking-wide text-primary font-bold">
              {counterInView && <CountUp end={0} duration={2} suffix="+" />}
            </p>
            <p className="sora-400 text-primary">Happy Clients</p>
          </div>
          <div className="w-[50%]">
            <p className="sora-600 text-5xl leading-[3rem] tracking-wide text-primary font-bold">
              {counterInView && <CountUp end={0} duration={2} suffix="+" />}
            </p>
            <p className="sora-400 text-primary">Projects delivered</p>
          </div>
        </div> */}
        {btn && (
          <Link
            to={"/about-us"}
            className="rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1600"
          >
            More About Us
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
