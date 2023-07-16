import React from 'react'
import '../Menu/menu.scss'

const Menu = ({isRotated, setIsRotated, nav, setNav}) => {
    function getTitle(e) {
        // Get the text of the nav button clicked
        setNav(e.target.innerText.toLowerCase())
        // After nav is clicked, close the menu to show rendered section
        setIsRotated(true)
    }

  return (
    // Animation of menu container when nav button is clicked and closed
    <div className={isRotated  ? 'menu-container' : 'menu-container enter'}>
        <div className='display-links'>
            <ul>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>Home</li>
                </div>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>About</li>
                </div>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>Works</li>
                </div>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>Contact</li>
                </div>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>Resume</li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Menu