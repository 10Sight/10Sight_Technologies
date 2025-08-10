// import Header from '@/components/Header';
import HeroSection1 from '@/components/hero-section-1';
import { Navbar5 } from '@/components/navbar-5';
import { Footerdemo } from '@/components/ui/footer-section';
import React from 'react';

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar5 />

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
