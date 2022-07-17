import _ from "lodash"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductList } from "../redux/actions/ProductList"
// import getData from "../firebase/firestore"
import getActiveUser from "./getActiveUse"



const LandingPage = () => {
  const dispatch: any = useDispatch();
  
  const personList = useSelector((state: any) => state.product.productlist[0])

  useEffect(() => {
    _.isEmpty(personList) && dispatch(getProductList())
  })


  const user = getActiveUser()


  // let promiseFunc = () => {
  //   let a = 4 + 2
  //   return new Promise((resolve, reject) => {
  //     if (a === 6) {
  //       resolve('this is a correct answer')
  //     } else {
  //       reject('this is a wrong answer')
  //     }
  //   })
  // }

  // promiseFunc().then((message) => {
  //   console.log(message)
  // }).catch((error) => {
  //   console.log(error)
  // })

  
  console.log(personList)

  return (
    <>
      <p>Hello {user && user.firstName + " " + user.lastName} </p>
    </>
  )
}

export default LandingPage