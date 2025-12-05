
const Pagination = () => {
  return (
    <div className="p-2 md:p-4 mt-2 flex justify-between items-center text-mutedBlue gap-2">
        <button className='py-2 px-3 rounded-md bg-primaryDark text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Prev</button>

        <div className="flex items-center justify-center gap-1 text-xs text-primaryDark">
            <button className='px-2 rounded-md bg-sky-500'>1</button>
            <button className='px-2 rounded-md bg-sky-500'>2</button>
            <button className='px-2 rounded-md bg-sky-500 hidden md:block'>3</button>
            ...
            <button className='px-2 rounded-md bg-sky-500'>10</button>

        </div>
        <button className='py-2 px-3 rounded-md bg-primaryDark text-xs font-semibold cursor-pointer'>Next</button>
    </div>
  )
}

export default Pagination