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
    <div className="h-screen flex">
      {/* left  */}
      <div
        className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] 
     min-h-screen flex flex-col p-[0.5px] md:p-4 bg-primaryDark"
      >
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2 my-2"
        >
          <Image src={"/logo.png"} alt="logo" width={52} height={52} />
          <span className="hidden lg:block text-mutedBlue  font-bold text-2xl">Acadix</span>
        </Link>
        <div className="flex-1 overflow-y-auto  no-scrollbar">
          <Menu />
        </div>
      </div>

      {/* right  */}
      <div className="w-[86%] md:w-[92%] lg:w-[88%] xl:w-[86%] bg-mutedBlue overflow-y-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
