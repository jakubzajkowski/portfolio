/* eslint-disable @next/next/no-img-element */
"use client";
import styles from '../page.module.scss'
import { FC } from 'react'
import { ProjectListType } from './ProjectsList';

interface ProjectModalProps{
  setIsModal:React.Dispatch<React.SetStateAction<boolean>>
  isModal: boolean,
  content: ProjectListType
}

export default function ProjectModal({setIsModal,isModal,content}:ProjectModalProps): ReturnType<FC> {
  return <div className={styles.projects__modal}>
       <svg className={styles.projects__modal__close} onClick={()=>setIsModal(false)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
    <h1 style={{fontSize:'50px'}}>{content.title}</h1>
    <div className={styles.projects__modal__container}>
      <img src={content.img0.src} alt="insta" className={styles.projects__modal__img} />
      <p className={styles.projects__modal__text}>{content.text0}</p>
      <img src={content.img1.src} alt="insta" className={styles.projects__modal__img} />
      <p className={styles.projects__modal__text}>{content.text1}</p>
      <div className={styles.projects__modal__btns}>
        <a target='_blank' href={content.website} style={{color:'white',textDecoration:'none'}}><button className={styles.projects__modal_btn}>Visit Website</button></a>
        <a target='_blank' href={content.gitHub} style={{color:'white',textDecoration:'none'}}><button className={styles.projects__modal_btn}>Visit GitHub</button></a>
      </div>
    </div>
   </div>
}