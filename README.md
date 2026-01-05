# Acadix - School Management Dashboard 🎓

A comprehensive school management system built with Next.js, TypeScript, and Tailwind CSS. This dashboard provides role-based interfaces for administrators, teachers, students, and parents to manage educational operations efficiently.

<img src="public/logo.png" width="200" alt="Dashboard Preview" />
<img width="1899" height="936" alt="image" src="https://github.com/user-attachments/assets/db3988b0-32c7-4c29-92f2-380667368348" />


## 🌟 Features

### Multi-Role Dashboard System
- **Admin Dashboard** - Complete control over school operations
- **Teacher Dashboard** - Manage classes, lessons, and student progress
- **Student Dashboard** - View assignments, attendance, and results
- **Parent Dashboard** - Monitor child's academic performance

---

## 📸 Screenshots

### Admin Dashboard
![Admin Dashboard](public/profile.png)

The admin dashboard provides comprehensive oversight of:
- Student and teacher management
- Class and subject administration
- Attendance tracking
- Financial overview
- Announcements and events

---

### 👨‍🎓 Student Management
![Students List](public/singleClass.png)

**Features:**
- Complete student roster with search and filter
- Individual student profiles
- Attendance records
- Academic performance tracking
- Parent contact information

**Tech Stack:** Next.js, TypeScript, Tailwind CSS  
**Route:** `/list/students`

---

### 👨‍🏫 Teacher Management
![Teachers List](public/class.png)

**Features:**
- Teacher directory with detailed profiles
- Subject assignments
- Class schedules
- Contact information
- Performance metrics

**Tech Stack:** Next.js, TypeScript, Tailwind CSS  
**Route:** `/list/teachers`

---

### 📚 Classes & Subjects
![Classes](public/singleClass.png)

**Features:**
- Class organization by grade and section
- Subject-wise class distribution
- Teacher assignments
- Student enrollment tracking

**Tech Stack:** Next.js, TypeScript, Tailwind CSS  
**Route:** `/list/classes`

---

### 📖 Lessons Management
![Lessons](public/singleLesson.png)

**Features:**
- Lesson planning and scheduling
- Subject-wise lesson organization
- Assignment creation
- Resource management

**Tech Stack:** Next.js, TypeScript, Tailwind CSS  
**Route:** `/list/lessons`

---

### ✅ Attendance Tracking
![Attendance](public/singleAttendance.png)

**Features:**
- Daily attendance marking
- Attendance reports and analytics
- Student-wise attendance history
- Absence notifications

**Tech Stack:** Next.js, TypeScript, Tailwind CSS  
**Route:** `/list/attendance`

---

### 📅 Calendar & Events
![Calendar](public/calendar.png)

**Features:**
- Interactive calendar view
- Event scheduling and management
- Exam timetables
- Holiday tracking
- Assignment due dates

**Tech Stack:** Next.js, TypeScript, Tailwind CSS  
**Route:** `/list/events`

---

### 📢 Announcements
![Announcements](public/singleBranch.png)

**Features:**
- School-wide announcements
- Class-specific notifications
- Priority-based messaging
- Announcement archive

**Tech Stack:** Next.js, TypeScript, Tailwind CSS  
**Route:** `/list/announcements`

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom React Components (No third-party UI libraries)

