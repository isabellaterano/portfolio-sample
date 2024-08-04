import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const experiencesData = [
  {
    title: "Senior Data Analyst",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    description:
      "• Led data analysis projects, improving decision-making by 30%.\n• Integrated machine learning models, reducing customer churn by 20%.\n• Conducted risk assessments, reducing operational risks by 25%.\n• Implemented an anomaly detection system, increasing detection accuracy by 15%.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2023 – present",
  },
  {
    title: "IT Systems Engineer",
    company: "Innovative Technologies Corp.",
    location: "New York, NY",
    description:
      "• Provided technical support, resolving issues swiftly.\n• Automated ticketing system, reducing manual entry by 40%.\n• Developed Ruby scripts, cutting response times by 60%.\n• Optimized databases, enhancing data retrieval speed by 20%.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 – September 2022",
  },
  {
    title: "Front-End Developer Intern",
    company: "Creative Web Solutions",
    location: "Los Angeles, CA",
    description:
      "• Revamped UI, enhancing user experience.\n• Integrated React.js and Next.js, improving efficiency by 15%.\n• Analyzed data to guide UI/UX improvements.\n• Implemented a feedback system, increasing user satisfaction by 10%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 – August 2021",
  },
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "AI-Powered E-commerce Recommender System",
    description:
      "I spearheaded the development of an AI-driven recommender system that enhanced user experience by providing personalized product recommendations, leading to a 25% increase in sales. The project involved implementing a scalable microservices architecture, integrating various data sources, and deploying machine learning models to analyze user behavior and preferences.",
    tags: [
      "Python",
      "TensorFlow",
      "Microservices",
      "AWS",
      "REST APIs",
      "Kubernetes",
    ],
    githubLink: "https://github.com/",
  },
  {
    title: "Social Media Analytics Dashboard",
    description:
      "I designed and built a comprehensive social media analytics dashboard that aggregates data from multiple platforms and provides actionable insights. The project leveraged React.js for the frontend, Node.js for the backend, and PostgreSQL for data storage. Additionally, I implemented data visualization tools to present key metrics and trends.",
    tags: ["React.js", "Node.js", "PostgreSQL", "D3.js", "Data Visualization"],
    githubLink: "https://github.com/",
  },
  {
    title: "IoT-Based Smart Home System",
    description:
      "I led a project to create an IoT-based smart home system that allows users to control home appliances remotely via a mobile app. The system uses MQTT for communication between devices and the server, and includes features such as real-time monitoring, automated scheduling, and energy usage analytics.",
    tags: ["IoT", "MQTT", "Node.js", "React Native", "AWS IoT", "MongoDB"],
    githubLink: "https://github.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Python",
  "C/C++",
  "Tailwind",
  "PostgreSQL",
  "MySQL",
  "Ruby",
  "Tableau",
  "React.js",
  "Next.js",
  "Node.js",
  "Flask",
  "Express.js",
  "Three.js",
  "MongoDB",
] as const;
