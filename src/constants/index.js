import {
    mobile,
    backend,
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
    BCBS,
    cue, 
    himylink,
    threejs,
    gallery,
    minesweeper,
    poker
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
      description: "I have worked as a web developer in my previous internships and have created many web apps.",
    },
    {
      title: "Full-Stack Developer ",
      icon: mobile,
      description: "I have worked as a web developer in my previous internship and have created many web apps.",
    },
    {
      title: "Backend Developer",
      icon: backend,
      description: "I have worked as a web developer in my previous internship and have created many web apps.",
    },
  ];

  const desc = [
    {
      title: "Web Developer",
    },
    {
      title: "Full-Stack Developer",
    },
    {
      title: "Backend Developer",
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: html,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Cue Health",
      icon: cue,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Optimized the web component development process with existing components and increased productivity to the existing development team.",
        "Added reusable components to the existing web application and optimized data retrieval from relational databases by 21% using API calls.",
        "Revamped visual elements based on user feedback and configured elements to align with client specifications to enhance user experience.",
      ],
    },
    {
      title: "Front-End Development Intern",
      company_name: "BCBS",
      icon: BCBS,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Developed fully functional web components from given wireframes and prototypes using ReactJS and increased productivity to the existing development team by 13% using Angular & TypeScript & collaborated in a multidisciplinary team.",
        "Changed data retrieval to an external source, such as AWS DynamoDB, from a traditional relational database, utilizing API calls and focused on prioritizing user experience.",
      ],
    },
    {
      title: "Mobile Application Development Intern",
      company_name: "HiMyLink",
      icon: himylink,
      iconBg: "#383E56",
      date: "Feb 2022 - May 2022",
      points: [
        "Designed a portion of the wireframe and developed code from the wireframe for the mobile application based on the existing website and improved productivity using React Native.",
        "Configured the existing HTML code to comply with current industry standards and worked to improve the current progress board to meet with the requirements of an Agile sprint.",
      ],
    }
  ];
  
  const projects = [
    {
      name: "Seven Seas",
      description:
        "This app is a stock market simulation app for beginners to practice stock market investment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gallery,
      source_code_link: "https://github.com/SaahitKar/SevenSeas",
    },
    //https://github.com/SaahitKar/MineSweeper
    {
      name: "Mine Sweeper",
      description:
        "This program simulates a game of MineSweeper with bombs placed in random locations around the board. When a coordinate that's entered is the same location as a bomb, the game ends. There are methods to avoid any incorrect input from the player.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: minesweeper,
      source_code_link: "https://github.com/SaahitKar/MineSweeper",
    },
    {
      name: "Pocket Poker",
      description:
        "This project involves the team creating a poker game that collects data on winning hands and process that collected data to create a report for players to see previous game data and improve their gameplay for future games.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: poker,
      source_code_link: "https://github.com/Carwin-Dollins/Pocket-Poker",
    },
  ];
  
  export { services, technologies, experiences, projects };