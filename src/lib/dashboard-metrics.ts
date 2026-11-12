// Single source of truth for every number displayed on the overview page.
//
// Today every metric is derived from the static arrays in `lib/data.ts`.
// When dynamic data (API / Prisma queries) arrives, only this module needs to
// become async — the page, cards, and charts keep consuming the same shapes.
// The page then renders these metrics inside Suspense/skeleton boundaries.

import {
  AdminAttendenceData,
  AdminFinanceData,
  AdminStudentdata,
  announcements,
  assignmentsData,
  calendarEvents,
  classesData,
  eventsData,
  examsData,
  lessonsData,
  resultsData,
  subjectsData,
  teachersData,
} from "./data";

/* ---------------------------------- types --------------------------------- */

export type GenderSlice = { name: string; value: number; fill: string };
export type WeekAttendancePoint = { name: string; present: number; absent: number };
export type FinancePoint = { name: string; income: number; expense: number };

export type KpiTile = {
  label: string;
  value: number | string;
  detail: string;
  href: string;
};

export type UpcomingEvent = {
  id: number;
  title: string;
  className: string;
  dateLabel: string;
  time: string;
};

/* --------------------------------- helpers -------------------------------- */

const now = new Date();
const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

function parseIsoDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dayLabel(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

const sum = (values: number[]) => values.reduce((total, n) => total + n, 0);

/* ------------------------------- hero copy -------------------------------- */

const hour = now.getHours();

export const heroMeta = {
  greeting: hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening",
  dateLabel: new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now),
  term: "Term 1",
};

/* ----------------------------- student gender ----------------------------- */

const genderSlice = (name: string) =>
  AdminStudentdata.find((slice) => slice.name === name)?.value ?? 0;

const totalStudents = genderSlice("Total");
const boys = genderSlice("Boys");
const girls = genderSlice("Girls");

const share = (value: number) =>
  totalStudents ? `${Math.round((value / totalStudents) * 100)}%` : "0%";

export const studentGender = {
  chart: AdminStudentdata as GenderSlice[],
  total: totalStudents,
  boys,
  girls,
  boysShare: share(boys),
  girlsShare: share(girls),
};

/* -------------------------------- attendance ------------------------------ */

const presentThisWeek = sum(AdminAttendenceData.map((day) => day.present));
const absentThisWeek = sum(AdminAttendenceData.map((day) => day.absent));

export const attendanceRate = Math.round(
  (presentThisWeek / (presentThisWeek + absentThisWeek)) * 100
);

export const weeklyAttendance: WeekAttendancePoint[] = AdminAttendenceData;

/* ---------------------------------- KPIs ---------------------------------- */

// Derived figures used by the top row. Each number on the overview is stated
// exactly once, so these replace the catalogue counts that used to repeat the
// same value in the KPI row, the workspace tiles and the academics snapshot.
const totalCapacity = sum(classesData.map((classItem) => classItem.capacity));
const seatUtilization = totalCapacity
  ? Math.round((totalStudents / totalCapacity) * 100)
  : 0;
const studentTeacherRatio = teachersData.length
  ? Math.round(totalStudents / teachersData.length)
  : 0;

export const kpiTiles: KpiTile[] = [
  {
    label: "Students",
    value: totalStudents,
    detail: "Enrolled this term",
    href: "/list/students",
  },
  {
    label: "Teachers",
    value: teachersData.length,
    detail: `1 : ${studentTeacherRatio} student ratio`,
    href: "/list/teachers",
  },
  {
    label: "Seats filled",
    value: `${seatUtilization}%`,
    detail: `${totalCapacity} seats across ${classesData.length} classes`,
    href: "/list/classes",
  },
  {
    label: "Assignments",
    value: assignmentsData.length,
    detail: "Awaiting review",
    href: "/list/assignments",
  },
];

/* ----------------------------- attention tiles ----------------------------- */

// Attendance lives only in the hero pulse and the weekly chart; the workspace
// covers the remaining queues so no figure is repeated across sections.
export const attentionCounts = {
  assignments: assignmentsData.length,
  announcements: announcements.length,
  results: resultsData.length,
  exams: examsData.length,
};

/* -------------------------------- schedule -------------------------------- */

export const scheduleMeta = {
  lessonsOnCalendar: calendarEvents.length,
};

/* ----------------------------- upcoming events ----------------------------- */

const sortedEvents = [...eventsData]
  .map((event) => ({ ...event, parsedDate: parseIsoDate(event.date) }))
  .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());

// Next four events from today onwards. Falls back to the earliest scheduled
// events so the card never renders empty while the data is static.
const nextEvents = sortedEvents
  .filter((event) => event.parsedDate.getTime() >= startOfToday)
  .slice(0, 4);

export const upcomingEvents: UpcomingEvent[] = (nextEvents.length > 0
  ? nextEvents
  : sortedEvents.slice(0, 4)
).map((event) => ({
  id: event.id,
  title: event.title,
  className: event.class,
  dateLabel: dayLabel(event.parsedDate),
  time: `${event.startTime}–${event.endTime}`,
}));

/* ---------------------------- academics snapshot --------------------------- */

const averageScore = resultsData.length
  ? Math.round(sum(resultsData.map((result) => result.score)) / resultsData.length)
  : 0;

export const academicsSnapshot = {
  subjects: subjectsData.length,
  classes: classesData.length,
  lessons: lessonsData.length,
  averageScore,
};

/* --------------------------------- finance -------------------------------- */

export const financeSeries: FinancePoint[] = AdminFinanceData;
