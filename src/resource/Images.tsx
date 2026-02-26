import laravelIcon from '../assets/icons/laravel.svg'
import expressIcon from '../assets/icons/express.svg'
import reactIcon from '../assets/icons/react.svg'
import postgresqlIcon from '../assets/icons/postgresql.svg'
import gmailIcon from '../assets/icons/gmail.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import gitIcon from '../assets/icons/git.svg'
import nodeJsIcon from '../assets/icons/nodejs.svg'
import mongoDbIcon from '../assets/icons/mongodb.svg'
import mysqlIcon from '../assets/icons/mysql.svg'

import aboutme2 from '../assets/aboutme/aboutme2.jpg'
import aboutme3 from '../assets/aboutme/aboutme3.jpg'
import aboutme2Jpeg from '../assets/aboutme/aboutme2.jpeg'

export const iconMap: Record<string, string> = {
    laravel: laravelIcon,
    express: expressIcon,
    react: reactIcon,
    postgresql: postgresqlIcon,
    gmail: gmailIcon,
    whatsapp: whatsappIcon,
    linkedin: linkedinIcon,
    git: gitIcon,
    nodejs: nodeJsIcon,
    mongodb: mongoDbIcon,
    mysql: mysqlIcon
}

export const imageMap: Record<string, string> = {
    aboutme2,
    aboutme3,
    'aboutme2-jpeg': aboutme2Jpeg,
}