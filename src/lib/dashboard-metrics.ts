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
  value: number;
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

export const kpiTiles: KpiTile[] = [
  {
    label: "Students",
    value: totalStudents,
    detail: `${boys} boys · ${girls} girls`,
    href: "/list/students",
  },
  {
    label: "Teachers",
    value: teachersData.length,
    detail: "Active staff",
    href: "/list/teachers",
  },
  {
    label: "Classes",
    value: classesData.length,
    detail: "Across all grades",
    href: "/list/classes",
  },
  {
    label: "Subjects",
    value: subjectsData.length,
    detail: "In the curriculum",
    href: "/list/subjects",
  },
];

/* ----------------------------- attention tiles ----------------------------- */

export const attentionCounts = {
  attendanceRate,
  assignments: assignmentsData.length,
  announcements: announcements.length,
  results: resultsData.length,
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
