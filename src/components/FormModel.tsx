"use client";

import { Edit, LucideIcon, Plus, Trash2, X } from "lucide-react";
import { FormModelProps } from "../../types";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";

const form: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModel = ({ table, type, data, id }: FormModelProps) => {
  const bgColor =
    type === "create"
      ? "bg-periwinkle"
      : type === "update"
      ? "bg-babyBlue"
      : "bg-red-400";

  const [open, setOpen] = useState(false);

  const Icon: LucideIcon =
    type === "create" ? Plus : type === "update" ? Edit : Trash2;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("delted ");
    setOpen(false);
  };

  const Form = () => {
    return type === "delete" && id ? (
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <span className="text-base font-semibold">
          Are you sure to delete this table: {table}?
        </span>
        <button
          type="submit"
          className="bg-red-700  rounded-md px-3 py-2 mx-auto w-fit"
        >
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      form[table](type, data)
    ) : (
      "Form not found"
    );
  };

  return (
    <>
      <div
        className={`${bgColor} p-2 rounded-full cursor-pointer hover:bg-deepSky`}
        onClick={() => setOpen(true)}
      >
        {<Icon className="w-5 h-5" />}
      </div>
      {open && (
        <div className="w-screen h-screen  flex justify-center items-center absolute inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-lavendar overflow-x-hidden  text-black rounded-md relative w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] p-4">
            <div
              className="absolute right-2 top-2 p-2  bg-periwinkle    hover:bg-deepSky rounded-full cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X />
            </div>
            <div className="mt-8 h-full">
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModel;
