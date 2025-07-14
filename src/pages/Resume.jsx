import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-white dark:bg-[#0b0b0b]">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">My Resume</h1>

      {/* Resume PDF container */}
      <div className="w-full max-w-5xl aspect-[8.5/11] sm:w-full sm:h-[75vh] lg:h-[90vh]">
        <iframe
          src="/resume.pdf"
          title="Soham Agawane Resume"
          className="w-full h-full rounded-xl border shadow-lg dark:border-white/10"
        />
      </div>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Download Resume
      </a>
    </div>
  );
}
