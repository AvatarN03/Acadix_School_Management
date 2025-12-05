

import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const page = () => (
  <div className="p-2 md:p-4 flex flex-col gap-1 md:flex-row ">
    {/* left  */}
    <div className="w-full lg:w-2/3 flex flex-col gap-4">
      {/* user card  */}
      <div className="flex justify-between gap-4 flex-wrap">
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parent" />
        <UserCard type="staff" />
      </div>
      {/* middle charts  */}
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/3  h-[350px] md:h-[450px]">
          <CountChart />
        </div>
        <div className="w-full h-[350px] md:h-[450px] lg:w-2/3">
        <AttendanceChart /></div>
      </div>
      {/* bottom charts */}
      <div className="w-full h-[350px] md:h-[545px]">
        <FinanceChart />
      </div>
    </div>
    <div className="w-full lg:w-1/3 flex flex-col gap-4">
      <EventCalendar />
      <Announcement />
    </div>
  </div>
);

export default page;
