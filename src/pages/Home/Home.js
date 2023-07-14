import React from 'react'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import '../Home/home.scss'
import homeImage from '../../assets/images/simpler-port2.jpg'
import homeImage2 from '../../assets/images/tan-jm.png'

const Home = () => {
  return (
    <section>
      <div className='main-section home-section'>
        <div className='home-images-display'>
          <div className='home-center-image-with-circle'>
              <div className='home-circle'>
                <img src={homeImage2} alt='radial text that spins'/>
              </div>  
              <div className='home-image'>
                <img src={homeImage} alt='hd green plant'/>
              </div>
          </div>
        </div>
        
        <div className='home-texts-content'>
          <div className='home-greeting-with-desc'>
            <div className='home-desc'>
              <div className='home-text'> 
                  <p>My dream to become a software developer began during COVID, and since then, I’ve been juggling completing my bachelors in science and sneaking in coding and design practice when possible.</p>
              </div>
            </div>
            <div className='home-greeting'>
              <div className='greeting'>
                <h3>I'm <span className='fancy'>Jasmine Maduafokwa</span></h3>
                <div className='home-text'> 
                  <p>a self-taught full stack developer with a deep passion for design and learning. I'm an innovative thinker seeking to use my mathematics background and design sense to create fully-functioning, eye-catching websites and apps created both independently and in team-based workspaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeCarousel/>
    </section>
  )
}

export default Home