### Core Technologies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.0.0"
}
```

---

## 📁 Project Structure

```
├── public/                    # Static assets
│   ├── avatar.png            # User avatars
│   ├── calendar.png          # Calendar icons
│   ├── logo.png              # School logo
│   └── ...                   # Other UI assets
│
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── (dashboard)/      # Dashboard routes group
│   │   │   ├── admin/        # Admin dashboard
│   │   │   ├── teacher/      # Teacher dashboard
│   │   │   ├── student/      # Student dashboard
│   │   │   ├── parent/       # Parent dashboard
│   │   │   ├── list/         # Data management pages
│   │   │   │   ├── students/
│   │   │   │   ├── teachers/
│   │   │   │   ├── classes/
│   │   │   │   ├── subjects/
│   │   │   │   ├── lessons/
│   │   │   │   ├── attendance/
│   │   │   │   ├── exams/
│   │   │   │   ├── results/
│   │   │   │   ├── assignments/
│   │   │   │   ├── events/
│   │   │   │   ├── announcements/
│   │   │   │   ├── messages/
│   │   │   │   └── parents/
│   │   │   └── layout.tsx    # Dashboard layout
│   │   ├── sign-in/          # Authentication
│   │   └── globals.css       # Global styles
│   │
│   ├── components/           # Reusable components
│   │   ├── forms/            # Form components
│   │   │   ├── StudentForm.tsx
│   │   │   └── TeacherForm.tsx
│   │   ├── Announcement.tsx
│   │   ├── AttendanceChart.tsx
│   │   ├── BigCalendar.tsx
│   │   ├── CountChart.tsx
│   │   ├── EventCalendar.tsx
│   │   ├── FinanceChart.tsx
│   │   ├── FormModel.tsx
│   │   ├── InputField.tsx
│   │   ├── Menu.tsx
│   │   ├── Navbar.tsx
│   │   ├── Pagination.tsx
│   │   ├── Performance.tsx
│   │   ├── SearchInput.tsx
│   │   ├── Table.tsx
│   │   └── UserCard.tsx
│   │
│   └── lib/                  # Utilities
│       ├── data.ts           # Mock/sample data
│       └── schema.ts         # Data schemas
│
├── types.ts                  # TypeScript type definitions
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone [<repository-url>](https://github.com/AvatarN03/Acadix_School_Management.git)
cd Acadix_School_Management
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Adaptive navigation

### Color Scheme
- Primary: Blue tones for professional look
- Accent: Green for success states
- Neutral: Gray scale for backgrounds
- Alerts: Red for warnings, Yellow for notifications

### UI Components
All components are custom-built with Tailwind CSS:
- **Data Tables** - Sortable, paginated tables
- **Charts** - Visual data representation
- **Forms** - Dynamic form with validation
- **Modals** - Form submission dialogs
- **Cards** - Information display cards
- **Navigation** - Sidebar and top nav
- **Search** - Real-time search functionality
- **Pagination** - Page navigation controls

---

## 📄 Available Routes

### Dashboard Routes
- `/admin` - Administrator dashboard
- `/teacher` - Teacher dashboard
- `/student` - Student dashboard
- `/parent` - Parent dashboard

### List Management Routes
- `/list/students` - Student management
- `/list/students/[id]` - Individual student profile
- `/list/teachers` - Teacher management
- `/list/teachers/[id]` - Individual teacher profile
- `/list/classes` - Class management
- `/list/subjects` - Subject management
- `/list/lessons` - Lesson planning
- `/list/attendance` - Attendance tracking
- `/list/exams` - Examination management
- `/list/results` - Result management
- `/list/assignments` - Assignment management
- `/list/events` - Event calendar
- `/list/announcements` - Announcement board
- `/list/messages` - Messaging system
- `/list/parents` - Parent portal



## 🔧 Key Components

### 1. Menu Component
Sidebar navigation with role-based menu items

### 2. Navbar Component
Top navigation bar with user profile and notifications

### 3. Table Component
Reusable data table with sorting and pagination

### 4. FormModel Component
Modal wrapper for forms

### 5. Chart Components
- AttendanceChart
- CountChart
- FinanceChart
- Performance

### 6. Calendar Components
- BigCalendar (Full calendar view)
- EventCalendar (Upcoming events widget)

### 7. Form Components
- StudentForm
- TeacherForm
- InputField (Reusable form input)

### 8. Utility Components
- SearchInput
- Pagination
- UserCard
- Announcement

---

## 🎯 Features by Role

### Admin Features
✅ Complete user management  
✅ Class and subject organization  
✅ Financial overview  
✅ System-wide announcements  
✅ Report generation  
✅ Settings and configuration  

### Teacher Features
✅ Class management  
✅ Lesson planning  
✅ Attendance marking  
✅ Assignment creation  
✅ Grade submission  
✅ Student performance tracking  

### Student Features
✅ View class schedule  
✅ Access assignments  
✅ Check attendance  
✅ View exam results  
✅ Read announcements  
✅ Track academic progress  

### Parent Features
✅ Monitor child's attendance  
✅ View academic performance  
✅ Check assignment status  
✅ Communicate with teachers  
✅ Access school announcements  
✅ View financial information  

---



## 📊 Data Management

Data is managed through TypeScript interfaces and schemas defined in:
- `src/lib/schema.ts` - Data validation schemas
- `src/lib/data.ts` - Mock data and API helpers
- `types.ts` - Global TypeScript types

---

## 🎨 Styling Guidelines

The project uses Tailwind CSS with custom configurations:
- Consistent spacing scale
- Custom color palette
- Responsive breakpoints
- Custom animations

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

Your Name  
📧 Email: jsprashanth003@gmail.com
🔗 LinkedIn: [Prashanth Naidu](https://linkedin.com/in/prashanth-naidu03)  
🐙 GitHub: [AvatarN03](https://github.com/AvatarN03)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community

---

## 📞 Support

For support, email your.email@example.com or open an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
