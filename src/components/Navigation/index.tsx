import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Main.module.scss'

const Navigation = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarGrid}>
        <div className={styles.navbarItem}>
          <Link href='/music'>
            <p className={styles.navbarText}>music</p>
          </Link>
        </div>
        <div className={styles.navbarItem}>
          <Link href='/socialmedia'>
            <p className={styles.navbarText}>socialMedia</p>
          </Link>
        </div>
        <div className={styles.navbarItem}>
          <Link href='/about'>
            <p className={styles.navbarText}>about</p>
          </Link>
        </div>
        <div className={styles.navbarItem}>
          <Link href='/contact'>
            <p className={styles.navbarText}>contact</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
