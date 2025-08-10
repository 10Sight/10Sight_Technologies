import React from "react";
import { Link } from "react-router-dom";

const ServiceBox = ({ data, aos = "fade-up" }) => {
  return (
    <Link
      to={data?.link}
      data-aos={aos}
      className="relative bg-white rounded-[1rem] shadow-lg overflow-hidden max-w-[42rem] max-h-[32rem] group hover:shadow-xl transition-all duration-300"
    >
      {/* Background image */}
      <img
        src={data?.image}
        alt="Service"
        className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.15]"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-600 via-transparent to-transparent group-hover:from-[10%] group-hover:from-black group-hover:to-transparent transition-all duration-300">
        
        {/* Centered Icon + Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center px-4">
          <div className="bg-gray-800 p-4 rounded-lg mb-3">
            <img
              src={data?.icon}
              alt="Icon"
              className="w-8 h-auto"
            />
          </div>
          <h2
            className="text-[1.2rem] sora-600 leading-tight"
            dangerouslySetInnerHTML={{ __html: data?.title }}
          ></h2>
        </div>

        {/* Description appears only on hover */}
        <div
          className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm text-white z-10"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></div>
      </div>
    </Link>
  );
};

export default ServiceBox;
