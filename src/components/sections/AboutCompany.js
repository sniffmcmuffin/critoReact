import React from 'react'

import img_daria from '../../assets/images/daria.png'
import img_quotes from '../../assets/images/quotes.png'

const AboutCompany = () => {
  return (
    <section className="about-company">
            <div className="container">              
                <div className="about-company-left">
                    <div className="image-1">
                       <img src={img_daria} alt="Image of a smiling woman holding a laptop" />
                    </div>
                    <div className="image-2">
                        <img src={img_quotes} alt="Image of a quote from the founder" />
                    </div>
                </div>
                <div className="about-company-right">
                    <p id="p-2">About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                      <br />
                      <br />
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                         <div className="bad-hack">
                    <a className="btn-black" href="services.html">Learn More <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    <a className="btn-round" href="#"><i className="fa-solid fa-play fa-sm"></i></a>
                 <div className="intro">Intro Video</div> 
                </div>                
            </div>
            </div>
        </section>
  )
}

export default AboutCompany