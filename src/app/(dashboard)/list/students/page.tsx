import Link from "next/link";
import Image from "next/image";

import { Filter, SortAsc, GraduationCap } from "lucide-react";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";

import { ListStudentData, role, studentsData } from "@/lib/data";

import { StudentProps } from "../../../../../types";

const page = () => {
  const renderRow = (item: StudentProps) => (
    <tr
      key={item.id}
      className="border-b border-slate-100 group hover:bg-[#f7fafb] transition-colors"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-normal">{item.name}</h3>
          <p className="text-xs text-slate-500">{item?.class}</p>
        </div>
      </td>
      <td className="hidden sm:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden truncate xl:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2 px-2 justify-end md:justify-center">
          {role === "admin" && (
            <>
              <FormModel table="student" type="update" data={item} />
              <FormModel table="student" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="mx-auto max-w-7xl space-y-4 pb-8">
      <div className="rounded-[26px] bg-[#dce9f1] p-7 sm:p-9"><div className="flex items-start justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#587181]">People · Learners</p><h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-[#263640]">Students</h1><p className="mt-2 text-sm text-[#607584]">Keep student records clear, current, and easy to find.</p></div><GraduationCap className="h-6 w-6 text-[#597484]" /></div><div className="mt-7 text-3xl font-semibold tracking-[-0.06em] text-[#263640]">{studentsData.length}<span className="ml-2 text-sm font-medium tracking-normal text-[#607584]">student profiles</span></div></div>
      <div className="rounded-[26px] bg-white p-4 shadow-[0_14px_45px_rgba(31,48,61,0.05)] md:p-6">
      {/* top  */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-1">
        <h1 className="block text-lg font-normal tracking-wider">All Students</h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
          <SearchInput smScreen={true} />
          <div className="flex  self-end px-2 gap-2 items-center">
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <SortAsc className="w-5 h-5" />
            </button>
            {role === "admin" && <FormModel table="student" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <div className="overflow-x-auto rounded-2xl border border-slate-100"><Table
        columns={ListStudentData}
        renderRow={renderRow}
        data={studentsData}
      /></div>

      {/* pagination  */}
      <Pagination />
      </div>
    </div>
  );
};

export default page;
