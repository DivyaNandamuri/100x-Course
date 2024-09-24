import { useEffect ,useState} from "react"
import {Appbar} from "../components/Appbar"
import {Balance} from "../components/Balance"
import { Searchbar } from "../components/Searchbar"
import axios from "axios"
import {Users} from "../components/Users"

export function Dashboard() {
    const [value,setValue] = useState(null);
    const [allusers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [showDetails, setShowDetails] = useState(false)

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
                const response = await axios.get("http://localhost:3000/api/v1/user/allusers",{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+localStorage.getItem("token"),
                    },
                });
                setAllUsers(response.data.userDetails)
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
        <Searchbar label={"Users"} onChange={(e)=> {
            setFilter(e.target.value)
        }} onClick={async ()=>{
            const filteredusers = await axios.get("http://localhost:3000/api/v1/user/bulk", {
                params:{
                    filter
                }
            },{ headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+localStorage.getItem("token"),
                    },
                });
                setFilteredData(filteredusers.data.users)
                setShowDetails(!showDetails)
        }} />
         {/* <Users label={(filteredData.length)==-1 ? allusers : filteredData} /> */}
        {/* {filteredData.length ? <Users label={allusers} />:<Users label={filteredData} />} */}
        <Users label={showDetails ? filteredData : allusers} />
    </div>
}
