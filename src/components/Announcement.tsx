import Link from "next/link";
import { announcements } from "@/lib/data";
import { Bell, ArrowRight } from "lucide-react";

const Announcement = () => {
  return (
    <div className="rounded-[26px] border border-[#e1e7ea] bg-white p-5 shadow-[0_10px_30px_rgba(31,48,61,0.05)] w-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-[#b58b66]" />
          <h2 className="text-sm font-bold text-slate-900">Announcements</h2>
        </div>
        <Link
          href="/list/announcements"
          className="text-xs font-semibold text-[#587b8d] hover:text-[#355564] inline-flex items-center gap-1"
        >
          <span>View all</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {announcements.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-[#f8fafb] border border-slate-100 hover:bg-[#f3f7f5] transition-colors"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="font-bold text-slate-800 text-xs truncate">{item.title}</h3>
              <span className="text-[10px] font-medium font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 flex-shrink-0">
                {item.date}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
