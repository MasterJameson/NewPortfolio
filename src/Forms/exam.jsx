import React from 'react'

const Exam = () => {

  //Answer for the Qustion #1
  let i, num, f;
  f = 1;
  num = 3;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  console.log("The factorial of the number " + num + " is: " + f);

  //Answer for the Qustion #2
  const arrNum = [0, 1, 2, 3];
  const val = 4; //Number you want to check if contained within the array
  const isValTrue = arrNum.includes(val);
  isValTrue
    ? console.log(val, 'Is contained within the array', arrNum)
    : console.log(val, 'Is not contained within the array', arrNum);

  //Answer for the Qustion #3
  const arrnum1 = [1, 2, 3, 4, 5, 6]

  const mapArr = arrnum1.map(val => ({ val, sortval: Math.random() }))
  const sortArr = mapArr.sort((a, b) => a.sortval - b.sortval)
  const finalArr = mapArr.map(item => item.val)

  console.log(finalArr)
  //Answer for the Qustion #4

  var myArray = [{
    fName: 'Jameson',
    lName: 'Bagain',
  }, {
    fName: 'Chris',
    lName: 'Evans',
  }, {
    fName: 'Chris',
    lName: 'Evans',
  }, {
    fName: 'Chris',
    lName: 'Evans',
  },];

  const hanldeFilterOf = (value, self) => {
    return self.findIndex((t) => {
      return t.fName === value.fName && t.lName === value.lName
    })
  }

  const handleFilter = myArray.filter((value, index, self) => {
    return index === hanldeFilterOf(value, self)
  })

  console.log('With duplicates', myArray);
  console.log('Without duplicates', handleFilter);

  React.useEffect(() => {
    document.getElementById('test').style.color = 'red'
  }, [])
  

  return (
    <div>
      <p id='test'>Exam</p>
      <span>Answers are in console log</span>
    </div>
  )
}

export default Exam;