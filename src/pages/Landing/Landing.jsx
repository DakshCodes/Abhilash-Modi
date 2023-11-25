import React, { useEffect } from 'react'
import Info from '../../Component/About/About'
import Effortless from '../../Component/Effortless'
import Featured from '../../Component/Featured/Featured'
import Hero from '../../Component/Hero/Hero'
import Journey from '../../Component/Journey/Journey'

const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // This line will scroll the window to the top
    }, [])
    return (
        <>
            <Hero />
            <Info />
            <Featured />
            <Journey />
        </>
    )
}

export default Landing
