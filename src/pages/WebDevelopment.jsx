import BreadCrumbs from "@/components/BreadCrumbs";
import React from "react";
import { href } from "react-router-dom";

import image1 from "../assets/services/service1.webp";
import ServiceDetail from "@/components/ServiceDetail";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import {
  IconDeviceMobile,
  IconLock,
  IconPalette,
  IconSearch,
  IconSettingsAutomation,
  IconShoppingCart,
} from "@tabler/icons-react";
import { Accordion } from "@/components/ui/accordion";
import { FaqSection } from "@/components/faq";
import { Cta4 } from "@/components/cta-4";

const WebDevelopment = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services" },
    { label: "Web Development" },
  ];

  const webDevelopment = {
    image: image1,
    alt: "Web Development Service",
    title: "Why Web Development is Important?",
    points: [
      "Expand Your Business",
      "Cost-Effective Marketing & Promotion",
      "Build Trust & Credibility ",
      "Boost Customer Engagement",
    ],
    description:
      "A strong online presence starts with a well-built website. It’s your digital storefront — always open, always ready to represent your business, attract new customers, and generate leads.",
  };

  const ourWeb = {
    features: [
      {
        title: "Custom Website Design",
        description:
          "Tailor-made layouts and visuals that perfectly match your brand’s identity and goals.",
        icon: <IconPalette />,
      },
      {
        title: "Mobile-First Development",
        description:
          "Optimized for flawless performance and responsiveness across all devices.",
        icon: <IconDeviceMobile />,
      },
      {
        title: "SEO Optimization",
        description:
          "Search-engine-friendly structure to help your site rank higher and attract more visitors.",
        icon: <IconSearch />,
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Fully functional online stores with secure payment gateways and smooth user experience.",
        icon: <IconShoppingCart />,
      },
      {
        title: "CMS Integration",
        description:
          "Easily manage and update your site with WordPress, Shopify, or a custom CMS.",
        icon: <IconSettingsAutomation />,
      },
      {
        title: "Fast & Secure Hosting",
        description:
          "Reliable hosting with high uptime, SSL encryption, and advanced security protocols.",
        icon: <IconLock />,
      },
    ],
  };

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

  return (
    <div>
      <BreadCrumbs headText={"Web Development"} items={breadcrumbItems} />
      <ServiceDetail data={webDevelopment} />
      <div className="bg-white">
        <h2 className="text-center font-bold text-4xl pt-5">Why Choose Us</h2>
        <FeaturesSectionWithHoverEffects data={ourWeb} />
      </div>
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our Website Service"
        items={webFaq}
      />
      <Cta4 title="Ready to Take Your Business Online?" description="Your website is more than just a digital address — it’s your brand’s first impression, sales engine, and growth partner. Let’s build a powerful, high-performing site that drives real results." buttonText="Get Started Today " buttonUrl="https://calendly.com/jatinnagar563/book-a-meeting" />
    </div>
  );
};

export default WebDevelopment;
