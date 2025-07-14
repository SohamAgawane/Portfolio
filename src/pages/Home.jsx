import React from "react";
import profileImg from "../assets/profile.jpg";
import DevSkillsTerminal from "../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0b0b0b] text-gray-900 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-20 flex flex-col items-center">

        {/* Top Section: About + Image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* About Me */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hey, I'm Soham <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a strong interest in AI & Web3. I build scalable MERN apps, optimize backend APIs, and design user-first interfaces.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">Welcome to my portfolio!</p>
          </div>

          {/* Profile Image */}
          <div className="flex-1 max-w-sm">
            <img
              src={profileImg}
              alt="Soham Agawane"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>

        {/* Dev Terminal Section */}
        <div className="w-full mt-24 max-w-2xl">
          <DevSkillsTerminal />
        </div>
      </div>
    </div>
  );
}
