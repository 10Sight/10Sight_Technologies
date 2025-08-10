import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ items, headText }) => {
  return (
    <div className="bg-dark overflow-hidden relative flex flex-col items-center justify-center py-10 border-b-2">
      <h1 className="text-primary text-center relative sora-600 text-[2.5rem] px-2 mb-2">
        {headText}
      </h1>
      <nav className="flex items-center relative z-[40] flex-wrap justify-center p-1 space-x-1 px-2 text-gray-300 text-[0.95rem]">
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-primary">
                <MdKeyboardArrowRight className="text-[1.5rem] mt-[0.2rem]" />
              </span>
            )}
            {item.href ? (
              <Link to={item.href} className="hover:text-black">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-[1rem] text-center text-primary">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default BreadCrumbs;
