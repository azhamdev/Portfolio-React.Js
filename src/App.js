import React from 'react'
import HeaderSection from './components/Moleculs/Header'
import FooterSection from './components/Moleculs/Footer'
import '././styles/LandingPage.css'
import Work from './components/Moleculs/Work'
import Services from './components/Moleculs/Services'
import Gap from './components/Atoms/Gap'

export default function App() {
  return (
    <>
      <div className="Landing">
        <HeaderSection />
        <Work />
        <Gap height={'20vh'} />
        <Services />
        <FooterSection />
      </div>
    </>
  )
}
