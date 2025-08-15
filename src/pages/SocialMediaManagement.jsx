import BreadCrumbs from "@/components/BreadCrumbs";
import React from "react";

import SocialMediaImg from "../assets/services/Social-Media-Management.jpg";
import ServiceDetail from "@/components/ServiceDetail";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconDeviceAnalytics,
  IconCalendarEvent,
  IconUsers,
} from "@tabler/icons-react";
import { FaqSection } from "@/components/faq";
import { Cta4 } from "@/components/cta-4";

const SocialMediaManagement = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services" },
    { label: "Social Media Management" },
  ];

  const socialMedia = {
    image: SocialMediaImg,
    alt: "Social Media Management Service",
    title: "Why Social Media Management is Important?",
    points: [
      "Build and Maintain a Strong Brand Presence",
      "Engage with Your Audience in Real Time",
      "Drive Traffic and Generate Leads",
      "Stay Ahead of Competitors",
    ],
    description:
      "Social media is where your customers spend their time. Effective management ensures your brand stays relevant, engages meaningfully with your audience, and turns followers into loyal customers.",
  };

  const ourSocial = {
    features: [
      {
        title: "Content Creation",
        description:
          "Eye-catching visuals, engaging captions, and posts that reflect your brand voice.",
        icon: <IconBrandInstagram />,
      },
      {
        title: "Platform Management",
        description:
          "We handle all major platforms — Instagram, Facebook, Twitter, LinkedIn, and more.",
        icon: <IconBrandFacebook />,
      },
      {
        title: "Audience Engagement",
        description:
          "Responding to comments, messages, and mentions to keep your community active.",
        icon: <IconUsers />,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Track growth, engagement, and ROI with detailed reports and insights.",
        icon: <IconDeviceAnalytics />,
      },
      {
        title: "Campaign Scheduling",
        description:
          "Plan and execute consistent posting schedules to keep your audience engaged.",
        icon: <IconCalendarEvent />,
      },
      {
        title: "Ad Campaign Management",
        description:
          "Targeted social media ads to reach the right audience and boost conversions.",
        icon: <IconBrandTwitter />,
      },
    ],
  };

  const socialFaq = [
    {
      question: "Which social media platforms do you manage?",
      answer:
        "We manage Instagram, Facebook, Twitter (X), LinkedIn, TikTok, and Pinterest, depending on your business goals.",
    },
    {
      question: "Will you create content for me?",
      answer:
        "Yes. We produce graphics, videos, captions, and hashtags tailored to your brand and audience.",
    },
    {
      question: "Do you respond to comments and messages?",
      answer:
        "Yes. We provide community management services to engage with your audience in real time.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We track metrics like engagement rate, follower growth, reach, clicks, and conversions, providing monthly reports.",
    },
    {
      question: "Can you run paid ads on social media?",
      answer:
        "Absolutely. We handle strategy, ad creation, targeting, and performance optimization for paid campaigns.",
    },
    {
      question: "How often will you post?",
      answer:
        "Posting frequency is based on your goals, but most clients see great results with 3–5 posts per week.",
    },
  ];

  return (
    <div>
      <BreadCrumbs headText={"Social Media Management"} items={breadcrumbItems} />
      <ServiceDetail data={socialMedia} />
      <div className="bg-white">
        <h2 className="text-center font-bold text-4xl pt-5">Why Choose Us</h2>
        <FeaturesSectionWithHoverEffects data={ourSocial} />
      </div>
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our Social Media Management Service"
        items={socialFaq}
      />
      <Cta4
        title="Ready to Grow Your Social Presence?"
        description="Let us handle your social media so you can focus on your business. From content creation to community management, we’ll make your brand shine online."
        buttonText="Boost My Social Media"
        buttonUrl="https://calendly.com/jatinnagar563/book-a-meeting"
      />
    </div>
  );
};

export default SocialMediaManagement;
