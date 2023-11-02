import React from 'react'
import ServiceBox from '../divstuff/ServiceBox'
import Button from '../divstuff/button'

const OurServices = () => {

    const service = [
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/BusinessAdvice" },
        { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/StartupBusines" },
        { title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/Services/FinancialAdvice" },
        { title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/Services/RiskManagement" }
    ]

    return (
        <section className="our-services">
            <div className="container">
                <div className="section-title">
                    <p>Our Services</p>
                    <h2>We Provide The Best
                        Service For Consulting</h2>
                </div>
                <div className="services">
                {
                    service.map((service, index) => (
                    <ServiceBox key={index} title={service.title} description={service.description} url={service.url} />
                    ))
                }
                </div>
                <br />
                <br />
                <div className="center-content d-flex">
                    <div>
                        <Button type="transparent" text="Browse Services" url="/services" />
                        {/* <a className="btn-transparent" href="services.html">Browse Services <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a> */}
                    </div>
                </div>
            </div>
            <img src="images/background-lines-right.svg" alt="Wavey lines" className="background-lines2" />
        </section>
    )
}

export default OurServices