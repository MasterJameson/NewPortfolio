import React from 'react'

export default function PersonErr(props: any): JSX.Element {
  const errorValue = props.isInputError;

  return (
    <React.Fragment>
      {props.length > 0 &&
        Object.keys(props.isInputError).map((fieldName, i) => {
          if (errorValue[fieldName].length > 0) {
            return (
              <span key={i} className="m-0">{errorValue[fieldName]} </span>
            )
          }
        })
      }
    </React.Fragment>
  )
}
