import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";


const page = () => {
  

  return (
    <div className="p-3 flex gap-4 flex-col xl:flex-row">
      {/* left  */}
      <div className="w-full h-full  xl:w-2/3">
        <div className="h-auto md:h-[88vh]  bg-lavendar text-deepSky p-4 rounded-md shadow-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
         <BigCalendar />
        </div>
      </div>

      {/* right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default page;
