import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
 
const PhoneDetails = () => {

  // console.log(data);
  const {id} = useParams()
  const data = useLoaderData()
    // console.log(id);
    const singlePhone = data.find(phone => phone.id === parseInt(id))
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
  } = singlePhone || {}
    return (
        <div className='w-full py-12'>
            <img src={image} className='w-full mx-auto md:w-auto  mb-8' alt='kl' />

                  <div className='flex justify-between'>

                    <h1 className='text-6xl font-thin mb-8'>
                    {name}
                    </h1>
                     
                     <Button label='cart'/>
                     <Button label='favorite'/>

                  </div>

        </div>
    );
};

export default PhoneDetails;
