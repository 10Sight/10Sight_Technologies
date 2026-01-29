import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactSection = ({ backgroundImage = "https://res.cloudinary.com/dlcrtc03w/image/upload/v1769364173/Fill_the_form_page.jpg_bjznsy.jpg", backgroundVideo }) => {
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
        <div className={`flex flex-wrap gap-8 items-start justify-around py-12 sm:py-20 overflow-hidden relative ${(!backgroundImage && !backgroundVideo) ? 'bg-[#01070f]' : 'bg-[#01070f]'}`}>

            {/* Background Media Conditional Rendering - Hidden on Mobile */}
            {(backgroundVideo || backgroundImage) && (
                <div className="absolute inset-0 z-0 hidden lg:block">
                    {backgroundVideo ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={backgroundVideo} type="video/mp4" />
                        </video>
                    ) : (
                        <img
                            src={backgroundImage}
                            alt="Contact Section Background"
                            className="w-full h-full object-cover"
                        />
                    )}
                    {/* Dark Overlay for Readability */}
                    <div className="absolute inset-0 " />
                </div>
            )}

            {/* Left Column */}
            <div className="max-w-[34rem] px-4 md:max-w-[38rem] flex items-center relative z-10">
                <div className='text-white'>
                    <h2 className='sora-600 leading-[1.2] mb-6 text-4xl font-bold sm:text-[3rem]'>
                        Partner with Us for Comprehensive IT Services
                    </h2>
                    <p className='sora-400 leading-[1.6rem] text-gray-300 mb-10 text-[0.95rem]'>
                        We provide comprehensive IT services, including web development,
                        graphic design, and digital marketing, to help businesses grow and
                        achieve their goals. Let's collaborate to elevate your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-10">
                        <div className="flex flex-col items-start space-y-4">
                            <div className='bg-black/30 p-3 rounded-md backdrop-blur-sm'>
                                <FaLocationDot className='text-white text-[1.2rem]' />
                            </div>
                            <div>
                                <h2 className="text-white text-[1.2rem] font-semibold mb-1">Address</h2>
                                <p className='sora-400 text-sm text-gray-300 leading-relaxed'>
                                    India<br />Shalimar Bagh, New Delhi <br /> 110088
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <div className='bg-black/30 p-3 rounded-md backdrop-blur-sm'>
                                <MdContactPhone className='text-white text-[1.2rem]' />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className="text-white text-[1.2rem] font-semibold mb-1">Contact</h2>
                                <a href="mailto:info@10sight.tech" className="text-sm text-gray-300 hover:text-white transition-colors">Info@10sight.Tech</a>
                                <div className='mt-1 space-y-0.5'>
                                    <a href="tel:+919711341936" className="block text-sm text-gray-300 hover:text-white transition-colors">+91 9711341936</a>
                                    <a href="tel:+919250222787" className="block text-sm text-gray-300 hover:text-white transition-colors">+91 9250222787</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-12 text-white font-semibold text-lg">Office Hours: 24/7</p>
                </div>
            </div>

            {/* Right Column (Form) */}
            <div
                onMouseMove={(e) => {
                    const { currentTarget: target } = e;
                    const rect = target.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    target.style.setProperty("--mouse-x", `${x}px`);
                    target.style.setProperty("--mouse-y", `${y}px`);
                }}
                className="max-w-[34rem] w-full sm:p-12 p-8 py-14 bg-[#0b1727]/10 backdrop-blur-md border border-white/10 rounded-2xl md:max-w-[32rem] mt-12 lg:mt-0 relative z-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 group overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="600"
            >
                {/* Noise Texture Overlay */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Static Top Glow */}
                <div
                    className="pointer-events-none absolute -top-[100px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full"
                />

                {/* Spotlight Overlay */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.4), transparent 40%)`
                    }}
                />

                <h3 className="text-3xl text-white font-semibold mb-3 relative z-10">Fill The Contact Form</h3>
                <p className="mb-10 text-base text-gray-300 relative z-10">Feel free to contact with us, guaranteed response within 24 hours</p>
                <form onSubmit={handleSubmit} noValidate className='space-y-6 relative z-10'>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-5 py-4 bg-[#112a4f]/50 text-white border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400 text-base backdrop-blur-sm transition-all focus:bg-[#112a4f]/80"
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="w-full">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="w-full px-5 py-4 bg-[#112a4f]/50 text-white border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400 text-base backdrop-blur-sm transition-all focus:bg-[#112a4f]/80"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full px-5 py-4 bg-[#112a4f]/50 text-white border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400 text-base backdrop-blur-sm transition-all focus:bg-[#112a4f]/80"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write Your Message"
                            className="w-full px-5 py-4 bg-[#112a4f]/50 text-white border border-white/10 rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400 text-base backdrop-blur-sm transition-all focus:bg-[#112a4f]/80"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-xl w-full cursor-pointer bg-gradient-to-r from-[#051024] to-[#0a1c38] border border-white/10 px-6 py-4 text-base font-semibold text-white shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 mt-4"
                    >
                        {loading ? 'Sending...' : 'Submit'}
                    </button>
                </form>
                <ToastContainer className='z-50' position="bottom-right" theme="dark" />
            </div>
        </div>
    );
};

export default ContactSection;
