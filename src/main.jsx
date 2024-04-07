import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Inicio from './Inicio'
import './css/style.css'



ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <Routes>
      <Route path='/' element ={<Inicio/>}/>
    </Routes>
  </Router>
  
)
