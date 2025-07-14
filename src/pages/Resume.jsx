import React from "react";
import resumeImage from "../assets/resume.jpg";

export default function Resume() {
  return (
    <div className="flex items-center justify-center h-[calc(90vh-60px)] px-4 pt-6">
      <img
        src={resumeImage}
        alt="Soham Agawane Resume"
        className="max-h-full max-w-full object-contain rounded-xl shadow-lg border dark:border-white/10"
      />
    </div>
  );
}
