import React from 'react';
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (<div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <h2 className="text-3xl font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></h2>
    </div>
    
    <div className="navbar-end gap-2">
  <NavLink className={`btn ${true ? "bg-[#244D3F] text-white" : ""}`}>
    <FaHome />
    Home
  </NavLink>

  <NavLink className={`btn ${false ? "bg-[#244D3F] text-white" : ""}`}>
    <RiTimeLine />
    Timeline
  </NavLink>

  <NavLink className={`btn ${false ? "bg-[#244D3F] text-white" : ""}`}>
    <TfiStatsUp />
    Stats
  </NavLink>
</div>
  </div>
        
       
    );
};

export default Navbar;