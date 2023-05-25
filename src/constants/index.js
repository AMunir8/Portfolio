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
    cpp,
    swift,
    nodejs,
    mongodb,
    git,
    python,
    java,
    airranged,
    amazon,
    westernai,
    western,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Swift",
      icon: swift,
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
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Airranged",
      icon: airranged,
      iconBg: "#FFFFFF",
      date: "May 2019 - Aug. 2019",
      points: [
        "Worked in a startup environment to build efficient backend features using PHP and Laravel to host a website dashboard for over 100 customers.",
        "Gained exposure to agile development and other tools, technologies and methodologies",
      ],
    },
    {
      title: "Fullstack Web Developer",
      company_name: "Western AI",
      icon: westernai,
      iconBg: "#FFFFFF",
      date: "Sept. 2019 - April 2020",
      points: [
        "Collaborated with a team of 5 software developers on MERN stack web application that hosted the official website for a club of over 200 students",
        "Developed an interactive and responsive frontend web design, containing function sign-up and payment forms",
      ],
    },
    {
      title: "Student Web Developer",
      company_name: "Western University Communication Services",
      icon: western,
      iconBg: "#4F2D82",
      date: "Sept. 2020 - April 2021",
      points: [
        "I was responsible for developing interactive web pages for over 5000 students using Bootstrap, CSS, HTML, JS and React",
        "Updated web page contents based on specification given by over 75 faculty members",
        "Created a comprehensive 100 page instruction guide for various front-end implementations that can be used by Western Faculty and students"
      ],
    },
    {
      title: "Software Development Engineering Intern",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#E6DEDD",
      date: "Sept. 2022 - Dec. 2022",
      points: [
        "As an SDE Intern, I was responsible for taking full lead on developing an auto-approval feature for over 200 plugin registrations using Typescript and Java with the goal of decreasing team ticket load and increasing customer convenience",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Led all software design aspects of the intern project including creation of a comprehensive design documentation and an SOP that was published to the Internal Amazon Search Tool",
        "Performed code-revies and responded to over 50 service trouble tickets while shadowing on-call to ensure systems were performant and maintain team efficiency during increased Holiday season traffic",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };