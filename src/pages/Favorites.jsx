import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';
import { getFavorites, removeFavorite } from '../utils';

const Favorites = () => {
      const [displayPhones, setDisplayPhones] = useState([]);
      useEffect(() =>{
        const savedPhones = getFavorites()
        setDisplayPhones(savedPhones)
      },[]);


      const handleDelete = id =>{
        removeFavorite(id)
        setDisplayPhones(getFavorites)
      }

    return (
          <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-7 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} deletable={true}/>
        ))}
      </div>
    </div>
    );
}
export default Favorites;