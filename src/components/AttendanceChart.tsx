"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { AdminAttendenceData } from "@/lib/data";
import { MoreHorizontal } from "lucide-react";


const AttendanceChart = () => {
  return (
    <div className="bg-softGray w-full h-full p-4 text-mutedBlue rounded-xl shadow-lg">
      {/* title  */}
      <div className="flex justify-between items-center shadow-xl">
        <h1 className="text-lg font-semibold">Attendence</h1>
       <MoreHorizontal className="w-6 h-6 cursor-pointer" />
      </div>
      {/* charts  */}
        <ResponsiveContainer width={"100%"} height={"90%"}>
          <BarChart
            responsive
            data={AdminAttendenceData}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#699AA7" />
            <XAxis dataKey="name" axisLine={false} tickLine={false}  tick={{ fill: "#fff", fontSize: 12 }} 
            stroke="#fff"/>
            <YAxis width="auto" tick={{ fill: "#fff", fontSize: 12 }} stroke="#fff"/>
             <Tooltip
               contentStyle={{
                 borderRadius: "10px",
                 background: "#ffffff",
               }}
               labelStyle={{ color: "#000" }}
               itemStyle={{ color: "#000" }}
             />
            <Legend align="left" verticalAlign="top" wrapperStyle={{
                paddingTop: "10px", paddingBottom:"20px"
            }}/>
            <Bar
              dataKey="present"
              fill="#6B848F"
              legendType="circle"
              radius={[3,3,0,0]}
            />
            <Bar
              dataKey="absent"
              fill="#D39939"
              legendType="circle"
              radius={[3,3,0,0]}
            />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
