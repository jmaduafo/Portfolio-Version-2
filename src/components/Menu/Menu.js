import React from 'react'
import '../Menu/menu.scss'
import menuImage from '../../assets/images/portfolio-image2.png'
import { motion } from 'framer-motion'

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
                    {nav === 'home' ? <motion.img initial={{ opacity: isRotated ? 1 : 0 }} animate={{ opacity:  isRotated ? 0 : 1 }} transition={{ duration: .6, ease: 'easeInOut', delay: 1}} src={menuImage} alt='spinning menu selector'/> : ''}
                </div>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>About</li>
                    {nav === 'about' ? <motion.img initial={{ opacity: isRotated ? 1 : 0 }} animate={{ opacity:  isRotated ? 0 : 1 }} transition={{ duration: .6, ease: 'easeInOut', delay: 1}} src={menuImage} alt='spinning menu selector'/> : ''}
                </div>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>Works</li>
                    {nav === 'works' ? <motion.img initial={{ opacity: isRotated ? 1 : 0 }} animate={{ opacity:  isRotated ? 0 : 1 }} transition={{ duration: .6, ease: 'easeInOut', delay: 1}} src={menuImage} alt='spinning menu selector'/> : ''}
                </div>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>Contact</li>
                    {nav === 'contact' ? <motion.img initial={{ opacity: isRotated ? 1 : 0 }} animate={{ opacity:  isRotated ? 0 : 1 }} transition={{ duration: .6, ease: 'easeInOut', delay: 1}} src={menuImage} alt='spinning menu selector'/> : ''}
                </div>
                <div>
                    <li className={isRotated ? 'fall' : 'rise'} onClick={getTitle}>Resume</li>
                    {nav === 'resume' ? <motion.img initial={{ opacity: isRotated ? 1 : 0 }} animate={{ opacity:  isRotated ? 0 : 1 }} transition={{ duration: .6, ease: 'easeInOut', delay: 1}} src={menuImage} alt='spinning menu selector'/> : ''}
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Menu