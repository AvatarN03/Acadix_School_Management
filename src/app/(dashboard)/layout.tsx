import Image from "next/image";
import Link from "next/link";

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DahboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-bento-canvas text-slate-800 antialiased overflow-hidden">
      {/* left sidebar */}
      <aside
        className="w-[72px] md:w-[84px] lg:w-[15%] xl:w-[13%] 
     min-h-screen flex flex-col bg-white border-r border-slate-200/80 z-20"
      >
        <Link
          href={"/"}
          className="flex items-center px-4 py-4 w-full justify-center lg:justify-start gap-3 border-b border-slate-100"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-sm flex-shrink-0">
            <Image src={"/logo.png"} alt="logo" width={28} height={28} className="brightness-0 invert" />
          </div>
          <div className="hidden lg:flex flex-col">
            <span className="text-slate-900 font-bold text-lg tracking-tight">Acadix</span>
            <span className="text-[11px] text-slate-400 font-medium -mt-1">School Portal</span>
          </div>
        </Link>
        <div className="flex-1 overflow-y-auto no-scrollbar p-2 lg:p-3">
          <Menu />
        </div>
      </aside>

      {/* right main content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-3 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
