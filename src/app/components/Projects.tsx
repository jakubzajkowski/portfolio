import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useContext } from 'react'
import { ModeContext,ModeContextType } from '../ModeContext';
import InstaImg from './img/instagram.jpg'

interface ProjectsProps{
  refProjects: any
}

export default function Projects({refProjects}:ProjectsProps): ReturnType<FC>{
  const {mode} = useContext(ModeContext) as ModeContextType
  return (
    <div className={styles.projects} ref={refProjects} style={{color: mode ? 'black' : 'white'}}>
        <div className={styles.projects__project}>
          <h1 style={{color:'rgb(0, 153, 255)'}}>XchangeStock</h1>
          <p style={{margin:'2rem 0rem'}}>XchangeStock is a powerful web application that provides users with real-time currency prices, historical diagrams, and the latest news related to various currencies. Whether you are a trader, investor, or simply curious about the foreign exchange market, XchangeStock offers a comprehensive platform to stay informed and make well-informed decisions.</p>
          <p><h4>Frontend:</h4> html,Js,css,bootstrap</p>
          <p><h4>Server:</h4> php, laravel</p>
          <p><h4>Database:</h4> sql</p>
          <button className={styles.projects__btnXchange}>Visit Site</button>
          <button className={styles.projects__btnXchange}>Visit GitHub</button>
          <Image style={{display:'block',width:'100%',height:'100%'}} src={InstaImg} alt="xd" />
        </div>
        <div className={styles.projects__project}>
          <h1 style={{color:'rgb(138, 0, 138)'}}>Instagram Clone</h1>
          <p style={{margin:'2rem 0rem'}}>InstaClone is a feature-rich web application that emulates the core functionalities of the popular social media platform, Instagram. With InstaClone, users can create profiles, share photos, follow other users, and engage with a vibrant community. Whether youre looking to connect with friends, share your creative work, or explore captivating content, InstaClone provides a familiar and enjoyable experience.</p>
          <p><h4>Frontend:</h4> js, react</p>
          <p><h4>Server:</h4> js, node.js, express</p>
          <p><h4>Database:</h4> mongoDB</p>
          <button className={styles.projects__btnInsta}>Visit Site</button>
          <button className={styles.projects__btnInsta}>Visit GitHub</button>
          <Image style={{display:'block',width:'100%',height:'100%'}} src={InstaImg} alt="xd" />
        </div>
        <div className={styles.projects__project}>
          <h1 style={{color:'rgb(157, 255, 0)'}}>Apple Clone</h1>
          <p style={{margin:'2rem 0rem'}}>The Apple Website Clone is a web application that faithfully replicates the design and functionality of the official Apple website. It offers users an immersive experience reminiscent of Apples aesthetic and provides access to information about Apple products, services, and the latest news and updates. Whether youre a fan of Apples design philosophy or simply interested in exploring their offerings, the Apple Website Clone offers a familiar environment to engage with the brand.</p>
          <p><h4>Frontend:</h4> js, react</p>
          <p><h4>Server:</h4> ts, node.js, express</p>
          <p><h4>Database:</h4> sql</p>
          <button className={styles.projects__btnApple}>Visit Site</button>
          <button className={styles.projects__btnApple}>Visit GitHub</button>
          <Image style={{display:'block',width:'100%',height:'100%'}} src={InstaImg} alt="xd" />
        </div>
    </div>
  )
}