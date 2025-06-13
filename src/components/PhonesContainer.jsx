import React from 'react';
import PhoneCard from '../pages/PhoneCard';

const PhonesContainer = ({phones}) => {
    console.log(phones); 
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-7 mb-8'>
           {
            phones.map(phone => (<PhoneCard key={phone.id} phone={phone}/>))
           }
            </div>
        </div>
    );
};

export default PhonesContainer;