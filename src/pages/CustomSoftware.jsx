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
  Code2,
  MonitorSmartphone,
  Cloud,
  Puzzle,
  ShieldCheck,
  Headset
} from "lucide-react";

const CustomSoftware = () => {
  const heroPoints = [
    {
      id: 1,
      title: "Tailored to Your Vision",
      description: "Stop forcing your business into off-the-shelf boxes. We build software that adapts to your unique workflows, not the other way around.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_1 // Ideally use Software-specific image if available
    },
    {
      id: 2,
      title: "Enterprise-Grade Scalability",
      description: "Engineered for growth. Our solutions are built on robust architectures that handle increased loads without breaking a sweat.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_2
    },
    {
      id: 3,
      title: "Seamless Integration",
      description: "Connect the dots. We integrate new software perfectly with your existing legacy systems, CRMs, and third-party tools.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_3
    },
    {
      id: 4,
      title: "Future-Proof Technology",
      description: "Stay ahead of the curve. We use modern tech stacks and best practices to ensure your software remains relevant for years to come.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_4
    }
  ];

  const softwareFaq = [
    {
      question: "How long does it take to build custom software?",
      answer:
        "Timelines vary based on complexity. A robust MVP typically takes 3–4 months, while comprehensive enterprise systems may take 6+ months."
    },
    {
      question: "Can you integrate with my existing systems?",
      answer:
        "Yes. Integration is our specialty. We ensure seamless connectivity with your current ERP, CRM, and legacy databases."
    },
    {
      question: "Is custom software more expensive than off-the-shelf?",
      answer:
        "Initially, yes. However, it often provides better long-term ROI by eliminating licensing fees and increasing operational efficiency."
    },
    {
      question: "Will I own the source code?",
      answer:
        "Yes. Upon completion and final payment, you retain 100% ownership of the source code and intellectual property."
    },
    {
      question: "Do you provide training for my team?",
      answer:
        "Absolutely. We offer comprehensive training sessions and documentation to ensure your team is proficient with the new system."
    },
    {
      question: "What about maintenance after launch?",
      answer:
        "We offer flexible support packages including bug fixes, security updates, and feature enhancements to keep your software running smoothly."
    }
  ];

  const softwareServices = [
    { id: 1, text: "Enterprise Software Development", link: "/services/enterprise-software" },
    { id: 2, text: "SaaS Product Development", link: "/services/saas-development" },
    { id: 3, text: "Legacy System Modernization", link: "/services/legacy-modernization" },
    { id: 4, text: "API Development & Integration", link: "/services/api-development" },
    { id: 5, text: "Cloud Application Development", link: "/services/cloud-apps" },
    { id: 6, text: "Software Consulting & MVP", link: "/services/software-consulting" },
  ];

  const whyChooseUsData = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Precision Engineering",
      description: "We write clean, efficient, and maintainable code that powers your business logic perfectly."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "Multi-Platform Support",
      description: "Ensuring your software works flawlessly across web, mobile, and desktop environments."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native Solutions",
      description: "Leveraging the power of AWS, Azure, or Google Cloud for unmatched reliability and speed."
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Smart Integrations",
      description: "Eliminating silos by connecting your essential business tools into one cohesive ecosystem."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Ironclad Security",
      description: "Implementing industry-standard security protocols to keep your sensitive corporate data safe."
    },
    {
      icon: <Headset className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Our partnership doesn't end at launch. We're here to support your growth every step of the way."
    }
  ];

  return (
    <div className="bg-[#01070f] min-h-screen">

      {/* Hero Section */}
      <ServiceHero
        title="Custom Software Development"
        subtitle="Why Custom Software is Important?"
        category="Software Engineering"
        points={heroPoints}
        gradientFrom="from-emerald-400"
        gradientVia="via-cyan-500"
        gradientTo="to-blue-900"
      />

      {/* Video Section */}
      <ServiceVideoSection videoUrl={CLOUDINARY_ASSETS.WEB_DEVELOPMENT.BACKGROUND_VIDEO} />

      {/* Why Choose Us Text Section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm md:text-base font-medium mb-6">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Off-the-shelf software solves everyone's problems, which means it solves nobody's perfectly. We build the exact tool your business needs to scale.
          </h2>
        </div>
      </div>

      {/* Why Choose Us Grid */}
      <GlassServiceGrid items={whyChooseUsData} />

      {/* Service Details */}
      <div className='container mx-auto px-4 py-12'>
        <ServiceDetailList title="Our Development Services" items={softwareServices} />
      </div>

      {/* FAQ Section */}
      <FaqSection
        title="10Sight FAQs"
        description="Answers to what clients usually ask about our Software Services"
        items={softwareFaq}
      />

      {/* CTA Section */}
      <LetsBuildCTA />

      {/* Ready To Take Business Online CTA */}
      <ContactSection />
    </div>
  );
};

export default CustomSoftware;
