export type SocialLink = {
  label: string;
  url: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export type Project = {
  id: string;
  name: string;
  techStack: string;
  summary: string;
  githubUrl: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  issued: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  cvUrl: string;
  socialLinks: SocialLink[];
  highlights: string[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  github: {
    username: string;
    streakImageUrl: string;
    statsImageUrl: string;
    topLangsImageUrl: string;
  };
};
