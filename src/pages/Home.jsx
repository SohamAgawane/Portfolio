import React from "react";
import profileImg from "../assets/profile.jpg";
import DevSkillsTerminal from "../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 px-6">
      {/* Fixed Top Section: About Me + Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl relative z-10">
        
        {/* About Me */}
        <div className="flex-1 space-y-4 max-w-xl md:mt-[-40px]">
          <h1 className="text-4xl font-bold">Hey, I'm Soham <span className="inline-block animate-wave">👋</span></h1>
          <p className="text-[17px] opacity-80 leading-relaxed">
            I'm a passionate full-stack developer with strong interest in AI & Web3. I build scalable MERN apps, optimize backend APIs, and design user-first interfaces. 
          </p>
          <p>Welcome to my portfolio!</p>
        </div>

        {/* Profile Image */}
        <div className="flex-1 max-w-sm md:mt-[-40px]">
          <img
            src={profileImg}
            alt="Soham Agawane"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Mini Terminal Section */}
      <div className="w-full max-w-2xl mt-20 z-0">
        <DevSkillsTerminal />
      </div>
    </div>
  );
}
