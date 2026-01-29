import React, { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";

// Lazy load below-the-fold components
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const WhyWeExist = lazy(() => import("@/components/WhyWeExist"));
const VisionSection = lazy(() => import("@/components/VisionSection"));


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Section - Kept static for SEO/LCP */}
      <ServicesSection />

      {/* Lazy loaded sections */}
      <Suspense fallback={<div className="h-20" />}>
        <VisionSection />
        <WhyWeExist />
        <WhyChooseUs />
        <TestimonialSection />
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Home;
