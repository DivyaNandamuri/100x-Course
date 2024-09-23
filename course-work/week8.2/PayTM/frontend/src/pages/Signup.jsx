import { useState } from "react";
import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import { Button } from "../components/Button"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {InputBox} from "../components/InputBox"
import { Link } from "react-router-dom";  

export const Signup = () => {
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-4 h-max px-7">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"}></SubHeading>
          {/* <InputBox onChange={(e)=>{
            setFirstName(e.target.value)
          }} placeholder="Enter First Name" label={"First Name"} />
          <InputBox onChange={(e) =>{
            setLastName(e.target.value)
          }} placeholder= "Enter Last Name" label={"Last Name"} />
          <InputBox onChange={(e)=>{
            setUserName(e.target.value)
          }} placeholder="Enter email" label={"Email"} />
          <InputBox onChange={(e)=>{
            setPassword(e.target.value)
          }} placeholder="Enter Password" label={"Password"} /> */}

        <form><label className="text-sm font-medium text-left py-2">First Name</label>
        <input className="w-full px-2 py-1 border rounded border-slate-200" placeholder="Enter First Name" onChange={e =>{setFirstName(e.target.value);}} required></input>
        <label className="text-sm font-medium text-left py-2">Last Name</label>
        <input className="w-full px-2 py-1 border rounded border-slate-200"  placeholder="Enter Last Name" onChange={e =>{setLastName(e.target.value);}} required></input>
        <label className="text-sm font-medium text-left py-2">Email</label>
        <input type ="email" className="w-full px-2 py-1 border rounded border-slate-200"  placeholder="Enter email" onChange={e =>{setUserName(e.target.value);}} required></input>
        <label className="text-sm font-medium text-left py-2">Password</label>
        <input type="password" className="w-full px-2 py-1 border rounded border-slate-200" onChange={e =>{setPassword(e.target.value);}} required></input>
        </form> 
        <div className="pt-4"><Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} /></div>
        <label>Already have an account?<Link to="/signin" className="font-medium underline hover:no-underline">Login</Link></label>
        </div>
        </div>
        </div> 
}
