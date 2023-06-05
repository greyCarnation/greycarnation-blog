import React from 'react'
import Markdown from 'react-markdown'
import NavigationHome from '@/components/NavigationHome'
import { ContactText } from '@/assets/ContactText'
import styles from '../../styles/Main.module.scss'

const contactText = ContactText

const About = () => {
  return (
    <>
      <div className={styles.markdownContainer}>
        <h1 className={styles.markdownText}>
          <NavigationHome />
          <Markdown linkTarget={'_blank'}>{contactText}</Markdown>
        </h1>
      </div>
    </>
  )
}
export default About
