import React from 'react';

const SignUpError = (props: any): JSX.Element => {
  const FormErrorsVal = props.formErrors;
  const FormErrorsKeys = Object.keys(props.formErrors);

  return (
    <React.Fragment>
      {
        FormErrorsKeys.map((fieldName, i) => {
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
