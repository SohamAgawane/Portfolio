import React from "react";

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] px-4 pt-6">
      <iframe
        src="/Resume.pdf"
        title="Soham Agawane Resume"
        className="w-full max-w-4xl h-[90vh] border rounded-xl shadow-xl dark:border-white/10"
      />
      <a
        href="/resume.pdf"
        download
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
}
