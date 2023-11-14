import React, { useEffect } from 'react'
import Header from './Component/Header/Header'
import Impact from './pages/Imapct/Impact'
import Landing from './pages/Landing/Landing'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './Component/Footer/Footer'


function App() {


  const navigate = useNavigate()



 
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }

    )()
    navigate('/')
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/impact' element={<Impact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
