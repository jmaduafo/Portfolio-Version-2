import React from 'react'
import '../Footer/footer.scss'

const Footer = () => {
  return (
    <section>
      <div className='main-section footer-section'>
        <div className='footer-content'>
          <div className='copyright'>
            <p>Designed and Coded by Jasmine Maduafokwa &copy; Portfolio 2023 </p>
          </div>
          <div className='footer-socials'>
            <a href='https://github.com/jmaduafo' rel='noreferrer' target='_blank'><i className='bx bxl-github bx-sm'></i></a>
            <a href='https://www.instagram.com/jazzimanian_devil/' rel='noreferrer' target='_blank'><i className='bx bxl-instagram-alt bx-sm'></i></a>
            <a href='https://www.linkedin.com/in/jasmine-maduafokwa-48070a180/' rel='noreferrer' target='_blank'><i className='bx bxl-linkedin-square bx-sm' ></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer