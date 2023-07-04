"use client";
import Image from 'next/image'
import styles from '../page.module.scss'
import { FC, useState,useContext, useEffect } from 'react'
import { HomeIcon,SkillsIcon,AboutIcon,ProjectsIcon,ModeIcon,ContactIcon } from './icons/icons'
import { ModeContext,ModeContextType } from '../ModeContext';

interface NavProps{
    refHeader: any
    refAbout:any
    refSkills:any
 }

export default function Nav({refHeader,refAbout,refSkills}:NavProps): ReturnType<FC> {
    const [color,setColor]:[string, React.Dispatch<React.SetStateAction<string>>]=useState('')
    const {mode,setMode} = useContext(ModeContext) as ModeContextType
    useEffect(():void=>{
        if (mode){
            setColor('black')
        }
        else{
            setColor('white')
        }
    },[mode])
  return (
    <div className={styles.nav as string}>
        <div className={styles.navOptions as string}>
            <HomeIcon color={color} element={refHeader}/>
            <AboutIcon color={color} element={refAbout}/>
            <SkillsIcon color={color} element={refSkills}/>
            <ProjectsIcon color={color} element={refHeader}/>
            <ContactIcon color={color} element={refHeader}/>
            <ModeIcon color={color} setMode={setMode} />
        </div>
    </div>
  )
}