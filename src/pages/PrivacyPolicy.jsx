import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white p-10 m-10 rounded-sm shadow-sm max-w-4xl mx-auto">
      <h2 className="font-bold text-4xl mb-6 text-center">Privacy Policy</h2>
      <p className="text-sm text-gray-500 text-center mb-8">
        Last Updated: {new Date().toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}
      </p>

      <p className="mb-6">
        At <strong>10Sight</strong>, your privacy is very important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information when you visit our website or use our services.
      </p>

      {/* Section 1 */}
      <h3 className="font-semibold text-xl mb-3">1. Information We Collect</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, and other details you provide when contacting us or filling
          out forms.
        </li>
        <li>
          <strong>Usage Data:</strong> Information on how you use our website
          (e.g., pages visited, time spent, browser type).
        </li>
        <li>
          <strong>Cookies & Tracking Data:</strong> Data collected through
          cookies, pixels, or similar technologies to improve your browsing
          experience.
        </li>
      </ul>

      {/* Section 2 */}
      <h3 className="font-semibold text-xl mb-3">2. How We Use Your Information</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Providing and improving our services.</li>
        <li>Responding to inquiries or customer support requests.</li>
        <li>
          Sending updates, promotional materials, or important notices (you can
          opt-out anytime).
        </li>
        <li>Analyzing website performance and user behavior.</li>
      </ul>

      {/* Section 3 */}
      <h3 className="font-semibold text-xl mb-3">3. Cookies</h3>
      <p className="mb-4">
        Our website uses cookies to:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Remember your preferences.</li>
        <li>Analyze traffic and improve site performance.</li>
        <li>Deliver personalized content and advertisements.</li>
      </ul>
      <p className="mb-6">
        You can disable cookies in your browser settings, but some features may
        not function properly.
      </p>

      {/* Section 4 */}
      <h3 className="font-semibold text-xl mb-3">4. Sharing Your Information</h3>
      <p className="mb-4">We do not sell, rent, or trade your personal data.</p>
      <p className="mb-6">
        We may share information with:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          Service Providers who help us operate the website (e.g., hosting,
          analytics).
        </li>
        <li>
          Legal Authorities if required by law or to protect our rights.
        </li>
      </ul>

      {/* Section 5 */}
      <h3 className="font-semibold text-xl mb-3">5. Data Security</h3>
      <p className="mb-6">
        We take reasonable precautions to protect your personal information
        from unauthorized access, disclosure, or misuse.
      </p>

      {/* Section 6 */}
      <h3 className="font-semibold text-xl mb-3">6. Your Rights</h3>
      <p className="mb-4">Depending on your location, you may have rights to:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Access, update, or delete your personal data.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Request a copy of the data we store about you.</li>
      </ul>

      {/* Section 7 */}
      <h3 className="font-semibold text-xl mb-3">7. Third-Party Links</h3>
      <p className="mb-6">
        Our website may contain links to third-party sites. We are not
        responsible for the privacy practices of those websites.
      </p>

      {/* Section 8 */}
      <h3 className="font-semibold text-xl mb-3">8. Changes to This Policy</h3>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with the updated date.
      </p>

      {/* Section 9 */}
      <h3 className="font-semibold text-xl mb-3">9. Contact Us</h3>
      <p className="mb-2">
        📧 Email:{" "}
        <a
          href="mailto:contact@10sight.com"
          className="text-blue-600 underline"
        >
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

export default PrivacyPolicy;
