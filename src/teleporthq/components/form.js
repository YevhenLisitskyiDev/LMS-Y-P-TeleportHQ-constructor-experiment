import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './form.module.css'

const Form = (props) => {
  return (
    <div className={styles['container']}>
      <form onSubmit={props.submitHandler} className={styles['form']}>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          onSubmit={props.submitHandler}
          className={` ${styles['textinput']} ${projectStyles['input']} `}
        />
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className={` ${styles['textinput1']} ${projectStyles['input']} `}
        />
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          {props.button}
        </button>
      </form>
    </div>
  )
}

Form.defaultProps = {
  submitHandler: () => {},
  textinput_placeholder1: 'placeholder',
  textinput_placeholder: 'placeholder',
  button: 'Button',
}

Form.propTypes = {
  submitHandler: PropTypes.func,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
}

export default Form
