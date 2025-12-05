"use client";

import { MoreHorizontal } from "lucide-react";

import CountUp from "react-countup";

const UserCard = ({ type }: { type: string }) => {
  const randomNum = Math.floor(Math.random() * 2001) + 3000;

  return (
    <div className="rounded-2xl odd:bg-accentGold shadow-lg even:bg-accentBrown/90 flex-1 p-4 min-w-[130px] odd:text-accentBrown even:text-accentGold">
      <div className="flex justify-between items-center">
        <span className="text-sm bg-primaryDark px-2 py-1 font-semibold rounded-full text-mutedBlue">
          2025/26
        </span>
        <MoreHorizontal className="w-6 h-6 text-softGray cursor-pointer" />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-softGray">
        <CountUp
          start={0}
          end={randomNum}
          duration={1.5}
          separator=","
        />
      </h1>
      <h2 className="capitalize text-primaryDark text-md font-medium ">{type}</h2>
    </div>
  );
};

export default UserCard;
