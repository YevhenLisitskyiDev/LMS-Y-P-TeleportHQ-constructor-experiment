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
          required
          placeholder={props.lessonNamePlaceholder}
          className="lessons-management-form-input input"
        />
        <textarea
          name="description"
          placeholder={props.lessonDescriptionPlaceholder}
          className="lessons-management-form-textarea textarea"
        ></textarea>
        <input
          type="text"
          name="video_url"
          required
          placeholder={props.videoUrlPlaceholder}
          className="lessons-management-form-textinput input"
        />
        <label
          htmlFor="video_hosting_type"
          className="lessons-management-form-label"
        >
          {props.videoHostingTypeSelectLabel}
        </label>
        <select
          id="video_hosting_type"
          name="video_hosting_type"
          className="lessons-management-form-select"
        >
          <option value="vimeo">Vimeo</option>
          <option value="youtube">YouToube</option>
          <option value="self_hosted">Self Hosted</option>
        </select>
        <button type="submit" className="lessons-management-form-button button">
          {props.buttonText}
        </button>
      </form>
    </div>
  )
}

LessonsManagementForm.defaultProps = {
  lessonNamePlaceholder: 'Lesson name',
  videoUrlPlaceholder: 'Video url',
  videoHostingTypeSelectLabel: 'Video Hosting Type',
  lessonDescriptionPlaceholder: 'Lesson description',
  buttonText: 'Submit',
  submitHandler: () => {},
}

LessonsManagementForm.propTypes = {
  lessonNamePlaceholder: PropTypes.string,
  videoUrlPlaceholder: PropTypes.string,
  videoHostingTypeSelectLabel: PropTypes.string,
  lessonDescriptionPlaceholder: PropTypes.string,
  buttonText: PropTypes.string,
  submitHandler: PropTypes.func,
}

export default LessonsManagementForm
