import type { PortfolioData } from "@/types/portfolio";

export const defaultPortfolioData: PortfolioData = {
  name: "Sahan Ekanayake",
  title: "Software Engineer | Java | Spring Boot | Node.js | React.js | AWS | Docker | DevOps",
  location: "Galle, Sri Lanka",
  phone: "+94 77 855 7750",
  email: "sahanchamara456@gmail.com",
  summary:
    "Results-driven Full Stack Software Engineer with hands-on experience in backend engineering, cloud deployments, and DevOps practices. I build secure, scalable, and maintainable products using Java, Spring Boot, NestJS, React, Docker, and AWS.",
  cvUrl: "https://drive.google.com/uc?export=download&id=1Io0lELlrLOx_Xm5ihrL1r-odAtsg3Qul",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/SahanChamara" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sahan-chamara/" },
    { label: "Email", url: "mailto:sahanchamara456@gmail.com" },
  ],
  highlights: [
    "Associate Software Engineer at Residue Solutions",
    "Built and deployed microservice and real-time systems on AWS",
    "1,800+ GitHub contributions",
    "Focused on cloud-native architecture and DevOps automation",
  ],
  skillCategories: [
    {
      title: "Languages",
      items: ["Java", "JavaScript", "TypeScript", "SQL", "Dart", "Python"],
    },
    {
      title: "Backend",
      items: ["Spring Boot", "NestJS", "Node.js", "REST APIs", "GraphQL", "JWT"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Angular", "Redux Toolkit", "Tailwind CSS", "Flutter"],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS (EC2, ECS, ECR, VPC, Route 53, CloudWatch)",
        "Docker",
        "CI/CD Pipelines",
        "Jenkins",
        "Nginx",
        "Linux (Ubuntu)",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB"],
    },
  ],
  experiences: [
    {
      role: "Associate Software Engineer",
      company: "Residue Solutions Pvt Ltd",
      location: "Colombo, Sri Lanka",
      period: "Aug 2025 - Present",
      highlights: [
        "Develop scalable backend services with NestJS and MongoDB using clean architecture.",
        "Deploy containerized applications on AWS ECS with Docker, ECR, VPC, and load balancing.",
        "Implement CI/CD pipelines for automated build, test, and deployment.",
        "Build real-time features with Socket.IO and monitor systems with CloudWatch.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Residue Solutions Pvt Ltd",
      location: "Colombo, Sri Lanka",
      period: "Apr 2025 - Jul 2025",
      highlights: [
        "Contributed to MERN applications across backend API and frontend integration.",
        "Designed REST APIs with Node.js, Express, and NestJS with MySQL/PostgreSQL.",
        "Built Dockerized development and deployment environments.",
        "Supported AWS EC2 and Lightsail deployments with Nginx and Linux configuration.",
      ],
    },
    {
      role: "Software Engineer Trainee",
      company: "Institute of Computer Engineering Technology (iCET)",
      location: "Sri Lanka",
      period: "Jun 2024 - Apr 2025",
      highlights: [
        "Built projects using Spring Boot, React, Angular, and Express.",
        "Applied layered architecture and software design patterns.",
        "Collaborated on backend system design and practical engineering workflows.",
      ],
    },
  ],
  projects: [
    {
      id: "calvary-donation",
      name: "Calvary Church Donation Collect System",
      techStack: "React, Express, MySQL, Docker, AWS EC2, Nginx, CI/CD",
      summary:
        "A donation management platform with categorized income tracking and analytics dashboards.",
      githubUrl: "https://github.com/SahanChamara/Donation-Management-System",
    },
    {
      id: "rsk-fitness",
      name: "RSK Fitness - Gym Attendance & Payment System",
      techStack: "NestJS, React, PostgreSQL, MongoDB, WebSocket, AWS Lightsail",
      summary:
        "Smart attendance and payment platform integrated with biometric access and real-time status updates.",
      githubUrl: "https://github.com/SahanChamara/Gym-Management-System-Backend-NestJS",
    },
    {
      id: "task-platform",
      name: "Team Task Management Platform",
      techStack: "NestJS, React, MongoDB, Socket.IO, AWS ECS/ECR/CloudWatch",
      summary:
        "Internal collaboration platform with real-time Kanban synchronization and cloud-native deployment.",
      githubUrl: "https://github.com/SahanChamara/Task-Management-Platform-Backend",
    },
    {
      id: "social-learning",
      name: "Social Learning Platform (Ongoing)",
      techStack:
        "Spring Boot, GraphQL, PostgreSQL, React TypeScript, Apollo, WebSocket, Docker, Jenkins",
      summary:
        "Scalable social learning system with course management, real-time interactions, and role-based security.",
      githubUrl: "https://github.com/SahanChamara/Social-Learning-Platform",
    },
  ],
  certifications: [
    {
      id: "aws-simulearn",
      name: "AWS SimuLearn: Cloud Computing Essentials",
      issuer: "Amazon Web Services (AWS)",
      issued: "Aug 2025",
    },
    {
      id: "aws-genai",
      name: "AWS Educate Introduction to Generative AI",
      issuer: "AWS",
      issued: "Jul 2025",
    },
    {
      id: "aviatrix",
      name: "Multicloud Network Associate",
      issuer: "Aviatrix",
      issued: "Oct 2025",
    },
    {
      id: "kodekloud-12factor",
      name: "12 Factor App",
      issuer: "KodeKloud",
      issued: "Mar 2026",
    },
    {
      id: "docker-foundation",
      name: "Docker Foundation Professional Certificate",
      issuer: "LinkedIn",
      issued: "May 2025",
    },
  ],
  github: {
    username: "SahanChamara",
    streakImageUrl:
      "https://nirzak-streak-stats.vercel.app/?user=SahanChamara&theme=transparent&hide_border=false",
    statsImageUrl:
      "https://github-readme-stats.vercel.app/api?username=SahanChamara&theme=transparent&hide_border=false&include_all_commits=false&count_private=true",
    topLangsImageUrl:
      "https://github-readme-stats.vercel.app/api/top-langs/?username=SahanChamara&theme=transparent&hide_border=false&include_all_commits=false&count_private=true&layout=compact",
  },
};
