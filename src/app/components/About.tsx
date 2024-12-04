import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useContext,useState,useEffect } from 'react'
import { ModeContext,ModeContextType } from '../ModeContext';
import { Parallax } from 'react-scroll-parallax';
interface AboutProps{
    refAbout: any
}

export default function About({refAbout}:AboutProps): ReturnType<FC> {
  const {mode,setMode} = useContext(ModeContext) as ModeContextType
  const [enterBlack,setEnterBlack]:[boolean, React.Dispatch<React.SetStateAction<boolean>>]=useState(false)
  useEffect(()=>{
    if (enterBlack && mode==true){
      setMode(false)
    }
    else{
      setMode(true)
    }
  },[enterBlack])
  
  return (
    <div className={styles.about} ref={refAbout} style={{color:mode ? 'black':'white'}}>
      <Parallax onEnter={() => setEnterBlack(true)} onExit={() => setEnterBlack(false)}>
        <Parallax speed={20}  opacity={[0,1]}>
          <h1 className={styles.about__slides_section_ending}>About me</h1>
        </Parallax>
        <Parallax speed={50} scale={[0.05,1.2]} >
          <h1 className={styles.about__slides}>{"Currently, I am pursuing a degree in Computer Science at the Warsaw University of Technology, where I deepen my knowledge and apply it to real-world challenges."}</h1>
        </Parallax>
        <Parallax speed={20} >
          <h1 className={styles.about__slides}>{"I have experience working on various projects, including the development and enhancement of web applications, plugins, and APIs using technologies such as React, Java, PHP, and JavaScript. "}</h1>
        </Parallax>
        <Parallax speed={-25} opacity={[0,1]} >
          <h1 className={styles.about__slides}>{"I contributed to the development of the Lizmap platforms and worked on a plugin for GeoServer, I also played a role in a project for the Institute of Forest Research (IBL), where I developed a React PWA application and contributed to the geospatial portal website"}</h1>
        </Parallax>
        <Parallax speed={20} opacity={[0.5,1]}>
          <h1 className={styles.about__slides}>{"Driven by my passion for programming, I am always eager to learn, grow, and contribute to meaningful projects that push the boundaries of technology."}</h1>
        </Parallax>
        <Parallax speed={20} opacity={[0,1]} >
          <h1 className={styles.about__slides_section_ending}>My Skills</h1>
        </Parallax>
     </Parallax>
    </div>
  )
}