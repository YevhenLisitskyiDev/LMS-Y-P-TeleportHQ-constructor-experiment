import React from 'react'
import LoginForm from '../../widgets/LoginForm'
import ShowAuthState from '../../widgets/ShowAuthState'

import { Helmet } from 'react-helmet'

import styles from './login.module.css'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Login - LMS-V2</title>
        <meta property="og:title" content="Login - LMS-V2" />
      </Helmet>
      <LoginForm></LoginForm>
      <ShowAuthState></ShowAuthState>
    </div>
  )
}

export default Login
