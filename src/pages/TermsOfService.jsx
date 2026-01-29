import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  const lastUpdated = "January 11, 2026"; // Matching the image reference or use dynamic

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | 10Sight Technologies</title>
        <meta name="description" content="Terms and Conditions for using 10Sight Technologies services." />
      </Helmet>

      <div className="min-h-screen bg-[#01070f] pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-transparent md:bg-[#3b5578] rounded-lg shadow-none md:shadow-2xl p-0 md:p-12 lg:p-16 text-left">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white shrink-0">
              Terms & Conditions
            </h1>
            <div className="hidden md:block h-[1px] bg-white/20 flex-grow mx-6"></div>
            <p className="text-sm text-gray-300 md:text-gray-400 shrink-0 font-light">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Intro */}
          <p className="text-gray-200 mb-10 leading-relaxed text-lg">
            Welcome to 10Sight. By accessing or using our website and services,
            you agree to comply with and be bound by the following terms and conditions.
          </p>

          {/* Sections Content */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-200 leading-relaxed">
                By using this website, you agree to these Terms & Conditions. If you do not agree,
                please do not use our site.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">2. Services</h3>
              <p className="text-gray-200 leading-relaxed">
                10Sight provides services including website development, social media management,
                AI/ML solutions, and related IT consulting. We reserve the right to modify or
                discontinue any service without prior notice.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">3. User Responsibilities</h3>
              <p className="text-gray-200 leading-relaxed">
                You agree not to use our website for unlawful purposes or activities that may
                harm our brand, disrupt operations, or violate applicable laws.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">4. Intellectual Property</h3>
              <p className="text-gray-200 leading-relaxed">
                All content, branding, and designs on our site are owned by 10Sight and protected
                by copyright laws. You may not reproduce, distribute, or use our content without
                written permission.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">5. Payments & Refunds</h3>
              <p className="text-gray-200 leading-relaxed">
                Payments for services are agreed upon before project commencement. Refunds are
                handled on a case-by-case basis and only when specified in the service agreement.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">6. Limitation of Liability</h3>
              <p className="text-gray-200 leading-relaxed">
                10Sight is not liable for any direct, indirect, incidental, or consequential
                damages resulting from the use or inability to use our services.
              </p>
            </section>

            {/* Keeping the contact info but styling it loosely to match the cleaner look, or maybe user didn't want it? 
                 The image ends at #6. I will include 7/8/9 as well but styled accordingly to not break the flow. */}

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">7. Third-Party Links</h3>
              <p className="text-gray-200 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible
                for their content or practices.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">8. Changes to Terms</h3>
              <p className="text-gray-200 leading-relaxed">
                We may update these terms at any time. Continued use of our services after
                updates means you accept the changes.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">9. Contact Us</h3>
              <div className="text-gray-200 leading-relaxed">
                <p className="mb-2">If you have any questions about these Terms, please contact us:</p>
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

export default TermsOfService;
