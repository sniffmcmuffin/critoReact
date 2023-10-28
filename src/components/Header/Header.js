import './Header.css'
import React from 'react'

import NavigeringSection from '../NavSection/NavigeringSection'
import ShowcaseSection from '../ShowCaseSection/ShowcaseSection'
import img_backgroundlines from '../../assets/images/background-lines.svg'

const Header = () => {
    return (
        <header>            
            {/* <img className="background-lines" src={img_backgroundlines} alt=".."/> */}
            <NavigeringSection />
            <ShowcaseSection />
        </header>
    )
}

export default Header