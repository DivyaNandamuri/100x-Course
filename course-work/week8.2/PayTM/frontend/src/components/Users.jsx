
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
export function Users({label}) {
    const navigate = useNavigate();
    
    return <div className="pl-10 pt-10 font-medium">
        {label.map(function(user) {
            return <div key={user._id}>
                <h2>{user.username}</h2>
                <Button label={"Send Money"} onClick={() =>{
                    navigate("/send")
                }} />
                </div>
        })}
    </div>
}