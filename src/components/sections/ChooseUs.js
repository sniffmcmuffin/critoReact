import React from 'react'

import img_amyhirschi from '../../assets/images/amy-hirschi.png'
import img_greysquare from '../../assets/images/grey-square.png'

const ChooseUs = () => {
    return (
        <section className="choose-us">
            <div className="container">
                <div className="section-title">
                    <div className="choose-left">
                        <p id="p-2">Why Choose Us</p>
                        <h2>Why We Are The Best Business Consulting Agency</h2>
                        <div className="down-content">
                            <div className="table d-flex">
                                <div className="icon"><i className="fa-regular fa-thumbs-up fa-2xl"></i></div>
                                <div>
                                    <h3>Process excellence</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur</p>
                                </div>
                            </div>
                            <div className="table d-flex">
                                <div className="icon"><i className="fa-brands fa-codepen fa-2xl"></i></div>
                                <div>
                                    <h3>Strategic planning</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur</p>
                                </div>
                            </div>
                            <div className="table d-flex">
                                <div className="icon"><i className="fa-solid fa-scale-balanced fa-2xl"></i></div>
                                <div>
                                    <h3>Experience design</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur</p>
                                </div>
                            </div>
                            <div className="table d-flex">
                                <div className="icon"><i className="fa-solid fa-head-side-virus fa-2xl"></i></div>
                                <div>
                                    <h3>Artificial Inteligence</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-right">
                    <div className="image-1">
                        <img src={img_amyhirschi} alt="Image of 2 women discussing" />
                    </div>
                    <div className="image-2">
                        <img src={img_greysquare} />
                    </div>
                </div>
            </div>
        {/* </div> */}
        </section>
  )
}

export default ChooseUs