import React from "react";

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="bg-white p-10 m-10 rounded-sm shadow-sm max-w-4xl mx-auto">
      <h2 className="font-bold text-4xl mb-6 text-center">Terms & Conditions</h2>
      <p className="text-sm text-gray-500 text-center mb-8">
        Last Updated: {lastUpdated}
      </p>

      <p className="mb-6">
        Welcome to <strong>10Sight</strong>. By accessing or using our website and services, 
        you agree to comply with and be bound by the following terms and conditions.
      </p>

      {/* Section 1 */}
      <h3 className="font-semibold text-xl mb-3">1. Acceptance of Terms</h3>
      <p className="mb-6">
        By using this website, you agree to these Terms & Conditions. If you do not agree, 
        please do not use our site.
      </p>

      {/* Section 2 */}
      <h3 className="font-semibold text-xl mb-3">2. Services</h3>
      <p className="mb-6">
        10Sight provides services including website development, social media management, 
        AI/ML solutions, and related IT consulting. We reserve the right to modify or 
        discontinue any service without prior notice.
      </p>

      {/* Section 3 */}
      <h3 className="font-semibold text-xl mb-3">3. User Responsibilities</h3>
      <p className="mb-6">
        You agree not to use our website for unlawful purposes or activities that may 
        harm our brand, disrupt operations, or violate applicable laws.
      </p>

      {/* Section 4 */}
      <h3 className="font-semibold text-xl mb-3">4. Intellectual Property</h3>
      <p className="mb-6">
        All content, branding, and designs on our site are owned by 10Sight and protected 
        by copyright laws. You may not reproduce, distribute, or use our content without 
        written permission.
      </p>

      {/* Section 5 */}
      <h3 className="font-semibold text-xl mb-3">5. Payments & Refunds</h3>
      <p className="mb-6">
        Payments for services are agreed upon before project commencement. Refunds are 
        handled on a case-by-case basis and only when specified in the service agreement.
      </p>

      {/* Section 6 */}
      <h3 className="font-semibold text-xl mb-3">6. Limitation of Liability</h3>
      <p className="mb-6">
        10Sight is not liable for any direct, indirect, incidental, or consequential 
        damages resulting from the use or inability to use our services.
      </p>

      {/* Section 7 */}
      <h3 className="font-semibold text-xl mb-3">7. Third-Party Links</h3>
      <p className="mb-6">
        Our website may contain links to third-party websites. We are not responsible 
        for their content or practices.
      </p>

      {/* Section 8 */}
      <h3 className="font-semibold text-xl mb-3">8. Changes to Terms</h3>
      <p className="mb-6">
        We may update these terms at any time. Continued use of our services after 
        updates means you accept the changes.
      </p>

      {/* Section 9 */}
      <h3 className="font-semibold text-xl mb-3">9. Contact Us</h3>
      <p className="mb-2">
        📧 Email:{" "}
        <a href="mailto:contact@10sight.com" className="text-blue-600 underline">
          contact@10sight.com
        </a>
      </p>
      <p>
        🌐 Website:{" "}
        <a
          href="https://10sight.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://10sight.com
        </a>
      </p>
    </div>
  );
};

export default TermsOfService;
