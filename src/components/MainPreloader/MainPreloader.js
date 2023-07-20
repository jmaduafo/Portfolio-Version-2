import React, { useEffect, useRef, useState } from 'react'
import '../MainPreloader/main-preloader.scss'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const MainPreloader = ({setPreloader}) => {
  const [timer, setTimer] = useState(12)

  let intervalRef = useRef();
  

  useEffect(function() {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(function() {
    
    if (timer === 0) {
      clearInterval(intervalRef.current)
      setPreloader(false)
    }
  }, [timer, setPreloader])


  // variants={loaderVariant} initial="starting" animate='animate' transition={{ delay: 6, duration: 2 }} [0.22, 1, .36, 1]

  return (
    <motion.div className='preloader-section'>
      <motion.div className='preloader-cover' initial={{ height: 0 }} animate={{ height: '100%', ease: 'easeInOut' }} transition={{ delay: 10.9, duration: .7 }}></motion.div>
      <div className='loader-num'>
        <div>
          <CountUp start={0} end={100} duration={13.2} delay={.7} className='count-up'/>
        </div>
        <div>
          <p>%</p>
        </div>
        
      </div>
      
         
      {/* <ul>
          
          {/* <div className='loader-num'>
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
          </div>    */}          
        
        
    </motion.div>
  )
}

export default MainPreloader