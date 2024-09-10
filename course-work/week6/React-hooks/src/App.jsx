import React, { useState } from "react"
import Todo from "../components/Todo.jsx"

function App() {
  //state variable is not initialised in App to avoid multiple re-rendering
  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Divya2"></Header>
      <Header title="Divya3"></Header>
      <Todo></Todo>
    </div>
  )
}

//initialised state variable
function HeaderWithButton() {
  const [title, setTitle] = useState('')

  function updateTitle() {
    setTitle("My name is " + Math.random())
  }
  return <>
      <button onClick={updateTitle}>Update title</button>
      <Header title={title}></Header>
  </>
}

//memo: re-renders component only if the state is changed
const Header =React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})



export default App
