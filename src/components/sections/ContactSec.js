import React from 'react'

import img_BackgroundLines from '../../assets/images/background-lines.svg'
import img_Map from '../../assets/images/map.png'
import ContactForm from '../divstuff/ContactForm'


const ContactSec = () => {
  return (
    <>
    <section className="connect">
    <img src={img_BackgroundLines} alt="Wavey lines" className="bg-lines-contact" />

    <div className="lets-connect">
        <h1>Let's Connect</h1>
    </div>           
</section>
<section className="contact-info">
    <div className="container">
        <div className="bar">   
            <div className="icon"><i className="fa-solid fa-map-marker"></i></div>
            <div className="text">
                <h3>Visit us</h3>
                <p>Sveavägen 31<br />
                   111 34 STOCKHOLM</p>
            </div>
        </div>
        <div className="bar">
            <div className="icon"><i className="fa-solid fa-phone"></i></div>
            <div className="text">
                <h3>Call us</h3>
                <p>+46 (8) 121 470 50<br />
                   +46 (8) 121 470 50</p>
            </div>
          </div>
        <div className="bar">
            <div className="icon"><i className="fa-regular fa-envelope"></i></div>
            <div className="text">
                <h3>Email us</h3>
                <p>info@crito.com<br />
                   support@crito.com
                </p>
            </div>
          </div>
    </div>
</section>

<ContactForm />

<section className="map">
    <div className="row">
        <div className="col-12">
            <div className="map-wrapper">
                <img src={img_Map} alt="Image of a map with company location" />
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default ContactSec