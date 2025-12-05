

const Announcement = () => {
  return (
    <div className="bg-primaryDark text-white rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-base md:text-xl font-semibold my-4">Announcement</h1>
        <p className="text-gray-400 cursor-pointer hover:text-gray-300 underline text-sm">
          View all
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-accentBrown rounded-md p-2 md:p-4">
          <div className="flex gap-1 items-center justify-between">
            <h2 className="font-medium text-base truncate">Lorem ipsum dolor sit</h2>
            <span className="text-[9px] xl:text-xs text-gray-400 bg-softGray rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-300 mt-1 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-accentGold rounded-md p-2 md:p-4">
          <div className="flex gap-1 items-center justify-between">
            <h2 className="font-medium text-base truncate">Lorem ipsum dolor sit</h2>
            <span className="text-[9px] xl:text-xs text-gray-400 bg-softGray rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-300 mt-1 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-accentBrown rounded-md p-2 md:p-4">
          <div className="flex gap-1 items-center justify-between">
            <h2 className="font-medium text-base truncate">Lorem ipsum dolor sit</h2>
            <span className="text-[9px] xl:text-xs text-gray-400 bg-softGray rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-300 mt-1 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Announcement;
