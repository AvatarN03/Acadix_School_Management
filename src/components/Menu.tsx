"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems, role } from "@/lib/data";

const Menu = ({ showLabels = false }: { showLabels?: boolean }) => {
  const pathname = usePathname();

  return (
    <nav className="text-xs space-y-5">
      {menuItems.map((section, index) => (
        <div key={index} className="space-y-1">
          {section.title && (
            <span className={`${showLabels ? "block" : "hidden lg:block"} text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa7ad] px-3 py-1`}>
              {section.title}
            </span>
          )}

          <div className="space-y-1">
            {section.items.map((item, idx) => {
              if (item.visible.includes(role)) {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    href={item.href}
                    key={idx}
                    className={`flex items-center ${showLabels ? "justify-start" : "justify-center lg:justify-start"} gap-3 px-3 py-2.5 rounded-2xl font-medium transition-all group ${isActive ? "bg-[#e5eee8] text-[#274936] shadow-[inset_3px_0_0_#6b9a7c]" : "text-[#64727c] hover:text-[#17212b] hover:bg-[#f5f8f8]"}`}
                    title={item.label}
                  >
                    <IconComponent className={`w-4 h-4 transition-colors flex-shrink-0 ${isActive ? "text-[#4e8964]" : "text-[#8a98a3] group-hover:text-[#4e8964]"}`} />
                    <span className={`${showLabels ? "block" : "hidden lg:block"} truncate`}>{item.label}</span>
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
