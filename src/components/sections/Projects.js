import React from 'react'

import img_article1 from '../../assets/images/article-image1.png'
import img_article2 from '../../assets/images/article-image2.png'
import img_article3 from '../../assets/images/article-image3.png'
import img_article4 from '../../assets/images/article-image4.png'

const Projects = () => {
    return (
        <section className="project-and-case">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let's Look at Our Global Projects</h2>
                </div>
                <div className="project-and-cases">
                    <article>
                        <img src={img_article1} alt="Hands holding a business paper" />
                            <h3>Grow your business</h3>
                            <a href="#">Read More <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    </article>
                    <article>
                        <img src={img_article2} alt="Pink Apple products" />
                            <h3>Why your client needs a responsive website</h3>
                            <a href="#">Read More <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    </article>
                    <article>
                        <img src={img_article3} alt="Desk with office supplies" />
                            <h3>Educate your employees to get better results</h3>
                            <a href="#">Read More <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    </article>
                    <article>
                        <img src={img_article4} alt="Laptop with Business Intelligence Insights" />
                            <h3>Business Insights is a important piece of your business</h3>
                            <a href="#">Read More <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    </article>
                </div>
                <div className="center-content">
                    <a className="btn-black" href="projects.html">All Recent Projects <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                </div>
            </div>
        </section>

    )
}

export default Projects