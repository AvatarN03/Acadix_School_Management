
import Image from "next/image";
import Link from "next/link";

import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import { TeacherProfile } from "@/lib/data";


const page = () => {
  return (
    <div className="flex-1 flex p-4 flex-col xl:flex-row gap-4">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        {/* top  */}
        <div className="flex flex-col xl:flex-row gap-4">
          {/* user info card */}
          <div className="bg-accentGold shadow-md px-4 py-2 rounded-md flex flex-col md:flex-row gap-4 w-full xl:w-2/3">
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <Image
                src="https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg"
                alt="teacher_profile"
                width={144}
                height={144}
                className="object-cover w-32 md:w-52 h-32 md:h-52 text-center border-2 rounded-full"
              />
            </div>

            <div className="flex flex-1 my-4 flex-col justify-between gap-4">
              <h1 className="text-2xl font-bold">Ramu Naidu</h1>
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
                      className="flex text-xs bg-accentBrown/50 w-full  xl:w-full p-1 rounded-md justify-start items-center gap-2"
                    >
                      <Icon />
                      <div className="flex flex-col gap-1">
                        <h4 className="text-base">{data.label}</h4>
                        <p className="text-primaryDark text-sm">{data.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* info cards */}
          <div className="grid grid-cols-2 gap-2 w-full xl:w-1/3">
            {/* CARD */}
            <div className="bg-accentBrown p-4 rounded-md flex-col flex justify-center items-center gap-4">
              <Image
                src="/singleAttendance.png"
                width={62}
                height={62}
                alt=""
              />
              <div>
                <h1 className="text-3xl font-semibold">90%</h1>
                <span className="text-base text-gray-300">Attendance</span>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-accentBrown p-4 rounded-md flex-col flex justify-center items-center gap-4">
              <Image src="/singleBranch.png" width={62} height={62} alt="" />
              <div>
                <h1 className="text-3xl font-semibold">2</h1>
                <span className="text-base text-gray-300">Branches</span>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-accentBrown p-4 rounded-md flex-col flex justify-center items-center gap-4">
              <Image src="/singleLesson.png" width={62} height={62} alt="" />
              <div>
                <h1 className="text-3xl font-semibold">6</h1>
                <span className="text-base text-gray-300">Lessons</span>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-accentBrown p-4 rounded-md flex-col flex justify-center items-center gap-4">
              <Image src="/singleClass.png" width={62} height={62} alt="" />
              <div>
                <h1 className="text-3xl font-semibold">6</h1>
                <span className="text-base text-gray-300">Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 text-white/80 rounded-md p-4 h-500px] md:h-[800px] bg-softGray">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* right  */}
      <div className="w-full xl:w-1/3 flex-col text-white flex gap-4">
        <div className="bg-primaryDark  p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-800">
            <Link className="p-3 rounded-md bg-mutedBlue " href="/">
              Teacher&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-purple-300" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-accentGold" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-300" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-indigo-300" href="/">
              Teacher&apos;s Assignments
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
