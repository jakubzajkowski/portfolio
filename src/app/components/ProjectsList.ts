import instagramImg0 from './img/instagram_img0.jpg'
import instagramImg1 from './img/instagram_img1.jpg'
import appleImg0 from './img/apple_img0.jpg'
import appleImg1 from './img/apple_img1.jpg'
import xchangeImg0 from './img/xchange_img0.jpg'
import xchangeImg1 from './img/xchange_img1.jpg'
import { StaticImageData } from 'next/image'

export interface ProjectListType{
    title: 'Instagram Clone' | 'Apple Clone' | 'xChange Website'
    img0: StaticImageData 
    img1: StaticImageData 
    text0:string
    text1: string
    gitHub: string | any
    website: string | any
}

export const ProjectList : ProjectListType[] = [
    {
        title: 'Instagram Clone',
        img0: instagramImg0,
        img1: instagramImg1,
        text0:"InstaClone is a feature-rich web application that emulates the core functionalities of the popular social media platform, Instagram. With InstaClone, users can create profiles, share photos, follow other users, and engage with a vibrant community. Whether you're looking to connect with friends, share your creative work, or explore captivating content, InstaClone provides a familiar and enjoyable experience.",
        text1: "Front-end: React,Websockets,CSS Back-end: Node.js, Express.js, MongoDB, Session, Multer, Mongoose",
        gitHub: process.env.NEXT_PUBLIC_INSTACLONE_GITHUB_LINK,
        website: process.env.NEXT_PUBLIC_INSTACLONE_LINK
    },
    {
        title: 'Apple Clone',
        img0: appleImg0,
        img1: appleImg1,
        text0:"The Apple Website Clone is a full-stack web application built with TypeScript, Express.js, React, SQL, Stripe, Bootstrap, Styled Components, and JWT token authentication with cookies. This project aims to replicate the design and functionalities of the official Apple website. Users can explore Apple's products, view product details, make purchases using Stripe for payment processing, and experience a seamless user interface.",
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

