"use client";

import { MenuIcon, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  const features = [
    {
      title: "Web Development",
      // description: "Overview of your activity",
      to: "/services/web-development",
    },
    {
      title: "App Development",
      // description: "Track your performance",
      to: "/services/app-development",
    },
    {
      title: "Social Media Management",
      // description: "Configure your preferences",
      to: "/services/social-media-management",
    },
    {
      title: "Data Analytics",
      // description: "Connect with other tools",
      to: "/services/data-analytics",
    },
    {
      title: "AI & ML Models",
      // description: "Manage your files",
      to: "/services/ai-ml-models",
    },
    {
      title: "Custom Software",
      // description: "Get help when needed",
      to: "/services/custom-software",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section className="py-4 px-4 bg-none sticky top-0 z-50">
      <div className="container">
        <nav
          data-aos="fade-down"
          className="sticky top-0 z-99 flex items-center justify-between rounded-lg px-6 py-4 shadow-md backdrop-blur-md bg-background border border-white/20 transition-all duration-300"
        >
          <Link to="/" className="flex items-center gap-2">
            <Eye className="max-h-8" />
            <span className="text-lg font-semibold tracking-tighter">
              10Sight
            </span>
          </Link>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to='/services'>Services</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <Link
                        to={feature.to}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <p className="mb-1 font-semibold text-foreground">
                          {feature.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/portfolio">Portfolio</Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/about-us">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/contact-us">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-4 lg:flex">
            <WhatsAppButton variant="outline">Contact Now</WhatsAppButton>
            <Button>Book a Meeting</Button>
          </div>

          <Sheet data-aos="fade-down">
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link to="/" className="flex items-center gap-2">
                    <Eye className="max-h-8" />
                    <span className="text-lg font-semibold tracking-tighter">
                      10Sight
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <Link
                            to={feature.to}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <p className="mb-1 font-semibold text-foreground">
                              {feature.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-col gap-6">
                  <Link to="/portfolio" className="font-medium">
                    Portfolio
                  </Link>
                  <Link to="/about-us" className="font-medium">
                    About Us
                  </Link>
                  <Link to="/contact-us" className="font-medium">
                    Contact Us
                  </Link>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button>Start for free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};
