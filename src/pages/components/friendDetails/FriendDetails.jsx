import React from "react";
import { use } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { toast } from "react-toastify";
import { IoIosCall } from "react-icons/io";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";


const friendsPromise = fetch("/friends.json").then((res) =>
  res.json()
);

const FriendDetails = () => {
  const { id } = useParams();

  const friends = use(friendsPromise);

  const friend = friends.find(
    (f) => f.id === Number(id)
  );

  const { handleCheckIn } = useContext(TimelineContext);


  const addTimeline = (type) => {
    const entry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
     
    };
  
    handleCheckIn(entry);
  
    toast.success(`${type.title}`);
  };

  
  

 


  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left column*/}
        <div>
          <div className="card bg-base-100 shadow">
            <div className="card-body items-center text-center">

              <img
                src={friend.picture}
                alt={friend.name}
                className="w-20 h-20 rounded-full"
              />

              <h2 className="text-2xl font-bold">
                {friend.name}
              </h2>

              <span
                className={`badge ${
                  friend.status === "overdue"
                    ? "badge-error"
                    : friend.status === "due-soon"
                    ? "badge-warning"
                    : "badge-success"
                }`}
              >
                {friend.status}
              </span>

              <div className="flex gap-2 flex-wrap justify-center">
                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-outline"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="italic text-gray-500">
                "{friend.bio}"
              </p>

              <p>{friend.email}</p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <button className="btn btn-outline w-full">
              ⏰ Snooze 2 Weeks
            </button>

            <button className="btn btn-outline w-full">
              📦 Archive
            </button>

            <button className="btn btn-outline btn-error w-full">
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-5">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="card bg-base-100 shadow">
              <div className="card-body text-center">
                <h2 className="text-4xl font-bold">
                  {friend.days_since_contact}
                </h2>
                <p>Days Since Contact</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body text-center">
                <h2 className="text-4xl font-bold">
                  {friend.goal}
                </h2>
                <p>Goal (Days)</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body text-center">
                <h2 className="text-3xl font-bold">
                  {friend.next_due_date}
                </h2>
                <p>Next Due</p>
              </div>
            </div>
          </div>

          {/* Relationship goal */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  Relationship Goal
                </h2>

                <button className="btn btn-sm">
                  Edit
                </button>
              </div>

              <p>
                Connect every{" "}
                <span className="font-bold">
                  {friend.goal} days
                </span>
              </p>
            </div>
          </div>

          {/* Quick check-in */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">

              <h2 className="text-xl font-semibold">
                Quick Check-In
              </h2>

              <div className="grid grid-cols-3 gap-4">

              <button
  className="btn h-20 flex-col"
  onClick={() =>
    addTimeline({
      id: Date.now(),
      type: "Call",
      title: `Call with ${friend.name}`,
      date: new Date().toLocaleDateString(),
    })
  }
>
  <IoIosCall />
  Call
</button>

<button
  className="btn h-20 flex-col"
  onClick={() =>
    addTimeline({
      id: Date.now(),
      type: "Text",
      title: `Text with ${friend.name}`,
      date: new Date().toLocaleDateString(),
    })
  }
>
  <MdOutlineTextsms />
  Text
</button>

<button
  className="btn h-20 flex-col"
  onClick={() =>
    addTimeline({
      id: Date.now(),
      type: "Video",
      title: `Video with ${friend.name}`,
      date: new Date().toLocaleDateString(),
    })
  }
>
  <CiVideoOn />
  Video
</button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;