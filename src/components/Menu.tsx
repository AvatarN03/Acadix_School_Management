import Link from "next/link";

import { menuItems, role } from "@/lib/data";

const Menu = () => {
  return (
    <div className="mt-4 text-sm h-full">
      {menuItems.map((menu, index) => (
        <div key={index} className="flex flex-col gap-2 my-3">
          <span className="hidden lg:block">
            {menu.title}
          </span>
          <hr className="h-[3.5px] w-[80%]  mx-auto md:mx-0 bg-deepSky" />
          {menu.items.map((item, idx) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={idx}
                  className="flex items-center justify-center group rounded-md lg:justify-start hover:shadow hover:bg-periwinkle  hover:text-dodgerBlue  gap-4 p-2"
                  title={item.label}
                >
                  <item.icon className="w-5 md:w-7 h-5 md:h-7 group-hover:text-deepSky" />
                  <span className="hidden ml-0 group-hover:ml-2 lg:block  transition-all ease-in-out duration-300  truncate">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
