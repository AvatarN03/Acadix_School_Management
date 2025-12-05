import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";
import { classesData, eventsData, examsData, lessonsData, role, subjectsData } from "@/lib/data";
import { Edit, Eye, Filter, Plus, SortAsc, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

type EventProps = {
  id: string;
  title: string;
  class: number;
  startTime: string;
  endTime: string;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
     classes: "hidden md:table-cell",
  },
  {
    header: "startTime",
    accessor: "starttime",
    classes: "hidden md:table-cell",
  },
  {
    header: "EndTime",
    accessor: "endtime",
    classes: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const page = () => {
  const renderRow = (item: EventProps) => (
    <tr
      key={item.id}
      className="border-b-2 p-4 border-accentBrown even:bg-sky-50 odd:bg-slate-50"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold truncate">{item.title}</h3>
        </div>
      </td>
      
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link
            href={`/list/classes/${item.id}`}
            className="flex justify-center items-center p-2 rounded-full bg-sky-400"
          >
            <Edit className="w-4 h-4" />
          </Link>
          {role === "admin" && (
            <button className="flex justify-center items-center p-1 xl:p-2 rounded-full bg-purple-400">
              <Trash className="w-5 h-5" />
            </button>
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
            <button className="bg-accentGold p-2 rounded-full">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-accentGold p-2 rounded-full">
              <SortAsc className="w-5 h-5" />
            </button>
            {role === "admin" && (
              <button className="bg-accentGold p-2 rounded-full">
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* list  */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default page;
