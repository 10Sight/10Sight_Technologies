import BreadCrumbs from "@/components/BreadCrumbs";
import React from "react";

import AppDevImg from "../assets/services/App-Development .jpg";
import ServiceDetail from "@/components/ServiceDetail";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import {
  IconDeviceMobile,
  IconLock,
  IconPalette,
  IconCode,
  IconRocket,
  IconCloudUpload,
} from "@tabler/icons-react";
import { FaqSection } from "@/components/faq";
import { Cta4 } from "@/components/cta-4";

const AppDevelopment = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services" },
    { label: "App Development" },
  ];

  const appDevelopment = {
    image: AppDevImg,
    alt: "App Development Service",
    title: "Why App Development is Important?",
    points: [
      "Reach Customers Anywhere, Anytime",
      "Enhance User Engagement & Retention",
      "Boost Brand Recognition",
      "Increase Sales with Mobile Commerce",
    ],
    description:
      "Mobile apps have become essential tools for businesses to connect directly with customers. From streamlining services to creating personalized user experiences, a well-developed app can give your brand a competitive edge in today’s mobile-first world.",
  };

  const ourApp = {
    features: [
      {
        title: "Custom App Design",
        description:
          "Visually stunning and intuitive interfaces designed for exceptional user experiences.",
        icon: <IconPalette />,
      },
      {
        title: "Cross-Platform Development",
        description:
          "Build once, run anywhere — seamless apps for iOS, Android, and beyond.",
        icon: <IconDeviceMobile />,
      },
      {
        title: "Secure & Scalable",
        description:
          "Robust architecture with advanced security features to keep your app safe and reliable.",
        icon: <IconLock />,
      },
      {
        title: "API & Backend Integration",
        description:
          "Smooth connectivity with third-party services and custom backend systems.",
        icon: <IconCode />,
      },
      {
        title: "Performance Optimization",
        description:
          "Lightning-fast apps that load quickly and run smoothly, even under heavy usage.",
        icon: <IconRocket />,
      },
      {
        title: "App Store Deployment",
        description:
          "Hassle-free publishing and optimization for the Apple App Store and Google Play Store.",
        icon: <IconCloudUpload />,
      },
    ],
  };

  const appFaq = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The development time depends on features, complexity, and platforms. Simple apps may take 4–8 weeks, while complex projects can take several months.",
    },
    {
      question: "Do you build for both iOS and Android?",
      answer:
        "Yes. We offer native development for both platforms and cross-platform solutions using modern frameworks.",
    },
    {
      question: "Will you help me publish the app?",
      answer:
        "Absolutely. We handle the submission process for both the Apple App Store and Google Play Store, including compliance and optimization.",
    },
    {
      question: "Do you provide app maintenance?",
      answer:
        "Yes. We offer ongoing maintenance packages to keep your app updated, secure, and running smoothly.",
    },
    {
      question: "Can you integrate my app with existing systems?",
      answer:
        "Yes. We specialize in API integrations, backend connections, and syncing with your current software or databases.",
    },
    {
      question: "Will my app be secure?",
      answer:
        "Yes. We implement industry-standard security protocols, encryption, and authentication to protect user data.",
    },
  ];

  return (
    <div>
      <BreadCrumbs headText={"App Development"} items={breadcrumbItems} />
      <ServiceDetail data={appDevelopment} />
      <div className="bg-white">
        <h2 className="text-center font-bold text-4xl pt-5">Why Choose Us</h2>
        <FeaturesSectionWithHoverEffects data={ourApp} />
      </div>
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our App Development Service"
        items={appFaq}
      />
      <Cta4
        title="Ready to Launch Your App?"
        description="Your app could be the next big thing — let’s bring it to life with our expert development team. From idea to store launch, we’ve got you covered."
        buttonText="Get Started Now"
        buttonUrl="https://calendly.com/jatinnagar563/book-a-meeting"
      />
    </div>
  );
};

export default AppDevelopment;
