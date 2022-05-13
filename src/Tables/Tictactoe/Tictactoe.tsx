import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import { Calculate } from '@mui/icons-material';
import { relative } from 'node:path/win32';
import './tictactoeStyle.css'
import _ from 'lodash';
import HandleOperator from './HandleOperator';



function Tictactoe() {

  useEffect(() => {
    const getDataCell = document.querySelectorAll('[data-cell]')
    if (!_.isEmpty(getDataCell)) HandleOperator(getDataCell)

  })

  return (
    <>
      <div className="gameBoard xTurn" id="board">
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
      </div>
      <div className='containerMessage' id="message">
        <div data-message>X Won!</div>
        <button className='restartButton' >Restart</button>
      </div>
    </>
  )
}

export default Tictactoe;