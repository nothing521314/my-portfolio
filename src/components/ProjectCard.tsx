"use client";

import { FreelanceProject, Project } from "@/app/data";
import { Translation } from "@/locales/types";
import { ArrowUpRight, ChevronRight, Layers, Users } from "lucide-react";

interface ProjectCardProps {
  project: (Project | FreelanceProject) & { subtitle?: string; scale?: string };
  onClick: () => void;
  dict: Translation["projectModal"];
}

export default function ProjectCard({
  project,
  onClick,
  dict,
}: ProjectCardProps) {
  // Show first 3 technologies, rest is count
  const visibleTech = project.technologies.slice(0, 3);
  const remainingTechCount = project.technologies.length - visibleTech.length;

  return (
    <div
      className="relative bg-slate-900/55 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden cursor-pointer h-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col hover:border-white/10 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 group"
      onClick={onClick}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="p-6 flex flex-col flex-1 z-10">
        {/* Top Info */}
        <div className="flex justify-between items-center mb-3.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/8 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
            {project.role}
          </span>
          <ArrowUpRight
            size={18}
            className="text-gray-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-snug text-gray-50 mb-1">
          {project.name}
        </h3>
        {project.subtitle && (
          <p className="text-xs text-gray-400 mb-3 font-normal">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-400 mb-5 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Brief Stats */}
        <div className="flex gap-4 mb-5 text-[13px] text-gray-500">
          <div className="flex items-center gap-1.5">
            <Users size={14} />
            <span>
              {dict.teamSize}: {project.teamSize}
            </span>
          </div>
          {project.scale && (
            <div className="flex items-center gap-1.5">
              <Layers size={14} />
              <span>{project.scale.split(",")[0]}</span>
            </div>
          )}
        </div>

        {/* Footer Tech stack */}
        <div className="border-t border-white/5 pt-4 flex justify-between items-center">
          <div className="flex flex-wrap gap-1.5">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="bg-white/3 border border-white/5 px-2 py-0.5 rounded-md text-[11px] text-gray-300 font-mono"
              >
                {tech}
              </span>
            ))}
            {remainingTechCount > 0 && (
              <span className="bg-white/6 px-1.5 py-0.5 rounded-md text-[11px] text-indigo-400 font-semibold">
                +{remainingTechCount}
              </span>
            )}
          </div>
          <button className="bg-none border-none text-gray-400 text-[13px] font-semibold flex items-center gap-0.5 cursor-pointer transition-colors duration-200 group-hover:text-indigo-400 font-headings">
            {dict.visit.split(" ")[0] === "Visit" ? "Details" : "Chi tiết"}{" "}
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
