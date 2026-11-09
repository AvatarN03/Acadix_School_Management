
const Pagination = () => {
  return (
    <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 px-2 pt-4 md:px-4">
        <button className='rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed'>Prev</button>

        <div className="flex items-center justify-center gap-1 text-xs text-slate-600">
            <button className='rounded-lg bg-[#e5eee8] px-2.5 py-1.5 font-semibold text-[#356348]'>1</button>
            <button className='rounded-lg px-2.5 py-1.5 hover:bg-slate-100'>2</button>
            <button className='hidden rounded-lg px-2.5 py-1.5 hover:bg-slate-100 md:block'>3</button>
            <span className="px-1 text-slate-400">…</span>
            <button className='rounded-lg px-2.5 py-1.5 hover:bg-slate-100'>10</button>

        </div>
        <button className='cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50'>Next</button>
    </div>
  )
}

export default Pagination
