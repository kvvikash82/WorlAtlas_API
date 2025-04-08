import React from "react";
import footerContact from "../api/FooterAPI.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

function Footer() {
  const iconDisplay = {
    MdPlace: <MdPlace size={40} className="text-red-600 mb-2" />,
    IoCallSharp: <IoCallSharp size={40} className="text-green-600 mb-2" />,
    TbMailPlus: <TbMailPlus size={40} className="text-blue-600 mb-2" />
  };

  return (
    <footer className="bg-gradient-to-br from-blue-100 to-blue-300 pt-10 pb-6 px-4 sm:px-6 lg:px-10 ">
      {/* Grid layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center hover:scale-105 transition-transform duration-300 shadow-[0px_0px_10px_0px_grey]"
            >
              <div className="flex justify-center">{iconDisplay[icon]}</div>
              <h3 className="font-bold text-lg sm:text-xl text-purple-800 mb-1">{title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{details}</p>
            </div>
          );
        })}
      </div>

      {/* Copy Section */}
      <div className="text-center mt-10 text-[14px] sm:text-[16px] text-gray-600">
        <span className="font-bold text-red-500 underline underline-offset-5">© “Web Developer Kumar Vikash”</span> {new Date().getFullYear()} | <span className="text-purple-700 font-semibold">All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
