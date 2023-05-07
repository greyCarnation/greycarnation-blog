import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Main.module.scss'

const Project = ({ project }: any) => {
  //  const ROUTE_POST_ID = 'music/[project.name]'
  return (
    <>
      <div className={styles.projectsItemContainer}>
        <div className={styles.projectImageContainer}>
          <Link target='_blank' href={project.link.bandcamp}>
            <img src={project.imageURL} alt={project.title} />
          </Link>
        </div>
        <div className={styles.projectTextContainer}>
          <p className={styles.projectText}>
            title_: {project.title}
            <br />
            releaseDate_: {project.releaseDate}
            <br />
            streaming_:
          </p>
          <p className={styles.projectLinksText}>
            <Link target='_blank' href={project.link.audiomack}>
              audiomack
            </Link>
            <br />
            <Link target='_blank' href={project.link.bandcamp}>
              bandcamp
            </Link>
            <br />
            <Link target='_blank' href={project.link.soundcloud}>
              soundcloud
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Project
