import React from 'react';

const SignUpError = (props: any): JSX.Element => {
  const FormErrorsVal = props.formErrors;

  return (
    <React.Fragment>
      {props.length > 0 &&
        Object.keys(props.formErrors).map((fieldName, i) => {
          if (FormErrorsVal[fieldName].length > 0) {
            return (
              <p key={i}>{fieldName}{FormErrorsVal[fieldName]}</p>
            )
          }
        })
      }
    </React.Fragment>
  );
}

export default SignUpError;
