import React from "react";
import { Helmet } from "react-helmet-async";

const CookieSettings = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <>
      <Helmet>
        <title>Cookie Policy | 10Sight Technologies</title>
        <meta name="description" content="Cookie Policy explaining how 10Sight Technologies uses cookies." />
      </Helmet>

      <div className="min-h-screen bg-[#01070f] pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-transparent md:bg-[#3b5578] rounded-lg shadow-none md:shadow-2xl p-0 md:p-12 lg:p-16 text-left">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white shrink-0">
              Cookie Policy
            </h1>
            <div className="hidden md:block h-[1px] bg-white/20 flex-grow mx-6"></div>
            <p className="text-sm text-gray-300 md:text-gray-400 shrink-0 font-light">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Sections Content */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">1. What Are Cookies?</h3>
              <p className="text-gray-200 leading-relaxed">
                Cookies are small text files placed on your device to store information.
                They help improve your browsing experience and allow us to track site performance.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">2. How We Use Cookies</h3>
              <p className="text-gray-200 leading-relaxed mb-4">We use cookies for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200 leading-relaxed marker:text-gray-400">
                <li>Website functionality (e.g., remembering your preferences).</li>
                <li>Analytics (e.g., tracking page visits).</li>
                <li>Marketing (e.g., personalized ads).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">3. Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-200 leading-relaxed marker:text-gray-400">
                <li><strong className="text-white">Essential Cookies:</strong> Necessary for basic site functionality.</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with the site.</li>
                <li><strong className="text-white">Marketing Cookies:</strong> Used to deliver relevant ads and measure campaign effectiveness.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">4. Managing Cookies</h3>
              <p className="text-gray-200 leading-relaxed">
                You can control or delete cookies through your browser settings.
                However, disabling them may limit some site features.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">5. Third-Party Cookies</h3>
              <p className="text-gray-200 leading-relaxed">
                Some cookies may be set by third-party services we use, such as analytics or advertising networks.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">6. Updates to This Policy</h3>
              <p className="text-gray-200 leading-relaxed">
                We may update this Cookie Policy at any time, and changes will be posted on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieSettings;
