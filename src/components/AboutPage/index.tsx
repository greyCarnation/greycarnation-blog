import React from 'react'
import Markdown from 'react-markdown'
import { AboutText } from '@/assets/AboutText'
import styles from '../../styles/Main.module.scss'

const aboutText = AboutText

const About = () => {
  return (
    <>
      <div className={styles.postBody}>
        <Markdown linkTarget={'_blank'}>{aboutText}</Markdown>
      </div>
    </>
  )
}
export default About
