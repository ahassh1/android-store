import React from "react";
import PhoneCard from "../pages/PhoneCard";

const PhonesContainer = ({ phones }) => {
  console.log(phones);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-7 mb-8">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>

      <button className="rounded-md px-3.5 py-[9px] m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-black  shadow-gray-700 shadow-md">
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
        Show All
        </span>
      </button>
    </div>
  );
};

export default PhonesContainer;
