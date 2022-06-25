import React from 'react'
import GetUsersbutton from '../../widgets/users/GetUsersbutton'

import { Helmet } from 'react-helmet'

import Form1 from '../components/form1'
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
      <Form1></Form1>
    </div>
  )
}

export default Admin
