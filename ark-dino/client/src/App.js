import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import Dinos from "./components/dinoDirectory"
import About from './components/About'



export default function App(){
 
  return(
    <Router>
      <nav className='header'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dinos">Dino Directory</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dinos" element={<Dinos/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
    
  )
}
