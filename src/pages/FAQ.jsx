import React from 'react';
import { FaqSection } from '../components/faq';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
    // Group 1: General
    const generalFaqs = [
        {
            question: "How long does it take to develop a website?",
            answer: "The timeline depends on the project's complexity. A simple website typically takes 2-4 weeks, while more complex platforms can take 8-12 weeks."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, we offer flexible maintenance packages to ensure your website remains secure, up-to-date, and optimized."
        },
        {
            question: "Can you redesign my existing website?",
            answer: "Absolutely! We can modernize your current site, improving its UI/UX, performance, and responsiveness while keeping your brand identity intact."
        },
        {
            question: "Will my website work on mobile devices?",
            answer: "Yes, every website we build is fully responsive and optimized for all screen sizes, from mobile phones to large desktop monitors."
        },
        {
            question: "Do you optimize websites for SEO?",
            answer: "Yes, basic SEO is included in all our builds. We follow best practices for site structure, page speed, and meta tags to help you rank better."
        },
        {
            question: "What platforms do you work with?",
            answer: "We specialize in React.js, Next.js, Node.js, and other modern technologies. We also work with CMS platforms like WordPress and Shopify depending on your needs."
        }
    ];

    // Group 2: Project & Process - Keeping similar questions for now
    const technicalFaqs = [
        {
            question: "What is your typical project timeline?",
            answer: "Project timelines vary depending on complexity and scope. We provide detailed estimates during our initial consultation and strive to deliver quality results within agreed deadlines."
        },
        {
            question: "Do you offer post-launch support?",
            answer: "Yes, we prioritize long-term partnerships. We offer dedicated support and maintenance packages to ensure your digital solutions continue to perform optimally."
        },
        {
            question: "How is 10sight different from other agencies?",
            answer: "We don't just sell services; we build outcomes. Our client-centered approach focuses on understanding your business problems in business terms, not just technical requirements."
        }
    ];

    return (
        <>
            <Helmet>
                <title>FAQs | 10Sight Technologies</title>
                <meta name="description" content="Frequently Asked Questions about 10Sight Technologies and our web services." />
            </Helmet>

            <div className="pt-20 bg-[#01070f] min-h-screen">
                {/* Main Title Section */}
                <div className="container mx-auto px-4 text-center pt-20 pb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">10sight FAQs</h1>
                    <p className="text-gray-400 text-lg">Answers to what clients usually ask about our Web Services</p>
                </div>

                <div className="container mx-auto px-4 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
                        {/* Left Column: FAQs. Text */}
                        <div className="hidden lg:block lg:col-span-4 relative">
                            <div className="sticky top-40">
                                <h2 className="text-[8rem] leading-none font-bold text-white tracking-tighter opacity-100">
                                    FAQs.
                                </h2>
                            </div>
                        </div>

                        {/* Right Column: FAQ Lists */}
                        <div className="lg:col-span-8 space-y-4">
                            <FaqSection
                                category="General Questions"
                                items={generalFaqs}
                                className="py-0 bg-transparent"
                            />

                            <FaqSection
                                category="Project & Process"
                                items={technicalFaqs}
                                className="py-0 bg-transparent pt-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
