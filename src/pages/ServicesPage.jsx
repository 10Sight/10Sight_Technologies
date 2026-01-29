import React from "react";

import ServiceDetailList from "@/components/ServiceDetailList";
import LetsBuildCTA from "@/components/LetsBuildCTA";
import ContactSection from "@/components/ContactSection";

const ServicesPage = () => {
  const services = [
    {
      title: "Website Development",
      gradient: "from-green-400 to-green-900",
      description: "We build stunning, responsive websites that combine sleek design with powerful functionality.",
      link: "/services/web-development",
    },
    {
      title: "AI/ML Solutions",
      gradient: "from-red-300 to-red-900",
      description: "Leverage data and machine learning to automate processes and gain smarter business insights.",
      link: "/services/ai-ml-solutions",
    },
    {
      title: "Data Analysis",
      gradient: "from-indigo-300 to-indigo-900",
      description: "Unlock powerful insights from your data with our expert analysis services.",
      link: "/services/data-analysis",
    },
    {
      title: "Social Media Management",
      gradient: "from-teal-200 to-teal-800",
      description: "We help you build a strong, engaging presence across platforms like Instagram, Facebook, LinkedIn.",
      link: "/services/social-media-management",
    },
    {
      title: "App Devlopment",
      titleDisplay: "App Devlopment",
      gradient: "from-purple-300 to-blue-900",
      description: "From ideation to launch, we develop high-performance mobile apps tailored to your business goals.",
      link: "/services/app-development",
    },
    {
      title: "Custom Software",
      gradient: "from-cyan-200 to-cyan-800",
      description: "We design and develop tailor-made software solutions to meet your unique business needs.",
      link: "/services/custom-software",
    },
  ];

  const websiteServices = [
    { id: 1, text: "Custom Website Development", link: "/services/web-development" },
    { id: 2, text: "Performance & SEO-Ready Builds", link: "/services/web-development" },
    { id: 3, text: "Responsive, Scalable Architecture", link: "/services/web-development" },
    { id: 4, text: "CMS & Content Systems", link: "/services/web-development" },
  ];

  const aimlServices = [
    { id: 1, text: "AI-Powered Automation", link: "/services/ai-ml-solutions" },
    { id: 2, text: "Machine Learning Models", link: "/services/ai-ml-solutions" },
    { id: 3, text: "Data Driven Intelligence System", link: "/services/ai-ml-solutions" },
    { id: 4, text: "Smart Integration & Workflows", link: "/services/ai-ml-solutions" },
  ];

  const dataAnalysisServices = [
    { id: 1, text: "Data Collection & Structuring", link: "/services/data-analysis" },
    { id: 2, text: "Dashboard & Reporting Systems", link: "/services/data-analysis" },
    { id: 3, text: "Insight Extraction & Visualization", link: "/services/data-analysis" },
    { id: 4, text: "Performance & Behavior Analysis", link: "/services/data-analysis" },
  ];

  const socialMediaServices = [
    { id: 1, text: "Content Creation & Curation", link: "/services/social-media-management" },
    { id: 2, text: "Audience Engagement Strategies", link: "/services/social-media-management" },
    { id: 3, text: "Analytics & Performance Tracking", link: "/services/social-media-management" },
    { id: 4, text: "Platform-Specific Campaigns", link: "/services/social-media-management" },
  ];

  const appDevelopmentServices = [
    { id: 1, text: "iOS & Android Apps", link: "/services/app-development" },
    { id: 2, text: "Cross-Platform Solutions", link: "/services/app-development" },
    { id: 3, text: "User-Centric Design", link: "/services/app-development" },
    { id: 4, text: "App Store Deployment", link: "/services/app-development" },
  ];

  const customSoftwareServices = [
    { id: 1, text: "Bespoke Software Solutions", link: "/services/custom-software" },
    { id: 2, text: "System Integration", link: "/services/custom-software" },
    { id: 3, text: "Maintenance & Support", link: "/services/custom-software" },
    { id: 4, text: "Scalable Architecture", link: "/services/custom-software" },
  ];

  return (
    <div className="bg-[#01070f] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Capabilities</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Focused services designed to bring clarity, structure,
          and intelligence to digital products.
        </p>
      </section>

      {/* Services Horizontal Strip */}
      <section className="border-t border-b border-white/10 w-full overflow-hidden">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-1 p-8 group hover:bg-white/5 transition-colors cursor-pointer" // Hover effect
              >
                <h3 className="text-white font-medium mb-6 text-sm tracking-wide">{service.title}</h3>

                {/* Gradient Card */}
                <div className={`
                  w-full aspect-square rounded-2xl relative overflow-hidden
                  bg-gradient-to-br ${service.gradient}
                  opacity-90 group-hover:opacity-100 transition-opacity duration-500
                `}>
                  {/* Pseudo-element for the "cone" shine effect */}
                  <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-50 origin-center" />

                  {/* Center "Light" effect simulation */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1/2 bg-white/30 blur-md" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer or Remaining Content */}
      <div className="bg-[#01070f]">
        <ServiceDetailList
          title="Website Development"
          items={websiteServices}
        />
        <ServiceDetailList
          title="AI/ML Solutions"
          items={aimlServices}
        />
        <ServiceDetailList
          title="Data Analysis"
          items={dataAnalysisServices}
        />
        <ServiceDetailList
          title="Social Media Management"
          items={socialMediaServices}
        />
        <ServiceDetailList
          title="App Development"
          items={appDevelopmentServices}
        />
        <ServiceDetailList
          title="Custom Software"
          items={customSoftwareServices}
        />
      </div>

      {/* Let's Build CTA Section */}
      <LetsBuildCTA />
      <ContactSection />
    </div>
  );
};

export default ServicesPage;
