import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Clock3,
  FileEdit,
  Megaphone,
} from "lucide-react";
import { DashboardRole, role } from "@/lib/data";
import {
  academicsSnapshot,
  attentionCounts,
  attendanceRate,
  financeSeries,
  heroMeta,
  kpiTiles,
  scheduleMeta,
  studentGender,
  weeklyAttendance,
} from "@/lib/dashboard-metrics";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcement from "@/components/Announcement";

// Copy is role-aware and stays in place until authentication supplies the
// real signed-in user. heroMeta already provides the greeting and live date.
const roleCopy: Record<DashboardRole, { label: string; name: string | null; description: string }> = {
  admin: {
    label: "Administrator overview",
    name: "John",
    description: "Here is the shape of your school today. A focused view of people, schedules, and school activity.",
  },
  teacher: {
    label: "Teacher overview",
    name: null,
    description: "Here is what needs your attention today. A focused view of your classes, schedules, and school activity.",
  },
  student: {
    label: "Student overview",
    name: null,
    description: "Here is your day at a glance. Your schedule, results, and the latest from school.",
  },
  parent: {
    label: "Parent overview",
    name: null,
    description: "Here is the latest from your school. Announcements, events, and your child's progress.",
  },
};

// Counts come from lib/dashboard-metrics.ts — the single seam that becomes
// dynamic once real data is wired in.
// One home per fact: attendance is stated only in the hero pulse (and shown
// visually in the weekly chart), so the workspace covers the other queues.
const attentionTiles = [
  {
    title: "Results",
    detail: `${attentionCounts.results} published`,
    href: "/list/results",
    tone: "bg-[#e3f0e9]",
    Icon: BarChart3,
  },
  {
    title: "Announcements",
    detail: `${attentionCounts.announcements} new updates`,
    href: "/list/announcements",
    tone: "bg-[#f5eee2]",
    Icon: Megaphone,
  },
  {
    title: "Exams",
    detail: `${attentionCounts.exams} scheduled`,
    href: "/list/exams",
    tone: "bg-[#edf1f6]",
    Icon: FileEdit,
  },
] as const;

// Finance is an admin-only concern; other roles get an academics snapshot
// instead. Auth will later drive this branch from the real session role.
const academicsStats = [
  { label: "Subjects", value: String(academicsSnapshot.subjects) },
  { label: "Classes", value: String(academicsSnapshot.classes) },
  { label: "Lessons planned", value: String(academicsSnapshot.lessons) },
  { label: "Average score", value: `${academicsSnapshot.averageScore}%` },
] as const;

