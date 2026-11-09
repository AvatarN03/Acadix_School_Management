import Link from "next/link";
import { ArrowUpRight, BarChart3, CalendarDays, CheckCircle2, ClipboardList, Clock3, Megaphone, Users } from "lucide-react";
import { role } from "@/lib/data";

const roleCopy = {
  admin: { label: "Administrator", greeting: "Good morning, John.", description: "Here is the shape of your school today." },
  teacher: { label: "Teacher", greeting: "Good morning.", description: "Here is what needs your attention today." },
  student: { label: "Student", greeting: "Good morning.", description: "Here is your day at a glance." },
  parent: { label: "Parent", greeting: "Good morning.", description: "Here is the latest from your school." },
} as const;

const activity = [
  ["Attendance", "84% present today", "bg-[#e3f0e9]", CheckCircle2],
  ["Assignments", "8 awaiting review", "bg-[#edf1f6]", ClipboardList],
  ["Announcements", "3 new updates", "bg-[#f5eee2]", Megaphone],
] as const;

export default function DashboardHome() {
  const copy = roleCopy[role];

  return <div className="mx-auto max-w-7xl space-y-4 pb-8">
    <section className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="relative min-h-[270px] overflow-hidden rounded-[26px] bg-[#17212b] p-7 text-white sm:p-9"><div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[34px] border-[#34495a]/60" /><div className="relative flex h-full flex-col justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a8c0d2]">{copy.label} overview</p><h1 className="mt-4 max-w-[620px] text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl">{copy.greeting}</h1><p className="mt-4 text-sm leading-6 text-[#bdc9d2]">{copy.description} A focused view of people, schedules, and school activity.</p></div><div className="flex items-center gap-2 text-xs text-[#aebdc7]"><span className="h-2 w-2 rounded-full bg-[#9fd6bc]" /> Tuesday, 9 December 2025 <span className="text-[#627484]">·</span> Term 1</div></div></div>
      <div className="flex min-h-[270px] flex-col justify-between rounded-[26px] bg-[#dce9f1] p-7 sm:p-9"><div className="flex items-start justify-between"><span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#587181]">School pulse</span><BarChart3 className="h-5 w-5 text-[#597484]" /></div><div><p className="text-6xl font-semibold tracking-[-0.08em] text-[#17212b]">92<span className="text-3xl">%</span></p><p className="mt-2 text-sm font-semibold text-[#334e5d]">Attendance this week</p><p className="mt-1 text-xs leading-5 text-[#607584]">A steady start across the school.</p></div><Link href="/list/attendance" className="group flex items-center gap-2 text-xs font-semibold text-[#4e6c7c]">View attendance <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div>
    </section>

    <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[26px] bg-[#f0e9dc] p-7 sm:p-9"><div className="flex items-center justify-between"><CalendarDays className="h-5 w-5 text-[#8a7151]" /><span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#967e61]">Today</span></div><h2 className="mt-16 text-3xl font-semibold leading-[1.02] tracking-[-0.055em]">Keep the day moving.</h2><div className="mt-6 flex items-center gap-3 text-sm text-[#7d6c56]"><Clock3 className="h-4 w-4" /> 6 lessons on the calendar</div><Link href="/list/lessons" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#806b50]">Open schedule <ArrowUpRight className="h-4 w-4" /></Link></div>
      <div className="rounded-[26px] bg-white p-7 shadow-[0_14px_45px_rgba(31,48,61,0.05)] sm:p-9"><div className="flex items-end justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a98a3]">Your workspace</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.045em]">What needs your attention.</h2></div><Users className="h-5 w-5 text-[#82919a]" /></div><div className="mt-7 grid gap-3 sm:grid-cols-3">{activity.map(([title, detail, tone, Icon]) => <Link key={title} href={title === "Attendance" ? "/list/attendance" : title === "Assignments" ? "/list/assignments" : "/list/announcements"} className={`group rounded-2xl p-4 transition-transform hover:-translate-y-0.5 ${tone}`}><Icon className="h-5 w-5 text-[#61727c]" /><p className="mt-8 text-sm font-semibold text-[#263640]">{title}</p><p className="mt-1 text-xs leading-5 text-[#71808a]">{detail}</p></Link>)}</div></div>
    </section>

    <section className="flex flex-col gap-4 rounded-[26px] border border-[#dfe6e9] bg-[#f8fafb] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#82919a]">Quick access</p><p className="mt-2 text-sm text-[#5f6e77]">Jump back into the parts of Acadix you use most.</p></div><div className="flex flex-wrap gap-2"><Link href="/list/events" className="rounded-full border border-[#d8e1e5] bg-white px-4 py-2 text-xs font-semibold text-[#53636c] transition-colors hover:border-[#b7c9d1] hover:text-[#17212b]">Events</Link><Link href="/list/results" className="rounded-full border border-[#d8e1e5] bg-white px-4 py-2 text-xs font-semibold text-[#53636c] transition-colors hover:border-[#b7c9d1] hover:text-[#17212b]">Results</Link><Link href="/list/messages" className="rounded-full border border-[#d8e1e5] bg-white px-4 py-2 text-xs font-semibold text-[#53636c] transition-colors hover:border-[#b7c9d1] hover:text-[#17212b]">Messages</Link></div></section>
  </div>;
}
