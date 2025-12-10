
import { announcements } from "@/lib/data";

const Announcement = () => {
  return (
    <div className="bg-lavendar text-dodgerBlue  rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-base md:text-xl font-semibold my-4">
          Announcement
        </h1>
        <p className="text-gray-600 cursor-pointer hover:text-gray-700 underline text-sm">
          View all
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((annoncement, idx) => (
          <div key={idx} className="odd:bg-babyBlue even:bg-dodgerBlue  odd:text-lavendar even:text-periwinkle rounded-md p-2 md:p-4">
            <div className="flex justify-end">

              <span className="text-[9px] xl:text-xs text-dodgerBlue bg-deepSky rounded-md px-1 py-1">
                {annoncement.date}
              </span>
            </div>
              <h2 className="font-medium text-white text-base truncate">
                {annoncement.title}
              </h2>
            <p className="text-sm mt-1 line-clamp-3">
              {annoncement.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
