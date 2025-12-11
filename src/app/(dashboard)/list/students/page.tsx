import Link from "next/link";
import Image from "next/image";

import { Eye, Filter, SortAsc } from "lucide-react";

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
      className="border-b-2  border-black group even:text-periwinkle even:bg-dodgerBlue/50 odd:bg-deepSky/50"
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
          <p className="text-xs group-odd:text-dodgerBlue group-even:text-lavendar/80">{item?.class}</p>
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
    <div className="bg-babyBlue rounded-md p-4 m-4 mt-0">
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
      <Table
        columns={ListStudentData}
        renderRow={renderRow}
        data={studentsData}
      />

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default page;
