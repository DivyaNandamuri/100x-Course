import { useState, useEffect } from 'react'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos';

function App() {
  //Initialization of state
  const [todos, setTodos] = useState([]);

  useEffect(() => {fetch("http://localhost:3000/todos").then(async function(res){
    const response = await res.json();
    setTodos(response.todos);
  })},[]) // Empty dependency array means this effect runs once

  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
      </div>
  )
}

export default App
