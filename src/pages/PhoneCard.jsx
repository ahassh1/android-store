import React from "react";
import { Link } from "react-router";
import { MdDeleteForever } from "react-icons/md";


const PhoneCard = ({ phone, deletable ,handleRemove}) => {
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
            <Link to={`/phone-details/${id}`}>
              <button
                className="rounded-md px-3.5 py-[9px] m-1 overflow-hidden relative group cursor-pointer border-2 font-medium
               border-indigo-600 shadow-gray-700 shadow-md"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-black transition duration-300 group-hover:text-white ease">
                  View More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
       {deletable && (
            <div
              onClick={() => handleRemove(id)}
              className='bg-gray-900 p-3 ml-5 rounded-full hover:bg-gray-300 group  cursor-pointer hover:scale-105 absolute -top-5 -right-5'
            >
              <MdDeleteForever
                size={20}
                className='text-gray-100 group-hover:text-gray-900'
              />
            </div>
          )}
    </div>
  );
};

export default PhoneCard;
