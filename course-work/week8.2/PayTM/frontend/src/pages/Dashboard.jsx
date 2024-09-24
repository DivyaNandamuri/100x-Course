import { useEffect ,useState} from "react"
import {Appbar} from "../components/Appbar"
import {Balance} from "../components/Balance"
import { Searchbar } from "../components/Searchbar"
import axios from "axios"
import {Users} from "../components/Users"

export function Dashboard() {
    const [value,setValue] = useState(null);
    const [all, setAll] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () =>{
        try {
            const response = await axios.get('http://localhost:3000/api/v1/account/balance',{
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem("token"),
                },
            });
            setValue(response.data.balance)
            } catch (err) {
            setError('Error fetching data');
          } finally {
            setLoading(false);
          }};
            fetchData();
            const fetchAll = async () => {
            try{
                const response = await axios.get("http://localhost:3000/api/v1/user/all",{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+localStorage.getItem("token"),
                    },
                });
                setAll(response.data.userDetails)
            } catch (err) {
                setError('Error fetching data');
              } finally {
                setLoading(false)
            }};
             fetchAll();
            },[]);
        
        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        
    return <div>
        <Appbar label={"Payments App"} message={"Hello, User"} />
        <Balance label={"Your Balance $"} value={value}></Balance>
        <Searchbar label={"Users"} />
        <Users label={all}></Users>
    </div>
}
