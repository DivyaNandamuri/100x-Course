import { SearchBar } from "./SearchBar"
import SignIn from "./SignIn"
import {BrowserRouter, Routes, Route} from "react-router-dom"

export const AppBar=() => {
    return <div className="flex justify-between">
            <div className="text-md inline-flex items-center pb-2">
                {/* youtube logo */}
                <img className="w-24 h-14 p-2 rounded-full" src="youtube.png" />
            </div>
            <div className="p-4">
                {/* search bar  */}
                <SearchBar />
            </div>
            <div className="grid p-3 px-10">
                {/* sign in button */}
                <a href="https://example.com/signin" target="_blank" rel="noopener noreferrer">
                <button>Sign In</button>
                </a>
            </div>
        </div>
}
