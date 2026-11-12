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
import type { WeekAttendancePoint } from "@/lib/dashboard-metrics";

type AttendanceChartProps = {
  /** Weekly present/absent points. Defaults to the static dataset. */
  data?: WeekAttendancePoint[];
};

const AttendanceChart = ({ data = AdminAttendenceData }: AttendanceChartProps) => {
  return (
    <div className="w-full h-full min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 11 }}
            width={32}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
              fontSize: "12px",
              backgroundColor: "#FFFFFF",
            }}
            labelStyle={{ fontWeight: "bold", color: "#0F172A", marginBottom: "4px" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{
              paddingBottom: "16px",
              fontSize: "12px",
              fontWeight: 500,
              color: "#475569",
            }}
          />
          <Bar
            dataKey="present"
            name="Present"
            fill="#6b9a7c"
            legendType="circle"
            radius={[4, 4, 0, 0]}
            barSize={14}
          />
          <Bar
            dataKey="absent"
            name="Absent"
            fill="#d5bda8"
            legendType="circle"
            radius={[4, 4, 0, 0]}
            barSize={14}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
