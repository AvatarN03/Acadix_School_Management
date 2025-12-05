import { LucideIcon } from "lucide-react";

export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type TeacherProps = {
  id: string;
  teacherId: string;
  name: string;
  photo: string;
  email?: string;
  subjects: string[];
  classes: string[];
  phone: number;
  address: string;
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
