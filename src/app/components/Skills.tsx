import Image from 'next/image'
import styles from '../page.module.scss'
import { FC,useState} from 'react'
import Skill from './Skill'
import { SkillList,SoftSkillList} from './SkillList'

interface SkillsProps{
  refSkills: any
}

export default function Skills({refSkills}:SkillsProps): ReturnType<FC> {
  const [skills,setSkills]:[boolean,React.Dispatch<React.SetStateAction<boolean>>]=useState(true)
  return (
    <div className={styles.skills} ref={refSkills}>
      <div className={styles.skills__buttons}>
        <button className={skills ? styles['skills__button--active'] : styles.skills__button} onClick={():void=>setSkills(true)}>Coding Skills</button>
        <button className={skills ? styles.skills__button : styles['skills__button--active']} onClick={():void=>setSkills(false)}>Soft Skills</button>
      </div>
      <div className={styles.skills__content}>{
        skills ? 
          SkillList.map(skill=><Skill level={skill.level} key={skill.title} img={skill.img} desc={skill.desc} title={skill.title}/>)
          : 
          SoftSkillList.map(skill=><Skill level={1} key={skill.title} img={skill.img} desc={skill.desc} title={skill.title}/>)
      }
      </div>
    </div>
  )
}