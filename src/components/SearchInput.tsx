import { Search } from "lucide-react";
import React from "react";

const SearchInput = ({ smScreen }: { smScreen: boolean }) => {
  return (
    <div
      className={`items-center w-full md:w-72 justify-between gap-2 bg-slate-50 border border-slate-200/80 hover:border-slate-300 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 px-3.5 py-1.5 rounded-xl transition-all ${
        smScreen ? "flex" : "hidden md:flex"
      }`}
    >
      <div className="flex items-center gap-2 w-full">
        <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search records, classes..."
          className="text-xs bg-transparent outline-none text-slate-800 placeholder:text-slate-400 w-full"
        />
      </div>
      <kbd className="hidden lg:inline-flex text-[10px] font-mono text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-2xs">
        ⌘K
      </kbd>
    </div>
  );
};

export default SearchInput;
