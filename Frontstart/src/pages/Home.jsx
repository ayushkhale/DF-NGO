import React, { useEffect } from 'react'
import HeroSection from '../components/Home Components/HeroSection'
import AboutSection from '../components/Home Components/AboutSection'
import ImpactSection from '../components/Home Components/ImpactSection'
import PartnersSection from '../components/Home Components/PartnersSection'
import Foundermessage from '../components/Home Components/Foundermessage'

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Foundermessage />
      <PartnersSection />
      <ImpactSection />
    </div>
  )
}

export default Home