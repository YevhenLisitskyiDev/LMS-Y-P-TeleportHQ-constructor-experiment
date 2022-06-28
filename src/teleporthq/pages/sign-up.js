import React from 'react'
import SignUpForm from '../../widgets/auth/SignUpForm'

import { Helmet } from 'react-helmet'

import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>SignUp - LMS-V2</title>
        <meta property="og:title" content="SignUp - LMS-V2" />
      </Helmet>
      <SignUpForm></SignUpForm>
    </div>
  )
}

export default SignUp
