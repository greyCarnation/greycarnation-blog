import React from 'react'
import Link from 'next/link'
import Markdown from 'react-markdown'
import styles from '@/styles/Main.module.scss'
import { SocialPlatforms } from '@/assets/SocialMediaObject'

const SocialMediaPage = () => {
  return (
    <>
      <div className={styles.markdownContainer}>
        <h1 className={styles.markdownText}>
          <Markdown># __socialMedia___</Markdown>
        </h1>
      </div>
      {SocialPlatforms.map((socialPlatfrom: any, id: number) => {
        return (
          <>
            <Link target='_blank' href={socialPlatfrom.link}>
              <div className={styles.markdownContainer}>
                <p className={styles.markdownText}>{socialPlatfrom.platform}</p>
              </div>
            </Link>
          </>
        )
      })}
    </>
  )
}

export default SocialMediaPage
