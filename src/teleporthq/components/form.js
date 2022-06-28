import React from 'react'

import PropTypes from 'prop-types'

import './form.css'

const Form = (props) => {
  return (
    <div className="form-container">
      <form onSubmit={props.submitHandler} className="form-form">
        <input
          type="email"
          placeholder={props.emailinputPlaceholder}
          onSubmit={props.submitHandler}
          className="form-textinput input"
        />
        <input
          type="password"
          placeholder={props.passwordinputPlaceholder1}
          className="form-textinput1 input"
        />
        <button type="submit" className="form-button button">
          {props.buttonText}
        </button>
      </form>
    </div>
  )
}

Form.defaultProps = {
  submitHandler: () => {},
  passwordinputPlaceholder1: 'password',
  emailinputPlaceholder: 'email',
  buttonText: 'Submit',
}

Form.propTypes = {
  submitHandler: PropTypes.func,
  passwordinputPlaceholder1: PropTypes.string,
  emailinputPlaceholder: PropTypes.string,
  buttonText: PropTypes.string,
}

export default Form
