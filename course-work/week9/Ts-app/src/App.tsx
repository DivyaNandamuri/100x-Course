import React from 'react'
import {Todo} from "./components/Todo"
// import Arrayenum from './components/Arrayenum'
import './App.css'


function App() {
  // const arr = [1, 2, 3, 4, 5];

  return <div>
    <div><Todo task="Gym" details=" go to gym" /></div>
    {/* <div><Arrayenum arr={arr} /></div> */}
  </div>
}

export default App
