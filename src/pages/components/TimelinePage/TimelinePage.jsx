import React, { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { IoIosCall } from "react-icons/io";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <IoIosCall size={20} />;

      case "Text":
        return <MdOutlineTextsms size={20} />;

      case "Video":
        return <CiVideoOn size={20} />;

      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Timeline
      </h1>

      {timeline.length === 0 ? (
        <div className="card bg-base-100 shadow">
          <div className="card-body text-center">
            <p className="text-lg">
              No interactions yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {timeline.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow"
            >
              <div className="card-body">
                <div className="flex items-center gap-4">

                  <div className="text-primary">
                    {getIcon(item.type)}
                  </div>

                  <div>
                    <h2 className="font-bold text-lg">
                      {item.title}
                    </h2>

                    <p className="text-gray-500">
                      📅 {item.date}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;