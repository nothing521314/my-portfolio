"use client";

import { FreelanceProject, Project } from "@/app/data";
import { Translation } from "@/locales/types";
import { Globe, Layers, Users, X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
  project:
    | ((Project | FreelanceProject) & { subtitle?: string; scale?: string })
    | null;
  isOpen: boolean;
  onClose: () => void;
  dict: Translation["projectModal"];
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  dict,
}: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm z-1000 flex justify-center items-center p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[720px] max-h-[80vh] bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header Banner */}
        <div className="p-8 bg-linear-to-br from-indigo-500/15 to-cyan-500/15 border-b border-white/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2)_0%,transparent_60%)] pointer-events-none" />
          <button
            className="absolute top-6 right-6 bg-white/5 border border-white/10 text-gray-400 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer transition-all hover:bg-white/10 hover:text-white hover:rotate-90 z-100"
            onClick={onClose}
            aria-label={dict.close}
          >
            <X size={20} />
          </button>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 mb-3 tracking-wider uppercase">
              {project.role}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1 leading-snug">
              {project.name}
            </h2>
            {project.subtitle && (
              <p className="text-sm text-gray-400 font-normal">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8 overflow-y-auto flex-1 flex flex-col gap-7">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white/2 border border-white/4 rounded-xl p-3.5 px-4.5 flex items-center gap-3.5">
              <Users size={18} className="text-indigo-400" />
              <div>
                <span className="block text-[11px] text-gray-500 uppercase tracking-wider">
                  {dict.teamSize}
                </span>
                <span className="block text-sm font-semibold text-gray-200">
                  {project.teamSize}{" "}
                  {dict.teamSize.includes("nhóm") ? "thành viên" : "members"}
                </span>
              </div>
            </div>
            {project.scale && (
              <div className="bg-white/2 border border-white/4 rounded-xl p-3.5 px-4.5 flex items-center gap-3.5">
                <Layers size={18} className="text-indigo-400" />
                <div>
                  <span className="block text-[11px] text-gray-500 uppercase tracking-wider">
                    {dict.scale}
                  </span>
                  <span className="block text-sm font-semibold text-gray-200">
                    {project.scale}
                  </span>
                </div>
              </div>
            )}
            {"link" in project && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/2 border border-white/4 rounded-xl p-3.5 px-4.5 flex items-center gap-3.5 transition-all duration-200 hover:bg-indigo-500/8 hover:border-indigo-500/20"
              >
                <Globe size={18} className="text-indigo-400" />
                <div>
                  <span className="block text-[11px] text-gray-500 uppercase tracking-wider">
                    {dict.website}
                  </span>
                  <span className="block text-sm font-semibold text-gray-200">
                    {dict.visit}
                  </span>
                </div>
              </a>
            )}
          </div>

          {/* Description Section */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 border-b border-white/5 pb-1.5 font-semibold">
              {dict.overview}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {project.description}
            </p>
          </div>

          {/* Key Contributions */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 border-b border-white/5 pb-1.5 font-semibold">
              {dict.contributions}
            </h3>
            <ul className="list-none flex flex-col gap-3">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0 shadow-[0_0_8px_#818cf8]" />
                  <span className="text-sm leading-relaxed text-gray-300">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 border-b border-white/5 pb-1.5 font-semibold">
              {dict.techStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/4 border border-white/6 px-3 py-1.5 rounded-lg text-xs text-gray-200 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
