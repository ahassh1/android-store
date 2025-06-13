import React from "react";
import { Link } from "react-router";

const PhoneCard = ({ phone }) => {
  const { name, image, description, id } = phone || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to="/phone-details/${id}">
              <button className="rounded-md px-3.5 py-[9px] m-1 overflow-hidden relative group cursor-pointer border-2 font-medium
               border-indigo-600 shadow-gray-700 shadow-md">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-black transition duration-300 group-hover:text-white ease">
                  View More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PhoneCard;
