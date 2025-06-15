import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdAddShoppingCart, MdBookmarkAdd } from 'react-icons/md'
import { addFavorite, addToCart, getCart } from "../utils";
import { CartContext } from "../providers/Contexts";

const PhoneDetails = () => {

  const {setCart} = useContext(CartContext)
  // console.log(data);
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id);
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  // console.log(singlePhone);
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};
   
  const handleFavorite = () =>{

    // save to localStorage for persistency 

    addFavorite(singlePhone)

    // update state for instant ui change 
    setCart(getCart())
  }
  
  const handleCart = () =>{
    addToCart(singlePhone)    
  }

  return (
    <div className="w-full py-12">
     
      {/* title and button seciton */}
      <img src={image} className="w-full mx-auto md:w-auto  mb-8" alt="kl" />

      <div className="flex justify-between">
       <div>
         <h1 className="text-6xl font-thin mb-8">{name}</h1>
       </div>


        <div className="flex">
           <Button onClick={handleCart} label={<MdAddShoppingCart/>} />
        <Button onClick={handleFavorite} label={<MdBookmarkAdd/>} />
        </div>

      </div>

      {/* details section  */}
      <div>
        
      </div>
    </div>
  );
};

export default PhoneDetails;
