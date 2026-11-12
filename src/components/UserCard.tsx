"use client";

import { MoreHorizontal, Users, GraduationCap, Briefcase, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";

interface UserCardProps {
  type: "student" | "teacher" | "parent" | "staff" | string;
}

const UserCard = ({ type }: UserCardProps) => {
  const randomNum = Math.floor(Math.random() * 2001) + 3000;

  const typeConfig: Record<
    string,
    { label: string; icon: any; iconColor: string; badgeColor: string; trend: string }
  > = {
    student: {
      label: "Students",
      icon: GraduationCap,
      iconColor: "text-blue-600 bg-blue-50",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      trend: "+4.5%",
    },
    teacher: {
      label: "Teachers",
      icon: Briefcase,
      iconColor: "text-emerald-600 bg-emerald-50",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      trend: "+2.1%",
    },
    parent: {
      label: "Parents",
      icon: Users,
      iconColor: "text-amber-600 bg-amber-50",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      trend: "+3.8%",
    },
    staff: {
      label: "Staff",
      icon: ShieldCheck,
      iconColor: "text-purple-600 bg-purple-50",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      trend: "+1.2%",
    },
  };

  const config = typeConfig[type] || {
    label: type,
    icon: Users,
    iconColor: "text-slate-600 bg-slate-50",
    badgeColor: "bg-slate-50 text-slate-700 border-slate-200",
    trend: "+0.0%",
  };

  const IconComponent = config.icon;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex-1 min-w-[130px] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2 rounded-xl ${config.iconColor}`}>
          <IconComponent className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
            2025/26
          </span>
          <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight my-1">
          <CountUp start={0} end={randomNum} duration={1.5} separator="," />
        </h1>
        <div className="flex items-center justify-between mt-1">
          <h2 className="text-xs font-semibold text-slate-500 capitalize">{config.label}</h2>
          <span className="text-[11px] font-semibold text-emerald-600">{config.trend}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
