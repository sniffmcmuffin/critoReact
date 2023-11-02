import React from 'react'

const ServiceBox = ({title, description,  url}) => {
  return (
      <div className="box">
          <div className="line-short"></div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="circle-hack">
              <a className="btn-round" href={url}><i className="fa-solid fa-arrow-right-long fa-2xl"></i></a>
          </div>
      </div>
  )
}

export default ServiceBox