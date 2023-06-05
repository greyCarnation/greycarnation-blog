import React from 'react'
import Link from 'next/link'
import NavigationHome from '@/components/NavigationHome'
import styles from '@/styles/Main.module.scss'
import { SocialPlatforms } from '@/assets/SocialMediaObject'

const SocialMediaPage = () => {
  return (
    <>
      <div className={styles.pageHeaderContainer}>
        <h1 className={styles.markdownTextHeadline}>socialMedia_</h1>
        <NavigationHome />
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
