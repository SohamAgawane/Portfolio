import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import { ThemeProvider } from "./components/portfolio/ThemeContext";
import SystemToggle from "./components/portfolio/SystemToggle";
import DebuggerFooter from "./components/portfolio/DebuggerFooter";
import HeroSection from "./components/portfolio/HeroSection";
import SkillsSection from "./components/portfolio/SkillsSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ConnectSection from "./components/portfolio/ConnectSection";
import ResumeSection from "./components/portfolio/ResumeSection";

export default function Home() {
  const [bufferMessage, setBufferMessage] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="font-mono text-xs uppercase tracking-[0.2em]">
              Soham Agawane
            </div>
            <SystemToggle />
          </div>
        </header>

        <main className="pt-16">
          <HeroSection isPlaying={isPlaying} />

          <ExperienceSection />
          <ProjectsSection />
          <ResumeSection />
          <SkillsSection />

          <ConnectSection onBufferUpdate={setBufferMessage} />
        </main>

        <DebuggerFooter
          bufferMessage={bufferMessage}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </ThemeProvider>
  );
}