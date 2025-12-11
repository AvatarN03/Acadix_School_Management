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
      className="border-b-2  border-black group even:text-periwinkle even:bg-dodgerBlue/50 odd:bg-deepSky/50"
    >
      <td className="font-normal p-4">{item.name}</td>
      <td className="hidden lg:table-cell">{item.capacity}</td>
      <td className="hidden sm:table-cell text-center md:text-left">{item.supervisor}</td>
      <td className="hidden md:table-cell">{item.grade}</td>

      <td>
        <div className="flex items-center gap-2 justify-end  md:justify-center px-2">
          
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
    <div className="bg-babyBlue rounded-md p-1 md:p-4 m-4 mt-0">
      {/* top  */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-1">
        <h1 className=" text-lg font-normal">All Classes</h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row justify-end gap-4 px-2 items-center">
          <SearchInput smScreen={true} />
          <div className="flex  self-end px-2 gap-2 items-center">
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
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
