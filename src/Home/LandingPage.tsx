import _ from "lodash"
import React, { useEffect } from "react"
import ProductView from "../Ecom/ProductView"
import getActiveUser from "./getActiveUse"


const LandingPage = () => {

  const user = getActiveUser()
  const [value, setValue] = React.useState()

  let promiseFunc = () => {
    let a = 4 + 2
    return new Promise((resolve, reject) => {
      if (a === 6) {
        resolve('this is a correct answer')
      } else {
        reject('this is a wrong answer')
      }
    })
  }

  promiseFunc().then((message) => {
    console.log(message)
  }).catch((error) => {
    console.log(error)
  })

  useEffect(() => {
    const url = "https://data-hosting.herokuapp.com/productList";
    _.isEmpty(value) &&
      fetch(url, { method: "GET" }).then(response => response.json()).then(data => setValue(data))
  })
  console.log(value)
  const renderProduct = (value: any) => {
    return value.map((item: any) => {
      return (
        <div key={item.id}>
          <img src={item.productView} alt={item.productName} />
        </div>
      )
    })
  }

  return (
    <>
      <p>Hello {user && user.firstName + " " + user.lastName} </p>
      {/* <div style={{ width: 1140 }}>
        {!_.isUndefined(value) && renderProduct(value)}
      </div> */}
    </>
  )
}

export default LandingPage