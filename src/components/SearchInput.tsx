import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SearchInput = ({smScreen}:{ smScreen : boolean}) => {
  return (
      <div className={`items-center  w-full md:w-auto  justify-center gap-2 ring-gray-300 ring-[2px] px-4 rounded-full ${smScreen ? "flex" : "hidden md:flex"}`}>
        <Search className="text-lavendar/80" />
        <input type="text" placeholder="Search... " className="p-2 bg-transparent  outline-none text-lavendar w-full" />
      </div>
  )
}

export default SearchInput