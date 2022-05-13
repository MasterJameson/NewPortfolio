function HandleOperator(props) {

  const dataCell = props;
  const xClass = 'x';
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const circleClass = 'circle';
  const getBoard = document.getElementById('board')
  const getMessage = document.querySelector('[data-message]')
  const getContainerMessage = document.getElementById('message')
  const getRestartButton = document.getElementById('restartButton')

  let circleTurn;

  startGame()

  // callback function startGame for restart
  if (getRestartButton !== null) getRestartButton.addEventListener('click', startGame)

  function startGame() {
    // circleTurn = false;
    dataCell.forEach((cell) => {

      //restart game remove class and event listener
      cell.classList.remove(xClass)
      cell.classList.remove(circleClass)
      cell.removeEventListener('click', handleClick)

      //start game add event listener
      cell.addEventListener('click', handleClick, { once: true })
    })
    //restart game and remove message
    getContainerMessage.classList.remove('show')
  }

  function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circleClass : xClass

    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
      endGame(false)
    } else if (isDraw()) {
      endGame(true)
    } else {
      switchTurn()
      setHoverClass()
    }
  }

  function endGame(draw) {

    if (draw) {

      //change text if draw
      getMessage.innerHTML = 'Draw!'
    } else {

      //change the winning message
      getMessage.innerHTML = `${circleTurn ? "O's" : "X's"} Win!`
    }

    //show message if end game
    getContainerMessage.classList.add('show')
  }

  function isDraw() {

    //spread datacell to get every cell
    return [...dataCell].every(cell => {

      //check if all cell are already contained with class
      return cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    })
  }

  function placeMark(cell, currentClass) {

    //add class to cell
    cell.classList.add(currentClass)
  }

  function switchTurn() {

    //change current turn
    circleTurn = !circleTurn
  }

  function setHoverClass() {

    //remove class of board
    getBoard.classList.remove(xClass)
    getBoard.classList.remove(circleClass)

    //add class with the next turn
    circleTurn ? getBoard.classList.add(circleClass) : getBoard.classList.add(xClass)
  }

  function checkWin(currentClass) {

    //get winning combination 
    return winningCombinations.some(comb => {

      //check every combination
      return comb.every(index => {

        //check class of every cell that contains class X | CIRCLE then return boolean
        return dataCell[index].classList.contains(currentClass)
      })
    })
  }
}

export default HandleOperator;