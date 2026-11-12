"use client";

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
import type { FinancePoint } from "@/lib/dashboard-metrics";

type FinanceChartProps = {
  /** Monthly income/expense points. Defaults to the static dataset. */
  data?: FinancePoint[];
};

const FinanceChart = ({ data = AdminFinanceData }: FinanceChartProps) => {
  return (
    <div className="w-full h-full min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
            tickFormatter={(val) => `$${val}`}
            width={48}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
              fontSize: "12px",
              backgroundColor: "#FFFFFF",
            }}
            formatter={(value) => [`$${value}`, undefined]}
            labelStyle={{ fontWeight: "bold", color: "#0F172A", marginBottom: "4px" }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              paddingBottom: "16px",
              fontSize: "12px",
              fontWeight: 500,
              color: "#475569",
            }}
          />
          <Line
            type="monotone"
            dataKey="income"
            name="Income"
            stroke="#567b8d"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "#567b8d" }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            name="Expense"
            stroke="#b58b66"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "#b58b66" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
