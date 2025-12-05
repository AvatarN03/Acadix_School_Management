"use client";
import { useState } from "react";

import { Ellipsis } from "lucide-react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import { Value } from "../../types";
import { events } from "@/lib/data";

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-primaryDark text-white w-full p-4 rounded-xl shadow-md">
      <Calendar className={"text-mutedBlue shadow-black shadow-md w-full rounded-lg"} onChange={onChange} value={value} />
      <div className="flex items-center justify-between my-2">
        <h1 className="text-base md:text-xl font-semibold my-4">Events</h1>
        <Ellipsis />
      </div>
      <div className="flex flex-col gap-4">
        {
          events.map((event)=>(
            <div key={event.id} className="p-2 md:p-5 border-2 border-t-4 
            border-primaryDark odd:border-t-accentGold even:border-t-accentBrown text-mutedBlue rounded-xl">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-300">{event.title}</h1>
                <span className="text-gray-50 text-xs">{event.time}</span>
              </div>
              <p className="text-sx mt-2">{event.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default EventCalendar;
