import React from 'react'
import Navigaion from '@/components/Navigation'
import styles from '@/styles/Main.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.containerHeader}>
      <p className={styles.textHeader}>greyCarnation</p>
      <Navigaion />
    </div>
  )
}

export default LandingPage
