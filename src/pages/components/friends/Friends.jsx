import React from 'react';
import { use } from 'react';

const friendsPromise = fetch('/friends.json').then(res=>res.json())



const Friends = () => {

    const friend=use(friendsPromise);
    console.log(friend,"friends");
    return (
       <div className=''>
         <div className='container mx-auto'>
            <h2 className='font-bold text-3xl text-left'>Your Friends</h2>
             <br></br>

             <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
             {friend.map((friends)=>{
             return <div className="card bg-base-100 w-96 shadow-sm  ">
             <figure className="px-10 pt-10">
               <img
                 src={friends.picture}
                 alt=""
                 className="rounded-4xl" />
             </figure>
             <div class="$$card-body items-center text-center">
               <h2 class="$$card-title">{friends.name}</h2>
               <p>{friends.days_since_contact}</p>
               <p className='badge badge-primary'>{friends.tags}</p><br></br>
                         <div className={`badge font-semibold ${
                                        friends.status === 'overdue' 
                                            ? 'badge-error text-white' 
                                            : friends.status === 'due-soon' 
                                                ? 'badge-warning text-black' 
                                                : 'badge-success text-white'
                                    }`}>
                                        {friends.status}
                                    </div>
                                
             </div>
           </div>
            })}
             </div>
         
        </div>
       </div>
    );
};

export default Friends;