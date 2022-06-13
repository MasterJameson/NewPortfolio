import React, { useEffect, useState } from 'react'
import _ from "lodash"
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { getProductList } from '../redux/actions/ProductList';


const useStyles = makeStyles((theme: any) => ({
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
  const dispatch: any = useDispatch();
  const classes = useStyles()

  const personList = useSelector((state: any) => state.product.productlist[0])

  const [selected, setSelected] = useState(null)

  useEffect(() => {
    _.isEmpty(personList) && dispatch(getProductList())
  })

  const renderProduct = (value: any) => {
    return value.map((item: any) => {
      // console.log(item)
      const variant = item.subCategory.length

      return (
        <div key={item.id} className={classes.productContainer} onMouseEnter={() => setSelected(item.id)} onMouseLeave={() => setSelected(null)}>
          <div className={classes.imageContainer}>
            <img style={{ width: '100%', }} src={item.subCategory[0].productView} alt={item.productName} />
          </div>
          {
            selected === item.id
              ? <div>
                {
                  item.subCategory.map((val: any) => {
                    return (
                      <span key={val.id} style={{ marginRight: 5}}>
                        <img style={{ width: 36, height: 36 }} src={val.icon} alt={item.productName} />
                      </span>
                    )
                  })
                }
                <p style={{marginTop: 16}}>{item.price}</p>
              </div>
              : <div>
                <p className={`${classes.mb0}`}>{item.productName}</p>
                <p className={`${classes.mb0} ${classes.gray}`}>{item.category} shoe</p>
                <p className={`${classes.gray}`}>{variant} {variant > 1 ? "Colours" : "Colour"}</p>
                <p>{item.price}</p>
              </div>
          }


        </div>
      )
    })
  }
  console.log('selected', selected)


  return (
    <>
      <div>Product List</div>
      <div className='productImgContainer'>
        {
          _.isEmpty(personList)
            ? <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
            : renderProduct(personList)
        }
      </div>
    </>
  )
}

export default ProductList;