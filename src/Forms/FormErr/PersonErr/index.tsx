import React from 'react'

export default function PersonErr(props: any): JSX.Element {
  const errorValue = props.isInputError;
  const errorKey = Object.keys(props.isInputError);

  return (
    <React.Fragment>
      {
      errorKey.map((fieldName, i) => {
        if (errorValue[fieldName].length > 0) {
          return (
            <p key={i}>{errorValue[fieldName]}</p>
          )
        }
      })
    }</React.Fragment>
  )
}
