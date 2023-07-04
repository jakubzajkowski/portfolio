import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useContext } from 'react'
import { ModeContext,ModeContextType } from '../ModeContext';

interface AboutProps{
    refAbout: any
}

export default function About({refAbout}:AboutProps): ReturnType<FC> {
  const {mode} = useContext(ModeContext) as ModeContextType
  return (
    <div className={styles.about} ref={refAbout}>
        <div className={styles.about__container}>
          <div className={styles.about__svgs}>
            <svg style={{width:'150px',height:'150px',fill:mode ? 'black':'white'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
            <svg style={{width:'150px',height:'150px',fill:mode ? 'black':'white'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"/></svg>
          </div>
          <p className={styles.about__content} style={{color:mode ? 'black':'white'}}>{"Welcome to my portfolio! I'm Jakub a 20-year-old aspiring developer and recent graduate from an IT technical school. I'm thrilled to share my journey as I dive into the world of technology. Currently, I'm excitedly preparing to pursue a degree in mechatronics at Warsaw University of Technology. My passion lies in coding, and I find great joy in working with JavaScript, React, Node.js, and PHP. These versatile languages have allowed me to bring ideas to life and create dynamic, interactive web applications. I believe in the power of technology to transform lives and solve complex problems.I'm constantly seeking new challenges and opportunities to expand my knowledge and collaborate with others in the tech community. Whether it's designing intuitive user interfaces or building robust backend systems, I'm eager to contribute my skills and make a positive impact. Feel free to reach out if you have any questions or if you're interested in collaborating on exciting projects. Let's connect and create something extraordinary together!"}</p>
        </div>
        <h1 className={styles.about__title}>About Me</h1>
    </div>
  )
}