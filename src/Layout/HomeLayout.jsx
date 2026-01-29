// import Header from '@/components/Header';
import HeroSection1 from '@/components/hero-section-1';
import { Navbar5 } from '@/components/navbar-5';
import { Footerdemo } from '@/components/ui/footer-section';
import React from 'react';
import { useLocation } from "react-router-dom";

const HomeLayout = ({ children }) => {
  const location = useLocation();
  // Apply transparent navbar logic to Home AND all Services pages
  const isTransparentNavPage = location.pathname === "/" || location.pathname.startsWith("/services") || location.pathname === "/our-vision" || location.pathname === "/contact-us" || location.pathname === "/why-choose-us" || location.pathname === "/faqs" || location.pathname === "/terms-of-service" || location.pathname === "/privacy-policy" || location.pathname === "/cookie-settings" || location.pathname === "/msme-registered";

  return (
    <div className="flex flex-col min-h-screen bg-[#01070f]"> {/* Changed default bg to dark */}
      <Navbar5
        className={
          isTransparentNavPage
            ? "absolute top-0 left-0 right-0 z-50 bg-transparent py-4 px-4 shadow-none"
            : ""
        }
        navClassName={
          isTransparentNavPage
            ? "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
            : ""
        }
      />

      <main className="flex-1">
        {children}
      </main>
      <Footerdemo />
      {/* <footer className="bg-black/50 backdrop-blur-md py-6 px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} 10Sight Technologies. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
};

export default HomeLayout;
