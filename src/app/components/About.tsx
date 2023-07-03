import Image from 'next/image'
import styles from '../page.module.scss'
import { FC } from 'react'

interface AboutProps{
    refAbout: any
}

export default function About({refAbout}:AboutProps): ReturnType<FC> {
  return (
    <div className={styles.about} ref={refAbout}>
      
    </div>
  )
}