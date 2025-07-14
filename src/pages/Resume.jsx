import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-white dark:bg-[#0b0b0b] text-gray-900 dark:text-white">
      <h1 className="text-3xl font-semibold mb-6">My Resume</h1>

      <div className="w-full max-w-5xl aspect-[8.5/11]">
        <iframe
          src="/resume.pdf"
          title="Soham Agawane Resume"
          className="w-full h-full border rounded-xl shadow-lg dark:border-white/10"
        />
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
      >
        Download Resume
      </a>
    </div>
  );
}
