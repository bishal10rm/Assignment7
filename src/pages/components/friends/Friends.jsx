import React from 'react';
import { use } from 'react';
import { Link } from 'react-router';

const friendsPromise = fetch('/friends.json').then(res=>res.json())

const Friends = () => {

    const friend=use(friendsPromise);
    console.log(friend,"friends");
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {friend.map((friends) => (
          <Link
            key={friends.id}
            to={`/friendDetails/${friends.id}`}
          >
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={friends.picture}
                  alt={friends.name}
                  className="rounded-4xl"
                />
              </figure>
      
              <div className="card-body items-center text-center">
                <h2 className="card-title">{friends.name}</h2>
                <p>{friends.days_since_contact}</p>
                <p className="badge badge-primary">
                  {friends.tags}
                </p>
      
                <div
                  className={`badge font-semibold ${
                    friends.status === "overdue"
                      ? "badge-error text-white"
                      : friends.status === "due-soon"
                      ? "badge-warning text-black"
                      : "badge-success text-white"
                  }`}
                >
                  {friends.status}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
};

export default Friends;