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
  BarChart4,
  LineChart,
  PieChart,
  Database,
  TrendingUp,
  SearchCheck
} from "lucide-react";

const DataAnalytics = () => {
  const heroPoints = [
    {
      id: 1,
      title: "Actionable Intelligence",
      description: "Transform raw numbers into clear, actionable strategies. We help you move from 'what happened' to 'what should we do next'.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_1 // Ideally use Data-specific image if available
    },
    {
      id: 2,
      title: "Real-Time Dashboards",
      description: "Visualize your KPIs instantly with interactive dashboards that keep your finger on the pulse of your business performance.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_2
    },
    {
      id: 3,
      title: "Predictive Forecasting",
      description: "Look ahead with confidence. Our advanced models analyze historical trends to predict future opportunities and risks.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_3
    },
    {
      id: 4,
      title: "Data Integrity & Security",
      description: "Trust your data. We implement robust governance and cleaning processes to ensure accuracy, compliance, and security.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_4
    }
  ];

  const dataFaq = [
    {
      question: "What types of data can you analyze?",
      answer:
        "We handle diverse datasets including sales figures, customer behavior logs, financial reports, marketing metrics, and website analytics."
    },
    {
      question: "Can you create dashboards for my business?",
      answer:
        "Yes. We specialize in building custom, interactive dashboards using Power BI, Tableau, and Google Looker Studio for real-time monitoring."
    },
    {
      question: "Do you offer ongoing analysis?",
      answer:
        "Absolutely. We provide continuous monthly or quarterly analysis packages to track performance changes and refine strategies over time."
    },
    {
      question: "Will you help me interpret the data?",
      answer:
        "Yes. We don't just dump numbers on you. We provide executive summaries and clear explanations of what the data means for your business decisions."
    },
    {
      question: "Can you integrate data from different sources?",
      answer:
        "Yes. We can aggregate data from CRMs, ERPs, ad platforms, and spreadsheets into a single source of truth (Data Warehouse)."
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We adhere to strict data privacy standards (GDPR/CCPA compliant workflows) and use encrypted channels for all data handling."
    }
  ];

  const dataServices = [
    { id: 1, text: "Business Intelligence (BI)", link: "/services/bi" },
    { id: 2, text: "Data Visualization & Dashboards", link: "/services/data-viz" },
    { id: 3, text: "Predictive Analytics", link: "/services/predictive" },
    { id: 4, text: "Data Warehousing & ETL", link: "/services/etl" },
    { id: 5, text: "Big Data Solutions", link: "/services/big-data" },
    { id: 6, text: "Marketing Analytics", link: "/services/marketing-analytics" },
  ];

  const whyChooseUsData = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Collection & Cleaning",
      description: "We ensure your foundation is solid by meticulously gathering and sanitizing your data for accuracy."
    },
    {
      icon: <BarChart4 className="w-6 h-6" />,
      title: "Advanced Visualization",
      description: "Turning complex datasets into intuitive charts and graphs that anyone can understand."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend Identification",
      description: "Spotting emerging market shifts and internal patterns before your competitors do."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Setting up and monitoring the right KPIs to ensure you hit your strategic goals."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Strategic Insights",
      description: "Providing deep-dive analysis that answers specific business questions and guides strategy."
    },
    {
      icon: <SearchCheck className="w-6 h-6" />,
      title: "Data-Driven Culture",
      description: "Helping you foster a culture where decisions are backed by evidence, not guesswork."
    }
  ];

  return (
    <div className="bg-[#01070f] min-h-screen">

      {/* Hero Section */}
      <ServiceHero
        title="Data Analytics"
        subtitle="Why Data Analysis is Important?"
        category="Business Intelligence"
        points={heroPoints}
        gradientFrom="from-cyan-400"
        gradientVia="via-blue-500"
        gradientTo="to-teal-900"
        modelType="data"
      />

      {/* Video Section */}
      <ServiceVideoSection videoUrl={CLOUDINARY_ASSETS.WEB_DEVELOPMENT.BACKGROUND_VIDEO} />

      {/* Why Choose Us Text Section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm md:text-base font-medium mb-6">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Data is the new currency. But without analysis, it's just noise. We turn your raw data into a competitive advantage, revealing the clear path forward.
          </h2>
        </div>
      </div>

      {/* Why Choose Us Grid */}
      <GlassServiceGrid items={whyChooseUsData} />

      {/* Service Details */}
      <div className='container mx-auto px-4 py-12'>
        <ServiceDetailList title="Our Analytics Services" items={dataServices} />
      </div>

      {/* FAQ Section */}
      <FaqSection
        title="10Sight FAQs"
        description="Answers to what clients usually ask about our Analytics Services"
        items={dataFaq}
      />

      {/* CTA Section */}
      <LetsBuildCTA />

      {/* Ready To Take Business Online CTA */}
      <ContactSection />
    </div>
  );
};

export default DataAnalytics;
