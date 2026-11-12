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
    <div className="h-screen flex gap-3 bg-bento-canvas p-3 text-slate-800 antialiased overflow-hidden">
      {/* left sidebar */}
      <aside
        className="hidden w-[72px] md:w-[84px] lg:flex lg:w-[15%] xl:w-[13%] min-h-0 flex-col rounded-[24px] border border-[#e1e7ea] bg-white shadow-[0_10px_30px_rgba(31,48,61,0.04)] z-20"
      >
        <Link
          href={"/"}
          className="flex items-center px-3 py-4 w-full justify-center lg:justify-start gap-3 border-b border-[#edf1f2]"
        >
          <div className="w-10 h-10 rounded-[13px] bg-[#17212b] flex items-center justify-center shadow-[0_8px_20px_rgba(23,33,43,0.14)] flex-shrink-0">
            <Image src={"/logo.png"} alt="logo" width={28} height={28} className="brightness-0 invert" />
          </div>
          <div className="hidden lg:flex flex-col">
            <span className="text-[#17212b] font-semibold text-lg tracking-[-0.04em]">Acadix</span>
            <span className="text-[10px] text-[#82919a] font-semibold uppercase tracking-[0.12em]">Workspace</span>
          </div>
        </Link>
        <div className="flex-1 overflow-y-auto no-scrollbar p-2 lg:p-3">
          <Menu />
        </div>
      </aside>

      {/* right main content */}
      <div className="flex-1 flex flex-col gap-3 min-w-0 min-h-0 h-full overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto px-0.5 pb-3 md:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}
