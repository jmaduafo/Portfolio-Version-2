import React, { useState } from 'react'
import '../Navbar/navbar.scss'
import Menu from '../Menu/Menu'

const Navbar = () => {
  const[isRotated, setIsRotated] = useState(true)
  const [count, setCount] = useState(0)

  const rotateButton = () => {
    setIsRotated(!isRotated)
  }

  return (
    <>
    <nav>
      <div className='navbar'>
        <div className='navbar-logo'>
          <h3>JM</h3>
        </div>
        <div className={isRotated === true ? 'nav-links cross' : 'nav-links cancel'} onClick={rotateButton}>
          
          <i className='bx bx-x bx-lg'></i>
        </div>
      </div>
    </nav>
    <section>
        <Menu isRotated={isRotated} setIsRotated={setIsRotated}/>
    </section>
    </>
  )
}

export default Navbar