import React from "react";
import profileImg from "../assets/profile.jpg";
import DevSkillsTerminal from "../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0b0b0b] text-gray-900 dark:text-white flex justify-center pt-20">
      <div className="max-w-4xl w-full px-4 sm:px-5 flex flex-col items-center">

        {/* Info + Photo row */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* About Me */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Hey, I'm Soham <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a strong interest in AI & Web3. I build scalable MERN apps, optimize backend APIs, and design user-first interfaces.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Welcome to my portfolio!</p>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={profileImg}
              alt="Soham Agawane"
              className="rounded-xl shadow-lg w-[100px] md:w-[120px] object-cover"
            />
          </div>
        </div>

        {/* DevSkillsTerminal centered below both */}
        <div className="w-full flex justify-center mt-10 md:mt-16">
          <div className="w-full max-w-xl">
            <DevSkillsTerminal />
          </div>
        </div>

      </div>
    </div>
  );
}
