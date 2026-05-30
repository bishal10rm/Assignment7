import React from 'react';
import Navbar from '../pages/components/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/components/banner/Banner';
import Friends from '../pages/components/friends/Friends';
import Footer from '../pages/components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <Friends></Friends>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;