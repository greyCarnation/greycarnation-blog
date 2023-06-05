import React from 'react'
import Markdown from 'react-markdown'
import NavigationHome from '@/components/NavigationHome'
import { ContactText } from '@/assets/ContactText'
import styles from '../../styles/Main.module.scss'

const contactText = ContactText

const About = () => {
  return (
    <>
      <div className={styles.pageHeaderContainer}>
        <h1 className={styles.markdownTextHeadline}>contact_</h1>
        <NavigationHome />
      </div>
      <div className={styles.markdownContainer}>
        <h1 className={styles.markdownText}>
          <Markdown linkTarget={'_blank'}>{contactText}</Markdown>
        </h1>
      </div>
    </>
  )
}
export default About
