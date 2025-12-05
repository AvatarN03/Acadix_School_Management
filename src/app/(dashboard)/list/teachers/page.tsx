
import Image from "next/image";
import Link from "next/link";

import { Eye, Filter, Plus, SortAsc, Trash } from "lucide-react";

import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";

import { role, TeacherColumns, teachersData } from "@/lib/data";

import { TeacherProps } from "../../../../../types";


const page = () => {
  const renderRow = (item: TeacherProps) => (
    <tr
      key={item.id}
      className="border-b-2 border-accentBrown  even:bg-accentBrown/20 odd:bg-accentGold/20"
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
          <p className="text-xs text-gray-400">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link
            href={`/list/teachers/${item.teacherId}`}
            className="flex justify-center items-center p-1 xl:p-2 rounded-full bg-sky-400"
          >
            <Eye className="w-5 h-5 text-primaryDark" />
          </Link>
          {role === "admin" && (
            <button className="flex justify-center items-center p-1 xl:p-2 rounded-full bg-purple-400">
              <Trash className="w-5 h-5 text-primaryDark" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-softGray text-white/70 rounded-md p-4 m-4 mt-0">
      {/* top  */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
          <SearchInput smScreen={true} />
          <div className="flex  self-end px-2 gap-2 items-center">
            <button className="bg-accentGold p-2 rounded-full">
              <Filter className="w-5 h-5 text-primaryDark" />
            </button>
            <button className="bg-accentGold p-2 rounded-full">
              <SortAsc className="w-5 h-5 text-primaryDark" />
            </button>
            {role === "admin" && (
              <button className="bg-accentGold p-2 rounded-full">
                <Plus className="w-5 h-5 text-primaryDark" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* list  */}
      <Table columns={TeacherColumns} renderRow={renderRow} data={teachersData} />

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default page;
