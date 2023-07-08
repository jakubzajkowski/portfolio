import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useContext } from 'react'
import { ModeContext,ModeContextType } from '../ModeContext';
import { motion } from 'framer-motion';
import InstaImg from './img/instagram.jpg'
import XchangeImg from './img/xchange.jpg'
import AppleImg from './img/apple.jpg'

interface ProjectsProps{
  refProjects: any
}

export default function Projects({refProjects}:ProjectsProps): ReturnType<FC>{
  const {mode} = useContext(ModeContext) as ModeContextType
  return (
    <div className={styles.projects} ref={refProjects} style={{color: mode ? 'black' : 'white'}}>
      <div className={styles.projects__left}>
        <h1>{"Let Me Show You My Projects"}</h1>
      </div>
      <div className={styles.projects__right}>
        <motion.div className={styles.projects__rigth__project}  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:0.8,delay:0.3}}>
          <h1>Instagram Website Clone</h1>
          <p style={{margin:'2rem 0 2rem 0'}}>InstaClone is a feature-rich web application that emulates the core functionalities of the popular social media platform, Instagram. With InstaClone, users can create profiles, share photos, follow other users, and engage with a vibrant community.</p>
          <button className={styles.projects__rigth__project_btn}>Explore</button>
          <Image className={styles.projects__rigth__project_img} src={InstaImg} alt='insta'/>
        </motion.div>
        <motion.div className={styles.projects__rigth__project} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:0.8,delay:0.3}}>
          <h1>Apple Website Clone</h1>
          <p style={{margin:'2rem 0 2rem 0'}}>This project aims to replicate the design and functionalities of the official Apple website. Users can explore Apples products, view product details, make purchases using Stripe for payment processing, and experience a seamless user interface.</p>
          <button className={styles.projects__rigth__project_btn}>Explore</button>
          <Image className={styles.projects__rigth__project_img} src={AppleImg} alt='insta'/>
        </motion.div>
        <motion.div className={styles.projects__rigth__project} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:0.8,delay:0.3}}>
          <h1>XChange Website</h1>
          <p style={{margin:'2rem 0 2rem 0'}}>XchangeStock is a web application that allows users to view daily currency prices, explore historical currency charts, and stay updated with the latest news related to currencies.</p>
          <button className={styles.projects__rigth__project_btn}>Explore</button>
          <Image className={styles.projects__rigth__project_img} src={XchangeImg} alt='insta'/>
        </motion.div>
      </div>
    </div>
  )
}