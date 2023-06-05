import React from 'react'
import Link from 'next/link'
import Markdown from 'react-markdown'
import styles from '../../styles/Main.module.scss'

const NavigationHome = () => {
  return (
    <div className={styles.navHomeContainer}>
        <Link href='/' title='home'>
          <p className={styles.navHomeText}>
            ../
          </p>
        </Link>
    </div>
  )
}

export default NavigationHome
