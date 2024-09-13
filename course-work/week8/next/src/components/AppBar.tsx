import { SearchBar } from "./SearchBar"

export const AppBar=() => {
    return <div className="flex justify-between">
            <div className="text-md inline-flex items-center pb-2">
                <img className="w-24 h-14 p-2 rounded-full" src="youtube.png" />
            </div>
            <div className="p-4">
                <SearchBar />
            </div>
            <div>
                <button onClick={SignIn}>Sign In</button>
            </div>
        </div>
}

export function SignIn() {
    return <div>
        Hello welcome
    </div>
}