import React, { useEffect } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import HomeLayout from "./Layout/HomeLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import WebDevelopment from "./pages/WebDevelopment";
import ServicesPage from "./pages/ServicesPage";
import AppDevelopment from "./pages/AppDevelopment";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import DataAnalytics from "./pages/DataAnalytics";
import AiModel from "./pages/AiModel";
import CustomSoftware from "./pages/CustomSoftware";

import routeMeta from "./Hooks/routeMeta.js";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const getRouteData = (currentPath) => {
    return routeMeta.find((route) =>
      matchPath(route.path, currentPath)
    ) || { title: "Page", description: "", keywords: "" };
  };

  const { title, description, keywords } = getRouteData(location.pathname);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`10Sight Technologies | ${title}`}</title>
        <meta name="author" content="10Sight Technologies" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <HomeLayout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route
            path="/services/social-media-management"
            element={<SocialMediaManagement />}
          />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/ai-ml-models" element={<AiModel />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
        </Routes>
      </HomeLayout>
    </HelmetProvider>
  );
};

export default App;
