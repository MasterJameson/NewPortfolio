import React, { useEffect, useState } from 'react'
import _, { isEmpty } from "lodash"
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { getProductList } from '../redux/actions/ProductList';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate()

  const productList = useSelector((state) => state.product.productlist[0])
  const getCurrentIndex = localStorage.getItem('currentIndex')
  
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentView, setCurrentView] = useState(0)
  const [items, setItems] = useState([])
  const [test, setTest] = useState([])
  
  useEffect(() => {
    getCurrentIndex === null
      ? localStorage.setItem('currentIndex', JSON.stringify(test))
      : setTest(JSON.parse(getCurrentIndex))
  }, [getCurrentIndex])

  useEffect(() => {
    _.isUndefined(productList)
      ? dispatch(getProductList())
      : productList.forEach(element => {
        test.length < productList.length && test.push(element.currentView)
        setItems(productList)
      });
  })

  const handleSubMouseEnter = (index) => {
    setCurrentView(index)
    if (test.length > 0) {
      test[selectedProduct] = index;
    }
    localStorage.setItem('currentIndex', JSON.stringify(test));
  }

  const handleClick = (item, index) => {
    const data = {
      item: item,
      index: index
    }

    localStorage.setItem("selectedItem", JSON.stringify(data))
    navigate('/product-item')
  }

  const renderProduct = (value) => {

    return value.map((item, index) => {
      const variant = item.subCategory
      const subCat = value[index].subCategory

      return (
        <div key={item.id} className={classes.productContainer} onClick={() => handleClick(value[index], test[index])} onMouseEnter={() => setSelectedProduct(index)} onMouseLeave={() => setSelectedProduct(null)}>
          <div className={classes.imageContainer}>
            {
              selectedProduct === index
                ? (<img style={{ width: '100%', }} src={subCat[test[index]].productView} alt={item.productName} />)
                : <img style={{ width: '100%', }} src={subCat[!_.isEmpty(test) ? test[index] : 0].productView} alt={item.productName} />}
          </div>
          {
            selectedProduct === index
              ? <div>
                {
                  item.subCategory.map((val, index) => {
                    return (
                      <span key={val.id} style={{ marginRight: 5 }} onMouseEnter={() => handleSubMouseEnter(index)} >
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
      <div className='productImgContainer'>
        {
          _.isUndefined(items)
            ?
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
            :
            <>
              {renderProduct(items)}
            </>

        }
      </div>
    </>
  )
}

export default ProductList;