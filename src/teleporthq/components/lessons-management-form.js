import React from 'react'

import PropTypes from 'prop-types'

import './lessons-management-form.css'

const LessonsManagementForm = (props) => {
  return (
    <div className="lessons-management-form-container">
      <form
        onSubmit={props.submitHandler}
        className="lessons-management-form-form"
      >
        <input
          type="text"
          name="name"
          placeholder={props.lessonNamePlaceholder}
          onClick={props.lessonNameClickHandler}
          className="lessons-management-form-input input"
        />
        <textarea
          name="description"
          placeholder={props.lessonDescriptionPlaceholder}
          onClick={props.lessonDescriptionClickHandler}
          className="lessons-management-form-textarea textarea"
        ></textarea>
        <input
          type="text"
          name="video_url"
          placeholder={props.videoUrlPlaceholder}
          onClick={props.lessonVideoUrlClickHandler}
          className="lessons-management-form-textinput input"
        />
        <button type="submit" className="lessons-management-form-button button">
          {props.buttonText}
        </button>
      </form>
    </div>
  )
}

LessonsManagementForm.defaultProps = {
  lessonVideoUrlClickHandler: () => {},
  lessonNameClickHandler: () => {},
  lessonNamePlaceholder: 'Lesson name',
  lessonDescriptionClickHandler: () => {},
  videoUrlPlaceholder: 'Video url',
  lessonDescriptionPlaceholder: 'Lesson description',
  buttonText: 'Submit',
  submitHandler: () => {},
}

LessonsManagementForm.propTypes = {
  lessonVideoUrlClickHandler: PropTypes.func,
  lessonNameClickHandler: PropTypes.func,
  lessonNamePlaceholder: PropTypes.string,
  lessonDescriptionClickHandler: PropTypes.func,
  videoUrlPlaceholder: PropTypes.string,
  lessonDescriptionPlaceholder: PropTypes.string,
  buttonText: PropTypes.string,
  submitHandler: PropTypes.func,
}

export default LessonsManagementForm
