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
  Share2,
  Heart,
  MessageCircle,
  BarChart3,
  CalendarClock,
  Megaphone
} from "lucide-react";

const SocialMediaManagement = () => {
  const heroPoints = [
    {
      id: 1,
      title: "Strategic Brand Growth",
      description: "We craft data-driven strategies that amplify your voice, increase brand awareness, and turn casual browsers into loyal followers.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_1 // Ideally use Social-specific image if available
    },
    {
      id: 2,
      title: "Content That Connects",
      description: "From scroll-stopping visuals to compelling copy, we create content that resonates deeply with your target audience.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_2
    },
    {
      id: 3,
      title: "Community Engagement",
      description: "Building relationships is key. We actively manage comments, messages, and interactions to foster a thriving community around your brand.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_3
    },
    {
      id: 4,
      title: "Performance Analytics",
      description: "We don't just post; we measure. Get detailed insights on reach, engagement, and conversion to constantly optimize performance.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_4
    }
  ];

  const socialFaq = [
    {
      question: "Which social media platforms do you manage?",
      answer:
        "We manage Instagram, Facebook, Twitter (X), LinkedIn, TikTok, and Pinterest, strategically selecting platforms that align with your business goals."
    },
    {
      question: "Will you create the content for us?",
      answer:
        "Yes. Our team produces high-quality graphics, videos, captions, and hashtags tailored to your brand voice and aesthetic."
    },
    {
      question: "Do you respond to comments and messages?",
      answer:
        "Yes. We provide comprehensive community management, engaging with your audience in real-time to build trust and loyalty."
    },
    {
      question: "How do you measure success?",
      answer:
        "We track key metrics like engagement rate, follower growth, reach, and click-through rates, providing transparent monthly reports."
    },
    {
      question: "Can you run paid ads on social media?",
      answer:
        "Absolutely. We handle end-to-end ad management, from creative design and targeting to budget optimization and performance tracking."
    },
    {
      question: "How often will you post?",
      answer:
        "Posting frequency is customized based on your package and goals, but we typically recommend a consistent schedule of 3–5 high-quality posts per week."
    }
  ];

  const socialServices = [
    { id: 1, text: "Strategy & Content Planning", link: "/services/smm-strategy" },
    { id: 2, text: "Content Creation (Photo/Video)", link: "/services/content-creation" },
    { id: 3, text: "Community Management", link: "/services/community-management" },
    { id: 4, text: "Paid Social Advertising", link: "/services/paid-social" },
    { id: 5, text: "Influencer Marketing", link: "/services/influencer-marketing" },
    { id: 6, text: "Analytics & Reporting", link: "/services/social-analytics" },
  ];

  const whyChooseUsData = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Amplify Your Voice",
      description: "Strategic campaigns designed to maximize your reach and ensure your message is heard."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Multi-Platform Mastery",
      description: "Expertise across all major platforms including Instagram, LinkedIn, TikTok, and Twitter."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Audience Connection",
      description: "We build authentic connections that turn passive viewers into active brand advocates."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Active Engagement",
      description: "Real-time responses and interaction management to keep your community buzzing."
    },
    {
      icon: <CalendarClock className="w-6 h-6" />,
      title: "Consistent Presence",
      description: "Reliable scheduling ensures your brand stays top-of-mind without you lifting a finger."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Results",
      description: "Every decision is backed by analytics to ensure continuous growth and ROI."
    }
  ];

  return (
    <div className="bg-[#01070f] min-h-screen">

      {/* Hero Section */}
      <ServiceHero
        title="Social Media Management"
        subtitle="Why Social Media Management is Important?"
        category="Digital Marketing"
        points={heroPoints}
        gradientFrom="from-orange-400"
        gradientVia="via-pink-600"
        gradientTo="to-purple-900"
      />

      {/* Video Section */}
      <ServiceVideoSection videoUrl={CLOUDINARY_ASSETS.WEB_DEVELOPMENT.BACKGROUND_VIDEO} />

      {/* Why Choose Us Text Section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm md:text-base font-medium mb-6">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            In a digital-first world, your social media profile is your new business card. We help you make a lasting impression, build trust, and drive meaningful growth.
          </h2>
        </div>
      </div>

      {/* Why Choose Us Grid */}
      <GlassServiceGrid items={whyChooseUsData} />

      {/* Service Details */}
      <div className='container mx-auto px-4 py-12'>
        <ServiceDetailList title="Our Social Services" items={socialServices} />
      </div>

      {/* FAQ Section */}
      <FaqSection
        title="10Sight FAQs"
        description="Answers to what clients usually ask about our Social Media Services"
        items={socialFaq}
      />

      {/* CTA Section */}
      <LetsBuildCTA />

      {/* Ready To Take Business Online CTA */}
      <ContactSection />
    </div>
  );
};

export default SocialMediaManagement;
