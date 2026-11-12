"use client";

import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

import Menu from "./Menu";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#e1e7ea] bg-[#f7fafb] text-[#52636d] transition-colors hover:bg-[#edf3ef] lg:hidden"
      >
        {isOpen ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#17212b]/25 backdrop-blur-[2px]"
          />
          <aside className="relative flex h-full w-[min(82vw,300px)] flex-col border-r border-[#e1e7ea] bg-white p-3 shadow-[12px_0_35px_rgba(31,48,61,0.12)]">
            <div className="mb-4 flex items-center justify-between border-b border-[#edf1f2] pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa7ad]">Acadix</p>
                <p className="text-sm font-semibold text-[#34434e]">Workspace navigation</p>
              </div>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-xl text-[#82919a] hover:bg-[#f5f8f8]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-y-auto no-scrollbar">
              <Menu showLabels />
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
