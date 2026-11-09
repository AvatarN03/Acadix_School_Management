import Image from "next/image";
import { Megaphone, MessageSquare, Bell } from "lucide-react";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-slate-200/80 px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-30">
      {/* Search Input */}
      <SearchInput smScreen={false} />

      {/* Right Controls */}
      <div className="flex items-center justify-end gap-3 md:gap-4 ml-auto">
        {/* Messages */}
        <button
          type="button"
          className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 transition-colors"
          title="Messages"
        >
          <MessageSquare className="w-4 h-4" />
        </button>

        {/* Announcements */}
        <button
          type="button"
          className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 transition-colors relative"
          title="Announcements"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
            2
          </span>
        </button>

        <div className="h-6 w-px bg-slate-200 hidden sm:block mx-1" />

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-bold text-slate-900 leading-tight">John Doe</span>
            <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-wider">
              Admin
            </span>
          </div>
          <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
