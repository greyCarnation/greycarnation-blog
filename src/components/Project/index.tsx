import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Main.module.scss'

const Project = ({ project }: any) => {
//  const ROUTE_POST_ID = 'music/[project.name]'
  return (
    <>
      <div className={styles.projectsItemContainer}>
        <div className={styles.projectImageContainer}></div>
        <div className={styles.projectTextContainer}>
          <div className={styles.projectText}>
           {project.name}
           {project.releaseDate}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
