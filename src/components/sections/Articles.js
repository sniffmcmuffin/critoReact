import React from 'react'

import img_dot_grey from '../../assets/images/dot-grey.png'
import img_dot_black from '../../assets/images/dot-black.png'
import img_mars from '../../assets/images/mars.png'
import img_mars2 from '../../assets/images/mars2.png'
import img_mars3 from '../../assets/images/mars3.png'
import img_linkedin from '../../assets/images/linkedin.jpg'
import img_emeliiano from '../../assets/images/emiliano.jpg'
import img_kobu from '../../assets/images/kobu.jpg'


const Articles = () => {
    return (
        <section className="article-news">
            <div className="container">
                <div className="section-title">
                    <p>Article & News</p>
                    <div className="right-content">
                        <h2>Get Every Single Articles & News</h2>
                        <a className="btn-transparent" href="#">Browse Articles <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    </div>
                </div>
                <div className="services">
                    <div className="box">
                        <img src={img_linkedin} style={{ width: '420px', height: '230px' }} alt="25 mars" />
                        <div className="image">
                            <img src={img_mars} alt="Image of a calender date" />
                        </div>
                        <p>Business</p>
                        <h3>How To Use Digitalization<br /> In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div className="box">
                        <img src={img_emeliiano} style={{ width: '420px', height: '230px' }} alt="17 mars" />
                        <div className="image">
                            <img src={img_mars2} alt="Image of a calender date" />
                        </div>
                        <p>Business</p>
                        <h3>How To Implement Chat GPT<br /> In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div className="box">
                        <img src={img_kobu} style={{ width: '420px', height: '230px' }} alt="13 mars" />
                        <div className="image">
                            <img src={img_mars3} alt="Image of a calender date" />
                        </div>
                        <p>Business</p>
                        <h3>The Guide To Support<br /> Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="center-content">
                    <img src={img_dot_grey} />
                    <img src={img_dot_black} />
                    <img src={img_dot_grey} />
                    <img src={img_dot_grey} />
                    <img src={img_dot_grey} />
                    <img src={img_dot_grey} />
                </div>

            </div>
        </section >   
  )
}

export default Articles