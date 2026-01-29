import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Send, Twitter, Youtube, Mail, Phone, MapPin, X } from "lucide-react"
import { Link } from "react-router-dom"
import { FaXTwitter } from "react-icons/fa6"

function Footerdemo() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#01070f] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <Link to="/" onClick={handleScrollToTop} className="flex items-center gap-2">
              <img src="https://res.cloudinary.com/dlcrtc03w/image/upload/w_300,c_limit/v1769192617/10Sight_White_zu5kai.png" alt="10Sight" width="150" height="40" className="h-8 w-auto object-contain" />
              <div className="flex flex-col leading-tight min-w-[120px]">
                <span className="text-xl font-bold tracking-tight">10sight</span>
                <span className="text-xs text-gray-400 tracking-widest uppercase">Technologies</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              we believe technology isn't just about code <br />
              — it's about creativity, curiosity, and connection.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-gray-500" />
                <a href="mailto:Info@10sight.Tech" className="text-sm">Email: info@10sight.tech</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-gray-500" />
                <a href="tel:9711341936" className="text-sm">Phone: 9711341936</a>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                <div className="text-sm">
                  <p>New Delhi, India</p>
                  <p>Shalimar Bagh - 110088</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8 lg:border-l border-white/10">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-4">
              <button onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 text-left w-fit">
                Go To Top
              </button>
              <Link to="/services" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                Services
              </Link>
              <Link to="/about-us" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                Why We Exist
              </Link>
              <Link to="/why-choose-us" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                Why Choose Us
              </Link>
              <Link to="/contact-us" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                Contact Us
              </Link>
              <Link to="/faqs" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                FAQs
              </Link>
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div className="lg:pl-8 lg:border-l border-white/10">
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <nav className="flex flex-col space-y-4">
              <Link to="/privacy-policy" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                Terms Of Services
              </Link>
              <Link to="/msme-registered" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                MSME Registered
              </Link>
              <Link to="/cookie-settings" onClick={handleScrollToTop} className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit">
                Cookie Settings
              </Link>
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Have an idea or project in mind? <br />
              Let's build something great together. <br />
              Whether you need a stunning website, <br />
              AI integration, or social media that <br />
              actually converts — we're ready when you are.
            </p>
            <form className="relative mb-8 max-w-sm">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full pr-14 pl-6 h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-full focus:ring-1 focus:ring-white/30 focus:border-white/30 hover:border-white/30 transition-all"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white hover:bg-gray-200 text-[#01070f] transition-colors"
                >
                  <Send className="h-5 w-5 -ml-0.5" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} 10Sight Technologies. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@10SightTechnologies" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/10sight_technologies/" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/company/110903449/" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61581662770730" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://x.com/10SightTech" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
              <FaXTwitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }