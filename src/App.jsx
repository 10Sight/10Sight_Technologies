import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import HomeLayout from "./Layout/HomeLayout";
import routeMeta from "./Hooks/routeMeta.js";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const SocialMediaManagement = lazy(() => import("./pages/SocialMediaManagement"));
const DataAnalytics = lazy(() => import("./pages/DataAnalytics"));
const AiModel = lazy(() => import("./pages/AiModel"));
const CustomSoftware = lazy(() => import("./pages/CustomSoftware"));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookieSettings = lazy(() => import('./pages/CookieSettings'));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // AOS init after first render
    requestAnimationFrame(() => {
      AOS.init({ duration: 800, once: true });
    });
  }, []);

  const getRouteData = (currentPath) => {
    return (
      routeMeta.find((route) => matchPath(route.path, currentPath)) || {
        title: "Page",
        description: "",
        keywords: "",
        image: "/default-image.jpg",
      }
    );
  };

  const { title, description, keywords, image } = getRouteData(location.pathname);
  const siteUrl = "https://yoursite.com"; // Change to your domain
  const pageUrl = `${siteUrl}${location.pathname}`;

  return (
    <HelmetProvider>
      <Helmet>
        {/* Preload important assets */}
        <link rel="preload" href="/fonts/Montserrat-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/hero-image.jpg" as="image" />

        {/* SEO Meta */}
        <title>{`10Sight Technologies | ${title}`}</title>
        <meta name="author" content="10Sight Technologies" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`10Sight Technologies | ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta property="og:site_name" content="10Sight Technologies" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`10Sight Technologies | ${title}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "10Sight Technologies",
            "url": "${siteUrl}",
            "logo": "${siteUrl}/logo.png",
            "sameAs": [
              "https://facebook.com/yourpage",
              "https://twitter.com/yourhandle",
              "https://linkedin.com/company/yourcompany"
            ]
          }
          `}
        </script>
      </Helmet>

      <HomeLayout>
        <ScrollToTop />
        <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/ai-ml-models" element={<AiModel />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />
          </Routes>
        </Suspense>
      </HomeLayout>
    </HelmetProvider>
  );
};

export default App;
