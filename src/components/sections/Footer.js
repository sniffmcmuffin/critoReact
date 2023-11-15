import React from 'react'
import {Link} from 'react-router-dom'
import img_LogotypeWhite from '../../assets/images/logotype-white.svg'
import img_BackgroundLinesWhiteRight from '../../assets/images/background-lines-white-right.svg'

const Footer = () => {
  return (
    <footer className="text-lg-start">
    <div className="container p-4 pb-0">
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <div className="logga">
                    <Link to="/"><img src={img_LogotypeWhite} /></Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates!
                        Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                    </p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <div className="spacing">
                    <h3>Company</h3>
                    <p>
                    <ul className="list-unstyled mb-0">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                    </p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <div className="spacing">
                    <h3>Help</h3>
                    <p>
                    <ul className="list-unstyled mb-0">
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">Delivery Details</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    </p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <div className="spacing">
                    <h3>Resources</h3>
                    <p>
                    <ul className="list-unstyled mb-0">
                        <li><a href="#">Free eBooks</a></li>
                        <li><a href="#">Development Tutorial</a></li>
                        <li><a href="#">How to - Blog</a></li>
                        <li><a href="#">Youtube Playlist</a></li>
                    </ul>
                    </p>
                </div>
            </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <div className="spacing">
                    <h3>Link</h3>
                    <ul className="list-unstyled mb-0">
                        <p>
                            <li><a href="#">Free eBooks</a></li>
                            <li><a href="#">Development Tutorial</a></li>
                            <li><a href="#">How to - Blog</a></li>
                            <li><a href="#">Youtube Playlist</a></li>
                        </p>
                    </ul>
                </div>
            </div>
        </div> 
        <div className="streck"> </div> 
        <section className="mb-4">
            <div className="bottom-footer">
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </section>
    </div>
    <img src={img_BackgroundLinesWhiteRight} alt="Wavey lines" className="background-lines4" />  
</footer>
  )
}

export default Footer