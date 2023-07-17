import React, { useState } from 'react'
import PortfolioCarousel from '../../components/PortfolioCarousel/PortfolioCarousel'
import '../Contact/contact.scss'

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [approvedMessage, setApprovedMessage] = useState('')

  const [contactApproved, setContactApproved] = useState(false);
  const [emailApproved, setEmailApproved] = useState(false);
  const [nameApproved, setNameApproved] = useState(false);
  const [messageApproved, setMessageApproved] = useState(false);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  function mouseHandling() {
    if (name === '' || email === '' || message === '') {
      setErrorMessage('This field is required')
    } else {
      setErrorMessage('')
    }

  }

  function handleSubmit(e) {
    e.preventDefault();

    if  (name === '' || email === '' || message === '' ) {
      setContactApproved(false)
      setErrorMessage('All entries must be filled out')
    } 

    if (name.length) {
      setNameApproved(true)
    } else (
      setNameApproved(false)
    )

    if (message.length) {
      setMessageApproved(true)
    } else (
      setMessageApproved(false)
    )

    let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ 

    if (regex.test(email)) {
      setEmailApproved(true)
    } else (
      setEmailApproved(false)
    )

    if (errorMessage === '' && nameApproved && emailApproved && messageApproved) {
      setContactApproved(true)
      setApprovedMessage('Your message has been submitted successfully!')
      console.log(name, email, message)
      setName('');
      setEmail('');
      setMessage('');
    }
    
  }

  return (
    <section>
      <div className='main-section contact-section'>
        <div className='contact-content'>
          <div className='form-content'>
            <form className='form-data' onSubmit={handleSubmit} action={contactApproved === true ? "mailto:wsat1616@gmail.com" : ''} method="post" enctype="text/plain" >
              <input type='text' placeholder='Name' value={name} onMouseLeave={mouseHandling} onChange={(e) => setName(e.target.value)}/>
              <input type='email' placeholder='Email' value={email} onMouseLeave={mouseHandling} onChange={(e) => setEmail(e.target.value)}/>
              <textarea placeholder='Send a message...' rows={6} value={message} onMouseLeave={mouseHandling} onChange={(e) => setMessage(e.target.value)}></textarea>
              <div className={contactApproved === true ? 'warning approved' : 'warning error'}>
                <p>{contactApproved ? approvedMessage : errorMessage}</p>
              </div>
              <div className='navigate form-submit'>
                <div className='navigate-btn form-btn'>
                  <button type='submit'>SUBMIT</button>
                  <i className='bx bx-right-arrow-alt' ></i>
                </div>
              </div>
            </form>
          </div>
          <div className='hit-my-line'>
            <div className='top-hit'>
              <h1>Hit My Line!</h1>
              <div className='availability'>
                <p><span>&#9679;</span>Currently available for hybrid/remote positions</p>
              </div>
              <p id='based'>Based in the U.S.</p>
            </div>
            <div className='bottom-hit'>
              <div className='info'>
                <i className='bx bxs-envelope'></i>
                <p>jmaduafokwa@hotmail.com</p>
              </div>
              <div className='info'>
                <i className='bx bxs-map' ></i>
                <p>Anywhere</p>
              </div>
            </div>
            

          </div>
        </div>
      </div>
      <PortfolioCarousel title='contact'/>
    </section>
  )
}

export default Contact