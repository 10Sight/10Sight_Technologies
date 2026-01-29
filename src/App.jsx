import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import HomeLayout from "./Layout/HomeLayout";
import routeMeta from "./Hooks/routeMeta.js";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const SocialMediaManagement = lazy(() => import("./pages/SocialMediaManagement"));
const DataAnalytics = lazy(() => import("./pages/DataAnalytics"));
const AiModel = lazy(() => import("./pages/AiModel"));
const CustomSoftware = lazy(() => import("./pages/CustomSoftware"));
const OurVision = lazy(() => import("./pages/OurVision"));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookieSettings = lazy(() => import('./pages/CookieSettings'));
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs'));
const FAQ = lazy(() => import('./pages/FAQ'));
const MSMERegistered = lazy(() => import('./pages/MSME'));

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
        image: "/og-image.png",
      }
    );
  };

  const { title, description, keywords, image } = getRouteData(location.pathname);
  const siteUrl = "https://www.10sight.tech";
  const pageUrl = `${siteUrl}${location.pathname}`;

  // Smart title handling to avoid double branding
  const fullTitle = title.includes("10Sight Technologies")
    ? title
    : `10Sight Technologies | ${title}`;

  return (
    <HelmetProvider>
      <Helmet>

        {/* SEO Meta */}
        <title>{fullTitle}</title>
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
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta property="og:site_name" content="10Sight Technologies" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
        <meta name="twitter:site" content="@10Sight98603" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "10Sight Technologies",
                "url": "${siteUrl}",
                "logo": "${siteUrl}/android-chrome-512x512.png",
                "sameAs": [
                  "https://www.instagram.com/10sight_technologies/",
                  "https://x.com/@10Sight98603"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9711341936",
                  "contactType": "customer service"
                }
              },
              {
                "@type": "Service",
                "serviceType": "Web Development",
                "provider": {
                  "@type": "Organization",
                  "name": "10Sight Technologies"
                },
                "areaServed": "Global",
                "description": "Custom, responsive, and scalable website development services."
              },
              {
                "@type": "Service",
                "serviceType": "App Development",
                "provider": {
                  "@type": "Organization",
                  "name": "10Sight Technologies"
                },
                "areaServed": "Global",
                "description": "Mobile and web applications for iOS and Android platforms."
              },
              {
                "@type": "Service",
                "serviceType": "AI & ML Solutions",
                "provider": {
                  "@type": "Organization",
                  "name": "10Sight Technologies"
                },
                "areaServed": "Global",
                "description": "Artificial Intelligence and Machine Learning models for business automation."
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <HomeLayout>
        <SmoothScroll />
        <ScrollToTop />
        <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/ai-ml-models" element={<AiModel />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/our-vision" element={<OurVision />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/msme-registered" element={<MSMERegistered />} />
          </Routes>
        </Suspense>
      </HomeLayout>
    </HelmetProvider>
  );
};

export default App;
