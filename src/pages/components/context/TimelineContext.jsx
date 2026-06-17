import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const handleCheckIn = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  const data = {
    timeline,
    setTimeline,
    handleCheckIn,
  };

  return (
    <TimelineContext.Provider value={data}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;