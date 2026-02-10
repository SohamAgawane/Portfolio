"use client";

import { Github, ExternalLink, Book } from "lucide-react";
import GlowCard from "@/components/ui/glow-card";

const projects = [
  {
    name: "HireHub",
    description:
      "Freelance job bidding platform where clients post jobs and freelancers bid using smart filters and secure authentication.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    github: "https://github.com/SohamAgawane/HireHub",
    live: null,
    docs: null,
  },
  {
    name: "Digital Payment & Wallet System",
    description:
      "Backend-focused core Java digital payment and wallet system with multiple payment modes, logging, notifications, and transaction flow.",
    stack: ["Java", "OOP", "Collections", "File Handling"],
    github: "https://github.com/SohamAgawane/Digital-Payment-and-Wallet-System.git",
    live: null,
    docs: null,
  },
  {
    name: "Blockchain Crowdfunding",
    description:
      "Decentralized crowdfunding platform using Ethereum smart contracts with transparent fund tracking.",
    stack: ["Solidity", "Ethereum", "Web3.js", "MongoDB", "Express"],
    github: "https://github.com/SohamAgawane/Blockchain-based-Crowdfunding-platform-with-MERN-auth.git",
    live: null,
    docs: null,
  },
  {
    name: "Bank Account Management System",
    description:
      "Core Java–based banking system implementing account creation, balance management, deposits, withdrawals, transfers, and transaction.",
    stack: ["Java", "OOP", "Collections", "Exception Handling", "File Handling"],
    github: "https://github.com/SohamAgawane/Bank-Account-System",
    live: null,
    docs: null,
  },
];

function ProjectCard({ project }) {
  return (
    <GlowCard>
      <div className="flex h-full flex-col justify-between gap-6">

        {/* Title */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-black dark:text-white">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] rounded-md border border-neutral-300/60 dark:border-neutral-700/60 px-2 py-1 text-neutral-600 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2 text-sm">
          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#7c51bb] transition-colors"
          >
            <Github size={14} /> GitHub
          </a>

          {/* Live */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}

          {/* Docs */}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-sky-500 transition-colors"
            >
              <Book size={14} /> Docs
            </a>
          )}
        </div>
      </div>
    </GlowCard>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}