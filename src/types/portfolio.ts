export type SocialLink = {
  label: string;
  url: string;
  kind: "github" | "linkedin" | "email" | "phone" | "location" | "external";
};

export type StatMetric = {
  label: string;
  value: string;
  detail: string;
};

export type SkillItem = {
  name: string;
  status?: "hands-on" | "proficient" | "learning";
};

export type SkillCategory = {
  title: string;
  icon: string;
  items: SkillItem[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  status?: "current" | "completed";
  focusAreas: string[];
  highlights: string[];
  techTags: string[];
};

export type ProjectCategory = "Professional" | "Personal" | "AI/ML" | "Academic";

export type Project = {
  id: string;
  name: string;
  type: string;
  category: ProjectCategory;
  description: string;
  techStack: string[];
  highlights: string[];
  metric?: string;
  githubUrl: string;
  liveUrl?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  group: string;
};

export type Education = {
  institution: string;
  credential: string;
  period: string;
  highlights: string[];
};

export type LearningItem = {
  title: string;
  detail: string;
  progress: number;
  status: "In Progress" | "Learning" | "Preparing";
};

export type PortfolioData = {
  name: string;
  alsoKnownAs: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  tagline: string;
  availability: string;
  cvUrl: string;
  socialLinks: SocialLink[];
  stats: StatMetric[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  learning: LearningItem[];
  github: {
    username: string;
    rank: string;
    contributions: string;
    streakImageUrl: string;
    statsImageUrl: string;
    topLangsImageUrl: string;
  };
};
