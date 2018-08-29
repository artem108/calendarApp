import React from 'react'


  export const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    } else if (values.email !== 'test@email.com') {
      errors.email = 'User does not exist'
    }

    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password !== 'test') {
      errors.password = 'Wrong password'
    }

    return errors
  }

  export const renderField = ({ input, label, type, meta: { touched, error }, nameClass }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className={touched && error ? `${nameClass} is-invalid` : nameClass}/>
        {touched && (error && <span className="text-danger">{error}</span>)}
      </div>
    </div>
  )

export const getDayInMonths = days => {
  const arr =[]
    for (let i = 1; i <= days; i++) {
      arr.push(i)
    }
    return arr
}
