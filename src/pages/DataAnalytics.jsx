import BreadCrumbs from "@/components/BreadCrumbs";
import React from "react";

import DataAnalystImg from "../assets/services/Data-Analyst.jpg";
import ServiceDetail from "@/components/ServiceDetail";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import {
  IconChartBar,
  IconDatabase,
  IconBrain,
  IconDeviceAnalytics,
  IconReportAnalytics,
  IconSearch,
} from "@tabler/icons-react";
import { FaqSection } from "@/components/faq";
import { Cta4 } from "@/components/cta-4";

const DataAnalytics = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services" },
    { label: "Data Analyst" },
  ];

  const dataAnalyst = {
    image: DataAnalystImg,
    alt: "Data Analyst Service",
    title: "Why Data Analysis is Important?",
    points: [
      "Make Informed Business Decisions",
      "Identify Trends and Opportunities",
      "Optimize Operations and Reduce Costs",
      "Measure and Improve Performance",
    ],
    description:
      "Data is the new currency of business. Effective analysis transforms raw numbers into actionable insights, helping you understand your market, customers, and performance so you can make smarter decisions with confidence.",
  };

  const ourData = {
    features: [
      {
        title: "Data Collection & Cleaning",
        description:
          "Accurate data starts with proper collection, cleaning, and preparation for analysis.",
        icon: <IconDatabase />,
      },
      {
        title: "Advanced Data Visualization",
        description:
          "Clear and engaging charts, dashboards, and reports to make complex data easy to understand.",
        icon: <IconChartBar />,
      },
      {
        title: "Predictive Analytics",
        description:
          "Use historical data to forecast trends and make proactive business decisions.",
        icon: <IconBrain />,
      },
      {
        title: "Business Intelligence",
        description:
          "Turn data into strategic insights that drive growth and efficiency.",
        icon: <IconDeviceAnalytics />,
      },
      {
        title: "Performance Tracking",
        description:
          "Monitor KPIs and performance metrics to stay aligned with your goals.",
        icon: <IconReportAnalytics />,
      },
      {
        title: "Data-Driven Strategy",
        description:
          "Leverage insights to create informed strategies and stay ahead of competitors.",
        icon: <IconSearch />,
      },
    ],
  };

  const dataFaq = [
    {
      question: "What types of data can you analyze?",
      answer:
        "We work with sales data, customer behavior data, financial reports, website analytics, marketing campaign results, and more.",
    },
    {
      question: "Can you create dashboards for my business?",
      answer:
        "Yes. We build custom dashboards using tools like Power BI, Tableau, or Google Data Studio for real-time insights.",
    },
    {
      question: "Do you offer ongoing data analysis services?",
      answer:
        "Absolutely. We provide monthly, quarterly, or project-based analysis depending on your needs.",
    },
    {
      question: "Will you help me interpret the data?",
      answer:
        "Yes. We don’t just deliver numbers — we explain what they mean and how to use them for better decision-making.",
    },
    {
      question: "Can you integrate data from multiple sources?",
      answer:
        "Yes. We can consolidate data from different platforms, CRMs, and databases into one unified report.",
    },
    {
      question: "Is my data secure with you?",
      answer:
        "Yes. We follow strict data privacy and security protocols to ensure your information remains confidential.",
    },
  ];

  return (
    <div>
      <BreadCrumbs headText={"Data Analyst"} items={breadcrumbItems} />
      <ServiceDetail data={dataAnalyst} />
      <div className="bg-white">
        <h2 className="text-center font-bold text-4xl pt-5">Why Choose Us</h2>
        <FeaturesSectionWithHoverEffects data={ourData} />
      </div>
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our Data Analysis Service"
        items={dataFaq}
      />
      <Cta4
        title="Turn Your Data Into Decisions"
        description="Stop guessing and start knowing. We’ll help you uncover insights hidden in your data and turn them into actionable strategies."
        buttonText="Analyze My Data"
        buttonUrl="https://calendly.com/jatinnagar563/book-a-meeting"
      />
    </div>
  );
};

export default DataAnalytics;
