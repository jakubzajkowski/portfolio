import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useContext,useState,useEffect} from 'react'
import { ModeContext,ModeContextType } from '../ModeContext';
import HoneyShop from './img/honey_valley_img0.jpg'
import XchangeImg from './img/xchange.jpg'
import AppleImg from './img/apple.jpg'
import ProjectModal from './ProjectModal';
import { motion,AnimatePresence } from 'framer-motion';
import { ProjectList,ProjectListType } from './ProjectsList';

interface ProjectsProps{
  refProjects: any
}

export default function Projects({refProjects}:ProjectsProps): ReturnType<FC>{
  const [isModal,setIsModal]=useState(false)
  const [modalContent,setModalContent]:[ProjectListType[],React.Dispatch<React.SetStateAction<ProjectListType[]>>]=useState(ProjectList)
  const {mode} = useContext(ModeContext) as ModeContextType

  useEffect(()=>{
    isModal ? document.body.style.overflowY='hidden' : document.body.style.overflowY='auto'
    console.log(modalContent)
  },[isModal])

  const handelModal=(title:string):void=>{
    const content:ProjectListType[] = ProjectList.filter(el=>el.title===title).map(x=>x)
    setModalContent(content)
    setIsModal(true)
  }

  return (<>
    {isModal && <ProjectModal setIsModal={setIsModal} content={modalContent[0]} isModal={isModal}/>}
    <div className={styles.projects} ref={refProjects} style={{color: mode ? 'black' : 'white'}}>
      <div className={styles.projects__left}>
        <h1>{"Let Me Show You My Projects"}</h1>
      </div>
      <div className={styles.projects__right}>
        <motion.div className={styles.projects__rigth__project}  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:0.8,delay:0.3}}>
          <h1>Instagram Website Clone</h1>
          <p style={{margin:'2rem 0 2rem 0'}}>InstaClone is a feature-rich web application that emulates the core functionalities of the popular social media platform, Instagram. With InstaClone, users can create profiles, share photos, follow other users, and engage with a vibrant community.</p>
          <p style={{fontSize:'0.8rem',margin: '1rem 0'}}>To load app sometimes can take time because this instance types will spin down with inactivity.</p>
          <button className={styles.projects__rigth__project_btn} onClick={()=>handelModal('Instagram Clone')}>Explore</button>
          <Image className={styles.projects__rigth__project_img} src={HoneyShop} alt='insta'/>
        </motion.div>
        <motion.div className={styles.projects__rigth__project} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:0.8,delay:0.3}}>
          <h1>Apple Website Clone</h1>
          <p style={{margin:'2rem 0 2rem 0'}}>This project aims to replicate the design and functionalities of the official Apple website. Users can explore Apples products, view product details, make purchases using Stripe for payment processing, and experience a seamless user interface.</p>
          <p style={{fontSize:'0.8rem',margin: '1rem 0'}}>To load app sometimes can take time because this instance types will spin down with inactivity.</p>
          <button className={styles.projects__rigth__project_btn} onClick={()=>handelModal('Apple Clone')}>Explore</button>
          <Image className={styles.projects__rigth__project_img} src={AppleImg} alt='insta'/>
        </motion.div>
        <motion.div className={styles.projects__rigth__project} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:0.8,delay:0.3}}>
          <h1>XChange Website</h1>
          <p style={{margin:'2rem 0 2rem 0'}}>XchangeStock is a web application that allows users to view daily currency prices, explore historical currency charts, and stay updated with the latest news related to currencies. Built with php laravel and mysql</p>
          <button className={styles.projects__rigth__project_btn}>Working on</button>
          <Image className={styles.projects__rigth__project_img} src={XchangeImg} alt='insta'/>
        </motion.div>
      </div>
    </div>
    </>
  )
}