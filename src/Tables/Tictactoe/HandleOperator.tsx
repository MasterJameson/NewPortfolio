import React from 'react'

function HandleOperator(props: any) {
  const dataCell = props
  console.log('props', dataCell)
  dataCell.forEach((cell: any) => {
    cell.addEventListener('click', handleClick, { once: true })
  })
  function handleClick() {
    console.log('clicked')
  }




}

export default HandleOperator