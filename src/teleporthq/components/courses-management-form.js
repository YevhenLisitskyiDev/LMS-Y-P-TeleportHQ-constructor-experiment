import React from 'react'

import PropTypes from 'prop-types'

import './courses-management-form.css'

const CoursesManagementForm = (props) => {
  return (
    <div className="courses-management-form-container">
      <form
        onSubmit={props.submitHandler}
        className="courses-management-form-form"
      >
        <input
          type="text"
          id="coursename"
          name="name"
          required
          placeholder={props.courseNamePlaceholder}
          className="courses-management-form-textinput input"
        />
        <textarea
          name="description"
          placeholder={props.courseDescriptionPlaceholder}
          className="courses-management-form-textarea textarea"
        ></textarea>
        <input
          type="text"
          name="author_name"
          placeholder={props.authorNamePlaceholder}
          className="courses-management-form-textinput1 input"
        />
        <label htmlFor="courseimageinput">
          {props.courseImageInputPlaceholder}
        </label>
        <input
          type="file"
          id="courseimageinput"
          placeholder={props.textinput_placeholder}
          className="courses-management-form-course-image-input input"
        />
        <button type="submit" className="courses-management-form-button button">
          {props.submitButtonText}
        </button>
      </form>
    </div>
  )
}

CoursesManagementForm.defaultProps = {
  authorNamePlaceholder: 'Author name',
  courseImageInputPlaceholder: 'Course Image',
  submitHandler: () => {},
  submitButtonText: 'Submit',
  courseNamePlaceholder: 'Course name',
  courseDescriptionPlaceholder: 'Course description',
  textinput_placeholder: 'placeholder',
}

CoursesManagementForm.propTypes = {
  authorNamePlaceholder: PropTypes.string,
  courseImageInputPlaceholder: PropTypes.string,
  submitHandler: PropTypes.func,
  submitButtonText: PropTypes.string,
  courseNamePlaceholder: PropTypes.string,
  courseDescriptionPlaceholder: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default CoursesManagementForm
