"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems, role } from "@/lib/data";

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="text-xs space-y-4">
      {menuItems.map((section, index) => (
        <div key={index} className="space-y-1">
            <span className="hidden lg:block text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1">
            {section.title}
          </span>

          <div className="space-y-0.5">
            {section.items.map((item, idx) => {
              if (item.visible.includes(role)) {
                const IconComponent = item.icon;
                return (
                  <Link
                    href={item.href}
                    key={idx}
                    className={`flex items-center justify-center lg:justify-start gap-3 px-3 py-2 rounded-xl font-medium transition-colors group ${pathname === item.href || (item.href === "/dashboard" && pathname === "/dashboard") ? "bg-[#e8f2ec] text-[#274936]" : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"}`}
                    title={item.label}
                  >
                    <IconComponent className={`w-4 h-4 transition-colors flex-shrink-0 ${pathname === item.href ? "text-[#4e8964]" : "text-slate-500 group-hover:text-[#4e8964]"}`} />
                    <span className="hidden lg:block truncate">{item.label}</span>
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
