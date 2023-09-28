import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ibm,
  carrent,
  jobit,
  tripguide,
  threejs,
  nasscom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Data Analyst Intern",
    company_name: "IBM SkillsBuild",
    icon: ibm,
    iconBg: "#ddd",
    date: "June 2023 - July 2023",
    points: [
      "Worked with a team of 8 people to implement data analysis techniques to analyze Google’s stock prices of previous 5 years and developed python script to analyze the effect of Google’s announcement of their cutting edge generative LLM AI Bard on its share’s market price.",
    ],
  },
  {
    title: "ML Foundation Workshop",
    company_name: "NASSCOM - FutureSkillsPrime",
    icon: nasscom,
    iconBg: "#ddd",
    date: "December 2022",
    points: [
      "Attended a practical skill based workshop on introduction to Data Analysis and Machine Learning and acquired relevant information on topics like Supervised, Unsupervised and Reinforcement Learning and Statistics concepts like Linear, Non-Linear and Polynomial Regression, Random Forest and Logistic Regression.",
    ],
  },
];

const projects = [
  {
    name: "Filmpire Lite",
    description:
      "A basic film search site I created using ReactJS, Tailwind CSS and the OMDb API. With this website, users can search for films and view information about them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "omdb-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://v4run-sharma.github.io/filmpire-lite/",
  },
  {
    name: "Twitter Clone",
    description:
      "A Twitter clone I created using the MERN Stack. Users can post tweets, like tweets, and follow other users. It also has a dark mode feature.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/V4run-Sharma/Twitter-Clone",
  },
  {
    name: "OnlyJobs",
    description:
      "A job search android application I created using ReactNative, Expo and the JSearch API. With this app, users can search for jobs and view information about them.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "jsearch-api",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/V4run-Sharma/First-RNative-App",
  },
];

export { services, technologies, experiences, projects };
