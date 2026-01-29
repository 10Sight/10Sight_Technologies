import React from "react";
import { Helmet } from "react-helmet-async";

const MSMERegistered = () => {
    return (
        <>
            <Helmet>
                <title>MSME Registered | 10Sight Technologies</title>
                <meta name="description" content="10Sight Technologies is a registered MSME unit. Details regarding our registration and compliance." />
            </Helmet>

            <div className="min-h-screen bg-[#01070f] pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-transparent md:bg-[#3b5578] rounded-lg shadow-none md:shadow-2xl p-0 md:p-12 lg:p-16 text-left">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-white shrink-0">
                            MSME Registered
                        </h1>
                        <div className="hidden md:block h-[1px] bg-white/20 flex-grow mx-6"></div>
                        <p className="text-sm text-gray-300 md:text-gray-400 shrink-0 font-light">
                            Compliance & Certification
                        </p>
                    </div>

                    {/* Intro */}
                    <p className="text-gray-200 mb-10 leading-relaxed text-lg">
                        10Sight Technologies is proud to be a registered Micro, Small, and Medium Enterprise (MSME) under the Ministry of Micro, Small & Medium Enterprises, Government of India. We are committed to contributing to the nation's digital growth and adhere to all regulatory compliances.
                    </p>

                    {/* Sections Content */}
                    <div className="space-y-8">
                        <section>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">1. Registration Details</h3>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                Our enterprise is officially registered with the Udyam Registration portal.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-200 leading-relaxed marker:text-gray-400">
                                <li>
                                    <strong className="text-white">Enterprise Type:</strong> Micro / Small Enterprise
                                </li>
                                <li>
                                    <strong className="text-white">Major Activity:</strong> Services (Information Technology)
                                </li>
                                <li>
                                    <strong className="text-white">Registration Status:</strong> Active
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">2. Commitment to Quality</h3>
                            <p className="text-gray-200 leading-relaxed">
                                As an MSME registered entity, 10Sight Technologies upholds the highest standards of service delivery. We focus on innovation, timely project execution, and maintaining transparent business practices with all our clients and partners.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">3. Benefits for Partners and Clients</h3>
                            <p className="text-gray-200 leading-relaxed">
                                Working with an MSME registered unit offers assurance of regulatory compliance and dedication to business excellence. We leverage our agile structure to provide personalized, high-quality digital solutions.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">4. Verify Registration</h3>
                            <p className="text-gray-200 leading-relaxed">
                                Our specific registration details and Udyam Registration Number can be verified upon request or through official government portals where applicable, ensuring full transparency in our operations.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">5. Contact Us</h3>
                            <div className="text-gray-200 leading-relaxed">
                                <p className="mb-2">For any queries regarding our certifications or compliance, please reach out:</p>
                                <p>
                                    📧 Email:{" "}
                                    <a href="mailto:info@10sight.tech" className="text-blue-300 hover:text-white underline transition-colors">
                                        info@10sight.tech
                                    </a>
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MSMERegistered;
