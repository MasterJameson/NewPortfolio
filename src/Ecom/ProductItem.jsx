import _, { findIndex } from 'lodash';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  mb0: {
    marginBottom: 0
  },
  iconImg: {
    width: 68,
    height: 68,
    borderRadius: 4,
  },
  iconFocus: {
    border: '1px solid #000'
  },
  imageContainer: {
    padding: '8px 8px',
    display: 'inline-grid',
    width: '50%',
  },
  mainContainer: {
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1440px',
  },
  rightArea: {
    padding: '0 48px',
  },
  leftArea: {
    paddingRight: 48,
  },


}))

const ProductItem = () => {
  const classes = useStyles()

  const getSelectedItem = localStorage.getItem('selectedItem');
  const parseSelectedItem = !_.isNull(getSelectedItem) && JSON.parse(getSelectedItem)

  const [subItem, setSubItem] = useState(parseSelectedItem.index)
  const [item] = useState(parseSelectedItem.item)
  const [itemImage, setItemImage] = useState(item.subCategory[subItem])

  // console.log('itemImage', itemImage.stockSize)
  itemImage.stockSize.map((val) => {
    console.log(Object.keys(val))
  })

  useEffect(() => {
    setItemImage(item.subCategory[subItem])
  }, [subItem])

  const handleIconClick = (index) => {
    setSubItem(index)
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.rightArea}>
        {
          itemImage.image.map((imageVal, index) => {
            return (
              <div className={classes.imageContainer} key={index}>
                <img style={{ width: '100%' }} src={imageVal} />
              </div>
            )
          })
        }
      </div>
      <div className={classes.leftArea}>
        <h3 className={classes.mb0}>{item.productName}</h3>
        <p>{item.category}</p>
        <p>{item.price}</p>
        <div style={{ margin: '30px 0' }}>
          {item.subCategory.map((iconVal, index) => {
            return (
              <div className="iconSpan" key={index}>
                {index === subItem
                  ? <img className={`iconFocus ${classes.iconImg}`} src={iconVal.icon} />
                  : <img onClick={() => handleIconClick(index)} className={classes.iconImg} src={iconVal.icon} />
                }
              </div>
            )
          })}
        </div>
        <div>
          <p>Select Size</p>
          { }
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default ProductItem