"use client";

import { MenuIcon, Eye } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { PopupButton } from "react-calendly";
import AOS from "aos";
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
} from "@/components/ui/sheet";
import { useEffect } from "react";
import WhatsAppButton from "./WhatsAppButton";

export const Navbar5 = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-4 px-4 bg-none sticky top-0 z-50">
      <div className="container">
        <nav
          data-aos="fade-down"
          className="sticky top-0 z-99 flex items-center justify-between rounded-lg px-6 py-4 shadow-md backdrop-blur-md bg-background border border-white/20 transition-all duration-300"
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center cursor-pointer gap-2"
          >
            <Eye className="max-h-8" />
            <span className="text-lg font-semibold tracking-tighter">
              10Sight
            </span>
          </button>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(feature.to)}
                        className="text-left rounded-md p-3 cursor-pointer transition-colors hover:bg-muted/70 w-full"
                      >
                        <p className="mb-1 font-semibold text-foreground">
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
                    onClick={() => handleNavClick("/about-us")}
                    className={`cursor-pointer ${
                      isActive("/about-us") ? "font-semibold text-blue-600" : ""
                    }`}
                  >
                    About Us
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
                    className={`cursor-pointer ${
                      isActive("/contact-us")
                        ? "font-semibold text-blue-600"
                        : ""
                    }`}
                  >
                    Contact Us
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <WhatsAppButton variant="outline">Contact Now</WhatsAppButton>
            <PopupButton
              url="https://calendly.com/jatinnagar563/book-a-meeting"
              rootElement={document.getElementById("root")}
              text="Book a Meeting"
              className="px-4 cursor-pointer py-2 bg-black text-white rounded-md"
            />
          </div>

          {/* Mobile Menu */}
          <Sheet data-aos="fade-down">
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="cursor-pointer">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <button
                    onClick={() => handleNavClick("/")}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="max-h-8" />
                    <span className="text-lg font-semibold tracking-tighter">
                      10Sight
                    </span>
                  </button>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline cursor-pointer">
                      Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <button
                            key={index}
                            onClick={() => handleNavClick(feature.to)}
                            className="text-left rounded-md p-3 cursor-pointer transition-colors hover:bg-muted/70 w-full"
                          >
                            <p className="mb-1 font-semibold text-foreground">
                              {feature.title}
                            </p>
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-col gap-6">
                  <button
                    onClick={() => handleNavClick("/about-us")}
                    className="font-medium cursor-pointer"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleNavClick("/contact-us")}
                    className="font-medium cursor-pointer"
                  >
                    Contact Us
                  </button>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <WhatsAppButton variant="outline">Contact Now</WhatsAppButton>
                  <PopupButton
                    url="https://calendly.com/jatinnagar563/book-a-meeting"
                    rootElement={document.getElementById("root")}
                    text="Book a Meeting"
                    className="px-4 cursor-pointer py-2 bg-black text-white rounded-md"
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
