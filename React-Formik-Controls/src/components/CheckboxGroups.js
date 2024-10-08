// import React from 'react'
// import { Field, ErrorMessage } from 'formik'
// import TextError from './TextError'

// function CheckboxGroups (props) {
//   const { label, name, options, ...rest } = props
//   return (
//     <div className='form-control'>
//       <label>{label}</label>
//       <Field name={name}>
//         {({ field }) => {
//           return options.map(option => {
//             return (
//               <React.Fragment key={option.key}>
//                 <input
//                   type='checkbox'
//                   id={option.value}
//                   {...field}
//                   {...rest}
//                   value={option.value}
//                   checked={field.value.includes(option.value)}
//                 />
//                 <label htmlFor={option.value}>{option.key}</label>
//               </React.Fragment>
//             )
//           })
//         }}
//       </Field>
//       <ErrorMessage component={TextError} name={name} />
//     </div>
//   )
// }

// export default CheckboxGroups
import React from 'react'
import { Field,ErrorMessage } from 'formik'
import TextError from './TextError'
function CheckboxGroups(props) {
    const{label,name,options,...rest}=props
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {
            ({field})=>{
                return options.map(option=>{
                    return (
                        <React.Fragment key={option.key}>
                            <input type='checkbox' id={option.value} {...field} value={option.value} checked={field.value.includes(option.value)}></input>
                            <label htmlFor={option.value}>{option.key}</label>
                        </React.Fragment>
                    )
                })
            }
        }
      </Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </div>
  )
}

export default CheckboxGroups
