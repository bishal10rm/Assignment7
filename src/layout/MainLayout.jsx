import React from 'react';
import Navbar from '../pages/components/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/components/banner/Banner';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
        </div>
    );
};

export default MainLayout;