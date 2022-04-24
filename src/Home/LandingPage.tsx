import React, { useState } from 'react'

function LandingPage() {
const getActiveUser: string | null = localStorage.getItem('userAcc')
const parseActiveUser = getActiveUser !== null && JSON.parse(getActiveUser)
console.log('getActiveUser', parseActiveUser)

  return (
    <>
      <p>Hello {parseActiveUser.firstName + " " + parseActiveUser.lastName}</p>
    </>
  )
}

export default LandingPage