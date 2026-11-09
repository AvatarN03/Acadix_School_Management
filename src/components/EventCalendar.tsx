"use client";

import { useState } from "react";
import { Ellipsis, Calendar as CalendarIcon, Clock } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Value } from "../../types";
import { events } from "@/lib/data";

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="rounded-[26px] border border-[#e1e7ea] bg-white p-5 shadow-[0_10px_30px_rgba(31,48,61,0.05)] w-full flex flex-col justify-between">
      {/* Calendar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-[#6b9a7c]" />
          <h2 className="text-sm font-bold text-slate-900">Academic Calendar</h2>
        </div>
        <Ellipsis className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
      </div>

      {/* Embedded Mini Calendar */}
      <div className="p-2 bg-slate-50/80 rounded-2xl border border-slate-100 mb-4">
        <Calendar onChange={onChange} value={value} className="text-xs w-full rounded-xl" />
      </div>

      {/* Events List Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Upcoming Events
        </h3>
        <span className="text-[10px] font-semibold text-[#587064] bg-[#e5eee8] px-2 py-0.5 rounded-full border border-[#cfe0d4]">
          {events.length} Scheduled
        </span>
      </div>

      {/* Events Items */}
      <div className="space-y-2.5">
        {events.map((event, idx) => {
          const borderClass = idx === 0 ? "border-l-[#6b9a7c]" : idx === 1 ? "border-l-[#567b8d]" : "border-l-[#b58b66]";

          return (
            <div
              key={event.id}
              className={`p-3 border-l-2 bg-[#f8fafb] border border-slate-100 rounded-xl transition-colors hover:bg-[#f3f7f5] ${borderClass}`}
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-bold text-slate-900 text-xs truncate">{event.title}</h4>
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 flex-shrink-0">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {event.time}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                {event.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
