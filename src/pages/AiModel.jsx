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
  BrainCircuit,
  Cpu,
  Bot,
  LineChart,
  Database,
  Search
} from "lucide-react";

const AiModel = () => {
  const heroPoints = [
    {
      id: 1,
      title: "Intelligent Process Automation",
      description: "Automate repetitive tasks and complex workflows with smart AI agents that reduce operational costs and human error.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_1 // Ideally use AI-specific image if available, fallback to existing
    },
    {
      id: 2,
      title: "Predictive Analytics & Insights",
      description: "Transform raw data into actionable forecasts. Anticipate market trends and customer behavior with high-precision ML models.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_2
    },
    {
      id: 3,
      title: "NLP & Conversational AI",
      description: "Build chatbots and virtual assistants that understand context, sentiment, and intent to deliver human-like support.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_3
    },
    {
      id: 4,
      title: "Computer Vision Solutions",
      description: "Enable your systems to 'see' and interpret visual data for quality control, security, and automated recognition.",
      image: CLOUDINARY_ASSETS.WEB_DEVELOPMENT.POINT_4
    }
  ];

  const aiFaq = [
    {
      question: "What types of AI & ML models can you build?",
      answer:
        "We develop predictive models, recommendation systems, natural language processing solutions, computer vision models, and more based on your needs."
    },
    {
      question: "Do I need a lot of data to start with AI & ML?",
      answer:
        "Not necessarily. While more data can improve model accuracy, we can work with smaller datasets using pre-trained models and transfer learning."
    },
    {
      question: "Can you integrate AI models into my existing systems?",
      answer:
        "Yes. We can deploy AI & ML models into your current software, website, or mobile app for seamless integration."
    },
    {
      question: "How long does it take to build an AI model?",
      answer:
        "The timeline depends on complexity, data availability, and required accuracy. Most projects take from 4 weeks to several months."
    },
    {
      question: "Do you provide ongoing model maintenance?",
      answer:
        "Yes. We offer continuous monitoring, retraining, and optimization to ensure the AI model remains accurate over time."
    },
    {
      question: "Is my data safe when used for AI model training?",
      answer:
        "Absolutely. We follow strict data security protocols and comply with relevant privacy regulations."
    }
  ];

  const aiServices = [
    { id: 1, text: "Custom AI Model Development", link: "/services/custom-ai" },
    { id: 2, text: "Machine Learning Algorithms", link: "/services/ml-algorithms" },
    { id: 3, text: "Natural Language Processing", link: "/services/nlp" },
    { id: 4, text: "Predictive Analytics", link: "/services/predictive-analytics" },
    { id: 5, text: "Computer Vision", link: "/services/computer-vision" },
    { id: 6, text: "AI Consultation & Strategy", link: "/services/ai-consulting" },
  ];

  const whyChooseUsData = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Custom AI Solutions",
      description: "Tailor-made algorithms designed to solve your unique business challenges efficiently."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced ML Models",
      description: "Leveraging the latest in Deep Learning and Neural Networks for superior performance."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Automation",
      description: "Streamline operations with AI bots that handle tasks 24/7 without fatigue."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Uncover hidden patterns and trends in your data to make smarter strategic decisions."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable Infrastructure",
      description: "Built on robust cloud architectures that grow with your data processing needs."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Model Optimization",
      description: "Continuous fine-tuning to ensure your AI models maintain high accuracy and speed."
    }
  ];

  return (
    <div className="bg-[#01070f] min-h-screen">

      {/* Hero Section */}
      <ServiceHero
        title="AI & ML Models"
        subtitle="Why AI & ML Models are Important?"
        category="Artificial Intelligence"
        points={heroPoints}
        gradientFrom="from-blue-200"
        gradientVia="via-blue-600"
        gradientTo="to-indigo-900"
      />

      {/* Video Section */}
      <ServiceVideoSection videoUrl={CLOUDINARY_ASSETS.WEB_DEVELOPMENT.BACKGROUND_VIDEO} />

      {/* Why Choose Us Text Section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm md:text-base font-medium mb-6">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Artificial Intelligence isn't just the future — it's the present. Unlock potential, automate the mundane, and discover insights that drive exponential growth.
          </h2>
        </div>
      </div>

      {/* Why Choose Us Grid */}
      <GlassServiceGrid items={whyChooseUsData} />

      {/* Service Details */}
      <div className='container mx-auto px-4 py-12'>
        <ServiceDetailList title="Our AI Services" items={aiServices} />
      </div>

      {/* FAQ Section */}
      <FaqSection
        title="10Sight FAQs"
        description="Answers to what clients usually ask about our AI Services"
        items={aiFaq}
      />

      {/* CTA Section */}
      <LetsBuildCTA />

      {/* Ready To Take Business Online CTA */}
      <ContactSection />
    </div>
  );
};

export default AiModel;
