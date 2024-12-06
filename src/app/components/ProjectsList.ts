import honeyImg0 from './img/honey_valley_img1.jpg'
import honeyImg1 from './img/honey_valley_img2.jpg'
import appleImg0 from './img/apple_img0.jpg'
import appleImg1 from './img/apple_img1.jpg'
import xchangeImg0 from './img/xchange_img0.jpg'
import xchangeImg1 from './img/xchange_img1.jpg'
import { StaticImageData } from 'next/image'

export interface ProjectListType{
    title: 'Instagram Clone' | 'Apple Clone' | 'xChange Website' | 'Honey Valley' | 'arimr' | 'pwa' | 'geoportal'
    img0: StaticImageData | null
    img1: StaticImageData | null
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
    {
        title: 'arimr',
        img0: null,
        img1: null,
        text0:"I participated in the development of a custom authorization plugin for the Agricultural Market Agency (ARiMR), integrated with the ArcGIS system. The plugin, built using Spring Boot and Java, employed a filter that decoded user cookies from the ArcGIS system, enabling secure authorization to access specific resources. My role in the project involved working on the backend functionality and ensuring seamless integration with the existing infrastructure, allowing the system to efficiently handle user authentication and data access permissions.",
        text1: "Java, Spring Boot, ArcGis, Http Filters",
        gitHub: null,
        website: null
    },
    {
        title: 'geoportal',
        img0: null,
        img1: null,
        text0:"As part of a project for the Institute of Forest Research (IBL), I contributed to the development and modification of the Lizmapa geoportal. The project involved enhancing the functionality of the open-source Lizmapa platform, which is used for publishing and managing geospatial data. My responsibilities included customizing the platform's features, improving user interaction, interface, and optimizing the integration with geospatial services",
        text1: "Lizmap, PHP, Jelix, Javascript, Docker, Postgres, Css, Templates",
        gitHub: null,
        website: null
    },
    {
        title: 'pwa',
        img0: null,
        img1: null,
        text0:"In a project for the Institute of Forest Research (IBL), I developed a Progressive Web Application (PWA) using React. The app was designed to improve access to forestry data collected through drone imagery. I worked on building a responsive, high-performance user interface, ensuring the app's smooth functionality across multiple devices, even in offline scenarios. The PWA was integrated with various geospatial data sources and optimized for fast performance, allowing IBL to efficiently analyze and interact with aerial images of forest areas.",
        text1: "Typescript, React, PWA, Css, Openlayers",
        gitHub: null,
        website: null
    }
     
]

