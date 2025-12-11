import Image from "next/image";

import {  Filter, SortAsc } from "lucide-react";

import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";
import FormModel from "@/components/FormModel";

import { role, TeacherColumns, teachersData } from "@/lib/data";

import { TeacherProps } from "../../../../../types";

const page = () => {
  const renderRow = (item: TeacherProps) => (
    <tr
      key={item.id}
      className="border-b-2 border-black group even:text-periwinkle even:bg-dodgerBlue/50 odd:bg-deepSky/50"
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
          <p className="text-xs group-odd:text-dodgerBlue group-even:text-lavendar/80">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden sm:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden xl:table-cell truncate">{item.address}</td>
      <td>
        <div className="flex justify-end md:justify-center px-2 items-center gap-2 ">

          {role === "admin" && (
            <>
              <FormModel table="teacher" type="update" data={item} />
              <FormModel table="teacher" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-babyBlue rounded-md p-1 md:p-4 mx-1 my-4 mt-0">
      {/* top  */}
      <div className="flex justify-between flex-col md:flex-row gap-1 items-center">
        <h1 className="block text-lg font-normal  tracking-wider">All Teachers</h1>
        <div className="flex p-2 flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
          <SearchInput smScreen={true} />
          <div className="flex  self-end px-2 gap-2 items-center py-1">
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <SortAsc className="w-5 h-5 " />
            </button>
            {role === "admin" && <FormModel table="teacher" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <Table
        columns={TeacherColumns}
        renderRow={renderRow}
        data={teachersData}
      />

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default page;
