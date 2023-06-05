import React from 'react'
import Markdown from 'react-markdown'
import NavigationHome from '@/components/NavigationHome'
import { AboutText } from '@/assets/AboutText'
import styles from '../../styles/Main.module.scss'

const aboutText = AboutText

const About = () => {
  return (
    <>
      <div className={styles.markdownContainer}>
        <h1 className={styles.markdownText}>
          <NavigationHome />
          <Markdown linkTarget={'_blank'}>{aboutText}</Markdown>
        </h1>
      </div>
    </>
  )
}
export default About
