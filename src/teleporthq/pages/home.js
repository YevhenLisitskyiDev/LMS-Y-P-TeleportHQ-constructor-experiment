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
      <h1>Home page</h1>
      <div>Place holder for widget test</div>
      <div>Place holder for widget test</div>
      <div>Place holder for widget test</div>
      <div>Place holder for widget test</div>
    </div>
  )
}

export default Home