export default function DashboardHome() {
  const copy = roleCopy[role];

  return <div className="mx-auto max-w-7xl space-y-4 pb-8">
    {/* Hero + school pulse */}
    <section className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="relative min-h-[270px] overflow-hidden rounded-[26px] bg-[#17212b] p-7 text-white sm:p-9"><div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[34px] border-[#34495a]/60" /><div className="relative flex h-full flex-col justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a8c0d2]">{copy.label}</p><h1 className="mt-4 max-w-[620px] text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl">{heroMeta.greeting}{copy.name ? `, ${copy.name}` : ""}.</h1><p className="mt-4 text-sm leading-6 text-[#bdc9d2]">{copy.description}</p></div><div className="flex items-center gap-2 text-xs text-[#aebdc7]"><span className="h-2 w-2 rounded-full bg-[#9fd6bc]" /> {heroMeta.dateLabel} <span className="text-[#627484]">·</span> {heroMeta.term}</div></div></div>
      <div className="flex min-h-[270px] flex-col justify-between rounded-[26px] bg-[#dce9f1] p-7 sm:p-9"><div className="flex items-start justify-between"><span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#587181]">School pulse</span><BarChart3 className="h-5 w-5 text-[#597484]" /></div><div><p className="text-6xl font-semibold tracking-[-0.08em] text-[#17212b]">{attendanceRate}<span className="text-3xl">%</span></p><p className="mt-2 text-sm font-semibold text-[#334e5d]">Attendance this week</p><p className="mt-1 text-xs leading-5 text-[#607584]">Present vs. absent across the school.</p></div><Link href="/list/attendance" className="group flex items-center gap-2 text-xs font-semibold text-[#4e6c7c]">View attendance <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div>
    </section>

    {/* Key figures */}
    <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      {kpiTiles.map((tile) => (
        <Link key={tile.label} href={tile.href} className="group rounded-[22px] border border-[#e1e7ea] bg-white p-5 shadow-[0_10px_30px_rgba(31,48,61,0.05)] transition-transform hover:-translate-y-0.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a98a3]">{tile.label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#17212b]">{tile.value}</p>
          <p className="mt-1 flex items-center justify-between text-xs text-[#71808a]">
            {tile.detail}
            <ArrowUpRight className="h-4 w-4 text-[#a5b2ba] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </p>
        </Link>
      ))}
    </section>

    {/* Today + workspace */}
    <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[26px] bg-[#f0e9dc] p-7 sm:p-9"><div className="flex items-center justify-between"><Clock3 className="h-5 w-5 text-[#8a7151]" /><span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#967e61]">Schedule</span></div><h2 className="mt-16 text-3xl font-semibold leading-[1.02] tracking-[-0.055em]">Keep the day moving.</h2><div className="mt-6 flex items-center gap-3 text-sm text-[#7d6c56]"><Clock3 className="h-4 w-4" /> {scheduleMeta.lessonsOnCalendar} lessons on the calendar</div><Link href="/list/lessons" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#806b50]">Open schedule <ArrowUpRight className="h-4 w-4" /></Link></div>
      <div className="rounded-[26px] border border-[#e1e7ea] bg-white p-7 shadow-[0_10px_30px_rgba(31,48,61,0.05)] sm:p-9"><div className="flex items-end justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a98a3]">Your workspace</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.045em]">What needs your attention.</h2></div></div><div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{attentionTiles.map(({ title, detail, href, tone, Icon }) => <Link key={title} href={href} className={`group min-h-[132px] rounded-2xl border border-white/70 p-4 transition-transform hover:-translate-y-0.5 ${tone}`}><Icon className="h-5 w-5 text-[#61727c]" /><p className="mt-8 text-sm font-semibold text-[#263640]">{title}</p><p className="mt-1 text-xs leading-5 text-[#71808a]">{detail}</p></Link>)}</div></div>
    </section>

    {/* Charts */}
    <section className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
      <div className="flex flex-col rounded-[26px] border border-[#e1e7ea] bg-white p-4 shadow-[0_10px_30px_rgba(31,48,61,0.05)] sm:p-5"><div className="mb-3 flex items-center justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a98a3]">Student mix</p><h2 className="mt-1 text-lg font-semibold tracking-[-0.04em] text-[#263640]">Gender ratio</h2></div><Link href="/list/students" className="text-xs font-semibold text-[#66808e]">View students</Link></div><div className="min-h-[350px] flex-1"><CountChart data={studentGender.chart} /></div></div>
      <div className="flex flex-col rounded-[26px] border border-[#e1e7ea] bg-white p-4 shadow-[0_10px_30px_rgba(31,48,61,0.05)] sm:p-5"><div className="mb-3 flex items-center justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a98a3]">Weekly activity</p><h2 className="mt-1 text-lg font-semibold tracking-[-0.04em] text-[#263640]">Attendance overview</h2><p className="mt-0.5 text-xs text-[#8a98a3]">Present and absent headcount by day</p></div><Link href="/list/attendance" className="text-xs font-semibold text-[#66808e]">View attendance</Link></div><div className="min-h-[320px] flex-1"><AttendanceChart data={weeklyAttendance} /></div></div>
    </section>

    {/* Admin-only financial overview; other roles get an academics snapshot */}
    {role === "admin" ? (
      <section className="rounded-[26px] border border-[#e1e7ea] bg-white p-4 shadow-[0_10px_30px_rgba(31,48,61,0.05)] sm:p-5"><div className="mb-3 flex items-center justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a98a3]">Financial overview</p><h2 className="mt-1 text-lg font-semibold tracking-[-0.04em] text-[#263640]">Income and expenses</h2><p className="mt-0.5 text-xs text-[#8a98a3]">Monthly collection vs. spending</p></div></div><div className="h-[320px]"><FinanceChart data={financeSeries} /></div></section>
    ) : (
      <section className="rounded-[26px] border border-[#e1e7ea] bg-white p-7 shadow-[0_10px_30px_rgba(31,48,61,0.05)] sm:p-9"><div className="flex items-end justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a98a3]">Academics snapshot</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-[#263640]">How the term is shaping up.</h2></div></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">{academicsStats.map(({ label, value }) => <div key={label} className="min-h-[110px] rounded-2xl border border-[#e1e7ea] bg-[#f8fafb] p-4"><p className="text-2xl font-semibold tracking-[-0.04em] text-[#17212b]">{value}</p><p className="mt-6 text-xs font-medium text-[#71808a]">{label}</p></div>)}</div><Link href="/list/subjects" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#66808e]">Browse subjects <ArrowUpRight className="h-4 w-4" /></Link></section>
    )}

    {/* Calendar + announcements, side by side */}
    <section className="grid items-start gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <EventCalendar />
      <Announcement />
    </section>

    <section className="flex flex-col gap-4 rounded-[26px] border border-[#dfe6e9] bg-[#f8fafb] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#82919a]">Quick access</p><p className="mt-2 text-sm text-[#5f6e77]">Jump back into the parts of Acadix you use most.</p></div><div className="flex flex-wrap gap-2"><Link href="/list/events" className="rounded-full border border-[#d8e1e5] bg-white px-4 py-2 text-xs font-semibold text-[#53636c] transition-colors hover:border-[#b7c9d1] hover:text-[#17212b]">Events</Link><Link href="/list/results" className="rounded-full border border-[#d8e1e5] bg-white px-4 py-2 text-xs font-semibold text-[#53636c] transition-colors hover:border-[#b7c9d1] hover:text-[#17212b]">Results</Link><Link href="/list/messages" className="rounded-full border border-[#d8e1e5] bg-white px-4 py-2 text-xs font-semibold text-[#53636c] transition-colors hover:border-[#b7c9d1] hover:text-[#17212b]">Messages</Link></div></section>
  </div>;
}
