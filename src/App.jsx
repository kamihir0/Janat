import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ReactDOM } from 'react-dom/client'
import Main from './Pages/Main'
import Coach from './Pages/Coach'
import Price from './Pages/Price'
import Schedule from './Pages/Schedule'

function App () {
  return (
    <div>
      <Routes>
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path='/' element={<Main />} />
        <Route path='/Coach' element={<Coach/>} />
        <Route path='/Price' element={<Price/>} />
        <Route path='/Schedule' element={<Schedule/>} />
      </Routes>
    </div>
  )
}

export default App
