export function Appbar({label, message}) {
    return <div className="flex shadow h14 justify-between p-10">
       <div className="text-left font-bold text-3xl" >{label}</div>
       <div className="flex">
    <div className="flex flex-col justify-center h-full mr-4" >{message}</div>
    <div className="text-md inline-flex items-center pb-2">
    <img className="w-15 h-10 rounded-full" src="user1.png" />
    </div>
    </div>
    </div>
}