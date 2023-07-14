import React from 'react'
import PortfolioCarousel from '../../components/PortfolioCarousel/PortfolioCarousel'
import '../Contact/contact.scss'

const Contact = () => {
  return (
    <section>
      <div className='main-section contact-section'>
        <div className='contact-content'>
          <div className='form-content'>
            <form className='form-data'>
              <input type='text' placeholder='Name'/>
              <input type='email' placeholder='Email'/>
              <textarea placeholder='Message' rows={6}></textarea>
              <div className='navigate form-submit'>
                  <div className='navigate-btn form-btn'>
                    <button type='submit'>SUBMIT</button>
                    <i className='bx bx-right-arrow-alt' ></i>
                  </div>
              </div>
            </form>
          </div>
          <div className='hit-my-line'>
            <h1>Hit My Line!</h1>
            <p id='based'>Based in the U.S.</p>
            <div className='availability'>
              <p>Currently available for remote positions</p>
            </div>
          </div>
        </div>
      </div>
      <PortfolioCarousel title='contact'/>
    </section>
  )
}

export default Contact