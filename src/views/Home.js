import React from 'react'
import ShowCase from '../components/sections/ShowCase'
import Logotypes from '../components/sections/Logotypes'
import TrustedCompanies from '../components/sections/TrustedCompanies'
import AboutCompany from '../components/sections/AboutCompany'
import OurServices from '../components/sections/OurServices'
import ChooseUs from '../components/sections/ChooseUs'
import Projects from '../components/sections/Projects'
import MeetTheTeam from '../components/sections/MeetTheTeam'
import Testimonals from '../components/sections/Testimonals'
import Articles from '../components/sections/Articles'
import SignUp from '../components/sections/SignUp'

const Home = () => {
  return (
    <main>
   <ShowCase />
   <Logotypes />
   <TrustedCompanies />
   <AboutCompany />
   <OurServices />
   <ChooseUs />
   <Projects />
   <MeetTheTeam />
   <Testimonals />
   <Articles />
   <SignUp />
   </main>
  )
}

export default Home