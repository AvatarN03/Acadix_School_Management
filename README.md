# Acadix — School Management Dashboard

A comprehensive school management system built with Next.js, TypeScript, and Tailwind CSS. Acadix provides role-based interfaces for administrators, teachers, students, and parents to manage educational operations efficiently.

<img src="public/logo.png" width="200" alt="Acadix Logo" />

<img width="1899" height="936" alt="Dashboard Preview" src="https://github.com/user-attachments/assets/db3988b0-32c7-4c29-92f2-380667368348" />

---

## ✨ Features

### Multi-Role Dashboard System
- **Admin Dashboard** — Complete oversight of school operations, including finance
- **Teacher Dashboard** — Classes, lessons, attendance, and student progress
- **Student Dashboard** — Assignments, attendance, results, and schedule
- **Parent Dashboard** — Announcements, events, and the child's academic progress

> Roles are currently represented by a temporary `role` value in `src/lib/data.ts`. The menu and dashboard sections are already role-aware, so authentication can supply the real role later without UI changes.

### Overview Page (recently refined)
The shared `/dashboard` entry point is a bento-grid overview built on a restrained academic palette (slate, muted blue, sage green, warm bronze):

- **Derived metrics** — Every displayed number (attendance rate, gender split, KPI counts, upcoming events) is computed in one module instead of being hardcoded
- **KPI strip** — Students / Teachers / Classes / Subjects tiles, each linked to its management page
- **Role-gated sections** — The financial overview renders only for admins; other roles get an academics snapshot
- **Prop-driven charts** — `CountChart`, `AttendanceChart`, and `FinanceChart` accept data as props, ready for real data sources
- **Live hero** — Time-aware greeting and current date
- **Upcoming events** — Parsed, filtered to today onwards, and sorted; the calendar card never renders empty

### Data Management Pages
- Students, teachers, and parents directories with detail pages (`/list/students/[id]`, `/list/teachers/[id]`)
- Classes, subjects, lessons, exams, assignments, and results
- Attendance, events, announcements, and messaging

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Calendar | react-big-calendar, react-calendar |
| Icons | Lucide React |
| Forms | react-hook-form + zod |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AvatarN03/Acadix_School_Management.git
cd Acadix_School_Management
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🗺️ Available Routes

### Dashboard
| Route | Description |
| --- | --- |
| `/dashboard` | Shared overview entry point for all roles |
| `/profile` | User profile |
| `/settings` | Settings |

> The legacy `/admin` route redirects to `/dashboard` for compatibility.

### List Management
| Route | Description |
| --- | --- |
| `/list/students` | Student management |
| `/list/students/[id]` | Individual student profile |
| `/list/teachers` | Teacher management |
| `/list/teachers/[id]` | Individual teacher profile |
| `/list/parents` | Parent portal |
| `/list/classes` | Class management |
| `/list/subjects` | Subject management |
| `/list/lessons` | Lesson planning |
| `/list/exams` | Examination management |
| `/list/assignments` | Assignment management |
| `/list/results` | Result management |
| `/list/attendance` | Attendance tracking |
| `/list/events` | Event calendar |
| `/list/announcements` | Announcement board |
| `/list/messages` | Messaging system |

### Other
| Route | Description |
| --- | --- |
| `/sign-in` | Authentication page |

---

## 📁 Project Structure

```
public/                     # Static assets (logo, avatars, icons)
src/
  app/
    (dashboard)/            # Dashboard route group
      dashboard/            # Shared overview page (all roles)
      list/                 # Data management pages
        students/           # + [id] detail page
        teachers/           # + [id] detail page
        parents/
        classes/
        subjects/
        lessons/
        exams/
        assignments/
        results/
        attendance/
        events/
        announcements/
        messages/
      admin/                # Legacy route (redirects to /dashboard)
      profile/
      settings/
    sign-in/                # Authentication
  components/               # Reusable components
    forms/                  # StudentForm, TeacherForm
    Announcement.tsx
    AttendanceChart.tsx     # Prop-driven chart
    BigCalendar.tsx
    CountChart.tsx          # Prop-driven chart
    EventCalendar.tsx
    FinanceChart.tsx        # Prop-driven chart
    FormModel.tsx
    InputField.tsx
    Menu.tsx
    Navbar.tsx
    Pagination.tsx
    Performance.tsx
    SearchInput.tsx
    Table.tsx
    UserCard.tsx
  lib/
    data.ts                 # Static mock data, menu, role
    dashboard-metrics.ts    # Derived metrics for the overview page
types.ts                    # TypeScript type definitions
```

---

## 📊 Data Layer

All data is currently static mock data, structured for a clean transition to dynamic sources:

- `src/lib/data.ts` — Mock datasets, sidebar menu, and the temporary `role` value
- `src/lib/dashboard-metrics.ts` — The single seam for dynamic data: every number on the overview page is derived here from `data.ts`. When an API or Prisma queries arrive, only this module needs to become async — the page, cards, and charts keep consuming the same shapes
- `types.ts` — Global TypeScript types
- `src/lib/schema.ts` — Data validation schemas (zod)

Charts receive their data as props with the static datasets as defaults, so swapping in real data requires no component changes.

---

## 🧭 Current Status & Roadmap

**Done**
- ✅ Shared role-aware dashboard entry (`/dashboard`) replacing per-role dashboards
- ✅ Overview page UI refinement: bento layout, derived metrics, KPI strip, role-gated sections
- ✅ Charts refactored to accept data props
- ✅ People and academics management list pages with CRUD-style actions
- ✅ Calendar (big calendar + mini calendar), announcements, messaging UI

**In Progress**
- 🚧 UI refinement of remaining screens

**Planned**
- ⬜ Authentication with dynamic roles and route restrictions (replacing the temporary `role` value)
- ⬜ Dynamic data via API / Prisma through `dashboard-metrics.ts`
- ⬜ Per-role personalization (teacher's own classes, parent's own children, etc.)

---

## 🎨 Design Guidelines

- Restrained bento-grid system with modular cards, subtle borders, and soft shadows
- Light mode only
- Academic palette: slate, muted blue, sage green, and warm bronze
- Sora font and the Acadix logo
- No decorative UI without a product purpose

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

**Prashanth Naidu**
- Email: jsprashanth003@gmail.com
- LinkedIn: [Prashanth Naidu](https://linkedin.com/in/prashanth-naidu03)
- GitHub: [AvatarN03](https://github.com/AvatarN03)

---

## 🙏 Acknowledgments

- The Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling approach
- The open-source community

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
