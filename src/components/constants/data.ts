// This file contains constants and data used across the portfolio template. 
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Abhinesh Jha",
  username: "@Abhineshhh",
  title: "Backend Engineer",
  location: "New Delhi, India",
  email: "jhaabhinesh977@gmail.com",
  description: [
    "Hi, I'm Abhinesh Jha, a backend-focused software engineer with a strong foundation in Java and Spring Boot. I enjoy building scalable, production-grade systems and working close to the core of how things function—APIs, databases, concurrency, and system performance.",
    "My coding journey started with a curiosity for how real-world applications handle scale and reliability. Over time, I've worked on projects involving RESTful APIs, transaction management, socket programming, and secure systems, always aiming to write clean, efficient, and maintainable code.",
    "I love building backend systems that solve practical problems, contributing to open-source projects, and continuously deepening my understanding of system design, performance optimization, and distributed systems."
  ],
  profileImage: "/profile-image.png", // Replace with your profile image
  profileGif: "/profile-gif.gif", // Replace with your personalised gif
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Abhineshhh",
  linkedin: "https://linkedin.com/in/abhineshjha",
  twitter: "https://twitter.com/Abhineshhh",
  peerlist: "https://peerlist.io/abhineshhh", // remove or keep blank if you don't have a Peerlist profile
  instagram: "https://instagram.com/abhinesshhh",
  email: "mailto:jhaabhinesh977@gmail.com",
  resume: "https://resume.abhineshhh.me",
};

export const PROJECTS = [
  {
    name: "Caching Proxy",
    description: "An HTTP caching proxy using Spring Boot to forward and cache GET requests with Redis. Features configurable TTL, cache hit/miss tracking via custom X-Cache headers, and manual cache invalidation endpoint.",
    tech: ["Spring Boot", "Spring Data Redis", "Redis"],
    github: "https://github.com/Abhineshhh/caching-proxy",
  },
  {
    name: "PeerLink",
    description: "A cloud-independent, secure peer-to-peer messaging system built with socket programming, authenticated communication.",
    tech: ["Java", "Next.Js", "TypeScript"],
    github: "https://github.com/Abhineshhh/Peerlink",
  },
  {
    name: "Reverse Echo Server",
    description: "A multithreaded reverse echo server built with Java Socket Programming. Handles multiple clients concurrently, echoing reversed messages back via socket-based communication.",
    tech: ["Java", "Socket Programming", "Multithreading"],
    github: "https://github.com/Abhineshhh/Multithreaded-Webserver",
  },
  {
    name: "StickyPal",
    description: "A lightweight, always-on-top Windows notes app for quick task, idea, and reminder tracking.",
    tech: ["Electron", "JavaScript"],
    github: "https://github.com/Abhineshhh/StickyPal",
  },
];

export const OPEN_SOURCE = [
  {
    role: "Winner",
    organization: "HackSquad by Novu",
    period: "2024",
    type: "achievement",
    description: "Contributed multiple PRs focusing on comprehensive documentation improvements and frontend enhancements.",
    link: "https://hacksquad.dev/",
    stats: ["Documentation", "Frontend Enhancements"]
  },
  {
    role: "Winner",
    organization: "Social Summer of Code",
    period: "2024",
    type: "achievement",
    description: "Enhanced frontend UX with JavaScript and modularized Python programs for improved code maintainability.",
    link: "https://ssoc.dev/",
    stats: ["UX Enhancement", "Python Modularization"]
  },
  {
    role: "Winner",
    organization: "Innogeeks Winter of Code",
    period: "2023",
    type: "achievement",
    description: "Developed fullstack web features and resolved 15+ critical bugs across fullstack applications.",
    link: "https://innogeeks.in/",
    stats: ["Fullstack Features", "15+ Bugs Resolved"]
  },
  {
    role: "Active Participant",
    organization: "Global Open Source",
    period: "Ongoing",
    type: "contribution",
    description: "Multi-year Hacktoberfest contributor, MLH events participant, and regular contributor to major FOSS projects with focus on web development.",
    link: "https://hacktoberfest.com/",
    stats: ["Hacktoberfest", "MLH Events", "FOSS Projects"]
  }
];
