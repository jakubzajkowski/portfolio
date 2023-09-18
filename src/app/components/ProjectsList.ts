import honeyImg0 from './img/honey_valley_img1.jpg'
import honeyImg1 from './img/honey_valley_img2.jpg'
import appleImg0 from './img/apple_img0.jpg'
import appleImg1 from './img/apple_img1.jpg'
import xchangeImg0 from './img/xchange_img0.jpg'
import xchangeImg1 from './img/xchange_img1.jpg'
import { StaticImageData } from 'next/image'

export interface ProjectListType{
    title: 'Instagram Clone' | 'Apple Clone' | 'xChange Website' | 'Honey Valley'
    img0: StaticImageData 
    img1: StaticImageData 
    text0:string
    text1: string
    gitHub: string | any
    website: string | any
}

export const ProjectList : ProjectListType[] = [
    {
        title: 'Honey Valley',
        img0: honeyImg0,
        img1: honeyImg1,
        text0:"Honey Shop on the Internet this web application allows users to register, log in, and purchase jars of honey.",
        text1: "Front-end: React, Styled-components, Redux, Redux-Thunk, React-router, Back-end: Node.js, Express.js, MySql, JWT token, Prisma, Stripe",
        gitHub: process.env.NEXT_PUBLIC_INSTACLONE_GITHUB_LINK,
        website: process.env.NEXT_PUBLIC_INSTACLONE_LINK
    },
    {
        title: 'Apple Clone',
        img0: appleImg0,
        img1: appleImg1,
        text0:"The Apple Website Clone is a full-stack web application built with TypeScript, Express.js, React, SQL, Stripe, Bootstrap, Styled Components, and JWT token authentication with cookies. This project aims to replicate the design and functionalities of the official Apple website. Users can explore Apple's products, view product details, make purchases using Stripe for payment processing",
        text1: 'Frontend: React, Bootstrap, Styled Components, Backend: Express.js, TypeScript, SQL, Prisma, JWT, Stripe',
        gitHub: process.env.NEXT_PUBLIC_APPLECLONE_GITHUB_LINK,
        website: process.env.NEXT_PUBLIC_APPLECLONE_LINK
    },
    {
        title: 'xChange Website',
        img0: xchangeImg0,
        img1: xchangeImg1,
        text0:'XchangeStock is a web application that allows users to view daily currency prices, explore historical currency charts, and stay updated with the latest news related to currencies. This application is built with PHP Laravel and SQL for the backend, while the frontend utilizes HTML, CSS, Bootstrap, JavaScript, and TypeScript.',
        text1: 'Backend: PHP Laravel, SQL, Frontend: HTML, CSS, Bootstrap, JavaScript',
        gitHub: process.env.NEXT_PUBLIC_XCHANGE_GITHUB_LINK,
        website: process.env.NEXT_PUBLIC_XCHANGE_LINK
    },
     
]

