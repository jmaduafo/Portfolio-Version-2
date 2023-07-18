import React from 'react'
import '../Navbar/navbar.scss'
import Menu from '../Menu/Menu'

const Navbar = ({nav, setNav, isRotated, setIsRotated}) => {

  const rotateButton = () => {
    setIsRotated(!isRotated)
  }

  const logoClick = () => {
    setNav('home');
  }

  return (
    <>
    <nav>
      <div className='navbar'>
        <div className='navbar-logo' onClick={logoClick}>
          <h3>JM</h3>
        </div>
        {/* If the rotation is set to true, show the nav menu as a 'cross' and if false, display nav as an 'x'*/}
        <div className={isRotated === true ? 'nav-links cross' : 'nav-links cancel'} onClick={rotateButton}>
          <i className='bx bx-x bx-lg'></i>
        </div>
      </div>
    </nav>
    {/* The full nav menu  */}
    <section>
        <Menu isRotated={isRotated} setIsRotated={setIsRotated} nav={nav} setNav={setNav}/>
    </section>
    </>
  )
}

export default Navbar