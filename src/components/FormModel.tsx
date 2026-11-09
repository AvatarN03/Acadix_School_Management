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
  const buttonStyle =
    type === "create"
      ? "bg-[#e2eee7] text-[#356348] border-[#c5ddce]"
      : type === "update"
      ? "bg-[#e8f0f4] text-[#486b7b] border-[#cedfe7]"
      : "bg-[#fbe8e6] text-[#a64c47] border-[#f1c9c5]";

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
      <button
        type="button"
        aria-label={`${type} ${table}`}
        className={`${buttonStyle} flex h-8 w-8 items-center justify-center rounded-lg border transition-colors hover:brightness-95`}
        onClick={() => setOpen(true)}
      >
        {<Icon className="w-5 h-5" />}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#17212b]/45 p-4 backdrop-blur-[2px]">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] border border-slate-200 bg-white p-6 text-slate-800 shadow-[0_24px_80px_rgba(23,33,43,0.2)]">
            <div
              className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
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
