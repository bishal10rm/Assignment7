import React, { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter(
    (item) => item.type === "Call"
  ).length;

  const textCount = timeline.filter(
    (item) => item.type === "Text"
  ).length;

  const videoCount = timeline.filter(
    (item) => item.type === "Video"
  ).length;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#7C3AED", "#1F5A4A", "#3BA66B"];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-5xl font-bold mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl  ">
        <h2 className="text-lg mb-6">
          By Interaction Type
        </h2>

        <div className=" shadow p-6 w-full h-[450px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;