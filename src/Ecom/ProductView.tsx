import React, { useEffect } from 'react'
import _ from "lodash"
import { ClassNames } from '@emotion/react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({

  imageContainer: {
    width: '33.3333%',
    display: 'inline-block'
  },
}))
const ProductView = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState()

  useEffect(() => {
    const url = "https://data-hosting.herokuapp.com/productList";
    _.isEmpty(value) &&
      fetch(url, { method: "GET" }).then(response => response.json()).then(data => setValue(data))
  })
  console.log(value)
  const renderProduct = (value: any) => {
    return value.map((item: any) => {
      return (
        <div key={item.id} className={classes.imageContainer}>
          <img style={{ width: '100%', }} src={item.productView} alt={item.productName} />
        </div>
      )
    })
  }
  return (
    <>
      <div>ProductView</div>
      <div className='productImgContainer'>
        {!_.isUndefined(value) && renderProduct(value)}
      </div>
    </>
  )
}

export default ProductView;