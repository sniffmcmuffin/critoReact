import './ServicesSection.css'
import React from 'react'
import ServiceBox from '../DivStuff/ServiceBox'
import Button from '../DivStuff/Button'

const ServicesSection = () => {
  
    const services = [
        { title: "Business advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", link: "/services/businessadvice" },
        { title: "Startup business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", link: "/services/startups" },
        { title: "Financial advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", link: "/services/finacnialadvise" },
        { title: "Risk management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", link: "/services/riskmanagment" }
        ]
    
        return (

    
    <section className="our-services">
    <div className="container">
        <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best Service For Consulting</h2> 
            </div> 
        <div className="services">
           {
                services.map((service, index) => (
                    <ServiceBox key={index} title={service.title} description={service.description} link={service.link} />
                ))
            }
     
        </div>

        <div className="center-content d-flex">
            <div>
                <Button type="transparent" text="Browse Services" url="/services" />
            </div>    
        </div> 
   </div>      
    {/* <img src="images/background-lines-right.svg" alt="Wavey lines" className="background-lines2 />   */}
</section>
  )
}

export default ServicesSection