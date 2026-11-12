import { CheckSquare, ClipboardList } from "lucide-react";

const page = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-4 pb-8">
      <div className="rounded-[26px] bg-[#f0e9dc] p-7 sm:p-9">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#75603f]">
              Communication · Daily roll call
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-[#263640]">
              Attendance
            </h1>
            <p className="mt-2 text-sm text-[#6d5d49]">
              Daily attendance records for every class, student by student.
            </p>
          </div>
          <CheckSquare className="h-6 w-6 text-[#8a7151]" />
        </div>
      </div>

      <div className="rounded-[26px] bg-white p-10 shadow-[0_14px_45px_rgba(31,48,61,0.05)] md:p-14">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0e9dc]">
            <ClipboardList className="h-6 w-6 text-[#8a7151]" />
          </span>
          <h2 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-[#263640]">
            Attendance records are on the way
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[#6d5d49]">
            This module is still in development. Daily attendance will appear here once it is
            connected to the school&apos;s records.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
