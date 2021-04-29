import React from 'react'
import {
  SiPostgresql,
  SiDjango,
  SiHtml5,
  SiBootstrap,
  SiReact,
  SiCss3,
  SiAmazonaws,
  SiHeroku,
  SiGit,
  SiDocker,
  SiRedux,
  SiPython,
  SiJavascript,
  SiJava,
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { AiFillApi } from 'react-icons/ai'
const data = [
  {
    id: 1,
    icon: <SiHtml5 />,
    category: 'frontend',
    colorcode: '#e34c26',
    text: 'HTML5',
  },
  {
    id: 2,
    icon: <SiCss3 />,
    category: 'frontend',
    colorcode: '#1579b8',

    text: 'CSS3',
  },
  {
    id: 3,
    icon: <SiBootstrap />,
    category: 'frontend',
    colorcode: '#613f90',

    text: 'Bootstrap',
  },
  {
    id: 4,
    icon: <SiReact />,
    category: 'frontend',
    colorcode: '#48cef7',

    text: 'Reactjs',
  },
  {
    id: 5,
    icon: <SiRedux />,
    category: 'frontend',
    colorcode: '#764abc',

    text: 'Redux',
  },

  {
    id: 6,
    icon: <SiPython />,
    category: 'backend',
    colorcode: '#4B8BBE',

    text: 'Python',
  },
  {
    id: 7,
    icon: <SiDjango />,
    category: 'backend',
    colorcode: '#092e20',

    text: 'Django',
  },
  {
    id: 8,
    icon: <GrMysql />,
    category: 'backend',
    colorcode: '#F29111',

    text: 'MySQL',
  },
  {
    id: 9,
    icon: <SiPostgresql />,
    category: 'backend',
    colorcode: '#336791',

    text: 'PostgreSQL',
  },

  {
    id: 10,
    icon: <SiAmazonaws />,
    category: 'other',
    colorcode: '#FF9900',

    text: 'AWS: S3/RDS/EC2',
  },
  {
    id: 11,
    icon: <SiHeroku />,
    category: 'other',
    colorcode: '#6567a5',

    text: 'Heroku',
  },
  {
    id: 12,
    icon: <SiDocker />,
    category: 'other',
    colorcode: '#0db7ed',

    text: 'Docker',
  },
  {
    id: 13,
    icon: <SiGit />,
    category: 'other',
    colorcode: '#e34c26',

    text: 'Git',
  },
  {
    id: 14,
    icon: <SiJavascript />,
    category: 'frontend',
    colorcode: '#00000',
    text: 'Javascript',
  },
  {
    id: 15,
    icon: <SiJava />,
    category: 'backend',
    colorcode: '#2962ff',
    text: 'Java',
  },
  {
    id: 16,
    icon: <AiFillApi />,
    category: 'backend',
    colorcode: '#00997f',
    text: 'Django_Rest_Framework',
  },
]

export default data
