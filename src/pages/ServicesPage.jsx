import BreadCrumbs from "@/components/BreadCrumbs";
import React from "react";
import { href } from "react-router-dom";

//Icons
import WebIcon from '../assets/icons/WebDev.png';
import AppIcon from '../assets/icons/AppDev.png';
import CustomIcon from '../assets/icons/Custom.png';
import DataIcon from '../assets/icons/Data.png';
import SocialIcon from '../assets/icons/Social.png';
import ModelIcon from '../assets/icons/Models.png';

//Services Image
import service1 from "/services/service1.webp";
import AppDevImg from "/services/App-Development .webp";
import AiModelImg from "/services/Ai-Ml-Models.webp";
import SocialMediaImg from "/services/Social-Media-Management.webp";
import DataAnalystImg from "/services/Data-Analyst.webp";
import CustomSoftImg from "/services/Custom-Software.webp";

import ServiceBox from "@/components/ServiceBox";
import WorkingProcessFlex from "@/components/WorkingProcessFlex";

const ServicesPage = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Services" }];

  const services = [
    {
      title: "Website Development",
      icon: WebIcon,
      image: service1,
      link: "/services/web-development",
      description:
        "We build stunning, responsive websites that combine sleek design with powerful functionality. Whether you're starting from scratch or revamping your site, we ensure it performs fast, looks great on all devices, and converts visitors into customers.",
    },
    {
      title: "App Development",
      icon: AppIcon,
      image: AppDevImg,
      link: "/services/app-development",
      description:
        "From ideation to launch, we develop high-performance mobile apps tailored to your business goals. Our team builds intuitive, secure, and scalable apps for Android and iOS using the latest frameworks and tech.",
    },
    {
      title: "AI/ML Solution",
      icon: ModelIcon,
      image: AiModelImg,
      link: "/services/ai-ml-solutions",
      description:
        "Leverage data and machine learning to automate processes and gain smarter business insights. From AI chatbots to predictive analytics, we help you integrate intelligent solutions that drive growth and innovation.",
    },
    {
      title: "Social Media Management",
      icon: SocialIcon,
      image: SocialMediaImg,
      link: "/services/social-media-management",
      description:
        "We help you build a strong, engaging presence across platforms like Instagram, Facebook, LinkedIn, and more. From strategy and content creation to posting, monitoring, and analytics — we manage it all so you can focus on running your business while we grow your audience and brand visibility.",
    },
    {
      title: "Data Analysis",
      icon: DataIcon,
      image: DataAnalystImg,
      link: "/services/data-analysis",
      description:
        "Unlock powerful insights from your data with our expert analysis services. We turn complex data into clear, actionable strategies — helping you make smarter business decisions, optimize performance, and identify new opportunities using tools like Excel, Python, and Power BI.",
    },
    {
      title: "Custom Software",
      icon: CustomIcon,
      image: CustomSoftImg,
      link: "/services/custom-software",
      description:
        "We design and develop tailor-made software solutions to meet your unique business needs. From web applications to internal tools, our custom software is scalable, secure, and built to boost your efficiency, productivity, and growth.",
    },
  ];

  return (
    <div>
      <BreadCrumbs headText={"Services"} items={breadcrumbItems} />
      {/* Services Section */}
      <section className="flex bg-white flex-col items-center justify-center py-10 lg:pt-24">
        <h2
          className="sora-700 text-center mb-4 text-4xl leading-[3rem] md:leading-[3.3rem] text-primary font-bold"
          data-aos="fade-up"
        >
          Our awesome <br /> services to give you success
        </h2>
        <div className="grid gap-8 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-5 lg:px-8">
          {services.map((item, index) => (
            <ServiceBox key={index} data={item} />
          ))}
        </div>
      </section>
      {/* Working Process Flex */}
      <div className="bg-white">
        <WorkingProcessFlex />
      </div>
    </div>
  );
};

export default ServicesPage;
