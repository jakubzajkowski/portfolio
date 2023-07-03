"use client";
import Image from 'next/image'
import styles from './page.module.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ModeContext } from './ModeContext'
import { useState,useRef } from 'react'

export default function Home() {
  const [mode,setMode]:[boolean, React.Dispatch<React.SetStateAction<boolean>>]=useState(true)
  const refHeader=useRef(null)
  const refAbout=useRef(null)
  return (
    <ModeContext.Provider value={{mode,setMode}}>
      <main className={styles.main} style={{backgroundColor:mode ? 'white' : 'black'}}>
        <Header refHeader={refHeader} refAbout={refAbout}/>
        <About refAbout={refAbout}/>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </ModeContext.Provider>
  )
}
