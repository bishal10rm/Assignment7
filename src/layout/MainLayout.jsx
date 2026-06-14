import React from "react";
import Navbar from "../pages/components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/components/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;