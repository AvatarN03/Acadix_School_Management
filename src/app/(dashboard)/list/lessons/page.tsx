import { Filter, Notebook, SortAsc } from "lucide-react";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";

import { lessonsData, ListLessonData, role } from "@/lib/data";

import { LessonProps } from "../../../../../types";

const page = () => {
  const renderRow = (item: LessonProps) => (
    <tr
      key={item.id}
      className="border-b border-slate-100 group hover:bg-[#f7fafb] transition-colors"
    >
      <td className="flex items-center gap-4 p-4">
        <span className="hidden xl:flex h-10 w-10 items-center justify-center rounded-xl bg-[#dce9f1] text-sm font-semibold text-[#4f6878]">
          {item.subject.charAt(0)}
        </span>
        <h3 className="font-normal">{item.subject}</h3>
      </td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex justify-end md:justify-center px-2 items-center gap-2">
          {role === "admin" && (
            <>
              <FormModel table="lesson" type="update" data={item} />
              <FormModel table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="mx-auto max-w-7xl space-y-4 pb-8">
      <div className="rounded-[26px] bg-[#dce9f1] p-7 sm:p-9">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4f6878]">
              Academics · Instruction
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-[#263640]">
              Lessons
            </h1>
            <p className="mt-2 text-sm text-[#587064]">
              Scheduled lessons connecting each subject to its class and teacher.
            </p>
          </div>
          <Notebook className="h-6 w-6 text-[#597484]" />
        </div>
        <div className="mt-7 text-3xl font-semibold tracking-[-0.06em] text-[#263640]">
          {lessonsData.length}
          <span className="ml-2 text-sm font-medium tracking-normal text-[#4f6878]">
            lessons on the schedule
          </span>
        </div>
      </div>

      <div className="rounded-[26px] bg-white p-4 shadow-[0_14px_45px_rgba(31,48,61,0.05)] md:p-6">
        {/* top  */}
        <div className="flex justify-between flex-col md:flex-row gap-1 items-center">
          <h1 className="block text-lg font-normal tracking-wider">All Lessons</h1>
          <div className="flex p-2 flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
            <SearchInput smScreen={true} />
            <div className="flex self-end px-2 gap-2 items-center py-1">
              <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
                <Filter className="w-5 h-5" />
              </button>
              <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
                <SortAsc className="w-5 h-5" />
              </button>
              {role === "admin" && <FormModel table="lesson" type="create" />}
            </div>
          </div>
        </div>
        {/* list  */}
        <div className="overflow-x-auto rounded-2xl border border-slate-100">
          <Table columns={ListLessonData} renderRow={renderRow} data={lessonsData} />
        </div>

        {/* pagination  */}
        <Pagination />
      </div>
    </div>
  );
};

export default page;
