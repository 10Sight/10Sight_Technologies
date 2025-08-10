import BreadCrumbs from '@/components/BreadCrumbs';
import ContactSection from '@/components/ContactSection';
import React from 'react'
import { Link } from 'react-router-dom'

const ContactUsPage = () => {

    const breadcrumbItems = [
        {label: 'Home', href: '/'},
        {label: 'Contact Us'},
    ];

  return (
    <div>
      <BreadCrumbs headText={'Contact Us'} items={breadcrumbItems} />
      <ContactSection />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27993.059189839223!2d77.15749774999999!3d28.715588999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d019b1d5d2c0b%3A0xc1e6a3811f55c247!2sShalimar%20Bagh%2C%20Delhi!5e0!3m2!1sen!2sin!4v1754153383741!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
    </div>
  )
}

export default ContactUsPage
