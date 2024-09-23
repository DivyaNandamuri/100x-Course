import {Appbar} from "../components/Appbar"
import {Balance} from "../components/Balance"
import { Searchbar } from "../components/Searchbar"

export function Dashboard() {
    return <div>
        <Appbar label={"Payments App"} message={"Hello, User"} />
        <Balance label={"Your Balance $"}></Balance>
        <Searchbar label={"Users"} />
    </div>
}
