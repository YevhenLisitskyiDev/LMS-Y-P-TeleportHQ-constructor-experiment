import React from 'react'
import LessonsList from '../../widgets/lessons/LessonsList'

import { Helmet } from 'react-helmet'

import './course.css'

const Course = (props) => {
  return (
    <div className="course-container">
      <Helmet>
        <title>Course - LMS-V2</title>
        <meta property="og:title" content="Course - LMS-V2" />
      </Helmet>
      <LessonsList></LessonsList>
    </div>
  )
}

export default Course
