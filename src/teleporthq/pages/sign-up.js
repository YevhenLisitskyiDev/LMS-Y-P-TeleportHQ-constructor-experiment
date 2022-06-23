import React from 'react'
import SignUpForm from '../../widgets/SignUpForm'

import { Helmet } from 'react-helmet'

import styles from './sign-up.module.css'

const SignUp = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>SignUp - LMS-V2</title>
        <meta property="og:title" content="SignUp - LMS-V2" />
      </Helmet>
      <SignUpForm></SignUpForm>
    </div>
  )
}

export default SignUp
