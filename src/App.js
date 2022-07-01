import React from 'react'
import HeaderSection from './components/Moleculs/Header'
import FooterSection from './components/Moleculs/Footer'
import '././styles/LandingPage.css'

export default function App() {
  return (
    <>
      <div className="Landing">
        <HeaderSection />
        <FooterSection />
      </div>
    </>
  )
}
