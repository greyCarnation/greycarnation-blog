import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Main.module.scss'

const Navigation = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navItem}>
        <Link href='/music'>
          <p className={styles.navText}>music</p>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href='/socialmedia'>
          <p className={styles.navText}>socialMedia</p>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href='/about'>
          <p className={styles.navText}>about</p>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href='/contact'>
          <p className={styles.navText}>contact</p>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
