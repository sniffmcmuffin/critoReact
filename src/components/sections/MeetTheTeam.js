import React from 'react'

import img_kristine from '../../assets/images/kristine.jpg'
import img_mark from '../../assets/images/mark.jpg'
import img_kimberly from '../../assets/images/kimberly.jpg'
import img_justin from '../../assets/images/justin.png'
import img_dot_grey from '../../assets/images/dot-grey.png'
import img_dot_black from '../../assets/images/dot-black.png'

const MeetTheTeam = () => {
    return (
        <section className="meet-the-team">
            <div className="container">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <div className="right-content">
                        <h2>Experience Team Members</h2>
                        <a className="btn-transparent" href="services.html">Browse Services <i
                            className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    </div>
                </div>
                <div className="services">
                    <div className="box">
                        <img src={img_kristine} style={{ width: '308px', height: '420px' }} alt="" />
                        <h3>Kristine Palmer</h3>
                        <p>Chief Operation Officer.</p>
                    </div>
                    <div className="box">
                        <img src={img_mark} style={{ width: '308px', height: '420px' }} alt="" />
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="box">
                        <img src={img_kimberly} style={{ width: '308px', height: '420px' }} alt="" />
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="box">
                        <img src={img_justin} style={{ width: '308px', height: '420px' }} alt="" />
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
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

                    <img_dot_grey />
                    <img_dot_black />
                    <img_dot_grey />
                    <img_dot_grey />
                    <img_dot_grey />
                    <img_dot_grey />
                </div>
            </div>
        </section >
    )
}

export default MeetTheTeam