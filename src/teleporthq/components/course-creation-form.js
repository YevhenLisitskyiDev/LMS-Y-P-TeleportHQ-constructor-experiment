import React from 'react'

import PropTypes from 'prop-types'

import './course-creation-form.css'

const CourseCreationForm = (props) => {
  return (
    <div className="course-creation-form-container">
      <form
        onSubmit={props.submitHandler}
        className="course-creation-form-form"
      >
        <input
          type="text"
          id="coursename"
          name="name"
          required
          placeholder={props.courseNamePlaceholder}
          className="course-creation-form-textinput input"
        />
        <textarea
          name="description"
          placeholder={props.courseDescriptionPlaceholder}
          className="course-creation-form-textarea textarea"
        ></textarea>
        <input
          type="text"
          name="author_name"
          placeholder={props.authorNamePlaceholder}
          className="course-creation-form-textinput1 input"
        />
        <label htmlFor="courseimageinput">
          {props.courseImageInputPlaceholder}
        </label>
        <input
          type="file"
          id="courseimageinput"
          placeholder={props.textinput_placeholder}
          className="course-creation-form-course-image-input input"
        />
        <button type="submit" className="course-creation-form-button button">
          {props.submitButtonText}
        </button>
      </form>
    </div>
  )
}

CourseCreationForm.defaultProps = {
  authorNamePlaceholder: 'Author name',
  courseImageInputPlaceholder: 'Course Image',
  submitHandler: () => {},
  submitButtonText: 'Submit',
  courseNamePlaceholder: 'Course name',
  courseDescriptionPlaceholder: 'Course description',
  textinput_placeholder: 'placeholder',
}

CourseCreationForm.propTypes = {
  authorNamePlaceholder: PropTypes.string,
  courseImageInputPlaceholder: PropTypes.string,
  submitHandler: PropTypes.func,
  submitButtonText: PropTypes.string,
  courseNamePlaceholder: PropTypes.string,
  courseDescriptionPlaceholder: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default CourseCreationForm
