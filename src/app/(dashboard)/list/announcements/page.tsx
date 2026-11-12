import { Filter, Megaphone, SortAsc } from "lucide-react";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";

import { announcementsData, ListAnnouncementData, role } from "@/lib/data";

import { AnnouncementProps } from "../../../../../types";

const page = () => {
  const renderRow = (item: AnnouncementProps) => (
    <tr
      key={item.id}
      className="border-b border-slate-100 group hover:bg-[#f7fafb] transition-colors"
    >
      <td className="flex items-center gap-4 p-4">
        <span className="hidden xl:flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0e9dc] text-sm font-semibold text-[#75603f]">
          <Megaphone className="h-4 w-4" />
        </span>
        <h3 className="font-normal truncate">{item.title}</h3>
      </td>
      <td className="hidden sm:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex justify-end md:justify-center px-2 items-center gap-2">
          {role === "admin" && (
            <>
              <FormModel table="announcement" type="update" data={item} />
              <FormModel table="announcement" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="mx-auto max-w-7xl space-y-4 pb-8">
      <div className="rounded-[26px] bg-[#f0e9dc] p-7 sm:p-9">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#75603f]">
              Communication · Notices
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-[#263640]">
              Announcements
            </h1>
            <p className="mt-2 text-sm text-[#6d5d49]">
              School-wide notices, targeted to the classes they concern.
            </p>
          </div>
          <Megaphone className="h-6 w-6 text-[#8a7151]" />
        </div>
        <div className="mt-7 text-3xl font-semibold tracking-[-0.06em] text-[#263640]">
          {announcementsData.length}
          <span className="ml-2 text-sm font-medium tracking-normal text-[#75603f]">
            notices published
          </span>
        </div>
      </div>

      <div className="rounded-[26px] bg-white p-4 shadow-[0_14px_45px_rgba(31,48,61,0.05)] md:p-6">
        {/* top  */}
        <div className="flex justify-between flex-col md:flex-row gap-1 items-center">
          <h1 className="block text-lg font-normal tracking-wider">All Announcements</h1>
          <div className="flex p-2 flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
            <SearchInput smScreen={true} />
            <div className="flex self-end px-2 gap-2 items-center py-1">
              <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
                <Filter className="w-5 h-5" />
              </button>
              <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
                <SortAsc className="w-5 h-5" />
              </button>
              {role === "admin" && <FormModel table="announcement" type="create" />}
            </div>
          </div>
        </div>
        {/* list  */}
        <div className="overflow-x-auto rounded-2xl border border-slate-100">
          <Table columns={ListAnnouncementData} renderRow={renderRow} data={announcementsData} />
        </div>

        {/* pagination  */}
        <Pagination />
      </div>
    </div>
  );
};

export default page;
