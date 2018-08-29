import React from 'react'
import { connect } from 'react-redux'
import LoginUser from '../components/Login'
import { login } from '../modules/index'

const Login = ({ formValue, dispatch }) => {

  const submit = () => formValue.values&& dispatch(login())

    return <LoginUser handleSubmit={submit}/>
}

const mapStateToProps = state => {
  return {
    formValue: state.form.login
  }
}

export default connect(mapStateToProps)(Login)
