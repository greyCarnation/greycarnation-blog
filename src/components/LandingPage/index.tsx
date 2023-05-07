import React from 'react'
import Navigaion from '@/components/Navigation'
import styles from '@/styles/Main.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerText}>greyCarnation</h1>
      <Navigaion />
    </div>
  )
}

export default LandingPage
