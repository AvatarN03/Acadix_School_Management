
import { Megaphone, MessageCircleMore, User2 } from "lucide-react";

import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 backdrop-blur bg-primaryDark  rounded-md m-2 shadow-md">
      <SearchInput smScreen={false} />
      {/* icons  */}

      <div className="flex  items-center justify-end w-full gap-3 md:gap-6">
        <div className="bg-accentGold hover:bg-gray-100 rounded-full p-2 flex justify-center items-center cursor-pointer">
          <MessageCircleMore className="w-6 h-6" />
        </div>
        <div className="bg-accentGold hover:bg-gray-100 rounded-full p-2 flex justify-center items-center cursor-pointer relative">
          <Megaphone className="w-6 h-6" />
          <div className="absolute w-5 h-5 -top-3 -right-2 flex justify-center items-center  text-xs rounded-full bg-purple-500 text-white">
            2
          </div>
        </div>
        <div className="flex flex-col gap-1 text-accentGold">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-xs text-gray-300 text-right">Admin</span>
        </div>
        <div className="bg-white rounded-full cursor-pointer p-2 flex justify-center items-center">
          <User2 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
