import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './sign-up.module.css'

const SignUp = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>SignUp - Every Gracious Worm</title>
        <meta property="og:title" content="SignUp - Every Gracious Worm" />
      </Helmet>
    </div>
  )
}

export default SignUp
