/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  elasticIcon,
  oracleIcon,
  dockerIcon,
  kafkaIcon,
  springIcon,
  mysqlIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  tuna,
    journey,
    refund,
  payment,
  admin,
  batch,
  monitoring,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  springIcon,
  dockerIcon,
  mysqlIcon,
  kafkaIcon,
  elasticIcon,
  oracleIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",
    "My name is Milla, I'm a Backend Developer with 3 years of experience.",
    "I love making systems run faster and better.",
    "I'm good at designing systems, keeping an eye on them, defining how different parts talk to each other, and working well with others to make things work smoothly.",

    " I'm a software engineer. I have a strong passion for the technologies related to the data base construction and UX.",
    "Outside of my regular activities, I'm into drawing whenever I have some free time. I'm also a huge dog lover and enjoy playing chess for fun.",

    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: 'Refund API Process',
    description: 'I developed a simple payment refund system using microservices architecture (MSA), Docker, and Kafka. Additionally, I defined API interfaces, implemented the project structure, and developed a Docker shutdown policy.',
    image: refund,
    source_code_link: 'https://github.com/bl33h/artMemoryGame',
    demo_link: 'https://arasarmemory.netlify.app/',
  },
  {
    name: 'Payment API Process',
    description: 'I implemented a payment API system, which was a REST API project incorporating Docker and Kafka. I was responsible for defining, implementing, deploying, and operating the APIs. This experience allowed me to learn about the payment domain and develop meticulous logic.',
    image: payment,
    source_code_link: 'https://github.com/bl33h/pawsitive',
    demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  },
  {
    name: 'Monitoring System',
    description: 'I implemented a common monitoring system using Elasticsearch for our team\'s project. This system includes an alerting system and monitoring module. I established monitoring criteria by analyzing transaction data on a regular basis.',
    image: monitoring,
    source_code_link: 'https://github.com/bl33h/calculator',
    demo_link: 'https://bl33hscalculator.netlify.app/',
  },
  {
    name: 'Admin Website',
    description: 'I managed an admin web page and gained valuable experience with sessions, Spring Security, and Spring MVC, which provided a platform for learning and skill development.',
    image: admin,
    source_code_link: 'https://github.com/bl33h/calculator',
    demo_link: 'https://bl33hscalculator.netlify.app/',
  },
  {
    name: 'Settlement batch process',
    description: 'I Implemented a settlement batch program using the Spring Batch framework and deployed it organization-wide.',
    image: batch,
    source_code_link: 'https://github.com/bl33h/calculator',
    demo_link: 'https://bl33hscalculator.netlify.app/',
  },
  {
    name: 'Journeyspace',
    description: 'I implemented a diary writing website using GraphQL and JPA.',
    image: journey,
    source_code_link: 'https://github.com/bl33h/calculator',
    demo_link: 'https://bl33hscalculator.netlify.app/',
  },
  {
    name: 'Tuna',
    description: 'I implemented this website that matches musicians and clients using hashtags. They implemented sample music file processing using AWS S3 and utilized JPA and MySQL for database operations.',
    image: tuna,
    source_code_link: 'https://github.com/bl33h/calculator',
    demo_link: 'https://bl33hscalculator.netlify.app/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'spring',
    title: 'Spring Framework',
    icon: springIcon,
    description:
      'Extensive experience with Spring and Spring Boot, leveraging these frameworks for building scalable and efficient applications.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'With 3 years of Python experience, Mastery of core Java concepts including object-oriented programming (OOP), data structures, algorithms, and exception handling, enabling me to develop robust and efficient backend solutions.',
  },
  {
    id: 'oracle',
    title: 'Oracle',
    icon: oracleIcon,
    description:
        'I have a strong command of Oracle, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'kafka',
    title: 'Kafka',
    icon: kafkaIcon,
    description:
        'I am gaining foundational knowledge in Kafka, understanding its role in building scalable and distributed messaging systems for real-time data processing and communication between microservices.',
  },
  {
    id: 'elasticSearch',
    title: 'ElasticSearch',
    icon: elasticIcon,
    description:
        'I am exploring Elasticsearch for search and analytics, learning how to index and query large volumes of data efficiently, and integrate Elasticsearch with backend applications.',
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: dockerIcon,
    description:
        'I have demonstrated proficiency in Docker, including creating Dockerfiles, managing containers, orchestrating multi-container environments with Docker Compose, and integrating Docker into CI/CD pipelines for automated builds and deployments.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I am certified in AWS and proficient in working with S3, EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'mysql',
    title: 'MySQL',
    icon: mysqlIcon,
    description:
      'I am in the process of learning MySQL for database management, focusing on data modeling, querying, and basic administration tasks to support backend applications effectively.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
