import React from "react";
import ServiceHero from "@/components/ServiceHero";
import ServiceVideoSection from "@/components/ServiceVideoSection";
import CLOUDINARY_ASSETS from "@/cloudinaryAssets";
import { FaqSection } from "@/components/faq";
import ServiceDetailList from "@/components/ServiceDetailList";
import LetsBuildCTA from "@/components/LetsBuildCTA";
import ContactSection from "@/components/ContactSection";
import GlassServiceGrid from "@/components/GlassServiceGrid";
import {
  Smartphone,
  TabletSmartphone,
  Layers,
  Rocket,
  ShieldCheck,
  CloudCog
} from "lucide-react";

const AppDevelopment = () => {
  const heroPoints = [
    {
      id: 1,
      title: "Cross-Platform Excellence",
      description: "Build once, run anywhere. We create high-performance apps that work seamlessly on both iOS and Android from a single codebase.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_1 // Ideally use App-specific image if available
    },
    {
      id: 2,
      title: "Native Performance",
      description: "Deliver buttery-smooth 60fps experiences with optimized code that utilizes the full power of the device hardware.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_2
    },
    {
      id: 3,
      title: "Intuitive UX/UI Design",
      description: "We design mobile interfaces that are not just beautiful, but are easy to navigate, ensuring high user retention rates.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_3
    },
    {
      id: 4,
      title: "Scalable Architecture",
      description: "From MVP to millions of users, our app backends are built to handle growth without compromising on speed or security.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_4
    }
  ];

  const appFaq = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The development time depends on features, complexity, and platforms. Simple apps may take 4–8 weeks, while complex projects can take several months."
    },
    {
      question: "Do you build for both iOS and Android?",
      answer:
        "Yes. We offer native development for both platforms and cross-platform solutions using modern frameworks like React Native and Flutter."
    },
    {
      question: "Will you help me publish the app?",
      answer:
        "Absolutely. We handle the submission process for both the Apple App Store and Google Play Store, including compliance and optimization."
    },
    {
      question: "Do you provide app maintenance?",
      answer:
        "Yes. We offer ongoing maintenance packages to keep your app updated, secure, and running smoothly on new OS versions."
    },
    {
      question: "Can you integrate my app with existing systems?",
      answer:
        "Yes. We specialize in API integrations, backend connections, and syncing with your current software or databases."
    },
    {
      question: "Will my app be secure?",
      answer:
        "Yes. We implement industry-standard security protocols, encryption, and authentication to protect user data."
    }
  ];

  const appServices = [
    { id: 1, text: "Custom iOS & Android Apps", link: "/services/custom-apps" },
    { id: 2, text: "Cross-Platform Development", link: "/services/cross-platform" },
    { id: 3, text: "UI/UX Design for Mobile", link: "/services/mobile-ui-ux" },
    { id: 4, text: "App Maintenance & Support", link: "/services/app-maintenance" },
    { id: 5, text: "Enterprise Mobile Solutions", link: "/services/enterprise-apps" },
    { id: 6, text: "Mobile Game Development", link: "/services/game-development" },
  ];

  const whyChooseUsData = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Custom App Design",
      description: "Visually stunning and intuitive interfaces designed for exceptional user experiences."
    },
    {
      icon: <TabletSmartphone className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "Seamless functionality across iOS, Android, and tablets using unified codebases."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure & Scalable",
      description: "Robust architecture with advanced security features to keep your app safe and reliable."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Smooth connectivity with third-party APIs, payment gateways, and backend systems."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance First",
      description: "Lightning-fast apps that load quickly and run smoothly, even under heavy usage."
    },
    {
      icon: <CloudCog className="w-6 h-6" />,
      title: "Store Deployment",
      description: "Hassle-free publishing and optimization for the Apple App Store and Google Play Store."
    }
  ];

  return (
    <div className="bg-[#01070f] min-h-screen">

      {/* Hero Section */}
      <ServiceHero
        title="App Development"
        subtitle="Why App Development is Important?"
        category="Mobile Development"
        points={heroPoints}
        gradientFrom="from-purple-200"
        gradientVia="via-purple-600"
        gradientTo="to-indigo-900"
      />

      {/* Video Section */}
      <ServiceVideoSection videoUrl={CLOUDINARY_ASSETS.WEB_DEVELOPMENT.BACKGROUND_VIDEO} />

      {/* Why Choose Us Text Section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm md:text-base font-medium mb-6">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Mobile apps are the bridge between your brand and your customers' pockets. We build experiences that engage, retain, and convert.
          </h2>
        </div>
      </div>

      {/* Why Choose Us Grid */}
      <GlassServiceGrid items={whyChooseUsData} />

      {/* Service Details */}
      <div className='container mx-auto px-4 py-12'>
        <ServiceDetailList title="Our Mobile Services" items={appServices} />
      </div>

      {/* FAQ Section */}
      <FaqSection
        title="10Sight FAQs"
        description="Answers to what clients usually ask about our App Services"
        items={appFaq}
      />

      {/* CTA Section */}
      <LetsBuildCTA />

      {/* Ready To Take Business Online CTA */}
      <ContactSection />
    </div>
  );
};

export default AppDevelopment;
