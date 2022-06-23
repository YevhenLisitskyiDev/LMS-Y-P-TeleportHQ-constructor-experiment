import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './form.module.css'

const Form = (props) => {
  return (
    <div className={styles['container']}>
      <form onSubmit={props.submitHandler} className={styles['form']}>
        <input
          type="email"
          placeholder={props.emailinputPlaceholder}
          onSubmit={props.submitHandler}
          className={` ${styles['textinput']} ${projectStyles['input']} `}
        />
        <input
          type="password"
          placeholder={props.passwordinputPlaceholder1}
          className={` ${styles['textinput1']} ${projectStyles['input']} `}
        />
        <button
          type="submit"
          className={` ${styles['button']} ${projectStyles['button']} `}
        >
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
