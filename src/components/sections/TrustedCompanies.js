import React from 'react'

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
            <div className="container">
                 <div className="grid-container">
                    <div className="grid-item">
                        <div className="section-title">
                            <p>Features</p> 
                            <h2>Our Accounting is trusted by thousand of companies</h2> 
                          </div>
                    </div>
                    <div className="grid-item-2"> 
                        <i className="fa-solid fa-handshake fa-2xl"></i> 
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="grid-item-2">
                        <i className="fa-regular fa-lightbulb fa-2xl"></i>
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>  
                    <div className="grid-item">
                        <div className="center-content">
                            <a className="btn-yellow" href="projects.html">Learn More <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                        </div>  
                    </div>
                    <div className="grid-item-2">   
                        <i className="fa-solid fa-money-bill-trend-up fa-2xl"></i>
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="grid-item-2">
                        <i className="fa-solid fa-money-bill-trend-up fa-2xl"></i>
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>  
                </div>
            </div>
        </section> 
  )
}

export default TrustedCompanies