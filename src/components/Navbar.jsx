import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDark(!dark);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-300 dark:border-zinc-700">
      <Link to="/" className="text-xl font-semibold font-lato tracking-wide">
        Soham Agawane
      </Link>
      <nav className="flex gap-6 items-center text-sm font-medium">
        <Link to="/experience" className="hover:underline">Experience</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>

        {/* Opens PDF directly in new tab */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Resume
        </a>

        <Link to="/connect" className="hover:underline">Connect</Link>

        <button
          onClick={toggleTheme}
          className="hover:bg-zinc-200 dark:hover:bg-zinc-800 p-1 rounded"
          aria-label="Toggle Theme"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}
