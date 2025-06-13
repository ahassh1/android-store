import React from "react";
import BannerImg from "../assets/banner.png";

const Hero = () => {
  return (
    <div className="py-12">
      <img
        src={BannerImg}
        alt="Banner Image"
        className="w-full mx-auto md:max-w-md"
      />
      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl text-gray-800">
          {" "}
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best place to browse, search, view details and purchase of top
          flagship <br />
          phones of the current time - FlagshipFaceOff See More...
        </p>

        <form className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24">
          <input
            type="text"
            placeholder="Search phone by name"
            className="bg-white border border-gray-400 rounder shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          <button
            className="rounded-md px-3.5 py-[9px] m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white shadow-gray-700 shadow-md"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
             Search Now
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
