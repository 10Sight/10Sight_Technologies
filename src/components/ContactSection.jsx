import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loadingToastId, setLoadingToastId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            return toast.error("All fields are required");
        }
        setLoading(true);
        const toastId = toast.loading('Sending message...');
        setLoadingToastId(toastId);

        const serviceID = 'service_10sight_tech';
        const templateID = 'template_a3boj17';
        const userID = 'MKkgo7TBbxoKlkljY';

        emailjs.send(serviceID, templateID, formData, userID)
            .then(() => {
                toast.update(toastId, {
                    render: 'Email sent successfully!',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
                setLoading(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch(() => {
                toast.update(toastId, {
                    render: 'An error occurred while sending the email.',
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                });
                setLoading(false);
            });
    };

    return (
        <div className='flex bg-gray-100 flex-wrap gap-8 items-center justify-around py-12 sm:py-20 overflow-hidden'>
            {/* Left Column */}
            <div className="max-w-[34rem] px-4 md:max-w-[35rem] flex items-center">
                <div>
                    <h2 className='sora-600 leading-[3rem] mb-4 text-4xl font-bold sm:text-[2.6rem] text-primary'>
                        Partner with Us for Comprehensive IT Services
                    </h2>
                    <p className='sora-400 leading-[1.85rem] text-primary mb-8'>
                        We provide comprehensive IT services, including web development, graphic design, and digital marketing, to help businesses grow and achieve their goals. Let's collaborate to elevate your business.
                    </p>
                    <div className="flex flex-col justify-between sm:flex-row">
                        <div className="flex flex-col items-start space-y-3">
                            <div className='bg-primary p-3 rounded-md'>
                                <FaLocationDot className='text-white text-[1.4rem]' />
                            </div>
                            <div>
                                <h2 className="text-primary text-[1.3rem] sora-600">Address</h2>
                                <p className='sora-400 text-sm text-primary mt-2'>
                                    India<br />Shalimar Bagh, New Delhi <br /> 110088
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start space-y-3">
                            <div className='bg-primary p-3 rounded-md'>
                                <MdContactPhone className='text-white text-[1.4rem]' />
                            </div>
                            <div className='sora-400 text-sm text-primary space-y-1'>
                                <h2 className="text-primary text-[1.3rem] sora-600 mb-2">Contact</h2>
                                <a href="mailto:info@domain.com" className="block">10Sight@gmail.com</a>
                                <a href="tel:6207234759" className="block">+91 9711341936</a>
                                <a href="tel:8115544102" className="block">+91 9250222787</a>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-primary sora-500 text-[1.1rem]">Office Hours: 24/7</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="max-w-[34rem] sm:p-12 p-6 bg-white shadow-sm rounded-xl  md:max-w-[31rem] mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="600">
                <h3 className="text-2xl text-primary sora-600 mb-4">Fill The Contact Form</h3>
                <p className="mb-6 sora-400 text-primary">Feel free to contact with us, guaranteed response within 24 hours</p>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="flex flex-wrap mb-4 -mx-2">
                        <div className="w-full px-2 mb-4 lg:w-[60%] lg:mb-0">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="w-full px-2 lg:w-[40%]">
                            <input
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="rounded-md w-full cursor-pointer bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90"
                    >
                        Submit
                    </button>
                </form>
                <ToastContainer className='z-50' />
            </div>
        </div>
    );
};

export default ContactSection;
