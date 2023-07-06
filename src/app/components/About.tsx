import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useContext } from 'react'
import { ModeContext,ModeContextType } from '../ModeContext';
import { Canvas } from '@react-three/fiber';
import Avatar from './Avatar';

interface AboutProps{
    refAbout: any
}

export default function About({refAbout}:AboutProps): ReturnType<FC> {
  const {mode} = useContext(ModeContext) as ModeContextType
  return (
    <div className={styles.about} ref={refAbout}>
        <div className={styles.about__container}>
          <div className={styles.about__svgs}>
            <Canvas className={styles.canvas} style={{backgroundColor:mode ? 'white' : 'black'}} camera={{position:[0,0.5,1.8]}} >
              <ambientLight intensity={0.8} />
            <Avatar loader='./animated_instructor_avatar.glb'/>
          </Canvas>
          </div>
          <p className={styles.about__content} style={{color:mode ? 'black':'white'}}>{"Welcome to my portfolio! I'm Jakub a 20-year-old aspiring developer and recent graduate from an IT technical school. I'm thrilled to share my journey as I dive into the world of technology. Currently, I'm excitedly preparing to pursue a degree in mechatronics at Warsaw University of Technology. My passion lies in coding, and I find great joy in working with JavaScript, React, Node.js, and PHP. These versatile languages have allowed me to bring ideas to life and create dynamic, interactive web applications. I believe in the power of technology to transform lives and solve complex problems.I'm constantly seeking new challenges and opportunities to expand my knowledge and collaborate with others in the tech community. Whether it's designing intuitive user interfaces or building robust backend systems, I'm eager to contribute my skills and make a positive impact. Feel free to reach out if you have any questions or if you're interested in collaborating on exciting projects. Let's connect and create something extraordinary together!"}</p>
        </div>
        <h1 className={styles.about__title}>About Me</h1>
    </div>
  )
}