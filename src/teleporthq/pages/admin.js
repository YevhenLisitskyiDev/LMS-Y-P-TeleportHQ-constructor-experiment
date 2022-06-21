import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './admin.module.css'

const Admin = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Admin - LMS-V2</title>
        <meta property="og:title" content="Admin - LMS-V2" />
      </Helmet>
    </div>
  )
}

export default Admin
