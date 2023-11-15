import React from 'react'

import img_paperz from '../../assets/images/paperz.svg'
import img_dorfus from '../../assets/images/dorfus.svg'
import img_martino from '../../assets/images/martino.svg'
import img_square from '../../assets/images/square.svg'
import img_gobona from '../../assets/images/gobona.svg'

const Logotypes = () => {
  return (
    <section className="container grid-1 w-100">
    <div className="parent">
        <div className="child">
            <img src={img_paperz} alt="Image of Leading Image Company Logo" />
        </div>
        <div className="child">
            <img src={img_dorfus} alt="Image of Dorfus Logo" />
        </div>
        <div className="child">
            <img src={img_martino} alt="Image of Martino Logo" />
        </div>
        <div className="child">
            <img src={img_square} alt="Image of Square Logo" />
        </div>
        <div className="child">
            <img src={img_gobona} alt="Image of Gobona Logo" />
        </div>
    </div>
    </section>
  )
}

export default Logotypes