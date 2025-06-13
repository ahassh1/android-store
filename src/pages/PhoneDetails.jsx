import React from 'react';
import { useLoaderData } from 'react-router';
 
const PhoneDetails = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            <h2>PhoneDetails</h2>

        </div>
    );
};

export default PhoneDetails;