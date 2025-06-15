import React, { useEffect, useState } from 'react';
import { CartContext } from './Contexts';
import { getCart } from '../utils';

const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])
    useEffect(() =>{
        // check the local storage for cart data is there or not 
        setCart(getCart())
    },[])
    return <CartContext.Provider value={{cart, setCart}} >
        {children}
    </CartContext.Provider>
};

export default CartProvider;