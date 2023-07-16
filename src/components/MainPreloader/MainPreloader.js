import React, { useEffect, useRef, useState } from 'react'
import '../MainPreloader/main-preloader.scss'
import { motion } from 'framer-motion'

const MainPreloader = ({preloader, setPreloader}) => {
  const [calculation, setCalculation] = useState(0)
  const [timer, setTimer] = useState(13)
  const preloaderSection = useRef(null)

  useEffect(function() {
    function loading() {
      setTimer(timer - 1)
    }

    setInterval(loading, 1000)

    if (timer === 0) {
      clearInterval(loading)
      setPreloader(false)
    }
  }, [timer])

  const loaderVariant = {
    starting: {
      y: -300,
      opacity: 1
    },

    animate: {
      y: 300,
      ease: 'easeInOut'
    }
  } 

  // variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 6, duration: 2 }} [0.22, 1, .36, 1]

  return (
    <motion.div className='preloader-section'>
      <motion.div className='preloader-cover' initial={{ height: 0 }} animate={{ height: '100%', ease: 'easeInOut' }} transition={{ delay: 11.8, duration: .7 }}></motion.div>
      <ul>
          <div className='loader-num'>
            <motion.li  variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: .5, duration: 3 }}>0</motion.li>
            <motion.li  variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: .4, duration: 3.5 }}>0</motion.li>
          </div>   
          <div className='loader-num'>
            <motion.li variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 1.6, duration: 3.5 }}>1</motion.li>
            <motion.li variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 1.7, duration: 3.1 }}>2</motion.li>
          </div>   
          <div className='loader-num'>
            <motion.li variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 3.55, duration: 3.8 }}>3</motion.li>
            <motion.li variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 3.6, duration: 3.4 }}>4</motion.li>
          </div>   
          <div className='loader-num'>
            <motion.li variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 5.5, duration: 3.3 }}>6</motion.li>
            <motion.li variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 5.5, duration: 3.7 }}>5</motion.li>
          </div>   
          <div className='loader-num'>
            <motion.li variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 7.5, duration: 3.4 }}>8</motion.li>
            <motion.li variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 7.5, duration: 3.2 }}>3</motion.li>
          </div>      
          <div className='loader-num'>
            <motion.li initial={{y : -300}} animate={{ y : 0, ease: 'ease'}} transition={{ delay: 9, duration: 2 }}>1</motion.li>
            <motion.li initial={{y : -300}} animate={{ y : 0, ease: 'ease'}} transition={{ delay: 9, duration: 2.5 }}>0</motion.li>
            <motion.li initial={{y : -300}} animate={{ y : 0, ease: 'ease'}} transition={{ delay: 9, duration: 2.1 }}>0</motion.li>
          </div>   
          <div>
            <li>%</li>
          </div>
          
        </ul>
    </motion.div>
  )
}

export default MainPreloader