"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  { name: "Total", value: 106, fill: "#F1F5F9" },
  { name: "Girls", value: 48, fill: "#b58b66" },
  { name: "Boys", value: 58, fill: "#567b8d" },
];

const CountChart = () => {
  return (
    <div className="w-full h-full min-h-0 flex flex-col justify-between">
      {/* Title */}
      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
        <div>
          <h2 className="text-sm font-bold text-slate-900">Students Gender Ratio</h2>
          <span className="text-[11px] text-slate-400">Total Enrollment: 2,263</span>
        </div>
        <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
      </div>

      {/* Chart */}
      <div className="w-full h-52 min-h-0 relative my-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="35%"
            outerRadius="100%"
            barSize={18}
            data={data}
          >
            <RadialBar background dataKey="value" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="Gender Ratio"
          width={36}
          height={36}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75"
        />
      </div>

      {/* Legend & Stats */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-center">
          <div className="p-2 rounded-xl bg-[#edf4f6] border border-[#d9e6ea]">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#567b8d]" />
            <span className="text-xs font-semibold text-slate-600">Boys</span>
          </div>
          <p className="text-base font-extrabold text-slate-900">1,245</p>
          <span className="text-[10px] text-slate-400 font-medium">55% of Total</span>
        </div>

        <div className="p-2 rounded-xl bg-[#f5eee6] border border-[#eadccc]">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#b58b66]" />
            <span className="text-xs font-semibold text-slate-600">Girls</span>
          </div>
          <p className="text-base font-extrabold text-slate-900">1,018</p>
          <span className="text-[10px] text-slate-400 font-medium">45% of Total</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
