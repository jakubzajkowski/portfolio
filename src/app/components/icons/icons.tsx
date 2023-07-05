import React from "react";
import { motion } from "framer-motion";

interface StyleIconsType {
    width: string
    height: string
    cursor: string
    fill: string
}
interface IconProps{
    color : string
    element: any
}
interface IconModeProps{
    color : string
    setMode: React.Dispatch<React.SetStateAction<boolean>>
}


export const HomeIcon:React.FC<IconProps>=({color,element})=>{
    const styleIcons:StyleIconsType={width:'25px',height:'25px',fill:color,cursor:'pointer'}
    const executeScroll = () => element.current.scrollIntoView();
    return <motion.svg whileHover={{scale:'1.1'}} initial={{opacity:0}} animate={{opacity:1,y:['-100%','0%'],fill:color}} transition={{duration:'0.05',ease:'easeInOut'}} style={styleIcons} onClick={executeScroll} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></motion.svg>
}

export const AboutIcon:React.FC<IconProps>=({color,element})=>{
    const styleIcons:StyleIconsType={width:'25px',height:'25px',fill:color,cursor:'pointer'}
    const executeScroll = () => element.current.scrollIntoView();
    return <motion.svg whileHover={{scale:'1.1'}} initial={{opacity:0}} animate={{opacity:1,y:['-100%','0%'],fill:color}} transition={{duration:'0.1',ease:'easeInOut'}}  style={styleIcons} onClick={executeScroll} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></motion.svg>
}
export const SkillsIcon:React.FC<IconProps>=({color,element})=>{
    const styleIcons:StyleIconsType={width:'25px',height:'25px',fill:color,cursor:'pointer'}
    const executeScroll = () => element.current.scrollIntoView();
    return <motion.svg whileHover={{scale:'1.1'}} initial={{opacity:0}} animate={{opacity:1,y:['-100%','0%'],fill:color}} transition={{duration:'0.15',ease:'easeInOut'}} style={styleIcons} onClick={executeScroll} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></motion.svg>
}
export const ProjectsIcon:React.FC<IconProps>=({color,element})=>{
    const styleIcons:StyleIconsType={width:'25px',height:'25px',fill:color,cursor:'pointer'}
    const executeScroll = () => element.current.scrollIntoView();
    return <motion.svg whileHover={{scale:'1.1'}} initial={{opacity:0}} animate={{opacity:1,y:['-100%','0%'],fill:color}} transition={{duration:'0.2',ease:'easeInOut'}} style={styleIcons} onClick={executeScroll} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"/></motion.svg>
}
export const ContactIcon:React.FC<IconProps>=({color,element})=>{
    const styleIcons:StyleIconsType={width:'25px',height:'25px',fill:color,cursor:'pointer'}
    const executeScroll = () => element.current.scrollIntoView();
    return <motion.svg whileHover={{scale:'1.1'}} initial={{opacity:0}} animate={{opacity:1,y:['-100%','0%'],fill:color}} transition={{duration:'0.25',ease:'easeInOut'}} style={styleIcons} onClick={executeScroll} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></motion.svg>
}
export const ModeIcon:React.FC<IconModeProps>=({color,setMode})=>{
    const styleIcons:StyleIconsType={width:'25px',height:'25px',fill:color,cursor:'pointer'}
    return <motion.svg whileHover={{scale:'1.1'}} initial={{opacity:0}} animate={{opacity:1,y:['-100%','0%'],fill:color}} transition={{duration:'0.3',ease:'easeInOut'}} style={styleIcons} onClick={()=>setMode(state=>!state)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></motion.svg>
}