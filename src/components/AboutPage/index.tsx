import React from 'react'
import Markdown from 'react-markdown'
import NavigationHome from '@/components/NavigationHome'
import { AboutText } from '@/assets/AboutText'
import styles from '../../styles/Main.module.scss'

const aboutText = AboutText

const About = () => {
  return (
    <>
      <div className={styles.pageHeaderContainer}>
        <h1 className={styles.markdownTextHeadline}>about_</h1>
        <NavigationHome />
      </div>
      <div className={styles.markdownContainer}>
        <h1 className={styles.markdownText}>
          <Markdown linkTarget={'_blank'}>{aboutText}</Markdown>
        </h1>
      </div>
    </>
  )
}
export default About
