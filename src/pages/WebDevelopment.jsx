import GlassServiceGrid from "@/components/GlassServiceGrid";
import {
  PencilRuler,
  Smartphone,
  Search,
  ShoppingBag,
  Settings,
  ShieldCheck
} from "lucide-react";

import ServiceHero from "@/components/ServiceHero";
import React from "react";
import ServiceVideoSection from "@/components/ServiceVideoSection";
import CLOUDINARY_ASSETS from "@/cloudinaryAssets";
import { FaqSection } from "@/components/faq";
import ServiceDetailList from "@/components/ServiceDetailList";
import LetsBuildCTA from "@/components/LetsBuildCTA";
import ContactSection from "@/components/ContactSection";

const WebDevelopment = () => {
  const heroPoints = [
    {
      id: 1,
      title: "Custom Website Development",
      description: "Websites are built from the ground up based on project requirements, not templates. The focus is on clean structure, maintainable code, and layouts that support real business goals.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_1
    },
    {
      id: 2,
      title: "Performance & SEO-Ready Builds",
      description: "Websites are built from the ground up based on project requirements, not templates. The focus is on clean structure, maintainable code, and layouts that support real business goals.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_2
    },
    {
      id: 3,
      title: "Responsive, Scalable Architecture",
      description: "Websites are built from the ground up based on project requirements, not templates. The focus is on clean structure, maintainable code, and layouts that support real business goals.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_3
    },
    {
      id: 4,
      title: "CMS & Content Systems",
      description: "Websites are built from the ground up based on project requirements, not templates. The focus is on clean structure, maintainable code, and layouts that support real business goals.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_4
    }
  ];

  const webFaq = [
    {
      question: "How long does it take to develop a website?",
      answer:
        "The timeline depends on the project’s size and complexity. A standard business website typically takes 2–4 weeks, while larger, custom projects may take 6–8 weeks or more."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes. We offer flexible maintenance packages to ensure your website stays updated, secure, and fully functional after launch."
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can give your website a fresh, modern look while improving its performance, user experience, and SEO."
    },
    {
      question: "Will my website work on mobile devices?",
      answer:
        "Yes. We follow a mobile-first approach to ensure your website looks and works perfectly on smartphones, tablets, and desktops."
    },
    {
      question: "Do you optimize websites for SEO?",
      answer:
        "Yes. We build with SEO best practices from the ground up, ensuring your site is structured for better visibility in search engines."
    },
    {
      question: "What platforms do you work with?",
      answer:
        "We work with WordPress, Shopify, custom CMS solutions, and fully custom-coded websites depending on your needs."
    }
  ];

  const websiteServices = [
    { id: 1, text: "Business Website Development", link: "/services/business-website" },
    { id: 2, text: "E-Commerce Solutions", link: "/services/ecommerce" },
    { id: 3, text: "Custom Web Applications", link: "/services/custom-apps" },
    { id: 4, text: "Landing Page Design", link: "/services/landing-page" },
    { id: 5, text: "CMS Development", link: "/services/cms" },
    { id: 6, text: "Website Maintenance", link: "/services/maintenance" },
  ];

  const whyChooseUsData = [
    {
      icon: <PencilRuler className="w-6 h-6" />,
      title: "Custom Website Design",
      description: "Tailor-made layouts and visuals that perfectly match your brand’s identity and goals."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Development",
      description: "Optimized for flawless performance and responsiveness across all devices."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Search-engine-friendly structure to help your site rank higher and attract more visitors."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-Commerce Solutions",
      description: "Fully functional online stores with secure payment gateways and smooth user experience."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "CMS Integration",
      description: "Easily manage and update your site with WordPress, Shopify, or a custom CMS."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Fast & Secure Hosting",
      description: "Reliable hosting with high uptime, SSL encryption, and advanced security protocols."
    }
  ];

  return (
    <div className="bg-[#01070f] min-h-screen">

      {/* Hero Section */}
      <ServiceHero
        title="Web Development"
        subtitle="Why Web Development is Important?"
        category="Web Development"
        points={heroPoints}
      />

      {/* Video Section */}
      <ServiceVideoSection videoUrl={CLOUDINARY_ASSETS.WEB_DEVELOPMENT.BACKGROUND_VIDEO} />

      {/* Why Choose Us Text Section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm md:text-base font-medium mb-6">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            A strong online presence starts with a well-built website. It's your digital storefront — always open, always ready to represent your business, attract new customers, and generate leads.
          </h2>
        </div>
      </div>

      {/* Why Choose Us Grid */}
      <GlassServiceGrid items={whyChooseUsData} />

      {/* Service Details */}
      <div className='container mx-auto px-4 py-12'>
        <ServiceDetailList title="Our Web Services" items={websiteServices} />
      </div>

      {/* FAQ Section */}
      <FaqSection
        title="10Sight FAQs"
        description="Answers to what clients usually ask about our Web Services"
        items={webFaq}
      />

      {/* CTA Section */}
      <LetsBuildCTA />

      {/* Ready To Take Business Online CTA */}
      <ContactSection />
    </div>
  );
};

export default WebDevelopment;
