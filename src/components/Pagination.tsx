
const Pagination = () => {
  return (
    <div className="p-2 md:p-4 mt-2 flex justify-between items-center   gap-2">
        <button className='py-2 px-3 rounded-md bg-dodgerBlue text-deepSky hover:bg-periwinkle hover:text-dodgerBlue text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Prev</button>

        <div className="flex items-center justify-center gap-1 text-base text-dodgerBlue">
            <button className='px-2 rounded-md bg-deepSky'>1</button>
            <button className='px-2 rounded-md bg-deepSky'>2</button>
            <button className='px-2 rounded-md bg-deepSky hidden md:block'>3</button>
            ...
            <button className='px-2 rounded-md bg-deepSky'>10</button>

        </div>
        <button className='py-2 px-3 rounded-md text-deepSky bg-dodgerBlue hover:bg-periwinkle hover:text-dodgerBlue text-xs font-semibold cursor-pointer'>Next</button>
    </div>
  )
}

export default Pagination