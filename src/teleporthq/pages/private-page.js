import React from 'react'

import { Helmet } from 'react-helmet'

import './private-page.css'

const PrivatePage = (props) => {
  return (
    <div className="private-page-container">
      <Helmet>
        <title>PrivatePage - LMS-V2</title>
        <meta property="og:title" content="PrivatePage - LMS-V2" />
      </Helmet>
      <h1>Private Route</h1>
    </div>
  )
}

export default PrivatePage
