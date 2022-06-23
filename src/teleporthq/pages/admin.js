import React from 'react'
import GetUsersbutton from '../../widgets/GetUsersbutton'

import { Helmet } from 'react-helmet'

import styles from './admin.module.css'

const Admin = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Admin - LMS-V2</title>
        <meta property="og:title" content="Admin - LMS-V2" />
      </Helmet>
      <h1>Admin Route</h1>
      <GetUsersbutton></GetUsersbutton>
    </div>
  )
}

export default Admin
