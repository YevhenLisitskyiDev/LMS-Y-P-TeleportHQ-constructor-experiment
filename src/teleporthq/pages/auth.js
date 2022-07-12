import React from 'react'
import AuthForm from '../../widgets/auth/AuthForm'

import { Helmet } from 'react-helmet'

import './auth.css'

const Auth = (props) => {
  return (
    <div className="auth-container">
      <Helmet>
        <title>Auth - LMS-V2</title>
        <meta property="og:title" content="Auth - LMS-V2" />
      </Helmet>
      <div className="auth-container1">
        <AuthForm></AuthForm>
      </div>
    </div>
  )
}

export default Auth
