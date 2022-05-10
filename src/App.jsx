import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Regiester } from './compnents/register/register'
import { Route, Routes } from 'react-router-dom'
import { Login } from './compnents/login/login'
import { Dashboard } from './compnents/dashboard'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Regiester></Regiester>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
