import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './private-page.module.css'

const PrivatePage = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>PrivatePage - LMS-V2</title>
        <meta property="og:title" content="PrivatePage - LMS-V2" />
      </Helmet>
      <h1>Private Route</h1>
    </div>
  )
}

export default PrivatePage
