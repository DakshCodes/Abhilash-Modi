import React from 'react'
import Header from './Component/Header/Header'
import Impact from './pages/Imapct/Impact'
import Landing from './pages/Landing/Landing'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/impact' element={<Impact />} />
      </Routes>

    </>
  )
}

export default App
