import React from "react";

import HeroSection1 from "@/components/hero-section-1";
import ServiceCard from "@/components/ServiceCard";
import AboutSection from "@/components/AboutSection";
import WorkingProcess from "@/components/WorkingProcess";
import { HoverEffect } from "@/components/ui/hover-effect";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

// Assets
import service1 from "../assets/services/service1.webp";
import icon1 from "../assets/icons/web.png";
import python from "../assets/stack/python.jpeg";
import TestimonialSlider from "@/components/testimonial-slider";
import ContactSection from "@/components/ContactSection";
import InfoGrid from "@/components/InfoGrid";

// Services Data
const services = [
  {
    title: "Website Development",
    icon: icon1,
    image: service1,
    link: "/services/website-development",
  },
  {
    title: "AI/ML Solution",
    icon: icon1,
    image: service1,
    link: "/services/ai-ml-solutions",
  },
  {
    title: "Social Media Management",
    icon: icon1,
    image: service1,
    link: "/services/social-media-management",
  },
  {
    title: "Data Analysis",
    icon: icon1,
    image: service1,
    link: "/services/data-analysis",
  },
];

// Why Choose Us Data
const whyChoose = [
  {
    icon: icon1,
    title: "Results-Driven Approach",
    description:
      "We focus on creating solutions that deliver measurable business growth. Every design, feature, and campaign is built with purpose.",
  },
  {
    icon: icon1,
    title: "Creative Meets Technical",
    description:
      "We merge creative UI with technical backend expertise to create seamless, scalable digital experiences.",
  },
  {
    icon: icon1,
    title: "Client-First Culture",
    description:
      "We prioritize clear communication and long-term partnerships. We're not just developers — we're collaborators.",
  },
  {
    icon: icon1,
    title: "Full-Service Expertise",
    description:
      "From websites to social media to AI/ML — everything under one roof, customized to your goals.",
  },
];

const whyChooseUs = {
  topTitle: "Why Choose Us",
  topSubheading: "Why 10Sight is Your Perfect Tech Partner",
  items: [
    {
      icon: "🤝",
      title: "Client-Centered Approach",
      desc: "We prioritize your vision and ensure our solutions align with your business goals.",
    },
    {
      icon: "🎯",
      title: "Tailored Solutions",
      desc: "We build strategies and tools that are unique to your brand, audience, and objectives.",
    },
    {
      icon: "🚀",
      title: "End-to-End Expertise",
      desc: "From idea to deployment, our expert team handles every stage with finesse.",
    },
    {
      icon: "📞",
      title: "Transparent Communication",
      desc: "No technical jargon—just honest, timely updates you can understand.",
    },
    {
      icon: "📈",
      title: "Scalable & Future-Proof",
      desc: "Our digital products adapt as your business grows, ensuring long-term value.",
    },
    {
      icon: "🛠️",
      title: "Reliable Support",
      desc: "We’re here before, during, and after launch to support you at every step.",
    },
  ],
};

const Home = () => {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <HeroSection1 />

      {/* Services Section */}
      <section className="flex flex-col items-center justify-center py-10 lg:mt-24">
        <h2
          className="sora-700 text-center mb-4 text-4xl leading-[3rem] md:leading-[3.3rem] text-primary font-bold"
          data-aos="fade-up"
        >
          Our awesome <br /> services to give you success
        </h2>
        <div className="grid gap-8 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 lg:px-8">
          {services.map((item, index) => (
            <ServiceCard key={index} data={item} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <AboutSection btn={true} />

      {/* Why Choose Us */}
      <InfoGrid data={whyChooseUs} />

      {/* Working Process Section */}
      <section className="text-center bg-white px-4 overflow-hidden">
        <h2
          className="font-bold text-4xl mb-8"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          Our working process
          <br /> on how to grow your business
        </h2>
        <WorkingProcess />
      </section>
      <TestimonialSlider />
      <ContactSection />
    </div>
  );
};

export default Home;
