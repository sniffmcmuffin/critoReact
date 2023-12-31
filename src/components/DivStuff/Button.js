import React from 'react'

const button = ({ type, text, url }) => {

  const getButtonClassName = () => {
    switch (type) {
      case 'yellow':
        return 'btn-yellow'
      case 'black':
        return 'btn-black'
      case 'transparent':
        return 'btn-transparent'
        default:
          return 'yellow'
    }
  }

  return (
    <a className={getButtonClassName()} href={url}>
      {text}
      <i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
  )
}

export default button