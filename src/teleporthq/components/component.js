import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles['container']}>
      <form onSubmit={props.onSubmit} className={styles['form']}>
        <input
          type="text"
          placeholder={props.emailinput_placeholder}
          className={` ${styles['textinput']} ${projectStyles['input']} `}
        />
        <input
          type="text"
          placeholder={props.passwordinput_placeholder1}
          className={` ${styles['textinput1']} ${projectStyles['input']} `}
        />
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          {props.button}
        </button>
      </form>
    </div>
  )
}

AppComponent.defaultProps = {
  passwordinput_placeholder1: 'password',
  onSubmit: () => {},
  button: 'Button',
  emailinput_placeholder: 'email',
}

AppComponent.propTypes = {
  passwordinput_placeholder1: PropTypes.string,
  onSubmit: PropTypes.func,
  button: PropTypes.string,
  emailinput_placeholder: PropTypes.string,
}

export default AppComponent
