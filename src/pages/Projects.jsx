import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HireHub – Freelance Job Bidding Platform",
    desc: "MERN-based job bidding platform with smart filters, image uploads, and secure auth.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    link: "https://github.com/SohamAgawane/HireHub",
  },
  {
    title: "Blockchain-Based Crowdfunding App",
    desc: "Decentralized crowdfunding with Ethereum smart contracts, Web3.js, and real-time MERN stack.",
    tech: ["Solidity", "Ethereum", "Web3.js", "MongoDB", "Express"],
    link: "https://github.com/SohamAgawane/Blockchain-based-Crowdfunding-platform-with-MERN-auth",
  },
  {
    title: "Second Brain App",
    desc: "Educational content manager with RBAC, TypeScript APIs, and fast MongoDB queries.",
    tech: ["TypeScript", "Node.js", "MongoDB", "RBAC"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center tracking-tight text-zinc-900 dark:text-white">
       Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="relative overflow-hidden rounded-2xl p-4 bg-white/80 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 backdrop-blur-md transition-all group"
        >
          {/* Gradient Glow */}
          <div className="absolute -inset-[2px] z-0 bg-gradient-to-r from-purple-700/40 via-indigo-700/40 to-transparent blur-md opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl pointer-events-none" />
        
          {/* Title */}
          <h3 className="relative text-lg font-semibold mb-1 text-zinc-900 dark:text-white z-10">
            {proj.title}
          </h3>
        
          {/* Shortened Description */}
          <p className="relative text-sm mb-3 text-zinc-600 dark:text-zinc-300 line-clamp-2 z-10">
            {proj.desc}
          </p>
        
          {/* Tech Stack Badges */}
          <div className="relative flex flex-wrap gap-2 mb-4 z-10">
            {proj.tech.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-xs px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        
          {/* GitHub Button */}
          {proj.link !== "#" && (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-full shadow-md transition-all z-10"
            >
              <FaGithub className="text-base" /> GitHub
            </a>
          )}
        </motion.div>
        
        ))}
      </div>
    </div>
  );
}
