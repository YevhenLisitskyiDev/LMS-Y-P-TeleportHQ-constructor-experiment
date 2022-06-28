import React from 'react'
import CourseId from '../../widgets/courses/CourseId'

import { Helmet } from 'react-helmet'

import './course.css'

const Course = (props) => {
  return (
    <div className="course-container">
      <Helmet>
        <title>Course - LMS-V2</title>
        <meta property="og:title" content="Course - LMS-V2" />
      </Helmet>
      <CourseId></CourseId>
    </div>
  )
}

export default Course
