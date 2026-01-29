"use client";

import { cn } from "@/lib/utils";

import { MenuIcon, Eye } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { PopupButton } from "react-calendly";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

export const Navbar5 = ({ className, navClassName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";

  // Button styles based on page
  const whatsAppBtnClass = isHome
    ? "cursor-pointer bg-transparent text-white border-white hover:bg-white/10"
    : "cursor-pointer border-input hover:bg-accent hover:text-accent-foreground"; // Standard outline variant

  const popupBtnClass = isHome
    ? "px-4 cursor-pointer py-2 bg-transparent text-white border border-white rounded-md hover:bg-white/10"
    : "px-4 cursor-pointer py-2 bg-black text-white rounded-md hover:bg-black/90";

  const features = [
    { title: "Web Development", to: "/services/web-development" },
    { title: "App Development", to: "/services/app-development" },
    {
      title: "Social Media Management",
      to: "/services/social-media-management",
    },
    { title: "Data Analytics", to: "/services/data-analytics" },
    { title: "AI & ML Models", to: "/services/ai-ml-models" },
    { title: "Custom Software", to: "/services/custom-software" },
  ];



  const isActive = (path) => location.pathname === path;

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <section className={cn("py-4 px-4 bg-none sticky top-0 z-50", className)}>
      <div className="container mx-auto">
        <nav
          data-aos="fade-down"
          className={cn(
            "sticky top-0 z-99 flex items-center justify-between rounded-lg px-6 py-4 shadow-md backdrop-blur-md bg-background border border-white/20 transition-all duration-300",
            navClassName
          )}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center cursor-pointer gap-2"
          >
            <img src="https://res.cloudinary.com/dlcrtc03w/image/upload/w_300,c_limit/v1769192617/10Sight_White_zu5kai.png" alt="10Sight" width="150" height="40" className="h-10 w-auto object-contain" />
            <span className="text-lg font-black tracking-tighter">
              10Sight
            </span>
          </button>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden lg:block relative z-10">
            <NavigationMenuList className="gap-2 relative">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`relative cursor-pointer hover:rounded-full bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 focus:bg-white/10 hover:text-white focus:text-white transition-colors rounded-full ${isActive('/services') ? "!text-[#01070f] hover:!text-[#01070f]" : "text-white"}`} onClick={() => handleNavClick("/services")}>
                  <span className={`relative z-10 ${isActive('/services') ? "font-semibold" : ""}`}>Services</span>
                  {isActive('/services') && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-accent rounded-full -z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#01070f] border-white/20 shadow-xl">
                  <div className="grid w-[600px] grid-cols-2 p-3 group/list">
                    {features.map((feature, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(feature.to)}
                        className="text-left rounded-lg p-3 cursor-pointer transition-all duration-200 hover:bg-white/10 w-full group hover:!blur-none group-hover/list:blur-[2px]"
                      >
                        <p className="mb-1 font-semibold text-gray-300 group-hover:text-white">
                          {feature.title}
                        </p>
                      </button>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <button
                    onClick={() => handleNavClick("/our-vision")}
                    className="relative cursor-pointer hover:rounded-full bg-transparent rounded-full px-4 py-2 transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 text-white"
                  >
                    <span className={`relative z-10 ${isActive("/our-vision") ? "font-semibold !text-[#01070f]" : ""}`}>Our Vision</span>
                    {isActive('/our-vision') && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-accent rounded-full -z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <button
                    onClick={() => handleNavClick("/why-choose-us")}
                    className="relative cursor-pointer hover:rounded-full bg-transparent rounded-full px-4 py-2 transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 text-white"
                  >
                    <span className={`relative z-10 ${isActive("/why-choose-us") ? "font-semibold !text-[#01070f]" : ""}`}>Why Choose Us</span>
                    {isActive('/why-choose-us') && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-accent rounded-full -z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <button
                    onClick={() => handleNavClick("/contact-us")}
                    className="relative cursor-pointer hover:rounded-full bg-transparent rounded-full px-4 py-2 transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 text-white"
                  >
                    <span className={`relative z-10 ${isActive("/contact-us") ? "font-semibold !text-[#01070f]" : ""}`}>Contact Us</span>
                    {isActive('/contact-us') && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-accent rounded-full -z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <WhatsAppButton className={whatsAppBtnClass} variant="outline" />
            <PopupButton
              url="https://calendly.com/jatinnagar563/book-a-meeting"
              rootElement={document.getElementById("root")}
              text="Book a Meeting"
              className={popupBtnClass}
            />
          </div>

          {/* Mobile Menu */}
          <Sheet data-aos="fade-down" open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="cursor-pointer bg-transparent text-white border-white hover:bg-white/10">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full border-none bg-[#01070f]/95 backdrop-blur-xl text-white p-0 flex flex-col">
              <SheetHeader className="p-6 border-b border-white/10">
                <SheetTitle className="text-left">
                  <button
                    onClick={() => handleNavClick("/")}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <img src="https://res.cloudinary.com/dlcrtc03w/image/upload/w_300,c_limit/v1769192617/10Sight_White_zu5kai.png" alt="10Sight" width="150" height="40" className="h-10 w-auto object-contain" />
                    <span className="text-2xl font-bolder text-white">10Sight</span>
                  </button>
                </SheetTitle>
                <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
              </SheetHeader>

              <div className="flex flex-col p-6 gap-2 overflow-y-auto max-h-[calc(100vh-100px)]">
                <Accordion type="single" collapsible className="mb-2 border-b-0">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="text-2xl font-medium py-4 px-4 hover:no-underline hover:text-blue-400 transition-colors border-b border-white/5 data-[state=open]:border-none">
                      Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 py-2 pl-4 border-l-2 border-white/10 ml-2">
                        {features.map((feature, index) => (
                          <button
                            key={index}
                            onClick={() => handleNavClick(feature.to)}
                            className={cn(
                              "text-left text-lg py-2 px-4 rounded-lg transition-all duration-200",
                              isActive(feature.to)
                                ? "bg-white text-[#01070f] font-semibold"
                                : "text-gray-300 hover:text-white hover:bg-white/10"
                            )}
                          >
                            {feature.title}
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <button
                  onClick={() => handleNavClick("/our-vision")}
                  className={cn(
                    "text-left text-2xl font-medium py-4 px-4 rounded-lg transition-colors border-b border-white/5",
                    isActive("/our-vision") ? "bg-white text-[#01070f] font-semibold border-none" : "text-white hover:text-white hover:bg-white/10"
                  )}
                >
                  Our Vision
                </button>

                <button
                  onClick={() => handleNavClick("/why-choose-us")}
                  className={cn(
                    "text-left text-2xl font-medium py-4 px-4 rounded-lg transition-colors border-b border-white/5",
                    isActive("/why-choose-us") ? "bg-white text-[#01070f] font-semibold border-none" : "text-white hover:text-white hover:bg-white/10"
                  )}
                >
                  Why Choose Us
                </button>

                <button
                  onClick={() => handleNavClick("/contact-us")}
                  className={cn(
                    "text-left text-2xl font-medium py-4 px-4 rounded-lg transition-colors border-b border-white/5",
                    isActive("/contact-us") ? "bg-white text-[#01070f] font-semibold border-none" : "text-white hover:text-white hover:bg-white/10"
                  )}
                >
                  Contact Us
                </button>

                <div className="mt-8 flex flex-col gap-4">
                  <WhatsAppButton
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-none py-6 text-lg justify-center font-bold rounded-xl"
                    variant="default" // Changed to default for solid background on mobile
                    onClick={() => setOpen(false)}
                  />
                  <PopupButton
                    url="https://calendly.com/jatinnagar563/book-a-meeting"
                    rootElement={document.getElementById("root")}
                    text="Book a Meeting"
                    className="w-full bg-white text-black hover:bg-gray-200 py-4 text-lg font-bold rounded-xl transition-colors"
                    onClick={() => setOpen(false)}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};
