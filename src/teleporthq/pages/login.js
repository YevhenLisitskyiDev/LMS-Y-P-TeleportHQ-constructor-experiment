import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './login.module.css'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Login - Every Gracious Worm</title>
        <meta property="og:title" content="Login - Every Gracious Worm" />
      </Helmet>
      <div>Place holder for widget Login</div>
    </div>
  )
}

export default Login
