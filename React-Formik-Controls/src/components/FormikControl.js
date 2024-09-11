import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import CheckboxGroups from './CheckboxGroups'
import DatePicker from './DatePicker'

function FormikControl(props) {
    const {control,...rest}=props
  switch(control){
    case 'input':return <Input {...rest}></Input>
    case 'textarea':return <Textarea {...rest}></Textarea>
    case 'select':return <Select {...rest}></Select>
    case 'radio':return <RadioButtons {...rest}></RadioButtons>
    case 'checkbox':return <CheckboxGroups {...rest}></CheckboxGroups>
    case 'date':return <DatePicker {...rest} />
    default: return null
  }
   
}

export default FormikControl
