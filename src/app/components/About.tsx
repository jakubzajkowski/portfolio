import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useContext,useState,useEffect } from 'react'
import { ModeContext,ModeContextType } from '../ModeContext';
import { Parallax } from 'react-scroll-parallax';
//""
interface AboutProps{
    refAbout: any
}

export default function About({refAbout}:AboutProps): ReturnType<FC> {
  const {mode,setMode} = useContext(ModeContext) as ModeContextType
  const [enterBlack,setEnterBlack]:[boolean, React.Dispatch<React.SetStateAction<boolean>>]=useState(false)
  useEffect(()=>{
    if (enterBlack){
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
          <h1 className={styles.about__slides}>Welcome to my Story!</h1>
        </Parallax>
        <Parallax speed={20} >
          <h1 className={styles.about__slides}>{"I'm Jakub a 20-year-old aspiring developer and recent graduate from an IT technical school."}</h1>
        </Parallax>
        <Parallax speed={-25} scale={[0,1]} opacity={[0,1]} >
          <h1 className={styles.about__slides}>{"I'm thrilled to share my journey as I dive into the world of technology. Currently, I'm excitedly preparing to pursue a degree in applied computer science at Warsaw University of Technology."}</h1>
        </Parallax>
        <Parallax speed={-25} scale={[0,1]} >
          <h1 className={styles.about__slides}>{"My passion lies in coding, and I find great joy in working with JavaScript, React, Node.js, and PHP. These versatile languages have allowed me to bring ideas to life and create dynamic, interactive web applications. I believe in the power of technology to transform lives and solve complex problems."}</h1>
        </Parallax>
        <Parallax speed={20} opacity={[0.5,1]}>
          <h1 className={styles.about__slides}>{"I'm constantly seeking new challenges and opportunities to expand my knowledge and collaborate with others in the tech community. Whether it's designing intuitive user interfaces or building robust backend systems, I'm eager to contribute my skills and make a positive impact. Feel free to reach out if you have any questions or if you're interested in collaborating on exciting projects. Let's connect and create something extraordinary together!"}</h1>
        </Parallax>
        <Parallax speed={20} opacity={[0,1]} >
          <h1 className={styles.about__slides_section_ending}>My Skills</h1>
        </Parallax>
     </Parallax>
    </div>
  )
}