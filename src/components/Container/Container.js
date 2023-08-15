import React, { useState } from 'react'
import Header from '../Header/Header'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Works from '../../pages/Works/Works'
import Contact from '../../pages/Contact/Contact'
import Resume from '../../pages/Resume/Resume'
import Footer from '../Footer/Footer'

const Container = () => {
    const [nav, setNav] = useState('home')
    const[isRotated, setIsRotated] = useState(true)
    const [works, setWorks] = useState('')

    function render() {
        if (nav === 'home') {
            return <Home/>
        } else if (nav === 'about') {
            return <About setNav={setNav}/>
        } else if (nav === 'works') {
            return <Works/>
        } else if (nav === 'contact') {
            return <Contact setNav={setNav}/>
        } else if (nav === 'resume') {
            return <Resume/>
        }        
    }

  return (
    <>
        <Header nav={nav} setNav={setNav} setIsRotated={setIsRotated} isRotated={isRotated}/>
        <main>
            {render()}
        </main>
        <Footer/>

    </>
  )
}

export default Container