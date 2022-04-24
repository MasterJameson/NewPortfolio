const getActiveUser = ()=>{
  
  const getUser = localStorage.getItem('userAcc')
  const parseActiveUser = getUser !== null && JSON.parse(getUser)
  return (parseActiveUser)
}

export default getActiveUser;