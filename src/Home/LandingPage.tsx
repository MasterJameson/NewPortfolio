import getActiveUser from "./getActiveUse"


const LandingPage = () => {

  const user = getActiveUser()

  let promiseFunc = () => {
    let a = 4 + 2
    return new Promise((resolve, reject)=>{
      if(a === 6){
        resolve('this is a correct answer')
      } else {
        reject('this is a wrong answer')
      }
    })
  }

  promiseFunc().then((message)=>{
    console.log(message)
  }).catch((error)=>{
    console.log(error)
  })
  
  return (
    <>
      <p>Hello {user && user.firstName + " " + user.lastName} </p>
    </>
  )
}

export default LandingPage