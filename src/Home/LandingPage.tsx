import React from 'react'
import getActiveUser from "./getActiveUse"


const LandingPage = () => {

  const user = getActiveUser()


  return (
    <>
      <p>Hello {user && user.firstName + " " + user.lastName} </p>
    </>
  )
}

export default LandingPage