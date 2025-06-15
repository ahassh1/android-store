import React from 'react';

const Button = ({label,type,onClick}) => {
    return (
        <div>
             <button
          type= {type}
          onClick={onClick}
            className="rounded-md px-3.5 py-[9px] m-1 overflow-hidden 
            relative group cursor-pointer border-2 font-medium
             border-indigo-600 shadow-gray-700 shadow-md"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 
            origin-center rotate-45 -translate-x-20 bg-indigo-600 
            top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-indigo-600 transition duration-300
             group-hover:text-white ease">
             {label}
            </span>
          </button>
        </div>
    );
};

export default Button;