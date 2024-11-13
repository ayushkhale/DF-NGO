import React, { useEffect } from 'react'
import Donatehero from '../components/Getinvolved/Donate/Donatehero'
import Donateform from '../components/Getinvolved/Donate/Donateform'
const Donate = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Donatehero />
      <Donateform/>
    </div>
  )
}

export default Donate