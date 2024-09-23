export function Searchbar({label}) {
    return <div className="pl-10 pt-8 pr-10 font-bold">
        <div>{label}</div>
        <div className="flex text-grey-900 border border-gray-500 rounded w-full p-2 text-sm">
        <input id="default-search" className="w-full text-white border-none outline-none" placeholder="Search users...." required />
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        </div>
        </div>
}