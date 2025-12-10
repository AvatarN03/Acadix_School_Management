import Announcement from '@/components/Announcement'
import BigCalendar from '@/components/BigCalendar'
import React from 'react'

const page = () => {
  return (
   <div className="p-4 h-auto md:h-[90vh] flex gap-4 flex-col xl:flex-row">
      {/* left  */}
      <div className="w-full h-full xl:w-2/3">
        <div className="h-full bg-lavendar text-deepSky p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* right  */}
      <div className="w-full xl:w-1/3">
        <Announcement />
      </div>
    </div>
  )
}

export default page