import BreadCrumbs from '@/components/BreadCrumbs';
import ContactSection from '@/components/ContactSection';
import MediaGrid from '@/components/MediaGrid';
import React from 'react'
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom'

const ContactUsPage = () => {

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us' },
  ];

  return (
    <div>
      <div className="bg-[#01070f] pt-32 pb-10 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Contact Us</h1>

          <MediaGrid
            items={[
              {
                href: "https://www.instagram.com/10sight_technologies/",
                colorClass: "from-blue-500/80 to-cyan-400/80", // Cyan/Teal
                icon: <FaInstagram className='size-8' />
              },
              {
                href: "mailto:info@10sight.tech",
                colorClass: "from-blue-400/80 to-blue-600/80", // Solid Blue
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              },
              {
                href: "https://x.com/10SightTech",
                colorClass: "from-red-600/80 to-orange-500/80", // Red/Orange
                icon: <FaXTwitter className='size-8' />
              },
              {
                href: "https://www.linkedin.com/company/110903449/",
                colorClass: "from-blue-700/80 to-blue-900/80", // Deep Blue
                icon: <FaLinkedin className='size-8' />
              },
              {
                href: "https://www.facebook.com/profile.php?id=61581662770730",
                colorClass: "from-indigo-600/80 to-blue-800/80", // Indigo
                icon: <FaFacebook className='size-8' />
              },
              {
                href: "https://www.youtube.com/@10sighttechnologies",
                colorClass: "from-gray-500/80 to-gray-300/80", // Gray/White
                icon: <FaYoutube className='size-8' />
              }
            ]}
            className="max-w-4xl mx-auto"
          />
        </div>
      </div>
      <ContactSection />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27993.059189839223!2d77.15749774999999!3d28.715588999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d019b1d5d2c0b%3A0xc1e6a3811f55c247!2sShalimar%20Bagh%2C%20Delhi!5e0!3m2!1sen!2sin!4v1754153383741!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
    </div>
  )
}

export default ContactUsPage
