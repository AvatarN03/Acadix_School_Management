import Link from "next/link";

import { Filter, SortAsc, Users } from "lucide-react";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";

import { ListParentData, parentsData, role } from "@/lib/data";

import { ParentProps } from "../../../../../types";

const page = () => {
  const renderRow = (item: ParentProps) => (
    <tr
      key={item.id}
      className="border-b border-slate-100 group hover:bg-[#f7fafb] transition-colors"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-normal">{item.name}</h3>
          <p className="text-xs text-slate-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden sm:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden truncate xl:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2 justify-end md:justify-center px-2">
          {role === "admin" && (
            <>
              <FormModel table="parent" type="update" data={item} />
              <FormModel table="parent" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="mx-auto max-w-7xl space-y-4 pb-8">
      <div className="rounded-[26px] bg-[#f0e9dc] p-7 sm:p-9"><div className="flex items-start justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#967e61]">People · Family access</p><h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-[#263640]">Parents</h1><p className="mt-2 text-sm text-[#7d6c56]">Keep family contact and student connections organized.</p></div><Users className="h-6 w-6 text-[#8a7151]" /></div><div className="mt-7 text-3xl font-semibold tracking-[-0.06em] text-[#263640]">{parentsData.length}<span className="ml-2 text-sm font-medium tracking-normal text-[#806f59]">family profiles</span></div></div>
      <div className="rounded-[26px] bg-white p-4 shadow-[0_14px_45px_rgba(31,48,61,0.05)] md:p-6">
      {/* top  */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-1">
        <h1 className="block text-lg font-normal tracking-wider">All Parents</h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
          <SearchInput smScreen={true} />
          <div className="flex  self-end px-2 gap-2 items-center">
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <SortAsc className="w-5 h-5" />
            </button>
            {role === "admin" && <FormModel table="parent" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <div className="overflow-x-auto rounded-2xl border border-slate-100"><Table
        columns={ListParentData}
        renderRow={renderRow}
        data={parentsData}
      /></div>

      {/* pagination  */}
      <Pagination />
      </div>
    </div>
  );
};

export default page;
