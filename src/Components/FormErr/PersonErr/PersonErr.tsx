import React from 'react'

export default function PersonErr(props: any): JSX.Element {

  const errorValue = props.isInputError;
  const errorkey = Object.keys(props.isInputError)

  const spanConditionRender = (fieldName: string, index: number) => {
    if (errorValue[fieldName].length > 0) {
      return (
        <span key={index} className="m-0">{errorValue[fieldName]} </span>
      )
    }
  }

  return (
    <React.Fragment>
      {errorkey.length > 0 &&
        errorkey.map((fieldName, index) => spanConditionRender(fieldName, index))
      }
    </React.Fragment>
  )
}
