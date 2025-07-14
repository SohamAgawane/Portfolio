import React from "react";
import profileImg from "../assets/profile.jpg";
import DevSkillsTerminal from "../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0b0b0b] text-gray-900 dark:text-white">
      {/* 🔧 Smaller container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-5 py-12 flex flex-col items-center">

        {/* Top Section: About + Image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          {/* About Me */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Hey, I'm Soham <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a strong interest in AI & Web3. I build scalable MERN apps, optimize backend APIs, and design user-first interfaces.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Welcome to my portfolio!</p>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={profileImg}
              alt="Soham Agawane"
              className="rounded-xl shadow-lg w-full max-w-[200px] md:max-w-[240px] object-cover"
            />
          </div>
        </div>

        {/* Dev Terminal Section */}
        <div className="w-full mt-12 max-w-5xl">
          <DevSkillsTerminal />
        </div>
      </div>
    </div>
  );
}
