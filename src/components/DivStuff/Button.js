import React from 'react'

const button = ({text, url}) => {
  return (
    <a class="btn-yellow" href={url}>
        {text}
         <i class="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
  )
}

export default button