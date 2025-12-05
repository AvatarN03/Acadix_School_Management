import {
  BookOpen,
  Calendar,
  ChartBar,
  CheckSquare,
  FileEdit,
  FileTextIcon,
  GraduationCap,
  Home,
  LogOut,
  LucideIcon,
  Megaphone,
  MessageSquare,
  Notebook,
  Presentation,
  School,
  Settings,
  TrendingUp,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import Link from "next/link";

import { role } from "@/lib/data";


type MenuItemProps = {
  title: string;
  items: {
    icon: LucideIcon;
    label: string;
    href: string;
    visible: string[];
  }[];
};

// const menuItems = [
//   {
//     title: "MENU",
//     items: [
//       {
//         icon: "/home.png",
//         label: "Home",
//         href: "/",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/teacher.png",
//         label: "Teachers",
//         href: "/list/teachers",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/student.png",
//         label: "Students",
//         href: "/list/students",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/parent.png",
//         label: "Parents",
//         href: "/list/parents",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/subject.png",
//         label: "Subjects",
//         href: "/list/subjects",
//         visible: ["admin"],
//       },
//       {
//         icon: "/class.png",
//         label: "Classes",
//         href: "/list/classes",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/lesson.png",
//         label: "Lessons",
//         href: "/list/lessons",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/exam.png",
//         label: "Exams",
//         href: "/list/exams",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/assignment.png",
//         label: "Assignments",
//         href: "/list/assignments",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/result.png",
//         label: "Results",
//         href: "/list/results",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/attendance.png",
//         label: "Attendance",
//         href: "/list/attendance",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/calendar.png",
//         label: "Events",
//         href: "/list/events",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/message.png",
//         label: "Messages",
//         href: "/list/messages",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/announcement.png",
//         label: "Announcements",
//         href: "/list/announcements",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//     ],
//   },
//   {
//     title: "OTHER",
//     items: [
//       {
//         icon: "/profile.png",
//         label: "Profile",
//         href: "/profile",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/setting.png",
//         label: "Settings",
//         href: "/settings",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/logout.png",
//         label: "Logout",
//         href: "/logout",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//     ],
//   },
// ];
const menuItems: MenuItemProps[] = [
  {
    title: "MENU",
    items: [
      {
        icon: Home,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Users,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: GraduationCap,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: UserPlus,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: BookOpen,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: Presentation,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: Notebook,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: FileEdit,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: FileTextIcon,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: TrendingUp,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: CheckSquare,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Calendar,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: MessageSquare,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Megaphone,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: User,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: LogOut,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm h-full">
      {menuItems.map((menu, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 my-4">
            {menu.title}
          </span>
          <hr className="h-[0.5px] w-[80%] mx-auto md:mx-0 bg-mutedBlue" />
          {menu.items.map((item, idx) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={idx}
                  className="flex items-center justify-center group rounded-md hover:bg-mutedBlue hover:text-primaryDark lg:justify-start gap-4 text-gray-500 p-2"
                  title={item.label}
                >
                  <item.icon className="w-5 md:w-7 h-5 md:h-7 group-hover:text-primaryDark" />
                  <span className="hidden ml-0 group-hover:ml-2 lg:block  transition-all ease-in-out duration-300  truncate">{item.label}</span>
                </Link>
              );
            }

            return null; // to avoid warnings
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
