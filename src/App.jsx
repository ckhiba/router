import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import  About from './Pages/About'
import Notfound from './Pages/Notfound'
import Header from './ Units/Header' 
export default function App() {
  return (
    <div> 
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} /> 
      <Route path='*' element={<Notfound />} />
      </Routes>
    
    </div>
  )
}
