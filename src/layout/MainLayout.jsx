import React from 'react';
import Navbar from '../pages/components/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/components/banner/Banner';
import Friends from '../pages/components/friends/Friends';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <Friends></Friends>
        </div>
    );
};

export default MainLayout;