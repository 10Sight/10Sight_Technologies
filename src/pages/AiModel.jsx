import BreadCrumbs from "@/components/BreadCrumbs";
import React from "react";

import AiModelImg from "../assets/services/Ai-Ml-Models.webp";
import ServiceDetail from "@/components/ServiceDetail";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import {
  IconCpu,
  IconBrain,
  IconRobot,
  IconDeviceAnalytics,
  IconDatabase,
  IconSearch,
} from "@tabler/icons-react";
import { FaqSection } from "@/components/faq";
import { Cta4 } from "@/components/cta-4";

const AiModel = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services" },
    { label: "AI & ML Models" },
  ];

  const aiMlDetails = {
    image: AiModelImg,
    alt: "AI & ML Models Service",
    title: "Why AI & ML Models are Important?",
    points: [
      "Automate Complex Processes",
      "Predict Outcomes with High Accuracy",
      "Personalize User Experiences",
      "Unlock New Business Opportunities",
    ],
    description:
      "Artificial Intelligence and Machine Learning are transforming industries by enabling smarter decision-making, automation, and personalized experiences. From predictive analytics to intelligent automation, AI & ML can help you innovate and stay ahead of the competition.",
  };

  const ourAiMl = {
    features: [
      {
        title: "Custom AI Model Development",
        description:
          "Build AI models tailored to your specific business challenges and data.",
        icon: <IconBrain />,
      },
      {
        title: "Machine Learning Algorithms",
        description:
          "Implement supervised, unsupervised, and reinforcement learning algorithms for optimal results.",
        icon: <IconCpu />,
      },
      {
        title: "Natural Language Processing (NLP)",
        description:
          "Develop solutions that understand and process human language for chatbots, sentiment analysis, and more.",
        icon: <IconRobot />,
      },
      {
        title: "Predictive Analytics",
        description:
          "Forecast trends, customer behavior, and market changes with data-driven insights.",
        icon: <IconDeviceAnalytics />,
      },
      {
        title: "Data Preparation & Cleaning",
        description:
          "Ensure your data is clean, structured, and ready for AI model training.",
        icon: <IconDatabase />,
      },
      {
        title: "Model Optimization",
        description:
          "Fine-tune and optimize AI/ML models for maximum accuracy and performance.",
        icon: <IconSearch />,
      },
    ],
  };

  const aiMlFaq = [
    {
      question: "What types of AI & ML models can you build?",
      answer:
        "We develop predictive models, recommendation systems, natural language processing solutions, computer vision models, and more based on your needs.",
    },
    {
      question: "Do I need a lot of data to start with AI & ML?",
      answer:
        "Not necessarily. While more data can improve model accuracy, we can work with smaller datasets using pre-trained models and transfer learning.",
    },
    {
      question: "Can you integrate AI models into my existing systems?",
      answer:
        "Yes. We can deploy AI & ML models into your current software, website, or mobile app for seamless integration.",
    },
    {
      question: "How long does it take to build an AI model?",
      answer:
        "The timeline depends on complexity, data availability, and required accuracy. Most projects take from 4 weeks to several months.",
    },
    {
      question: "Do you provide ongoing model maintenance?",
      answer:
        "Yes. We offer continuous monitoring, retraining, and optimization to ensure the AI model remains accurate over time.",
    },
    {
      question: "Is my data safe when used for AI model training?",
      answer:
        "Absolutely. We follow strict data security protocols and comply with relevant privacy regulations.",
    },
  ];

  return (
    <div>
      <BreadCrumbs headText={"AI & ML Models"} items={breadcrumbItems} />
      <ServiceDetail data={aiMlDetails} />
      <div className="bg-white">
        <h2 className="text-center font-bold text-4xl pt-5">Why Choose Us</h2>
        <FeaturesSectionWithHoverEffects data={ourAiMl} />
      </div>
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our AI & ML Model Development Service"
        items={aiMlFaq}
      />
      <Cta4
        title="Bring AI to Your Business"
        description="Harness the power of Artificial Intelligence and Machine Learning to automate tasks, predict outcomes, and gain a competitive advantage."
        buttonText="Start My AI Project"
        buttonUrl="https://calendly.com/jatinnagar563/book-a-meeting"
      />
    </div>
  );
};

export default AiModel;
