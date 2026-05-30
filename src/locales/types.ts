import { CVData } from "@/app/data";

export type Locale = "vi" | "en";

export interface Translation {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    freelance: string;
    contact: string;
    hireMe: string;
  };
  hero: {
    badge: string;
    greeting: string;
    role: string;
    desc: string;
    viewProjects: string;
    contactDirect: string;
    currentPosition: string;
  };
  about: {
    badge: string;
    title: string;
    educationTitle: string;
    languagesTitle: string;
  };
  experience: {
    badge: string;
    title: string;
    desc: string;
    filterAll: string;
    filterSotatek: string;
    filterFreelance: string;
  };
  skills: {
    badge: string;
    title: string;
  };
  freelance: {
    badge: string;
    title: string;
    desc: string;
    services: {
      nextjs: { title: string; desc: string };
      flutter: { title: string; desc: string };
      devops: { title: string; desc: string };
    };
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    infoMail: string;
    infoPhone: string;
    infoAddress: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      errorMsg: string;
      btnSend: string;
      btnSending: string;
      successTitle: string;
      successDesc: string;
      btnSuccessBack: string;
    };
  };
  footer: {
    navHome: string;
    navAbout: string;
    navExperience: string;
    navSkills: string;
    rights: string;
    tagline: string;
  };
  projectModal: {
    close: string;
    teamSize: string;
    scale: string;
    website: string;
    visit: string;
    overview: string;
    contributions: string;
    techStack: string;
  };
  cvData: CVData;
}
