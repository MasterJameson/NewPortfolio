import React from 'react';

export default function SignUpError(props: any) {
  const FormErrorsVal = props.formErrors
  const FormErrorsKeys = Object.keys(props.formErrors)

  return (
    <div>
      {
        FormErrorsKeys.map((fieldName, i) => {
          if (FormErrorsVal[fieldName].length > 0) {
            return (
              <p key={i}>{fieldName}{FormErrorsVal[fieldName]}</p>
            )
          }
        })
      }
    </div>
  );
}
