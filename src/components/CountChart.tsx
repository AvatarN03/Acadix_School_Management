"use client";

import Image from "next/image";

import { MoreHorizontal } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

import { AdminStudentdata } from "@/lib/data";



const CountChart = () => {
  return (
    <div className="bg-softGray text-mutedBlue w-full h-full p-4 rounded-xl shadow-lg">
      {/* title  */}
      <div className="flex justify-between items-center shadow-xl">
        <h1 className="text-lg font-semibold">Students</h1>
        <MoreHorizontal className="w-6 h-6  cursor-pointer" />

      </div>
      {/* charts  */}
      <div className="w-full h-[70%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={18}
            data={AdminStudentdata}
          >
            <RadialBar background dataKey="value" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image 
        src={"/maleFemale.png"}
        alt="radial-image"
        width={40}
        height={40}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom  */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-accentGold rounded-full" />
          <h1 className="font-bold">1,245</h1>
          <h2 className="text-xs text-gray-300">Boys 55%</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-mutedBlue rounded-full" />
          <h1 className="font-bold">2,245</h1>
          <h2 className="text-xs text-gray-300">Girls 45%</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
