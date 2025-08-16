import React from "react";

const CookieSettings = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="bg-white p-10 m-10 rounded-sm shadow-sm max-w-4xl mx-auto">
      <h2 className="font-bold text-4xl mb-6 text-center">Cookie Policy</h2>
      <p className="text-sm text-gray-500 text-center mb-8">
        Last Updated: {lastUpdated}
      </p>

      {/* Section 1 */}
      <h3 className="font-semibold text-xl mb-3">1. What Are Cookies?</h3>
      <p className="mb-6">
        Cookies are small text files placed on your device to store information. 
        They help improve your browsing experience and allow us to track site performance.
      </p>

      {/* Section 2 */}
      <h3 className="font-semibold text-xl mb-3">2. How We Use Cookies</h3>
      <p className="mb-4">We use cookies for:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website functionality (e.g., remembering your preferences).</li>
        <li>Analytics (e.g., tracking page visits).</li>
        <li>Marketing (e.g., personalized ads).</li>
      </ul>

      {/* Section 3 */}
      <h3 className="font-semibold text-xl mb-3">3. Types of Cookies We Use</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Essential Cookies:</strong> Necessary for basic site functionality.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site.</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant ads and measure campaign effectiveness.</li>
      </ul>

      {/* Section 4 */}
      <h3 className="font-semibold text-xl mb-3">4. Managing Cookies</h3>
      <p className="mb-6">
        You can control or delete cookies through your browser settings. 
        However, disabling them may limit some site features.
      </p>

      {/* Section 5 */}
      <h3 className="font-semibold text-xl mb-3">5. Third-Party Cookies</h3>
      <p className="mb-6">
        Some cookies may be set by third-party services we use, such as analytics or advertising networks.
      </p>

      {/* Section 6 */}
      <h3 className="font-semibold text-xl mb-3">6. Updates to This Policy</h3>
      <p>
        We may update this Cookie Policy at any time, and changes will be posted on this page.
      </p>
    </div>
  );
};

export default CookieSettings;
