import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import React, { Suspense} from 'react';
// import Dashboard from './components/Dashboard'
// import Landingpage from './components/Landingpage'
const Landingpage = React.lazy(() => import('./components/Landingpage'))
const Dashboard=React.lazy(() =>import('./components/Dashboard'))
// import { useEffect } from 'react'


//routing and prop drilling and context API
function App() {

  return (
    <BrowserRouter>
    <Appbar></Appbar>
      <Routes>
        {/* React.lazy with Suspense to load a component only when it's needed, suspense is used to loading the component */}
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
        <Route path="/landingpage" element={<Suspense fallback={<div>Loading....</div>}><Landingpage></Landingpage></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


function Appbar() {
  //naviage hook should be in a component which is inside the BrowserRouter
  const navigate = useNavigate();

  return <div>
    <div>
    <button onClick={() => {navigate("/");}}>Dashboard</button>
    <button onClick={() => {navigate("/landingpage");}}>Landing page</button>
    </div>
  </div>
}


export default App
