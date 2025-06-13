import React, { useState } from 'react';
import Hero from '../components/Hero';
import PhonesContainer from '../components/PhonesContainer';
import { useLoaderData } from 'react-router';
 
const Home = () => {
    // data
    const data = useLoaderData()
    const [phones, setPhones] =useState(data)
    // console.log(data);
    const handleSearch = (e, text) =>{
        e.preventDefault()
        const searchedPhones = data.filter(phone => 
            phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
    
    )
        // console.log(searchedPhones);
        setPhones(searchedPhones)
    }
    return (
        <div>
            <Hero handleSearch={handleSearch}/>
            <PhonesContainer phones={phones}/>
        </div>
    );
};

export default Home;