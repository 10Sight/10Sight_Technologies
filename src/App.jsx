import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

import HomeLayout from './Layout/HomeLayout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import WebDevelopment from './pages/WebDevelopment';
import ServicesPage from './pages/ServicesPage';
import AppDevelopment from './pages/AppDevelopment';
import SocialMediaManagement from './pages/SocialMediaManagement';
import DataAnalytics from './pages/DataAnalytics';
import AiModel from './pages/AiModel';
import CustomSoftware from './pages/CustomSoftware';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <HomeLayout>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/services' element={<ServicesPage />} />
          
          <Route path='/services/web-development' element={<WebDevelopment />} />
          <Route path='/services/app-development' element={<AppDevelopment />} />
          <Route path='/services/social-media-management' element={<SocialMediaManagement />} />
          <Route path='/services/data-analytics' element={<DataAnalytics />} />
          <Route path='/services/ai-ml-models' element={<AiModel />} />
          <Route path='/services/custom-software' element={<CustomSoftware />} />
        </Routes>
      </HomeLayout>
    </Router>
  );
};

export default App;
