import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Header/header.scss'

const Header = ({nav, setNav, setIsRotated, isRotated}) => {
  return (
    <header>
        <Navbar nav={nav} setNav={setNav} setIsRotated={setIsRotated} isRotated={isRotated}/>
    </header>
  )
}

export default Header