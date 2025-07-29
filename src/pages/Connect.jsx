import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const email = "sohamagawane1503@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="px-6 py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-base mb-10">
        I'm always up for building cool stuff, collaborating on projects, or just talking tech. Feel free to drop a message or connect with me on socials!
      </p>

      {/* Email Copy Section */}
      <div className="flex justify-center items-center gap-2 mb-8 group">
        <Mail size={18} className="group-hover:text-red-500 transition-colors duration-200" />
        <span className="text-sm group-hover:text-red-500 transition-colors duration-200">
          {email}
        </span>
        <button
          onClick={handleCopy}
          className="ml-2 p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-transform transform hover:scale-105"
          aria-label="Copy Email"
        >
          {copied ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Copy size={16} className="group-hover:text-red-500 transition-colors duration-200" />
          )}
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-sm font-medium mb-10">
        <a
          href="https://github.com/SohamAgawane"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#6e5494] transition-colors duration-200"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/soham-agawane-9723271a8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#0a66c2] transition-colors duration-200"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>

      {/* Location */}
      <p className="text-sm text-zinc-500 italic mb-2">📍 Pune, India · Available for remote</p>

      {/* Call to Action */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Want to build something together?&nbsp;
        <a
          href="mailto:sohamagawane1503@gmail.com"
          className="text-blue-500 underline"
        >
          Let’s connect!
        </a>
      </p>
    </div>
  );
}
