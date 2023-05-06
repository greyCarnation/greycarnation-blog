import React from 'react'
import styles from '@/styles/Main.module.scss'
import { Projects } from '@/assets/ProjectObject'
import Project from '@/components/Project'

const ItemGrid = () => {
  return (
    <div className={styles.projectsGridContainer}>
      {Projects.map((project: any, id: number) => {
        return (
          <>
            <Project key={id} project={project} />
          </>
        )
      })}
    </div>
  )
}

export default ItemGrid
