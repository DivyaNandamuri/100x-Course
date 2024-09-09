import { useState } from 'react'

export function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return <div>
            <input type='Text' placeholder='Enter title' onChange={function(e){
                setTitle(e.target.value);
            }}></input><br />
            <input type='Text' placeholder='Enter description' onChange={function(e) {
                setDescription(e.target.value);
                }}></input><br />
            <button onClick={()=> {
                fetch("localhost:3000/todo",{
                    method: "POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        title:title,
                        description:description
                    })
                }).then(async function(res){
                    // eslint-disable-next-line no-unused-vars
                    const response = await res.json();
                    alert("Todo added");
                })
            }}>Add Todo</button>
        </div>
}

