import Image from "next/image";
import { Bell, ChevronDown, MessageSquare } from "lucide-react";
import SearchInput from "./SearchInput";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between rounded-[24px] border border-[#e1e7ea] bg-white px-3 py-2.5 shadow-[0_10px_30px_rgba(31,48,61,0.04)] sticky top-0 z-30 md:px-4">
      <div className="flex min-w-0 items-center gap-3">
        <MobileMenu />
        <SearchInput smScreen={false} />
      </div>

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
            <span className="text-xs font-semibold text-[#263640] leading-tight">John Doe</span>
            <span className="text-[10px] font-semibold text-[#6b9a7c] uppercase tracking-[0.12em]">
              Admin
            </span>
          </div>
          <button type="button" className="flex items-center gap-2 rounded-2xl border border-[#e1e7ea] bg-[#f7fafb] p-1 pr-2 transition-colors hover:bg-[#edf3ef]" title="Open profile menu">
          <div className="w-9 h-9 rounded-[13px] bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <ChevronDown className="hidden h-3.5 w-3.5 text-[#82919a] sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
