import React from 'react'

const Button = ({ text, url }) => {
  return (
    <a className="btn-yellow" href={url}>
        {text}
        <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
                 
  )
}

export default Button