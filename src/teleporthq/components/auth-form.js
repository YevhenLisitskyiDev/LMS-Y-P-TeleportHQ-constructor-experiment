import React from 'react'

import PropTypes from 'prop-types'

import './auth-form.css'

const AuthForm = (props) => {
  return (
    <div className="auth-form-container">
      <form onSubmit={props.submitHandler} className="auth-form-form">
        <input
          type="email"
          placeholder={props.emailinputPlaceholder}
          onSubmit={props.submitHandler}
          className="auth-form-textinput input"
        />
        <input
          type="password"
          placeholder={props.passwordinputPlaceholder1}
          className="auth-form-textinput1 input"
        />
        <button type="submit" className="auth-form-button button">
          {props.buttonText}
        </button>
      </form>
    </div>
  )
}

AuthForm.defaultProps = {
  submitHandler: () => {},
  passwordinputPlaceholder1: 'password',
  emailinputPlaceholder: 'email',
  buttonText: 'Submit',
}

AuthForm.propTypes = {
  submitHandler: PropTypes.func,
  passwordinputPlaceholder1: PropTypes.string,
  emailinputPlaceholder: PropTypes.string,
  buttonText: PropTypes.string,
}

export default AuthForm
