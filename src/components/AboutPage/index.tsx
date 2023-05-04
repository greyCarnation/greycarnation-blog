import React from 'react'
import Markdown from 'react-markdown'
import { AboutText } from '@/assets/AboutText'
import styles from '../../styles/Main.module.scss'

const aboutText = AboutText

const About = () => {
  return (
    <>
      <div className={styles.containerMarkdown}>
        <p className={styles.textMarkdown}>
          <Markdown linkTarget={'_blank'}>{aboutText}</Markdown>
        </p>
      </div>
    </>
  )
}
export default About
