import React from 'react'

import img_backgroundlines from '../../assets/images/background-lines.svg'
import img_logotype from '../../assets/images/logotype.svg'
import Button from '../divstuff/button'

const Header = () => {
  return (
    <header>
    <div className="container">
        <img src={img_logotype} alt="Crito logo" /> 
        <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
        <div className="menu">
            <div className="top-menu"> 
                <div className="contact-information">
                    <div className="content-box">
                         <i className="fa fa-phone" aria-hidden="true"></i> 
                        +46 (08) 121 570 50
                    </div>
                    <div className="content-box">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                       info@crito.com
                   </div> 
                   <div className="content-box last">
                    <i className="fa fa-map-marker"></i> 
                   Sveavägen 31, 111, STOCKHOLM
               </div> 
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className="main-menu" >
                <nav>
                    <a className="active" href="index.html">Home</a>
                    <a href="#">Service</a>
                    <a href="#">News</a>
                    <a href="contact.html">Contact</a>
                </nav>
                {/* <a className="btn-yellow btn-login" href="login.html">Login <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a> */}
                <Button text="Login" url="login"/>
            </div> 
        </div>
    </div>
</header>
  )
}

export default Header