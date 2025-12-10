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
    <div className="bg-dodgerBlue w-full h-full text-lavendar rounded-xl shadow-lg">
      {/* title  */}
      <div className="flex justify-between items-center shadow-xl p-3 pb-1">
        <h1 className="text-lg font-semibold">Attendence</h1>
       <MoreHorizontal className="w-6 h-6 cursor-pointer" />
      </div>
      {/* charts  */}
        <ResponsiveContainer width={"100%"} height={"90%"} className={"p-1"}>
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
                 background: "#C2BBF0",
               }}
               labelStyle={{ color: "#000" }}
               itemStyle={{ color: "#000" }}
             />
            <Legend align="left" verticalAlign="top" wrapperStyle={{
                paddingTop: "10px", paddingBottom:"20px"
            }}/>
            <Bar
              dataKey="present"
              fill="#62BFED"
              legendType="circle"
              radius={[3,3,0,0]}
            />
            <Bar
              dataKey="absent"
              fill="#508FE2"
              legendType="circle"
              radius={[3,3,0,0]}
            />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
