import React from 'react'
import Button from '../divstuff/button'
import img_backgroundlines from '../../assets/images/background-lines.svg'
import img_showcase from '../../assets/images/showcase-image.svg'

const ShowCase = () => {
  return (
    <section className="showcase">
    <div className="container">
        <div className="content">
            <img src={img_backgroundlines} alt="Wavey lines" className="background-lines" />
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
            <a className="btn-transparent" href="services.html">Learn More <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
        </div>

        <img src={img_showcase} alt="Image of a man in a suit with a tablet" className="tablet-guy" />
       
        </div>
    </section>
   
  )
}

export default ShowCase