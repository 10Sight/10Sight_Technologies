import BreadCrumbs from "@/components/BreadCrumbs";
import React from "react";

import image1 from "../assets/services/service1.webp";
import ServiceDetail from "@/components/ServiceDetail";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import {
  IconTools,
  IconDeviceDesktopCode,
  IconCloud,
  IconPuzzle,
  IconLock,
  IconRocket,
} from "@tabler/icons-react";
import { FaqSection } from "@/components/faq";
import { Cta4 } from "@/components/cta-4";

const CustomSoftware = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services" },
    { label: "Custom Software Development" },
  ];

  const softwareDetails = {
    image: image1,
    alt: "Custom Software Development Service",
    title: "Why Custom Software is Important?",
    points: [
      "Tailored Solutions for Your Business",
      "Scalable and Future-Ready",
      "Integrates Seamlessly with Existing Systems",
      "Improves Efficiency & Productivity",
    ],
    description:
      "Custom software is designed specifically to fit your unique business processes, helping you streamline operations, enhance productivity, and scale with confidence. Unlike off-the-shelf solutions, custom software evolves with your business and offers unmatched flexibility.",
  };

  const ourSoftware = {
    features: [
      {
        title: "Fully Customized Development",
        description:
          "We build software from the ground up to meet your exact requirements and goals.",
        icon: <IconDeviceDesktopCode />,
      },
      {
        title: "Scalable Architecture",
        description:
          "Designed to grow with your business without compromising performance.",
        icon: <IconRocket />,
      },
      {
        title: "Cloud-Based Solutions",
        description:
          "Access your software anytime, anywhere with secure cloud infrastructure.",
        icon: <IconCloud />,
      },
      {
        title: "Seamless Integrations",
        description:
          "Connect your software with CRM, ERP, and other tools you already use.",
        icon: <IconPuzzle />,
      },
      {
        title: "Robust Security",
        description:
          "Advanced security protocols to protect sensitive business data.",
        icon: <IconLock />,
      },
      {
        title: "Ongoing Support & Maintenance",
        description:
          "Continuous updates and improvements to keep your software running smoothly.",
        icon: <IconTools />,
      },
    ],
  };

  const softwareFaq = [
    {
      question: "How long does it take to build custom software?",
      answer:
        "The timeline depends on complexity and features. Small projects may take 1–3 months, while larger systems can take 6 months or more.",
    },
    {
      question: "Can you integrate custom software with my existing systems?",
      answer:
        "Yes. We specialize in building software that integrates seamlessly with your current tools and workflows.",
    },
    {
      question: "Is custom software more expensive than off-the-shelf solutions?",
      answer:
        "While initial costs may be higher, custom software offers better ROI over time by reducing inefficiencies and avoiding licensing fees.",
    },
    {
      question: "Will I own the source code?",
      answer:
        "Yes. You’ll have full ownership of your custom software and its source code.",
    },
    {
      question: "Do you provide training for my team?",
      answer:
        "Absolutely. We provide hands-on training to ensure your team can use the software effectively.",
    },
    {
      question: "Can you maintain and update the software after launch?",
      answer:
        "Yes. We offer long-term support packages for updates, bug fixes, and feature enhancements.",
    },
  ];

  return (
    <div>
      <BreadCrumbs headText={"Custom Software Development"} items={breadcrumbItems} />
      <ServiceDetail data={softwareDetails} />
      <div className="bg-white">
        <h2 className="text-center font-bold text-4xl pt-5">Why Choose Us</h2>
        <FeaturesSectionWithHoverEffects data={ourSoftware} />
      </div>
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our Custom Software Development Service"
        items={softwareFaq}
      />
      <Cta4
        title="Let’s Build Your Custom Software"
        description="From concept to deployment, we create custom software that fits your business perfectly and evolves with your growth."
        buttonText="Start My Project"
        buttonUrl="#"
      />
    </div>
  );
};

export default CustomSoftware;
