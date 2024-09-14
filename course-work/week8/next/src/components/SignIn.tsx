
import React from "react"
import { useNavigate } from "react-router-dom"

export function SignIn() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/signin")
    }
    return (
        <button onClick={handleClick}>SignIn</button>
    );
}

export default SignIn