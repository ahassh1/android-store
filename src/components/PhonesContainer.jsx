import React, { useEffect, useState } from "react";
import PhoneCard from "../pages/PhoneCard";

const PhonesContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    // setDisplayPhones(phones.slice(0, 6));
    if (showAll) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAll]);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-7 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>

      <button
        onClick={() => {
            setShowAll((prv) => !prv)
            if(showAll) window.scrollTo(0,500)
        }}
        className="rounded-md px-3.5 py-[9px] m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-black  shadow-gray-700 shadow-md"
      >
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
          {showAll ? "Show Less" : "Show All"}
        </span>
      </button>
    </div>
  );
};

export default PhonesContainer;
