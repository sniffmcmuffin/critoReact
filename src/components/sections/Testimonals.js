import React from 'react'

import img_star from '../../assets/images/star.png'
import img_cassandra from '../../assets/images/cassandra.png'
import img_amanda from '../../assets/images/amanda.png'
import img_jack from '../../assets/images/jack.png'

const Testimonals = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-title">
                    <p>Testimonial</p>
                    <h2>What Our Client Say</h2>
                </div>
                <div className="services">
                    <div className="box">
                        <div className="center-content">
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                            qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="table d-flex">
                            <img className="icon" src={img_cassandra} />
                            <div>
                                <h3>Cassandra Warren</h3>
                                <p>Business Manager, Dorfus</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="center-content">
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                            qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="table d-flex">
                            <img className="icon" src={img_amanda} />
                            <div>
                                <h3>Amanda Tulling</h3>
                                <p>Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="center-content">
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                            <img src={img_star} />
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                            qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="table d-flex">
                            <img className="icon" src={img_jack} />
                            <div>
                                <h3>Jack McDogglas</h3>
                                <p>Key Account Manager, Gobona</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="center-content">
                    <div>
                        <a className="btn-black" href="#">All Reviews <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonals