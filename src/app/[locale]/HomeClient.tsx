"use client";

import BackgroundGlow from "@/components/BackgroundGlow";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ScrollReveal from "@/components/ScrollReveal";
import { LinkedinIcon } from "@/components/SocialIcons";
import { Locale, Translation } from "@/locales/types";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  HeartHandshake,
  Languages,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import { FreelanceProject, Project } from "../data";

interface HomeClientProps {
  dict: Translation;
  locale: Locale;
}

export default function HomeClient({ dict, locale }: HomeClientProps) {
  const [selectedProject, setSelectedProject] = useState<
    | ((Project | FreelanceProject) & { subtitle?: string; scale?: string })
    | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "sotatek" | "freelance">(
    "all",
  );

  const openProjectModal = (
    proj: (Project | FreelanceProject) & { subtitle?: string; scale?: string },
  ) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const sotaProjects = dict.cvData.experience.flatMap((exp) => exp.projects);
  const freelanceProjects = dict.cvData.freelance;

  return (
    <>
      <BackgroundGlow />
      <Header locale={locale} dict={dict} />

      <main className="mt-20 w-full">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="min-h-[calc(90vh-80px)] flex items-center relative py-20 overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
                <ScrollReveal delay={0}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-semibold text-indigo-300 tracking-wide">
                    <Sparkles size={14} className="text-indigo-200" />
                    <span>{dict.hero.badge}</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={1}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                    {dict.hero.greeting} <br />
                    <span className="text-gradient font-black">
                      {dict.cvData.name}
                    </span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-semibold text-secondary mt-2">
                    {dict.hero.role}
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={2}>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-[580px]">
                    {dict.hero.desc}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={3}>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                      href="#experience"
                      onClick={(e) => handleScrollTo(e, "experience")}
                      className="btn btn-primary"
                    >
                      {dict.hero.viewProjects} <ArrowRight size={18} />
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => handleScrollTo(e, "contact")}
                      className="btn btn-secondary"
                    >
                      {dict.hero.contactDirect}
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Quick Profile Dashboard */}
              <div className="flex justify-center w-full">
                <ScrollReveal delay={2}>
                  <div className="flex flex-col gap-5 w-full max-w-[480px]">
                    <div className="bg-white/2 border border-white/5 p-3 px-5 rounded-xl flex justify-between items-center">
                      <span className="text-[11px] text-gray-500 uppercase tracking-widest">
                        {dict.hero.currentPosition}
                      </span>
                      <span className="text-sm font-semibold text-secondary">
                        {dict.hero.currentPositionVal}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dict.cvData.coreMetrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-6 flex flex-col gap-1 glass-card rounded-2xl"
                        >
                          <span className="text-3xl font-extrabold text-white bg-linear-to-br from-white to-gray-400 bg-clip-text">
                            {metric.value}
                          </span>
                          <span className="text-sm font-semibold text-gray-100 mt-1">
                            {metric.label}
                          </span>
                          <span className="text-[11px] text-gray-500 leading-normal">
                            {metric.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 relative">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-3 bg-indigo-500/8 border border-indigo-500/15 px-3 py-1 rounded-md">
                {dict.about.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                {dict.about.title}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
              <ScrollReveal delay={1} className="flex flex-col gap-8">
                <p className="text-base sm:text-lg leading-relaxed text-gray-400">
                  {dict.cvData.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-3.5 items-start">
                    <Mail size={18} className="text-primary mt-0.5" />
                    <div>
                      <span className="block text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">
                        Email
                      </span>
                      <a
                        href={`mailto:${dict.cvData.email}`}
                        className="text-sm text-white font-medium hover:text-secondary"
                      >
                        {dict.cvData.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <Phone size={18} className="text-primary mt-0.5" />
                    <div>
                      <span className="block text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">
                        {locale === "vi" ? "Điện thoại" : "Phone"}
                      </span>
                      <a
                        href={`tel:${dict.cvData.phone.replace(/\s/g, "")}`}
                        className="text-sm text-white font-medium hover:text-secondary"
                      >
                        {dict.cvData.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <MapPin size={18} className="text-primary mt-0.5" />
                    <div>
                      <span className="block text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">
                        {dict.contact.infoAddress}
                      </span>
                      <p className="text-sm text-white font-medium">
                        {dict.cvData.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <LinkedinIcon size={18} className="text-primary mt-0.5" />
                    <div>
                      <span className="block text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">
                        LinkedIn
                      </span>
                      <a
                        href={dict.cvData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white font-medium hover:text-secondary"
                      >
                        {locale === "vi" ? "Xem Hồ Sơ" : "View Profile"}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="flex flex-col gap-6">
                {/* Education */}
                <ScrollReveal delay={2} className="w-full">
                  <div className="p-7 glass-card rounded-2xl">
                    <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
                      <GraduationCap size={22} className="text-secondary" />
                      <h3 className="text-lg font-bold">
                        {dict.about.educationTitle}
                      </h3>
                    </div>
                    {dict.cvData.education.map((edu, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <div className="flex justify-between items-start gap-3">
                          <h4 className="text-base font-semibold text-white">
                            {edu.degree}
                          </h4>
                          <span className="text-xs text-primary font-semibold">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{edu.school}</p>
                        {edu.details && (
                          <ul className="mt-2.5 pl-4.5 text-gray-500 text-xs leading-relaxed flex flex-col gap-1.5 list-disc">
                            {edu.details.map((detail, dIdx) => (
                              <li key={dIdx}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Languages */}
                <ScrollReveal delay={3} className="w-full">
                  <div className="p-7 glass-card rounded-2xl">
                    <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
                      <Languages size={22} className="text-secondary" />
                      <h3 className="text-lg font-bold">
                        {dict.about.languagesTitle}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      {dict.cvData.languages.map((lang, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-white/2 border border-white/4 p-2.5 px-4 rounded-lg"
                        >
                          <span className="text-sm font-semibold text-white">
                            {lang.language}
                          </span>
                          <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                            {lang.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 relative">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-3 bg-indigo-500/8 border border-indigo-500/15 px-3 py-1 rounded-md">
                {dict.experience.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                {dict.experience.title}
              </h2>
              <p className="text-base text-gray-400 max-w-[640px] leading-relaxed mb-8">
                {dict.experience.desc}
              </p>
            </ScrollReveal>

            {/* Filter Tabs */}
            <ScrollReveal delay={1}>
              <div className="inline-flex bg-white/2 border border-white/6 p-1 rounded-xl mb-10">
                <button
                  className={`bg-transparent border-none text-gray-400 font-headings font-semibold text-sm px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:text-white ${activeTab === "all" ? "bg-white/6 text-white shadow-md" : ""}`}
                  onClick={() => setActiveTab("all")}
                >
                  {dict.experience.filterAll}
                </button>
                <button
                  className={`bg-transparent border-none text-gray-400 font-headings font-semibold text-sm px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:text-white ${activeTab === "sotatek" ? "bg-white/6 text-white shadow-md" : ""}`}
                  onClick={() => setActiveTab("sotatek")}
                >
                  {dict.experience.filterSotatek}
                </button>
                <button
                  className={`bg-transparent border-none text-gray-400 font-headings font-semibold text-sm px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:text-white ${activeTab === "freelance" ? "bg-white/6 text-white shadow-md" : ""}`}
                  onClick={() => setActiveTab("freelance")}
                >
                  {dict.experience.filterFreelance}
                </button>
              </div>
            </ScrollReveal>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {/* SotaTek Projects */}
              {(activeTab === "all" || activeTab === "sotatek") && (
                <>
                  {sotaProjects.map((proj, idx) => (
                    <ScrollReveal key={proj.name} delay={idx % 3}>
                      <ProjectCard
                        project={proj}
                        onClick={() => openProjectModal(proj)}
                        dict={dict.projectModal}
                      />
                    </ScrollReveal>
                  ))}
                </>
              )}

              {/* Freelance Projects */}
              {(activeTab === "all" || activeTab === "freelance") && (
                <>
                  {freelanceProjects.map((proj, idx) => (
                    <ScrollReveal key={proj.name} delay={idx % 3}>
                      <ProjectCard
                        project={{
                          ...proj,
                          subtitle:
                            locale === "vi"
                              ? "Dự án Freelance"
                              : "Freelance Project",
                        }}
                        onClick={() => openProjectModal(proj)}
                        dict={dict.projectModal}
                      />
                    </ScrollReveal>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 relative">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-3 bg-indigo-500/8 border border-indigo-500/15 px-3 py-1 rounded-md">
                {dict.skills.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                {dict.skills.title}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {dict.cvData.skills.map((category, catIdx) => (
                <ScrollReveal
                  key={catIdx}
                  delay={catIdx % 3}
                  className="w-full"
                >
                  <div className="p-7 glass-card rounded-2xl h-full">
                    <div className="flex items-center gap-3 mb-4.5 border-b border-white/5 pb-2.5">
                      <Code2 size={20} className="text-primary" />
                      <h3 className="text-base font-bold text-white">
                        {category.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/3 border border-white/6 text-gray-300 transition-all duration-200 hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-white hover:-translate-y-0.5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FREELANCE HIGHLIGHT */}
        <section id="freelance" className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="relative bg-linear-to-br from-slate-900/80 to-slate-950/90 border border-indigo-500/15 rounded-3xl p-8 sm:p-14 overflow-hidden shadow-2xl">
              <div className="absolute -top-1/5 -right-1/10 w-[300px] h-[300px] bg-primary blur-[100px] opacity-15 pointer-events-none" />
              <ScrollReveal>
                <div className="flex items-center gap-5 mb-6">
                  <HeartHandshake
                    size={32}
                    className="text-primary drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                  />
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-0 bg-indigo-500/8 border border-indigo-500/15 px-3 py-1 rounded-md">
                      {dict.freelance.badge}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-0">
                      {dict.freelance.title}
                    </h2>
                  </div>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-[780px] mb-10">
                  {dict.freelance.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 border-t border-white/5 pt-8">
                  <div className="p-5 rounded-2xl bg-white/2 border border-white/4 hover:bg-white/4 hover:border-white/8 transition-all duration-300">
                    <span className="block font-headings text-lg font-bold text-white mb-1">
                      {dict.freelance.services.nextjs.title}
                    </span>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {dict.freelance.services.nextjs.desc}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/2 border border-white/4 hover:bg-white/4 hover:border-white/8 transition-all duration-300">
                    <span className="block font-headings text-lg font-bold text-white mb-1">
                      {dict.freelance.services.flutter.title}
                    </span>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {dict.freelance.services.flutter.desc}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/2 border border-white/4 hover:bg-white/4 hover:border-white/8 transition-all duration-300">
                    <span className="block font-headings text-lg font-bold text-white mb-1">
                      {dict.freelance.services.devops.title}
                    </span>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {dict.freelance.services.devops.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-15 items-center">
              <div className="flex flex-col gap-6">
                <ScrollReveal>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-3 bg-indigo-500/8 border border-indigo-500/15 px-3 py-1 rounded-md">
                    {dict.contact.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                    {dict.contact.title}
                  </h2>
                  <p className="text-base leading-relaxed text-gray-400">
                    {dict.contact.desc}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={1} className="flex flex-col gap-5 mt-2">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/2 border border-white/6 flex items-center justify-center text-secondary transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                        {dict.contact.infoMail}
                      </span>
                      <a
                        href={`mailto:${dict.cvData.email}`}
                        className="text-base font-semibold text-white hover:text-secondary"
                      >
                        {dict.cvData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/2 border border-white/6 flex items-center justify-center text-secondary transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                        {dict.contact.infoPhone}
                      </span>
                      <a
                        href={`tel:${dict.cvData.phone.replace(/\s/g, "")}`}
                        className="text-base font-semibold text-white hover:text-secondary"
                      >
                        {dict.cvData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/2 border border-white/6 flex items-center justify-center text-secondary transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                        {dict.contact.infoAddress}
                      </span>
                      <p className="text-base font-semibold text-white">
                        {dict.cvData.location}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="w-full">
                <ScrollReveal delay={2}>
                  <ContactForm dict={dict.contact.form} />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#02040a] border-t border-white/5 py-15 pb-8 mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 text-center md:text-left">
            <div className="footerLogo">
              <span className="font-headings font-extrabold text-2xl text-white tracking-tighter">
                NVT
              </span>
              <p className="text-xs text-gray-500 mt-0.5">
                {dict.cvData.title}
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="#hero"
                onClick={(e) => handleScrollTo(e, "hero")}
                className="text-sm text-gray-400 hover:text-white"
              >
                {dict.footer.navHome}
              </a>
              <a
                href="#about"
                onClick={(e) => handleScrollTo(e, "about")}
                className="text-sm text-gray-400 hover:text-white"
              >
                {dict.footer.navAbout}
              </a>
              <a
                href="#experience"
                onClick={(e) => handleScrollTo(e, "experience")}
                className="text-sm text-gray-400 hover:text-white"
              >
                {dict.footer.navExperience}
              </a>
              <a
                href="#skills"
                onClick={(e) => handleScrollTo(e, "skills")}
                className="text-sm text-gray-400 hover:text-white"
              >
                {dict.footer.navSkills}
              </a>
            </div>
          </div>
          <div className="border-t border-white/4 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3 text-center">
            <p>
              &copy; {new Date().getFullYear()} {dict.cvData.name}.{" "}
              {dict.footer.rights}
            </p>
            <p className="text-gray-600">{dict.footer.tagline}</p>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dict={dict.projectModal}
      />
    </>
  );
}
