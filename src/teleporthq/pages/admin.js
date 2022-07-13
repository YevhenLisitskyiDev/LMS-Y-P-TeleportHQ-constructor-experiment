import React from 'react'
import GetUsersbutton from '../../widgets/users/GetUsersbutton'
import CoursesCreator from '../../components/admin/CoursesCreator'

import { Helmet } from 'react-helmet'

import './admin.css'

const Admin = (props) => {
  return (
    <div className="admin-container">
      <Helmet>
        <title>Admin - LMS-V2</title>
        <meta property="og:title" content="Admin - LMS-V2" />
      </Helmet>
      <div className="admin-container1"></div>
      <h1>Admin Route</h1>
      <GetUsersbutton></GetUsersbutton>
      <div className="admin-container2">
        <div className="admin-container3">
          <h1 className="admin-add-new-course">Add new course</h1>
          <CoursesCreator></CoursesCreator>
        </div>
        <div className="admin-container4"></div>
      </div>
    </div>
  )
}

export default Admin
