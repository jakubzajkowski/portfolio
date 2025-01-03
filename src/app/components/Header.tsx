"use client";
import styles from '../page.module.scss'
import { FC,useContext,useEffect,useState } from 'react'
import Nav from './Nav'
import { Canvas} from '@react-three/fiber'
import Model from './Model';
import { ModeContext,ModeContextType } from '../ModeContext';

interface HeaderProps{
   refHeader: any
   refAbout: any
   refSkills: any
   refProjects: any
   refContact: any
}

export default function Header({refContact,refHeader,refAbout,refSkills,refProjects}:HeaderProps): ReturnType<FC> {
  const {mode} = useContext(ModeContext) as ModeContextType
  const [mobile,setMobile]:[boolean, React.Dispatch<React.SetStateAction<boolean>>]=useState(false)
  useEffect(()=>{
    if (typeof window != "undefined") {
      setMobile(window.matchMedia("(max-width: 950px)").matches)
    }
  })
  return (
    <div className={styles.header} ref={refHeader}>
        <Nav refContact={refContact} refHeader={refHeader} refAbout={refAbout} refSkills={refSkills} refProjects={refProjects}/>
        <div className={styles.canvasContainer}>
          <Canvas className={styles.canvas} style={{backgroundColor:mode ? 'white' : 'black'}} camera={{position:[0,0.3,0.8]}} >
          <pointLight position={[0,1,0]} />
          <Model loader='./macbook_air_m1_chip_silver.glb'/>
          </Canvas>
        </div>
        <div className={styles.header__title} style={{color:mode ? 'black' : 'white'}}>
            <p>{"Hello I'm"}</p>
            <h1 style={{fontSize:mobile ? '40px':'60px'}}>Jakub</h1>
            <h1 style={{fontSize:mobile ? '60px' : '80px'}}>Zajkowski</h1>
            <p>{"I'm a passionate software developer with experience in Open Source projects"}</p>
            <p>{"Programming is one of my biggest hobby"}</p>
        </div>
    </div>
  )
}