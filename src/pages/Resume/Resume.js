import React, { useState, useEffect } from 'react'
import PortfolioCarousel from '../../components/PortfolioCarousel/PortfolioCarousel'
import skillsData from '../../utils/skillsData'
import '../Resume/resume.scss'
import { motion } from 'framer-motion'
import resume from '../../utils/jasmine resume.pdf'

const Resume = () => {
  const [skillsFilter, setSkillsFilter] = useState()
  const [selected, setSelected] = useState('frontend')

  useEffect(function() {
    if (skillsData) {
      setSkillsFilter(skillsData.filter(skill => {
        return skill.category === selected
      }))
    } else {
     console.log('loading...')
    }
     
  }, [selected])

  if (!skillsData) <p>Loading...</p>
  
  return (
    <section>
      <div className='main-section resume-section'>
        <div className='resume-download-with-skill-select'>
          <h2>Skills</h2>
          <div className='resume-download'>
            <div className='navigate'>
              <div className='navigate-btn'>
                <a href={resume} download><button>Download Resume</button></a>
                <i className='bx bx-right-arrow-alt bx-sm'></i>
              </div>
            </div>
          </div>
          <div className='skill-select'>
            <div className='select frontend-select' onClick={() => setSelected('frontend')} >
              <p style={{ textDecoration: selected === 'frontend' ? 'underline' : '' }}>Frontend</p>
            </div>
            <div className='select backend-select' onClick={() => setSelected('backend')} >
              <p style={{ textDecoration: selected === 'backend' ? 'underline' : '' }}>Backend</p>
            </div>
            <div className='select other-select' onClick={() => setSelected('other')} >
              <p style={{ textDecoration: selected === 'other' ? 'underline' : '' }}>Other</p>
            </div>
          </div>
        </div>
        <div className='skills-render'>
          {skillsFilter?.map(skill => {
            if (skill !== undefined) {
              return (<motion.div initial={{opacity: 0, ease: 'ease'}} animate={{ opacity: 1, ease: 'ease'}} transition={{ duration: 1.2 }} key={skill.id}><p>{skill.language}</p></motion.div>)
            }
          })}
        </div>
     
      </div>
        <PortfolioCarousel title='resume'/>
    </section>
  )
}

export default Resume