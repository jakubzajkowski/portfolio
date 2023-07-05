import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useContext } from 'react'
import { SkillListType } from './SkillList'
import { ModeContext,ModeContextType } from '../ModeContext';
import {motion} from 'framer-motion'
import CircularProgress from '@mui/material/CircularProgress';

interface SkillProps extends SkillListType{}


export default function Skill({img,title,desc,level}:SkillProps): ReturnType<FC> {
  const {mode} = useContext(ModeContext) as ModeContextType
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:'0.5'}} className={styles.skills__skill} style={{color:mode ? 'black' : 'white',border:mode ? '1px solid black' : '1px solid white'}}>
        <svg style={{width:'80px',height:'50px',fill:mode ? 'black' : 'white'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{img}</svg>
        {(level==1) ? '' : <CircularProgress variant="determinate" style={{margin:'0 1rem'}} value={level} />}
        <h1>{title}</h1>
        <p>{desc}</p>
    </motion.div>
  )
}