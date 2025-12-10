import Link from "next/link";

import { Edit, Filter, SortAsc } from "lucide-react";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";

import { examsData, ListExamData, role } from "@/lib/data";

import { ExamProps } from "../../../../../types";

const page = () => {
  const renderRow = (item: ExamProps) => (
    <tr
      key={item.id}
      className="border-b-2 p-4 border-babyBlue even:bg-sky-50 odd:bg-slate-50"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold truncate">{item.subject}</h3>
        </div>
      </td>

      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link
            href={`/list/classes/${item.id}`}
            className="flex justify-center items-center p-2 rounded-full bg-sky-400"
          >
            <Edit className="w-4 h-4" />
          </Link>
          {role === "admin" && (
            <>
              <FormModel table="exam" type="update" data={item} />
              <FormModel table="exam" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 m-4 mt-0">
      {/* top  */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
          <SearchInput smScreen={true} />
          <div className="flex  self-end px-2 gap-2 items-center">
            <button className="bg-periwinkle p-2 rounded-full">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-periwinkle p-2 rounded-full">
              <SortAsc className="w-5 h-5" />
            </button>
            {role === "admin" && <FormModel table="exam" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <Table columns={ListExamData} renderRow={renderRow} data={examsData} />

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default page;
