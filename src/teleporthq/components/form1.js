import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './form1.module.css'

const Form1 = (props) => {
  return (
    <div className={styles['container']}>
      <form className={styles['form']}>
        <input
          type="text"
          placeholder={props.courseNamePlaceholder}
          className={` ${styles['textinput']} ${projectStyles['input']} `}
        />
        <textarea
          placeholder={props.courseDescriptionPlaceholder}
          className={` ${styles['textarea']} ${projectStyles['textarea']} `}
        ></textarea>
        <input
          type="text"
          placeholder={props.authorNamePlaceholder}
          onSubmit={props.submitHandler}
          className={` ${styles['textinput1']} ${projectStyles['input']} `}
        />
        <button
          type="submit"
          className={` ${styles['button']} ${projectStyles['button']} `}
        >
          {props.submitButtonText}
        </button>
      </form>
    </div>
  )
}

Form1.defaultProps = {
  authorNamePlaceholder: 'Author name',
  submitHandler: () => {},
  submitButtonText: 'Submit',
  courseNamePlaceholder: 'Course name',
  courseDescriptionPlaceholder: 'Course description',
}

Form1.propTypes = {
  authorNamePlaceholder: PropTypes.string,
  submitHandler: PropTypes.func,
  submitButtonText: PropTypes.string,
  courseNamePlaceholder: PropTypes.string,
  courseDescriptionPlaceholder: PropTypes.string,
}

export default Form1
