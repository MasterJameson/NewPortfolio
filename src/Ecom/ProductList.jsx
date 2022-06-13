import React, { useEffect, useState } from 'react'
import _ from "lodash"
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { getProductList } from '../redux/actions/ProductList';


const useStyles = makeStyles((theme) => ({
  imageContainer: {
    marginBottom: 10
  },
  productContainer: {
    padding: '0 8px',
    display: 'inline-grid',
    width: '33.3333%',
    cursor: 'pointer'
  },
  mb0: {
    marginBottom: 0
  },
  gray: {
    color: '#757575'
  }
}))

const ProductList = () => {
  const dispatch = useDispatch();
  const classes = useStyles()

  const personList = useSelector((state) => state.product.productlist[0])

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentView, setCurrentView] = useState(0)

  useEffect(() => {
    _.isEmpty(personList) && dispatch(getProductList())
  })

  const renderProduct = (value) => {
    // !_.isNull(selectedProduct)
    return value.map((item, index) => {
      const variant = item.subCategory

      return (
        <div key={item.id} className={classes.productContainer} onMouseEnter={() => setSelectedProduct(index)} onMouseLeave={() => setSelectedProduct(null)}>
          <div className={classes.imageContainer}>
            {
              selectedProduct === index
                ? (<img style={{ width: '100%', }} src={value[index].subCategory[currentView].productView} alt={item.productName} />)
                : <img style={{ width: '100%', }} src={value[index].subCategory[0].productView} alt={item.productName} />}
          </div>
          {
            selectedProduct === index
              ? <div>
                {
                  item.subCategory.map((val, index) => {
                    return (
                      <span key={val.id} style={{ marginRight: 5 }} onMouseEnter={() => setCurrentView(index)} onMouseLeave={()=>setCurrentView(0)}>
                        <img style={{ width: 36, height: 36 }} src={val.icon} alt={item.productName} />
                      </span>
                    )
                  })
                }
                <p style={{ marginTop: 16 }}>{item.price}</p>
              </div>
              : <div>
                <p className={`${classes.mb0}`}>{item.productName}</p>
                <p className={`${classes.mb0} ${classes.gray}`}>{item.category} shoe</p>
                <p className={`${classes.gray}`}>{variant.length} {variant.length > 1 ? "Colours" : "Colour"}</p>
                <p>{item.price}</p>
              </div>
          }
        </div>
      )
    })
  }

  return (
    <>
      <div>Product List</div>
      <div className='productImgContainer'>
        {
          _.isEmpty(personList)
            ?
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
            :
            <>
              {
                renderProduct(personList)
              }
            </>

        }
      </div>
    </>
  )
}

export default ProductList;