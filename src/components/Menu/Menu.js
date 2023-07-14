import React, { useState } from 'react'
import '../Menu/menu.scss'

const Menu = (prop) => {
    const [title, setTitle] = useState('home')

    function getTitle(e) {
        setTitle(e.target.innerText.toLowerCase())
    }

  return (
    <div className={prop.isRotated  ? 'menu-container' : 'menu-container enter'}>
        <div className='display-links'>
            <ul>
                <div>
                    <li className={prop.isRotated ? 'fall' : 'rise'} onClick={getTitle}>Home</li>
                </div>
                <div>
                    <li className={prop.isRotated ? 'fall' : 'rise'} onClick={getTitle}>About</li>
                </div>
                <div>
                    <li className={prop.isRotated ? 'fall' : 'rise'} onClick={getTitle}>Works</li>
                </div>
                <div>
                    <li className={prop.isRotated ? 'fall' : 'rise'} onClick={getTitle}>Contact</li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Menu