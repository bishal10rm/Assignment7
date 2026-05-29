import React from 'react';
import { GoPlus } from "react-icons/go";

const Banner = () => {
    return (
       <div className='text-center container mx-auto'>
         <div>
            <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the</p>
            <p className='text-[#64748B]'>relationships that matter most.</p>
        </div>

        <div>
            <button className='btn bg-[#244D3F] text-white'> <GoPlus />Add friend</button>
        </div>

          <div className='flex p-5'>
          <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="text-2xl font-semi-bold items-center">10</h2>
    <p className='text-[#64748B]'>Total Friends</p>
  </div>
</div>

<div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className=" text-2xl font-semi-bold">6</h2>
    <p className='text-[#64748B]'>On Track</p>
  </div>
</div>

<div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className=" text-2xl font-semi-bold">3</h2>
    <p className='text-[#64748B]'>Need Attention</p>
  </div>
</div>

<div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className=" text-2xl font-semi-bold">2</h2>
    <p className='text-[#64748B]'>Interaction This Month</p>
  </div>
</div>
          </div>
       </div>
      
    );
};

export default Banner;