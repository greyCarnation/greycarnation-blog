import React from 'react'
import Markdown from 'react-markdown'
import ProjectList from '@/components/ProjectList'
import styles from '@/styles/Main.module.scss'

const MusicPage = () => {
  return (
    <>
      <div className={styles.markdownContainer}>
        <p className={styles.markdownText}>
          <Markdown># __music___</Markdown>
        </p>
      </div>
      <ProjectList />
    </>
  )
}

export default MusicPage
