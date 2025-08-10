import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetail = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  if (!data) return null;

  return (
    <section id="about" className="py-14 bg-white lg:px-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center lg:flex-row lg:items-center gap-10">
          
          {/* Image Section */}
          <div
            className="lg:w-[43%] mb-6 lg:mb-0"
            data-aos="fade-right"
          >
            <img
              src={data.image}
              alt={data.alt || "Service Image"}
              className="w-full h-auto max-h-[27rem] object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div
            className="lg:w-[44%] pt-4 lg:pt-0 lg:pl-8"
            data-aos="fade-left"
          >
            <h2 className="text-4xl font-bold sora-700 text-black mb-6 leading-snug">
              {data.title}
            </h2>

            {/* Points List */}
            {data.points && (
              <ul className="mb-6 list-none sora-500 space-y-3">
                {data.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-green-50 transition"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <FaCheckCircle className="mr-3 text-green-500 text-lg" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Description */}
            <p
              className="text-gray-700 sora-400 leading-[1.75rem] text-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
