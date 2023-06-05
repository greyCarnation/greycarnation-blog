import React from 'react'
import NavigationHome from '@/components/NavigationHome'
import ProjectList from '@/components/ProjectList'
import styles from '@/styles/Main.module.scss'

const MusicPage = () => {
  return (
    <>
      <div className={styles.pageHeaderContainer}>
        <h1 className={styles.markdownTextHeadline}>music_</h1>
        <NavigationHome />
      </div>
      <ProjectList />
    </>
  )
}

export default MusicPage
