
import {
  Droplet,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  CheckSquare,
  FileEdit,
  FileTextIcon,
  GraduationCap,
  Home,
  LogOut,
  Megaphone,
  MessageSquare,
  Notebook,
  Presentation,
  Settings,
  TrendingUp,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { AnnouncementDataProps, MenuItemProps, TeacherProfileProp } from "../../types";

export let role = "admin";

export const menuItems: MenuItemProps[] = [
  {
    title: "MENU",
    items: [
      {
        icon: Home,
        label: "Home",
        href: "/admin",
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

export const announcements:AnnouncementDataProps[] = [
  {
    title: "Annual Sports Day Celebration Event",
    date: "15-01-2025",
    para:
      "The school will be hosting its Annual Sports Day to encourage physical fitness and teamwork among students. All students are requested to participate actively and be present on time."
  },
  {
    title: "Parent Teacher Meeting Important Notice",
    date: "20-01-2025",
    para:
      "A Parent Teacher Meeting has been scheduled to discuss academic progress and overall development of students. Parents are requested to attend and cooperate with the teaching staff."
  },
  {
    title: "Second Term Examination Schedule Announcement",
    date: "05-02-2025",
    para:
      "The examination schedule for the second term has been released. Students are advised to check the timetable carefully and prepare accordingly for their upcoming exams."
  }
];



export const teachersData = [
  {
    id: 1,
    teacherId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    teacherId: "1234567890",
    name: "Jane Doe",
    email: "jane@doe.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics", "Chemistry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    teacherId: "1234567890",
    name: "Mike Geller",
    email: "mike@geller.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    teacherId: "1234567890",
    name: "Jay French",
    email: "jay@gmail.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    teacherId: "1234567890",
    name: "Jane Smith",
    email: "jane@gmail.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Music", "History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    teacherId: "1234567890",
    name: "Anna Santiago",
    email: "anna@gmail.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    teacherId: "1234567890",
    name: "Allen Black",
    email: "allen@black.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["English", "Spanish"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    teacherId: "1234567890",
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    teacherId: "1234567890",
    name: "Derek Briggs",
    email: "derek@briggs.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Literature", "English"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    teacherId: "1234567890",
    name: "John Glover",
    email: "john@glover.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
];

export const studentsData = [
  {
    id: 1,
    studentId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "1B",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    studentId: "1234567890",
    name: "Jane Doe",
    email: "jane@doe.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    studentId: "1234567890",
    name: "Mike Geller",
    email: "mike@geller.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    studentId: "1234567890",
    name: "Jay French",
    email: "jay@gmail.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    studentId: "1234567890",
    name: "Jane Smith",
    email: "jane@gmail.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    studentId: "1234567890",
    name: "Anna Santiago",
    email: "anna@gmail.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    studentId: "1234567890",
    name: "Allen Black",
    email: "allen@black.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    studentId: "1234567890",
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    studentId: "1234567890",
    name: "Derek Briggs",
    email: "derek@briggs.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    studentId: "1234567890",
    name: "John Glover",
    email: "john@glover.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
];

export const parentsData = [
  {
    id: 1,
    name: "John Doe",
    students: ["Sarah Brewer"],
    email: "john@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    name: "Jane Doe",
    students: ["Cecilia Bradley"],
    email: "jane@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    name: "Mike Geller",
    students: ["Fanny Caldwell"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    name: "Jay French",
    students: ["Mollie Fitzgerald", "Ian Bryant"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    name: "Jane Smith",
    students: ["Mable Harvey"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    name: "Anna Santiago",
    students: ["Joel Lambert"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    name: "Allen Black",
    students: ["Carrie Tucker", "Lilly Underwood"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    name: "Ophelia Castro",
    students: ["Alexander Blair"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    name: "Derek Briggs",
    students: ["Susan Webster", "Maude Stone"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    name: "John Glover",
    students: ["Stella Scott"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
];

export const subjectsData = [
  {
    id: 1,
    name: "Math",
    teachers: ["Alice Phelps", "Russell Davidson"],
  },
  {
    id: 2,
    name: "English",
    teachers: ["Manuel Becker", "Eddie Chavez"],
  },
  {
    id: 3,
    name: "Physics",
    teachers: ["Lola Newman", "Darrell Delgado"],
  },
  {
    id: 4,
    name: "Chemistry",
    teachers: ["Nathan Kelly", "Benjamin Snyder"],
  },
  {
    id: 5,
    name: "Biology",
    teachers: ["Alma Benson", "Lina Collier"],
  },
  {
    id: 6,
    name: "History",
    teachers: ["Hannah Bowman", "Betty Obrien"],
  },
  {
    id: 7,
    name: "Geography",
    teachers: ["Lora French", "Sue Brady"],
  },
  {
    id: 8,
    name: "Art",
    teachers: ["Harriet Alvarado", "Mayme Keller"],
  },
  {
    id: 9,
    name: "Music",
    teachers: ["Gertrude Roy", "Rosa Singleton"],
  },
  {
    id: 10,
    name: "Literature",
    teachers: ["Effie Lynch", "Brett Flowers"],
  },
];

export const classesData = [
  {
    id: 1,
    name: "1A",
    capacity: 20,
    grade: 1,
    supervisor: "Joseph Padilla",
  },
  {
    id: 2,
    name: "2B",
    capacity: 22,
    grade: 2,
    supervisor: "Blake Joseph",
  },
  {
    id: 3,
    name: "3C",
    capacity: 20,
    grade: 3,
    supervisor: "Tom Bennett",
  },
  {
    id: 4,
    name: "4B",
    capacity: 18,
    grade: 4,
    supervisor: "Aaron Collins",
  },
  {
    id: 5,
    name: "5A",
    capacity: 16,
    grade: 5,
    supervisor: "Iva Frank",
  },
  {
    id: 5,
    name: "5B",
    capacity: 20,
    grade: 5,
    supervisor: "Leila Santos",
  },
  {
    id: 7,
    name: "7A",
    capacity: 18,
    grade: 7,
    supervisor: "Carrie Walton",
  },
  {
    id: 8,
    name: "6B",
    capacity: 22,
    grade: 6,
    supervisor: "Christopher Butler",
  },
  {
    id: 9,
    name: "6C",
    capacity: 18,
    grade: 6,
    supervisor: "Marc Miller",
  },
  {
    id: 10,
    name: "6D",
    capacity: 20,
    grade: 6,
    supervisor: "Ophelia Marsh",
  },
];

export const lessonsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Tommy Wise",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Rhoda Frank",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Della Dunn",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Bruce Rodriguez",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Birdie Butler",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Bettie Oliver",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Herman Howard",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Lucinda Thomas",
  },
  {
    id: 9,
    subject: "Physics",
    class: "6C",
    teacher: "Ronald Roberts",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "4B",
    teacher: "Julia Pittman",
  },
];

export const examsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Martha Morris",
    date: "2025-01-01",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Randall Garcia",
    date: "2025-01-01",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Myrtie Scott",
    date: "2025-01-01",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Alvin Swanson",
    date: "2025-01-01",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Mabelle Wallace",
    date: "2025-01-01",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Dale Thompson",
    date: "2025-01-01",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Allie Conner",
    date: "2025-01-01",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Hunter Fuller",
    date: "2025-01-01",
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "Lois Lindsey",
    date: "2025-01-01",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "Vera Soto",
    date: "2025-01-01",
  },
];

export const assignmentsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Anthony Boone",
    dueDate: "2025-01-01",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Clifford Bowen",
    dueDate: "2025-01-01",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Catherine Malone",
    dueDate: "2025-01-01",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Willie Medina",
    dueDate: "2025-01-01",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Jose Ruiz",
    dueDate: "2025-01-01",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Katharine Owens",
    dueDate: "2025-01-01",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Shawn Norman",
    dueDate: "2025-01-01",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Don Holloway",
    dueDate: "2025-01-01",
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "Franklin Gregory",
    dueDate: "2025-01-01",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "Danny Nguyen",
    dueDate: "2025-01-01",
  },
];

export const resultsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
];

export const eventsData = [
  {
    id: 1,
    title: "Lake Trip",
    class: "1A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 2,
    title: "Picnic",
    class: "2A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 3,
    title: "Beach Trip",
    class: "3A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 4,
    title: "Museum Trip",
    class: "4A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 5,
    title: "Music Concert",
    class: "5A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 6,
    title: "Magician Show",
    class: "1B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 7,
    title: "Lake Trip",
    class: "2B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 8,
    title: "Cycling Race",
    class: "3B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 9,
    title: "Art Exhibition",
    class: "4B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 10,
    title: "Sports Tournament",
    class: "5B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
];

export const announcementsData = [
  {
    id: 1,
    title: "About 4A Math Test",
    class: "4A",
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "About 3A Math Test",
    class: "3A",
    date: "2025-01-01",
  },
  {
    id: 3,
    title: "About 3B Math Test",
    class: "3B",
    date: "2025-01-01",
  },
  {
    id: 4,
    title: "About 6A Math Test",
    class: "6A",
    date: "2025-01-01",
  },
  {
    id: 5,
    title: "About 8C Math Test",
    class: "8C",
    date: "2025-01-01",
  },
  {
    id: 6,
    title: "About 2A Math Test",
    class: "2A",
    date: "2025-01-01",
  },
  {
    id: 7,
    title: "About 4C Math Test",
    class: "4C",
    date: "2025-01-01",
  },
  {
    id: 8,
    title: "About 4B Math Test",
    class: "4B",
    date: "2025-01-01",
  },
  {
    id: 9,
    title: "About 3C Math Test",
    class: "3C",
    date: "2025-01-01",
  },
  {
    id: 10,
    title: "About 1C Math Test",
    class: "1C",
    date: "2025-01-01",
  },
];

export const calendarEvents = [
  // 5 Dec 2025
  {
    title: "Math",
    allDay: false,
    start: new Date(2025, 11, 4, 8, 0),
    end: new Date(2025, 11, 4, 10, 0),
  },

  // 7 Dec 2025
  {
    title: "English",
    allDay: false,
    start: new Date(2025, 11, 7, 9, 0),
    end: new Date(2025, 11, 7, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2025, 11, 7, 10, 0),
    end: new Date(2025, 11, 7, 10, 45),
  },

  // 9 Dec 2025
  {
    title: "Physics",
    allDay: false,
    start: new Date(2025, 11, 9, 11, 0),
    end: new Date(2025, 11, 9, 11, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2025, 11, 9, 13, 0),
    end: new Date(2025, 11, 9, 13, 45),
  },

  // 11 Dec 2025
  {
    title: "History",
    allDay: false,
    start: new Date(2025, 11, 11, 14, 0),
    end: new Date(2025, 11, 11, 14, 45),
  },

  // 14 Dec 2025
  {
    title: "English",
    allDay: false,
    start: new Date(2025, 11, 14, 9, 0),
    end: new Date(2025, 11, 14, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2025, 11, 14, 10, 0),
    end: new Date(2025, 11, 14, 10, 45),
  },

  // 17 Dec 2025
  {
    title: "Physics",
    allDay: false,
    start: new Date(2025, 11, 17, 11, 0),
    end: new Date(2025, 11, 17, 11, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2025, 11, 17, 14, 0),
    end: new Date(2025, 11, 17, 14, 45),
  },

  // 20 Dec 2025
  {
    title: "Math",
    allDay: false,
    start: new Date(2025, 11, 20, 8, 0),
    end: new Date(2025, 11, 20, 8, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2025, 11, 20, 13, 0),
    end: new Date(2025, 11, 20, 13, 45),
  },

  // 23 Dec 2025
  {
    title: "English",
    allDay: false,
    start: new Date(2025, 11, 23, 9, 0),
    end: new Date(2025, 11, 23, 9, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2025, 11, 23, 14, 0),
    end: new Date(2025, 11, 23, 14, 45),
  },

  // 28 Dec 2025
  {
    title: "Physics",
    allDay: false,
    start: new Date(2025, 11, 28, 11, 0),
    end: new Date(2025, 11, 28, 11, 45),
  },
];

export const TeacherProfile: TeacherProfileProp = {
  blood: {
    label: "Blood Group",
    value: "A+",
    icon: Droplet,
  },
  date: {
    label: "Date of Birth",
    value: "1999-05-12",
    icon: Calendar,
  },
  email: {
    label: "Email",
    value: "example.user@gmail.com",
    icon: Mail,
  },
  phone: {
    label: "Phone",
    value: "+91 98765 43210",
    icon: Phone,
  },
};

export const AdminStudentdata = [
  {
    name: "Total",
    value: 106,
    fill: "#508FE2",
  },
  {
    name: "Boys",
    value: 48,
    fill: "#62BFED", 
  },
  {
    name: "Girls",
    value: 65,
    fill: "#0B63C1", // accent gold
  },
];

export const AdminAttendenceData = [
  {
    name: "Mon",
    present: 40,
    absent: 24,
  },
  {
    name: "Tue",
    present: 30,
    absent: 13,
  },
  {
    name: "Wed",
    present: 20,
    absent: 78,
  },
  {
    name: "Thu",
    present: 27,
    absent: 39,
  },
  {
    name: "Fri",
    present: 18,
    absent: 48,
  },
  {
    name: "Sat",
    present: 23,
    absent: 38,
  },
  {
    name: "Sun",
    present: 34,
    absent: 43,
  },
];

export const AdminFinanceData = [
  { name: "Jan", income: 4200, expense: 1800 },
  { name: "Feb", income: 3800, expense: 2400 },
  { name: "Mar", income: 5100, expense: 3300 },
  { name: "Apr", income: 4700, expense: 2900 },
  { name: "Jun", income: 5200, expense: 3100 },
  { name: "Jul", income: 6100, expense: 3500 },
  { name: "Aug", income: 5800, expense: 2700 },
  { name: "Sep", income: 6900, expense: 4200 },
  { name: "Oct", income: 7300, expense: 3900 },
  { name: "Nov", income: 6400, expense: 4500 },
  { name: "Dec", income: 8200, expense: 5100 },
];

export const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const TeacherColumns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    classes: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    classes: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    classes: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    classes: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "addresss",
    classes: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListTeacherPerformaceData = [
  { name: "Group A", value: 92, fill: "#439ab9" },
  { name: "Group B", value: 8, fill: "#288deb" },
];

export const ListAnnouncementData = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    classes: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListAssignmentData = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    classes: "hidden md:table-cell",
  },
  {
    header: "Deadline",
    accessor: "deadline",
    classes: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListClassData = [
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    classes: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    classes: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    classes: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListEventData = [
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

export const ListExamData = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    classes: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    classes: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListLessonData = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    classes: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListParentData = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Name",
    accessor: "students",
    classes: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    classes: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "addresss",
    classes: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListResultData = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    classes: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    classes: "hidden md:table-cell",
  },
  {
    header: "Student",
    accessor: "student",
    classes: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    classes: "hidden md:table-cell",
  },
  {
    header: "Score",
    accessor: "score",
    classes: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListStudentData = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    classes: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    classes: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    classes: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "addresss",
    classes: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const ListSubjectData = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    classes: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
