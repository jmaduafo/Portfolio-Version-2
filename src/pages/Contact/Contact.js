import React, { useState } from 'react'
import PortfolioCarousel from '../../components/PortfolioCarousel/PortfolioCarousel'
import '../Contact/contact.scss'
import Message from '../../components/Message/Message'

const Contact = ({setNav}) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [approvedMessage, setApprovedMessage] = useState('')

  const [contactApproved, setContactApproved] = useState(false);
  const [emailApproved, setEmailApproved] = useState(false);
  const [nameApproved, setNameApproved] = useState(false);
  const [messageApproved, setMessageApproved] = useState(false);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [mainMessage, setMainMessage] = useState('')
  
  function mouseHandling() {
    // When the mouse leaves the input or textarea box, if the values are empty, then log the 
    // error message below. If not, then no error should be logged
    if (name === '' || email === '' || message === '') {
      setErrorMessage('This field is required')
    } else {
      setErrorMessage('')
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // If either of the values are empty and the form has been submitted, log error below
    if  (name === '' || email === '' || message === '' ) {
      setContactApproved(false)
      setErrorMessage('All entries must be filled out')
    } 

    // Checks if the name input value is not empty. If it's not empty, then name is approved
    if (name.length) {
      setNameApproved(true)
    } else (
      setNameApproved(false)
    )

    // Checks if the message textarea value is not empty. If it's not empty, then message is approved
    if (message.length) {
      setMessageApproved(true)
    } else (
      setMessageApproved(false)
    )

    // Checks if the email matches with the regex. If it matches, then email is approved
    let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ 

    if (regex.test(email)) {
      setEmailApproved(true)
    } else (
      setEmailApproved(false)
    )

    // If all conditions are met with no error and all values in all fields are approved, then
    // the contact form is approved, the approved message is rendered, and all values are set back to
    // empty strings
    if (errorMessage === '' && nameApproved && emailApproved && messageApproved) {
      setContactApproved(true)
      setApprovedMessage('Your message has been submitted successfully!')
      window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : process.env.REACT_APP_USERNAME,
        Password : process.env.REACT_APP_PASSWORD,
        To : process.env.REACT_APP_USERNAME,
        From : email,
        Subject : "Jasmine's Portfolio Message",
        Body : `From: ${name}: ${message}`
    }).then(
      message => {
        setMainMessage(message)
      }
    ).catch(err => console.log(err))
      setName('');
      setEmail('');
      setMessage('');
    }  
  }



  return (
    <section>
      <div className='main-section contact-section'>
        {mainMessage === 'OK' ? <Message setNav={setNav} contactApproved={contactApproved} message='Your message has been sent to the receiver!'/> : <Message setNav={setNav} contactApproved={contactApproved} message={mainMessage}/>}
        <div className='contact-content'>
          <div className='form-content'>
            <form className='form-data' onSubmit={handleSubmit}>
              <input type='text' placeholder='Name' value={name} onMouseLeave={mouseHandling} onChange={(e) => setName(e.target.value)}/>
              <input type='email' placeholder='Email' value={email} onMouseLeave={mouseHandling} onChange={(e) => setEmail(e.target.value)}/>
              <textarea placeholder='Send a message...' rows={6} value={message} onMouseLeave={mouseHandling} onChange={(e) => setMessage(e.target.value)}></textarea>
              {/* Changes text color when error is logged (red) versus when form has no errors (cream) */}
              <div className={contactApproved === true ? 'warning approved' : 'warning error'}>
                {/* If there are no errors and all conditions are met, render approved message. If not, render error messages */}
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
              <h2>Hit My Line!</h2>
              <div className='availability'>
                <p><span>&#9679;</span>Currently available for hybrid / remote positions</p>
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
                <p>Houston, Texas</p>
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