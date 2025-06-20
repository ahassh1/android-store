import React, { useState } from "react";
import BannerImg from "../assets/banner.png";
import Button from "./ui/Button";

const Hero = ({handleSearch}) => {
  const [searchText , setSearchText]= useState('')

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

        <form
        onSubmit={e => 
          {
            handleSearch(e,searchText)
            // reset input state 
            setSearchText('')
          }}
        className="flex flex-col md:flex-row justify-center 
        items-center mb-4 md:px-24">
          <input
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
            type="text"

            placeholder="Search phone by name"
            className="bg-white border border-gray-400 rounder 
            shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none
             focus:shadow-outline md:mr-2 md:mb-0"
          />
          
            <Button type='submit' label='Search'/>
        </form>
      </div>
    </div>
  );
};

export default Hero;
