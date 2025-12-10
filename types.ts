import schema from "@/lib/schema";
import { LucideIcon } from "lucide-react";
import { HTMLInputTypeAttribute } from "react";
import { FieldError } from "react-hook-form";
import z from "zod";

export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type MenuItemProps = {
  title: string;
  items: {
    icon: LucideIcon;
    label: string;
    href: string;
    visible: string[];
  }[];
};

export type AnnouncementDataProps = {
  title:string,
  date:string,
  para:string
}

export type TeacherProps = {
  id: number;
  teacherId: string;
  name: string;
  photo: string;
  email?: string;
  subjects: string[];
  classes: string[];
  phone: number;
  address: string;
};

export type AnnouncementProps = {
  id: number;
  title: string;
  class: number;
  date: string;
};

export type AssignmentProps = {
  id: number;
  subject: string;
  class: number;
  teacher: string;
  dueDate: string;
};

export type ClassesProp = {
  id: number;
  name: string;
  grade: number;
  supervisor: string;
  capacity: number;
};

export type EventProps = {
  id: number;
  title: string;
  class: number;
  startTime: string;
  endTime: string;
  date: string;
};

export type ExamProps = {
  id: number;
  subject: string;
  class: number;
  teacher: string;
  date: string;
};

export type LessonProps = {
  id: number;
  subject: string;
  class: number;
  teacher: string;
};

export type ParentProps = {
  id: number;
  name: string;
  students: string[];
  email?: string;
  phone: number;
  address: string;
};

export type ResultProps = {
  id: number;
  subject: string;
  class: number;
  teacher: string;
  student: string;
  date: string;
  type: "exam" | "assignment";
  score: number;
};

export type StudentProps = {
  id: number;
  studentId: string;
  name: string;
  photo: string;
  email?: string;
  grade: string;
  phone: number;
  class: string;
  address: string;
};

export type SubjectProp = {
  id: number;
  name: string;
  teachers: string[];
};



export type ColumnType = {
  header: string;
  accessor: string;
  classes?: string;
};

export type TeacherProfileProp = {
  [key: string]: {
    label: string;
    value: string;
    icon: LucideIcon;
  };
};

export interface FormModelProps {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

export type InputFieldProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
};

export type Inputs = z.infer<typeof schema>