import React from 'react'
import ToEditorButton from '../../widgets/ToEditorButton'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>LMS-V2</title>
        <meta property="og:title" content="LMS-V2" />
      </Helmet>
      <h1>Home Route</h1>
      <ToEditorButton></ToEditorButton>
    </div>
  )
}

export default Home
