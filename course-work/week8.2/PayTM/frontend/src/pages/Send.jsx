import { useState } from "react"
import { InputBox } from "../components/InputBox"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import axios from "axios"
import {useLocation, useNavigate} from 'react-router-dom'


export function Send() {
    console.log(localStorage.getItem("token"))
    const {state} = useLocation();
    const {username} = state;
    const [amount, setAmount] = useState(null)
    const navigate = useNavigate();
   
    return <div className="flex h-screen bg-slate-300 justify-center">
        <div className="flex flex-col justify-center">
        <div className=" bg-white rounded-lg text-center px-10 py-10 pt-0">
        <Heading label={"Send Money"} />
        <img src="user1.png" className="float-left size-14 rounded-3xl" />
        <SubHeading label={"Friend's Name"} />
        <InputBox className="type=number"  onChange={(e)=>{
            setAmount(e.target.value)
        }} label={"Amount (in Rs)"} placeholder={"Enter amount"}/>
        <Button label={"Initiate Transfer"} onClick={async () =>{
            try {
                const response = await axios.post("http://localhost:3000/api/v1/account/transfer",{
                    amount,
                    username
             },{
                headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem("token"),
                }, });
                console.log(response.data)
                alert("successful");
               navigate("/dashboard");
            } catch (error) {
            console.error('Error:', error);
          }
        }} />
    </div>
    </div>
    </div>
}
