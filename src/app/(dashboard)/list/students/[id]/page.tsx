import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import { TeacherProfile } from "@/lib/data";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type TeacherProfileProp = {
  [key: string]: {
    label: string;
    value: string;
    icon: LucideIcon;
  };
};

const page = () => {
  return (
    <div className="flex-1 flex p-4 flex-col xl:flex-row gap-4">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        {/* top  */}
        <div className="flex flex-col xl:flex-row gap-4">
          {/* user info card */}
          <div className="bg-sky-200 px-4 py-2 rounded-md flex flex-col md:flex-row gap-4 w-full xl:w-2/3">
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <Image
                src="https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg"
                alt="teacher_profile"
                width={144}
                height={144}
                className="object-cover w-36 h-36 text-center border-2 rounded-full"
              />
            </div>

            <div className="flex flex-1 my-4 flex-col justify-between gap-4">
              <h1>Ramu Naidu</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                iusto!
              </p>

              <div className="flex flex-wrap gap-2 font-medium">
                {Object.entries(TeacherProfile).map(([key, data], index) => {
                  const Icon = data.icon;
                  return (
                    <div
                      key={index}
                      className="flex text-xs bg-sky-300/50 w-full  xl:w-full p-1 rounded-md justify-start items-center gap-2"
                    >
                      <Icon />
                      <div className="flex flex-col gap-1">
                        <h4>{data.label}</h4>
                        <p>{data.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full xl:w-1/3">
            <div className="bg-white p-4 rounded-md flex-col flex gap-4 w-full ">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex-col flex gap-4 w-full ">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex-col flex gap-4 w-full ">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex-col flex gap-4 w-full ">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* right  */}
      <div className="w-full xl:w-1/3 flex-col flex gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default page;
