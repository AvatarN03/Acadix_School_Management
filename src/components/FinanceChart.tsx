"use client";

import { MoreHorizontal } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AdminFinanceData } from "@/lib/data";


const FinanceChart = () => {
  return (
    <div className="bg-babyBlue text-lavendar w-full h-full  rounded-xl shadow-lg">
      {/* title  */}
      <div className="flex justify-between items-center p-3 pb-1 shadow-xl mb-1">
        <h1 className="text-lg font-semibold">Finance</h1>
        <MoreHorizontal className="w-6 h-6 cursor-pointer" />
      </div>
      {/* charts  */}
      <ResponsiveContainer width={"100%"} height={"90%"} className={"p-2"}>
        <LineChart data={AdminFinanceData}   margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#699AA7"
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "#fff", fontSize: 12 }}
            stroke="#fff"
          />

          <YAxis tick={{ fill: "#fff", fontSize: 12 }} stroke="#fff" width={48} />

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              background: "#C2BBF0",
            }}
            labelStyle={{ color: "#000" }}
            itemStyle={{ color: "#000" }}
          />

          <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{ color: "#fff" }}
          />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#0B63C1"
            strokeWidth={3}
            legendType="plainline"
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#62BFED"
            strokeWidth={3}
            legendType="plainline"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
