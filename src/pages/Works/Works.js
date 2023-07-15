import React from 'react'
import '../Works/works.scss'
import PortfolioCarousel from '../../components/PortfolioCarousel/PortfolioCarousel'
import selectedWorks from '../../utils/worksData';

const Works = () => {
  return (
    <section>
      <div className='main-section works-section'>
        <div className='works-content'>
            <div className='works-display'>
               {selectedWorks.map(works => {
                return(
                    <div key={works.id}>
                        <div className='works-image'>
                            <img src={works.image} alt={works.description}/>
                        </div>
                    </div>
                )
               })}
            </div>
        </div>
      </div>
        <PortfolioCarousel title='works'/>
    </section>
  )
}

export default Works