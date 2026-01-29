import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Privacy Policy | 10Sight Technologies</title>
        <meta name="description" content="Privacy Policy detailing how 10Sight Technologies collects and protects your information." />
      </Helmet>

      <div className="min-h-screen bg-[#01070f] pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-transparent md:bg-[#3b5578] rounded-lg shadow-none md:shadow-2xl p-0 md:p-12 lg:p-16 text-left">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white shrink-0">
              Privacy Policy
            </h1>
            <div className="hidden md:block h-[1px] bg-white/20 flex-grow mx-6"></div>
            <p className="text-sm text-gray-300 md:text-gray-400 shrink-0 font-light">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Intro */}
          <p className="text-gray-200 mb-10 leading-relaxed text-lg">
            At 10Sight, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
          </p>

          {/* Sections Content */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">1. Information We Collect</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-200 leading-relaxed marker:text-gray-400">
                <li>
                  <strong className="text-white">Personal Information:</strong> Name, email address, phone number, and other details you provide when contacting us or filling out forms.
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong> Information on how you use our website (e.g., pages visited, time spent, browser type).
                </li>
                <li>
                  <strong className="text-white">Cookies & Tracking Data:</strong> Data collected through cookies, pixels, or similar technologies to improve your browsing experience.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">2. How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-200 leading-relaxed marker:text-gray-400">
                <li>Providing and improving our services.</li>
                <li>Responding to inquiries or customer support requests.</li>
                <li>Sending updates, promotional materials, or important notices (you can opt-out anytime).</li>
                <li>Analyzing website performance and user behavior.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">3. Cookies</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Our website uses cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200 leading-relaxed marker:text-gray-400 mb-4">
                <li>Remember your preferences.</li>
                <li>Analyze traffic and improve site performance.</li>
                <li>Deliver personalized content and advertisements.</li>
              </ul>
              <p className="text-gray-200 leading-relaxed">
                You can disable cookies in your browser settings, but some features may not function properly.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">4. Sharing Your Information</h3>
              <p className="text-gray-200 leading-relaxed mb-4">We do not sell, rent, or trade your personal data.</p>
              <p className="text-gray-200 leading-relaxed mb-2">
                We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200 leading-relaxed marker:text-gray-400">
                <li>
                  <strong className="text-white">Service Providers</strong> who help us operate the website (e.g., hosting, analytics).
                </li>
                <li>
                  <strong className="text-white">Legal Authorities</strong> if required by law or to protect our rights.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">5. Data Security</h3>
              <p className="text-gray-200 leading-relaxed">
                We take reasonable precautions to protect your personal information from unauthorized access, disclosure, or misuse.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">6. Your Rights</h3>
              <p className="text-gray-200 leading-relaxed mb-4">Depending on your location, you may have rights to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200 leading-relaxed marker:text-gray-400">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Request a copy of the data we store about you.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">7. Third-Party Links</h3>
              <p className="text-gray-200 leading-relaxed">
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of those websites.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">8. Changes to This Policy</h3>
              <p className="text-gray-200 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">9. Contact Us</h3>
              <div className="text-gray-200 leading-relaxed">
                <p className="mb-2">If you have any questions about this policy, please contact us:</p>
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

export default PrivacyPolicy;
