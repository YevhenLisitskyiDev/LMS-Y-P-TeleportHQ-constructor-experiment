import React from 'react'
import LoginForm from '../../widgets/LoginForm'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>LMS-V2</title>
        <meta property="og:title" content="LMS-V2" />
      </Helmet>
      <h1>Hello</h1>
      <div className={styles['container1']}>
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default Home
