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
          placeholder={props.courseNamePlaceholder}
          onClick={props.courseNameClickHandler}
          className="courses-management-form-textinput input"
        />
        <textarea
          name="description"
          placeholder={props.courseDescriptionPlaceholder}
          onClick={props.courseDescriptionClickHandler}
          className="courses-management-form-textarea textarea"
        ></textarea>
        <input
          type="text"
          name="author_name"
          placeholder={props.authorNamePlaceholder}
          onClick={props.courseAuthorClickHandler}
          className="courses-management-form-textinput1 input"
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
  courseNameClickHandler: () => {},
  courseDescriptionClickHandler: () => {},
  courseAuthorClickHandler: () => {},
  submitHandler: () => {},
  submitButtonText: 'Submit',
  courseNamePlaceholder: 'Course name',
  courseDescriptionPlaceholder: 'Course description',
}

CoursesManagementForm.propTypes = {
  authorNamePlaceholder: PropTypes.string,
  courseNameClickHandler: PropTypes.func,
  courseDescriptionClickHandler: PropTypes.func,
  courseAuthorClickHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  submitButtonText: PropTypes.string,
  courseNamePlaceholder: PropTypes.string,
  courseDescriptionPlaceholder: PropTypes.string,
}

export default CoursesManagementForm
