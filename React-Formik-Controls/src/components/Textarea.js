import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function Textarea(props) {
    const{label,name, ...rest}=props
  return (
    <div>
        <label htmlFor='name'>{label}</label>
        <Field as='textarea' name={name} id={name} {...rest}></Field>
        <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </div>
  )
}

export default Textarea
