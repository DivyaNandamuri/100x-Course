export function Appbar({label, message, onClick}) {
    return <div className="flex shadow h14 justify-between p-10">
       <div className="text-left font-bold text-3xl" >{label}</div>
       <div className="flex">
    <div className="flex flex-col justify-center h-full mr-4" >{message}</div>
    <div className="text-md inline-flex items-center pb-2">
    <img className="w-15 h-10 pr-6 rounded-full" src="user1.png" />
    <button className="p-4 text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 " onClick={onClick}>Signout</button>
    </div>
    </div>
    </div>
}