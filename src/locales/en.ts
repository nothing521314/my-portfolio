import { Translation } from "./types";

export const en: Translation = {
  metadata: {
    title: "Nguyen Van Tuan | Senior Frontend Developer Portfolio",
    description: "Portfolio of Nguyen Van Tuan - Senior Frontend Developer with 5 years of experience specializing in React.js, Next.js, and high-concurrency systems optimization.",
    keywords: ["Nguyen Van Tuan", "Nguyen Van Tuan Frontend", "Frontend Developer", "Nextjs Portfolio", "ReactJS", "SotaTek", "Developer Portfolio Vietnam"],
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    freelance: "Freelance",
    contact: "Contact",
    hireMe: "Hire Me",
  },
  hero: {
    badge: "Ready for large-scale projects",
    greeting: "Hi, I am",
    role: "Senior Frontend Developer",
    desc: "Frontend Specialist with 5 years of experience building high-performance web systems serving up to 7.5M active users for leading Korean and Japanese partners.",
    viewProjects: "View Projects",
    contactDirect: "Contact Directly",
    currentPosition: "Current Position",
    currentPositionVal: "Middle FE Developer @ SotaTek",
  },
  about: {
    badge: "Introduction",
    title: "About Me",
    educationTitle: "Education",
    languagesTitle: "Languages",
  },
  experience: {
    badge: "Real-world Projects",
    title: "Work Experience",
    desc: "Below are representative projects I have participated in as a Lead and Primary Developer, collaborating with global partners.",
    filterAll: "All Projects",
    filterSotatek: "SotaTek (Global Partner)",
    filterFreelance: "Representative Freelance",
  },
  skills: {
    badge: "Capability",
    title: "Professional Skills",
  },
  freelance: {
    badge: "Services",
    title: "Freelance Contracting & Consulting",
    desc: "With extensive experience as a Tech Lead and Mobile/DevOps Engineer, I provide frontend architecture consulting, automated CI/CD pipeline setup, Docker containerization, and high-quality mobile app development.",
    services: {
      nextjs: {
        title: "Next.js",
        desc: "SEO-Optimized Web Applications",
      },
      flutter: {
        title: "Flutter",
        desc: "Cross-platform Mobile Apps",
      },
      devops: {
        title: "Docker & CI/CD",
        desc: "Automated Deployment Infrastructure",
      },
    },
  },
  contact: {
    badge: "Connect",
    title: "Start Your Project",
    desc: "Do you have a project that needs optimized frontend performance, or need an experienced Tech Lead to guide your team? Leave a message or contact me directly.",
    infoMail: "Send Email",
    infoPhone: "Call Me",
    infoAddress: "Location",
    form: {
      nameLabel: "Full Name *",
      namePlaceholder: "Nguyen Van Tuan",
      emailLabel: "Email Address *",
      emailPlaceholder: "your.email@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Collaboration / Job Opportunity",
      messageLabel: "Message *",
      messagePlaceholder: "Write your message here...",
      errorMsg: "Please fill in all required fields correctly.",
      btnSend: "Send Message",
      btnSending: "Sending...",
      successTitle: "Message Sent!",
      successDesc: "Thank you for reaching out. I will get back to you as soon as possible.",
      btnSuccessBack: "Send Another Message",
    },
  },
  footer: {
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    rights: "All rights reserved.",
    tagline: "Designed with Next.js App Router & Tailwind CSS v4",
  },
  projectModal: {
    close: "Close modal",
    teamSize: "Team Size",
    scale: "Scale",
    website: "Website",
    visit: "Visit Project",
    overview: "Overview",
    contributions: "Key Contributions",
    techStack: "Tech Stack",
  },
  cvData: {
    name: "NGUYEN VAN TUAN",
    title: "Senior Frontend Developer",
    email: "nguyentuan.dev2010@gmail.com",
    phone: "+84 38 436 7271",
    location: "Hanoi, Vietnam",
    linkedin: "https://www.linkedin.com/in/tuân-nguyễn-8b0b4120a",
    summary:
      "I am a frontend developer with 5 years of experience building large-scale applications for top-tier Korean and Japanese clients. I am a specialist in React.js and Next.js, with a proven track record of managing high-concurrency systems serving up to 7.5M active users. Strong proficiency in DevOps practices, including designing and setting up automated CI/CD pipelines (GitHub Actions, Jenkins) to ensure rapid and seamless deployments. I have extensive experience in bridging the gap between complex frontend architecture, localized UI/UX design, and robust mobile performance.",
    coreMetrics: [
      {
        label: "Years of Experience",
        value: "5+",
        desc: "Specializing in React & Next.js"
      },
      {
        label: "Active Users Served",
        value: "7.5M",
        desc: "High concurrency web platforms"
      },
      {
        label: "Orders Handled",
        value: "20M/mo",
        desc: "For leading food delivery systems"
      },
      {
        label: "Locations Supported",
        value: "400+",
        desc: "Global Korean Photobooth shops"
      }
    ],
    skills: [
      {
        category: "Programming Languages",
        skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SASS"]
      },
      {
        category: "Frontend Frameworks",
        skills: ["React.js", "Next.js (App & Pages Router)", "Vue.js"]
      },
      {
        category: "UI & Styling",
        skills: ["TailwindCSS", "Material UI (MUI)", "Ant Design", "ChakraUI", "Styled Components", "Emotion"]
      },
      {
        category: "Backend & Integration",
        skills: ["REST APIs", "GraphQL", "Firebase", "Node.js (basic)"]
      },
      {
        category: "Mobile Development",
        skills: ["Flutter", "React Native", "Mobile UI Optimization"]
      },
      {
        category: "Tools & Design",
        skills: ["GitHub / GitLab", "CI/CD Setup (GitHub Actions, Jenkins)", "Docker", "Jira / Confluence", "Figma", "Adobe XD / Illustrator"]
      },
      {
        category: "AI & Testing",
        skills: ["Cursor / Claude / GPT / Gemini", "Jest", "React Testing Library (unit testing)"]
      }
    ],
    experience: [
      {
        company: "SotaTek",
        description: "Global IT Services and Consulting Company",
        period: "Mar 2021 - Present (4+ years)",
        projects: [
          {
            name: "Snapism / Photoism (Korea)",
            subtitle: "Global Photobooth platform and Photobooth admin platform",
            description: "A prominent web application serving 4M monthly visitors across 400+ global locations (the No.1 MZ-generation brand in South Korea).",
            role: "Middle Frontend Developer",
            teamSize: 20,
            scale: "4M monthly visitors, 400+ locations",
            technologies: ["React.js", "ChakraUI", "Ant Design", "REST APIs", "Image Processing"],
            details: [
              "Collaborated with international stakeholders to analyze requirements and set system specifications.",
              "Developed responsive and high-performance UI components handling heavy image processing and digital downloads for millions of users.",
              "Supported teammates and spearheaded code review processes to maintain codebase quality, scalability, and performance."
            ]
          },
          {
            name: "Merchant App (Korea)",
            subtitle: "Top 3 largest food delivery - merchant management app in Korea",
            description: "Merchant platform managing orders, inventory, promotions, and logistics. The application handles high-concurrency traffic during peak hours.",
            role: "Middle Frontend Developer",
            teamSize: 10,
            scale: "20M orders per month",
            technologies: ["Next.js", "TailwindCSS", "REST APIs", "Webkit Webview", "Firebase"],
            details: [
              "Partnered with business stakeholders to define requirements for managing and categorizing 20 million monthly user orders.",
              "Created highly reusable dashboard widgets and visualization components that transformed raw logistics data into actionable business insights.",
              "Integrated complex REST APIs to handle extreme real-time data streams and ensure responsiveness during peak traffic spikes.",
              "Successfully debugged webview interaction issues with Webkit wrapper and optimized overall bundle size."
            ]
          },
          {
            name: "Elice (Korea)",
            subtitle: "AI-driven educational platform",
            description: "High-scale AI training and educational ecosystem built for international markets.",
            role: "Frontend Developer",
            teamSize: 15,
            scale: "2.8M users",
            technologies: ["React.js", "TypeScript", "Redux", "TailwindCSS", "Docker", "CI/CD"],
            details: [
              "Scaled and maintained the frontend architecture for complex, interactive training modules and AI-integrated analytics dashboards.",
              "Ensured strict type safety and code quality using TypeScript and automated testing.",
              "Optimized application rendering and asset loading strategies to handle high concurrency traffic, maintaining a smooth learning experience."
            ]
          },
          {
            name: "eHealth Platform (Japan)",
            subtitle: "Digital Healthcare Solutions",
            description: "Comprehensive healthcare portal and property marketplace serving the Japanese market.",
            role: "Frontend Developer",
            teamSize: 50,
            scale: "5.7M active users",
            technologies: ["Next.js", "Ant Design", "GraphQL", "Storyblok CMS", "Forestry", "Firebase"],
            details: [
              "Translated client requirements into interactive frontend features for a property marketplace platform under the healthcare system.",
              "Integrated headless content management systems (StoryBlok, Forestry) and real-time databases (Firebase) to streamline buyer-seller interactions.",
              "Improved the online transaction workflow for listings, offering, and completing healthcare deals, enhancing the conversion rate."
            ]
          },
          {
            name: "Employee KPI Evaluation System",
            subtitle: "Airlines KPI Dashboard",
            description: "Enterprise-level platform for monitoring and evaluating employee performance metrics for the national airline brand of Vietnam.",
            role: "Frontend Developer",
            teamSize: 10,
            scale: "Enterprise level",
            technologies: ["React.js", "TypeScript", "TailwindCSS", "Chart.js", "Docker"],
            details: [
              "Developed frontend features for the centralized KPI evaluation system, prioritizing high security and data integrity for corporate performance audits.",
              "Designed and implemented complex interactive dashboards and data visualization modules using Chart.js to provide real-time insights into personnel progress.",
              "Optimized state management and data-fetching logic to handle large-scale employee datasets, reducing dashboard load times and improving the UX for HR managers."
            ]
          }
        ]
      }
    ],
    freelance: [
      {
        name: "Fintech Investment Platform",
        description: "A smart investment platform enabling users to manage portfolios, analyze stocks, and receive personalized investment suggestions through proprietary algorithms.",
        role: "Frontend Developer + Business Analyst",
        teamSize: 8,
        technologies: ["Next.js", "React.js", "REST APIs", "Responsive CSS"],
        link: "https://quantexify.com",
        linkText: "QuantexAI",
        details: [
          "Created a high-converting, modern landing page and onboarding flow to introduce the automated investment product.",
          "Facilitated the gap between financial models and client-side UI, translating complex data structures into neat financial charts."
        ]
      },
      {
        name: "CRM (Customer Relationship Management System)",
        description: "An internal HR, customer and training management system for a Chinese learning center chain with multiple locations around Vietnam.",
        role: "Tech Lead",
        teamSize: 10,
        technologies: ["Next.js", "React.js", "Docker", "CI/CD (GitLab)"],
        details: [
          "Analyzed complex business requirements from non-technical stakeholders to architect and code scalable client management features.",
          "Standardized the development workflow by implementing automated CI/CD pipelines and containerization with Docker to streamline release cycles.",
          "Spearheaded code review processes and mentored junior developers, significantly improving code quality and system stability.",
          "Refactored and optimized the codebase, establishing a robust build process to reduce deployment errors and technical debt."
        ]
      },
      {
        name: "Driving Tracking App",
        description: "High-precision mobility research platform for urban pattern analysis and EV transition studies, developed for Vin University and DEPOCEN Research Institute.",
        role: "Mobile & DevOps Engineer (Freelance)",
        teamSize: 10,
        technologies: ["Flutter", "Firebase", "Docker", "CI/CD (GitHub Actions)", "Goong Map APIs"],
        details: [
          "Developed a cross-platform mobile application using Flutter to track driving patterns, focusing on high-accuracy GPS data collection and background processing.",
          "Optimized background location services and state management to ensure continuous data streaming while maintaining superior battery efficiency for long-duration tracking sessions.",
          "Architected and managed the DevOps infrastructure, implementing automated CI/CD pipelines via GitHub Actions for rapid app distribution and reliable server-side updates.",
          "Designed a secure data synchronization layer to transmit encrypted mobility logs to the research database, facilitating complex spatial analysis for urban planning."
        ]
      }
    ],
    education: [
      {
        school: "FPT Polytechnic",
        degree: "Engineer’s Degree in Software Application",
        period: "Sep 2018 - Sep 2021",
        details: ["Graduated with solid foundations in algorithms, database design, software engineering practices, and web/mobile development frameworks."]
      }
    ],
    languages: [
      {
        language: "Vietnamese",
        level: "Native Speaker"
      },
      {
        language: "English",
        level: "Professional (Reading & Writing)"
      }
    ]
  }
};
