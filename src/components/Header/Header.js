import './Header.css'
import React from 'react'

import NavigeringSection from '../NavSection/NavigeringSection'
import img_backgroundlines from '../../assets/images/background-lines.svg'

const Header = () => {
    return (
        <header>            
            {/* <img className="background-lines" src={img_backgroundlines} alt=".."/> */}
            <NavigeringSection />
     
        </header>
    )
}

export default Header