import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Every Gracious Worm</title>
        <meta property="og:title" content="Every Gracious Worm" />
      </Helmet>
    </div>
  )
}

export default Home
