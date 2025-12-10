"use client";

import { MoreHorizontal } from "lucide-react";

import CountUp from "react-countup";

const UserCard = ({ type }: { type: string }) => {
  const randomNum = Math.floor(Math.random() * 2001) + 3000;

  return (
    <div className="rounded-2xl odd:bg-dodgerBlue shadow-lg even:bg-babyBlue flex-1 p-4 min-w-[130px] ">
      <div className="flex justify-between items-center">
        <span className="text-sm bg-lavendar px-2 py-1 font-semibold rounded-full ">
          2025/26
        </span>
        <MoreHorizontal className="w-6 h-6 text-lavendar cursor-pointer" />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-lavendar">
        <CountUp
          start={0}
          end={randomNum}
          duration={1.5}
          separator=","
        />
      </h1>
      <h2 className="capitalize text-periwinkle text-md font-medium ">{type}</h2>
    </div>
  );
};

export default UserCard;
