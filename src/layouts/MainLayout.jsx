import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <>
           <Navbar/>
           <Outlet/>
            <h2>Footer</h2>
        </>
    );
};

export default MainLayout;