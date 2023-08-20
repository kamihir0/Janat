import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Coaches from './Pages/Coaches'
import Price from './Pages/Price'
import Schedule from './Pages/Schedule'
import Navbar from './Components/Navbar'
import Detail from './Pages/ProgramDetail/Detail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
