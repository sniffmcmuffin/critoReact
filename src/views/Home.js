import React from 'react'
import Header from '../components/Header/Header'
import ShowcaseSection from '../components/ShowCaseSection/ShowcaseSection'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
  
    <div className="wrapper">
      <Header />
      <main>
        <div className="container">
          <ShowcaseSection />
        </div>
      </main>
      <Footer />
      </div>
      )
}

export default Home