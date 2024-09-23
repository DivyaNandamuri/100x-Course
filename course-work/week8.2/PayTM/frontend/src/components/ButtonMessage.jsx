import { Link } from "react-router-dom"
export function ButtonMessage({label, buttonText, to}) {
    return <div className="flex justify-center ">
        <div>{label}</div>
        <Link className="underline hover:shadow" to={to}>{buttonText}</Link>
    </div>
}