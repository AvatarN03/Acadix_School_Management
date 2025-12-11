import Link from "next/link";

import { Edit, Filter, SortAsc } from "lucide-react";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";

import {
  ListResultData,
  resultsData,
  role,
} from "@/lib/data";

import { ResultProps } from "../../../../../types";

const page = () => {
  const renderRow = (item: ResultProps) => (
    <tr
      key={item.id}
       className="border-b-2  border-black group even:text-periwinkle even:bg-dodgerBlue/50 odd:bg-deepSky/50"
    >
      <td className="flex items-center gap-4 p-4 truncate font-normal">{item.subject}
      </td>

      <td className="hidden lg:table-cell">{item.class}</td>
      <td className="hidden lg:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.student}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden sm:table-cell">{item.score}</td>

      <td>
        <div className="flex items-center gap-2 justify-end md:justify-center px-2">
         
          {role === "admin" && (
            <>
              <FormModel table="result" type="update" data={item} />
              <FormModel table="result" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-babyBlue rounded-md p-2 md:p-4 m-4 mt-0">
      {/* top  */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-1">
        <h1 className=" text-lg font-normal tracking-wider">All Results</h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row justify-end gap-4 items-center">
          <SearchInput smScreen={true} />
          <div className="flex  self-end px-2 gap-2 items-center">
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-periwinkle hover:bg-deepSky p-2 rounded-full">
              <SortAsc className="w-5 h-5" />
            </button>
            {role === "admin" && <FormModel table="result" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <Table
        columns={ListResultData}
        renderRow={renderRow}
        data={resultsData}
      />

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default page;
