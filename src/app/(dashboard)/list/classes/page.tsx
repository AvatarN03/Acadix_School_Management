import Link from "next/link";

import { Edit, Filter, SortAsc } from "lucide-react";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";

import { classesData, ListClassData, role } from "@/lib/data";

import { ClassesProp } from "../../../../../types";

const page = () => {
  const renderRow = (item: ClassesProp) => (
    <tr
      key={item.id}
      className="border-b-2 p-4 border-babyBlue even:bg-sky-50 odd:bg-slate-50"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td className="hidden md:table-cell">{item.grade}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link
            href={`/list/classes/${item.id}`}
            className="flex justify-center items-center p-1 xl:p-2 rounded-full bg-sky-400"
          >
            <Edit className="w-5 h-5" />
          </Link>
          {role === "admin" && (
            <>
              <FormModel table="class" type="update" data={item} />
              <FormModel table="class" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
          <SearchInput smScreen={true} />
          <div className="flex  self-end px-2 gap-2 items-center">
            <button className="bg-periwinkle p-2 rounded-full">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-periwinkle p-2 rounded-full">
              <SortAsc className="w-5 h-5" />
            </button>
            {role === "admin" && <FormModel table="class" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <Table columns={ListClassData} renderRow={renderRow} data={classesData} />

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default page;
