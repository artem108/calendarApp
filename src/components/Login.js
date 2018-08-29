import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate, renderField } from '../helpers'

const LoginUser = ({ handleSubmit, submitting }) => {
  return (
    <section className="form-group loginForm">
      <Field name="email" type="email" component={renderField} label="Email" nameClass={'form-control'}/>
      <Field name="password" component={renderField} type="text" label="Password" nameClass={'form-control'}/>
      <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
    </section>
  )
}

export default reduxForm({
    form: 'login',
    validate
  })(LoginUser)
