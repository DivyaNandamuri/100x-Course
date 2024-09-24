import {Heading} from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {ButtonMessage} from "../components/ButtonMessage"
function Signin() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="flex h-screen bg-slate-300 justify-center">
        <div className="flex flex-col justify-center">
        <div className=" bg-white rounded-lg text-center px-6 p-4">
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <div className="text-sm">
            <InputBox onChange={(e) =>{
                setUserName(e.target.value)
            }} label={"Email"} placeholder={"johndoe@example.com"} />
            <label className="flex text-sm font-medium py-2">Password</label>
            <input type="password" className="w-full px-2 py-1 border rounded border-slate-200 size-10" onChange={(e) => {
                setPassword(e.target.value)
            }}></input>
            </div>
            <div className="pt-4">
            <Button onClick={async () => {
            try {
               const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
              });
              localStorage.setItem("token", response.data.token)
              
              navigate("/dashboard")
            } catch(err) {
                alert("Invalid credentials")
            }
            }} label={"Sign In"} />
            </div>
            <ButtonMessage label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
        </div>
        </div>
    </div>
}

export default Signin