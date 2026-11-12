"use client";

import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

import { AdminStudentdata } from "@/lib/data";
import type { GenderSlice } from "@/lib/dashboard-metrics";

type CountChartProps = {
  /** Gender slices (Total / Boys / Girls). Defaults to the static dataset. */
  data?: GenderSlice[];
};

// All figures below the chart are derived from `data` — no hardcoded totals,
// so the card stays consistent once dynamic data is passed in.
const CountChart = ({ data = AdminStudentdata }: CountChartProps) => {
  const slice = (name: string) => data.find((item) => item.name === name)?.value ?? 0;

  const total = slice("Total");
  const boys = slice("Boys");
  const girls = slice("Girls");

  const share = (value: number) =>
    total ? `${Math.round((value / total) * 100)}%` : "0%";

  const boysFill = data.find((item) => item.name === "Boys")?.fill ?? "#567b8d";
  const girlsFill = data.find((item) => item.name === "Girls")?.fill ?? "#b58b66";

  return (
    <div className="w-full h-full min-h-0 flex flex-col justify-between">
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
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: boysFill }} />
            <span className="text-xs font-semibold text-slate-600">Boys</span>
          </div>
          <p className="text-base font-extrabold text-slate-900">{boys}</p>
          <span className="text-[10px] text-slate-400 font-medium">{share(boys)} of Total</span>
        </div>

        <div className="p-2 rounded-xl bg-[#f5eee6] border border-[#eadccc]">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: girlsFill }} />
            <span className="text-xs font-semibold text-slate-600">Girls</span>
          </div>
          <p className="text-base font-extrabold text-slate-900">{girls}</p>
          <span className="text-[10px] text-slate-400 font-medium">{share(girls)} of Total</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
