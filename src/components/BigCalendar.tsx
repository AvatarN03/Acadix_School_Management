"use client"

import { useEffect, useState } from "react";

import moment from "moment";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"

import { calendarEvents } from "@/lib/data";

const BigCalendar = () => {
  const localizer = momentLocalizer(moment);
  const [view, setView] = useState<View>(Views.WORK_WEEK)

  const handleOnChangeView = (selectedView:View)=>{
    setView(selectedView)
  }

useEffect(() => {
  const calenderDefault = () => {
    if (window.innerWidth < 550) {
      setView(Views.DAY);
    }
  };

  // run once on mount
  calenderDefault();

  // add listener
  window.addEventListener("resize", calenderDefault);

  // cleanup
  return () => window.removeEventListener("resize", calenderDefault);
}, []);


  return (
    <div className="h-full w-full">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "95%" }}
        onView={handleOnChangeView}
        min={new Date(2025,12,0,8,0,0)}
        max={new Date(2025,12,0,19,0,0)}
      />
    </div>
  );
};

export default BigCalendar;
