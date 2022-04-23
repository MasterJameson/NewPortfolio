import React, { useState } from 'react'

function LandingPage() {
const getActiveUser = localStorage.getItem('userAcc')
console.log('getActiveUser', getActiveUser)

  return (
    <>
      <p >LandingPage</p>
    </>
  )
}

export default LandingPage