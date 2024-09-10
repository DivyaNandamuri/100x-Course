import { useEffect, useState } from "react"


function Todo() {
    const [todos, setTodos] = useState([]);
    const [count,setCount] = useState(0); 

    // to mount on initial load
    useEffect(() => {
        fetch("http://localhost:3000/todos")
        .then(async function(res) {
            const response = await res.json();
            setTodos(response.todos)
        }  
        )
    },[]) // Empty dependency array means this effect runs once
    
    return <div>
        <h1>{todos.map(function(todo) {
            return <div>{todo.title}</div>
            
        })}</h1>
    </div>
}

//simple count function
// function Todo() {
//     const [count,setCount] = useState(0);

//     return <div>
//         <button onClick={() => {
//             setCount(count+1)
//         }}>count is {count}</button>
//     </div>
// }

export default Todo;