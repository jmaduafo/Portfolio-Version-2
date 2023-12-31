import React, {useState} from 'react'
import PortfolioCarousel from '../../components/PortfolioCarousel/PortfolioCarousel'
import '../About/about.scss'
import aboutImage from '../../assets/images/pixie5.jpg'
import aboutImage2 from '../../assets/images/tan-jm.png'
import animeImage from '../../assets/images/anime-image.jpg'
import netflixImage from '../../assets/images/netflix-image1.jpg'
import musicImage from '../../assets/images/music-image1.jpg'

import worksImage1 from '../../assets/images/landon16.jpg'
import worksImage2 from '../../assets/images/work-about.jpg'
import { motion } from 'framer-motion'

const About = ({setNav}) => {
  const [music, setMusic] = useState(false)
  const [anime, setAnime] = useState(false)
  const [netflix, setNetflix] = useState(false)

  return (
    
      <section>
        <div className='main-section about-section'>
          <div className='about-content'>
            <div className='about-main-intro'>
              <div className='about-main-image'>
                <img src={aboutImage} alt='portrait selfie of Jasmine'></img>
                <div className='about-spin-image'>
                  <img src={aboutImage2} alt='spinning radial text'></img>
                </div>
              </div>
              <div className='about-main-text'>
                <div className='top-text'>
                  <div>
                    <p>I’m a Nigerian-American specializing in both frontend and backend development as well as design. My dream to become a web developer began during COVID, and since then, I’ve been juggling completing my bachelors in science and sneaking in coding and design practice when possible. </p>
                  </div>
                  <div>
                  <h4>Keep your dreams alive. Understand to achieve anything requires faith in yourself, vision, hard work, and dedication.</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='about-main-desc-images'>
              <div className='about-main-desc'>
                <h2>When I’m not busy coding, I also enjoy listening to <span id='music' onMouseEnter={() => setMusic(true)} onMouseLeave={() => setMusic(false)}>music</span>, watching <span id='anime' onMouseEnter={() => setAnime(true)} onMouseLeave={() => setAnime(false)}>anime</span>, and searching for the next show or movie on <span id='netflix' onMouseEnter={() => setNetflix(true)} onMouseLeave={() => setNetflix(false)}>Netflix</span> to binge while lazing on my bed.</h2>
              </div>
              <div className='about-desc-images'>
                <div className='desc-image music-image'>
                  <motion.img initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: music ? '15deg' : 0,  opacity: music ? 1 : 0}} src={musicImage} alt=''/>
                </div>
                <div className='desc-image anime-image'>
                  <motion.img initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: anime ? '-20deg' : 0,  opacity: anime ? 1 : 0}} src={animeImage} alt=''/>
                </div>
                <div className='desc-image netflix-image'>
                  <motion.img initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: netflix ? '-10deg' : 0,  opacity: netflix ? 1 : 0}} src={netflixImage} alt=''/>
                </div>
              </div>
            </div>
            <div className='about-works'>
              <div className='about-works-left'>
                <p>I don't just want to design websites. I also want to code them from scratch with the goal of making them accessible to all users by utilizing fundamental UX principles. In my works, I showcase skills and knowledge in UI/UX, frontend, and backend.</p>
                {/* <h3>Discover More</h3> */}
                <div className='about-work-image about-work-left-image'>
                  <img src={worksImage1} alt='sleek teal and gold office space with blue suede chair' />
                </div>
              </div>
              <div className='about-works-right'>
                <div className='about-work-image about-work-right-image'>
                  <img src={worksImage2} alt='captivating sight of Japan' />
                </div>
                <div className='navigate'>
                  <div className='navigate-btn'>
                    <button onClick={() => setNav('works')}>View Works</button>
                    <i className='bx bx-right-arrow-alt' ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <PortfolioCarousel title='about'/>
      </section>      
   
  )
}

export default About