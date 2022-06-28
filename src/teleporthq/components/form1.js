import React from 'react'

import PropTypes from 'prop-types'

import './form1.css'

const Form1 = (props) => {
  return (
    <div className="form1-container">
      <form className="form1-form">
        <input
          type="text"
          placeholder={props.courseNamePlaceholder}
          className="form1-textinput input"
        />
        <textarea
          placeholder={props.courseDescriptionPlaceholder}
          className="form1-textarea textarea"
        ></textarea>
        <input
          type="text"
          placeholder={props.authorNamePlaceholder}
          onSubmit={props.submitHandler}
          className="form1-textinput1 input"
        />
        <button type="submit" className="form1-button button">
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
