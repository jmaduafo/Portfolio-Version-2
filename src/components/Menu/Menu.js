import React from 'react'
import '../Menu/menu.scss'

const Menu = (prop) => {
  return (
    <div className={prop.isRotated ? 'menu-container' : 'menu-container enter'}>
        <div className='display-links'>
            <ul>
                <div>
                    <li><span>Home</span></li>
                </div>
                <div>
                    <li><span>About</span></li>
                </div>
                <div>
                    <li><span>Works</span></li>
                </div>
                <div>
                    <li><span>Contact</span></li>
                </div>
            </ul>
        </div>
        <div className='display-socials'>
            {/* <a href='https://github.com/jmaduafo' rel='noreferrer' target='_blank'><i className='bx bxl-github bx-sm'></i></a>
            <a href='https://www.instagram.com/jazzimanian_devil/' rel='noreferrer' target='_blank'><i className='bx bxl-instagram-alt bx-sm'></i></a>
            <a href='https://www.linkedin.com/in/jasmine-maduafokwa-48070a180/' rel='noreferrer' target='_blank'><i className='bx bxl-linkedin-square bx-sm' ></i></a> */}
        </div>
    </div>
  )
}

export default Menu