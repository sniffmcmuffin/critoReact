import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import img_backgroundlines from '../../assets/images/background-lines.svg'
import img_logotype from '../../assets/images/logotype.svg'
import Button from '../divstuff/button'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [btnClasses, setBtnClasses] = useState('btn-menu')

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setBtnClasses(!showMenu ? 'btn-meny active' : 'btn-menu')

    }
    return (
        <header>
            <div className="container">
                <Link to="/"><img src={img_logotype} alt="Crito logo" /></Link>

                <div className="mobMenu">
                    <button className={btnClasses} onClick={toggleMenu}><i className="fa-solid fa-bars"></i></button>
                    {showMenu && (
                        <nav>
                            <ul>                           
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/news">News</NavLink></li>
                                <li><NavLink to="/contacts">Contacts</NavLink></li>
                            </ul>
                        </nav>
                    )}
                </div>

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
                        <a><NavLink to="/">Home</NavLink></a>
                                <a><NavLink to="/services">Services</NavLink></a>
                                <a><NavLink to="/news">News</NavLink></a>
                                <a><NavLink to="/contacts">Contacts</NavLink></a>
                        </nav>
                        <Button type="yellow" text="Login" url="login" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header