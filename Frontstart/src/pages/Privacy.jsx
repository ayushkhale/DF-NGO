import React from 'react'
import Policycomponent from '../components/Privacy/Policycomponent'
import Terms from '../components/Privacy/Terms'
import CancellationRefund from '../components/Privacy/CancellationRefund'
import ContactUsComponent from '../components/Privacy/ContactUsComponent'
const Privacy = () => {
  return (
    <div>
        <Policycomponent />
        <CancellationRefund />
        <Terms />
        <ContactUsComponent />
    </div>
  )
}

export default Privacy