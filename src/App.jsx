import { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Components/pages/Routes/Routes'
import { Footer } from './Components/pages/Layout/Footer'

import './App.css'

function App() {

  return (
    <Router>     
      <Routes/>
      <Footer/>
    </Router>
  )
}

export default App
