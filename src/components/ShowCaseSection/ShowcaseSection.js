import Button from '../DivStuff/Button'
import './ShowCaseSection.css'
import React from 'react'

const ShowcaseSection = () => {
    return (
        <section class="showcase">
            <div className="container">
                <div className="content">
                    {/* <img src="images/background-lines.svg" alt="Wavey lines" className="background-lines" /> */}
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button text="Get Consulting" url="/services/get-consulting" />
                    <Button text="Learn More" url="servuces/consulting" />

                    <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                    <a className="btn-transparent" href="services.html">Learn More <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                </div>
                <img src="images/showcase-image.svg" alt="Image of a man in a suit with a tablet" className="tablet-guy" />
            </div>
        </section>
    )
}

export default ShowcaseSection