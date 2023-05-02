import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Main.module.scss'

const Navigation = () => {
  return (
    <div className={styles.containerNavbar}>
      <div className={styles.gridNavbar}>
        <div className={styles.itemNavbar}>
          <Link href='/music'>
            <p className={styles.textNav}>music</p>
          </Link>
        </div>
        <div className={styles.itemNavbar}>
          <Link href='/about'>
            <p className={styles.textNav}>about</p>
          </Link>
        </div>
        <div className={styles.itemNavbar}>
          <Link href='/socialmedia'>
            <p className={styles.textNav}>socialMedia</p>
          </Link>
        </div>
        <div className={styles.itemNavbar}>
          <Link href='/contact'>
            <p className={styles.textNav}>contact</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
