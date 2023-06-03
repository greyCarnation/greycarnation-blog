
import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Main.module.scss'

const NavigationHome = () => {
  return (
    <div>
      <Link href='/'>
        <p className={styles.navHome}>../</p>
      </Link>
    </div>
  )
}

export default NavigationHome
