import {useState} from 'react'
import {MarkComplete} from "./MarkComplete";

export function Todos({todos}){
    const [status,setStatus] = useState(false);
   
    return <div>
            { todos.map(function(todo){
                return <div>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button onClick={() =>{
                                fetch("http://localhost:3000/completed",{
                                    method:'PUT',
                                    body: JSON.stringify({
                                       _id:todo._id
                                    }),
                                    headers:{
                                        "content-type": "application/json"
                                    }}).then(async function(res){
                                        const json = await res.json();
                                        alert("Mark complete");
                                    })
                                    }}>
                                 <div>
                                    {todo.completed==true ? 'Done': 'Mark as complete'}
                                </div>
                            </button>
                        </div>
            })}
            </div>
}
