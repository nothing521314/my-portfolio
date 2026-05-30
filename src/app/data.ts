export interface Project {
  name: string;
  subtitle?: string;
  description: string;
  details: string[];
  role: string;
  teamSize: number;
  technologies: string[];
  scale?: string;
  link?: string;
}

export interface Experience {
  company: string;
  description: string;
  period: string;
  projects: Project[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface FreelanceProject {
  name: string;
  description: string;
  details: string[];
  role: string;
  teamSize: number;
  technologies: string[];
  link?: string;
  linkText?: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  coreMetrics: { label: string; value: string; desc: string }[];
  skills: SkillCategory[];
  experience: Experience[];
  freelance: FreelanceProject[];
  education: {
    school: string;
    degree: string;
    period: string;
    details?: string[];
  }[];
  languages: {
    language: string;
    level: string;
  }[];
}
