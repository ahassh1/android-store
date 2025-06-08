import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <h2>Navbar</h2>
            <Outlet></Outlet>
            <h2>Footer</h2>
        </>
    );
};

export default MainLayout;