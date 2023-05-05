import React from 'react'
import Markdown from 'react-markdown'
import { ContactText } from '@/assets/ContactText'
import styles from '../../styles/Main.module.scss'

const contactText = ContactText

const About = () => {
  return (
    <>
      <div className={styles.containerMarkdown}>
        <p className={styles.textMarkdown}>
          <Markdown linkTarget={'_blank'}>{contactText}</Markdown>
        </p>
      </div>
    </>
  )
}
export default About
