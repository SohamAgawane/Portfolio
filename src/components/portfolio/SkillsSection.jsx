"use client";
import React, { useState, useEffect } from "react";
import { CometCard } from "../ui/comet-card";

const skillsOutput = [
  { label: "", value: "> show --skills", labelColor: "text-red-500", valueColor: "text-red-500" },
  { label: "Languages:", value: " JavaScript, TypeScript, Java, Solidity", labelColor: "text-yellow-500", valueColor: "text-green-700 dark:text-green-400" },
  { label: "Frameworks:", value: " React.js, Node.js, Express.js, Tailwind CSS, Shandcn UI", labelColor: "text-yellow-500", valueColor: "text-green-700 dark:text-green-400" },
  { label: "Databases:", value: " MongoDB, MySQL, PostgreSQL, Redis", labelColor: "text-yellow-500", valueColor: "text-green-700 dark:text-green-400" },
  { label: "Tools:", value: " Git, Docker, AWS, Postman, GitHub, VS Code, Vercel", labelColor: "text-yellow-500", valueColor: "text-green-700 dark:text-green-400" },
];

export default function DevSkillsTerminal() {
  const [linesToShow, setLinesToShow] = useState(0);
  const [typedLabel, setTypedLabel] = useState("");
  const [typedValue, setTypedValue] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [typingLabel, setTypingLabel] = useState(true);

  // Typing effect
  useEffect(() => {
    if (linesToShow >= skillsOutput.length) return;

    const { label, value } = skillsOutput[linesToShow];
    const nextChar = typingLabel ? label[charIndex] : value[charIndex];

    const timeout = setTimeout(() => {
      if (typingLabel && charIndex < label.length) {
        setTypedLabel((prev) => prev + nextChar);
        setCharIndex((prev) => prev + 1);
      } else if (typingLabel && charIndex >= label.length) {
        setTypingLabel(false);
        setCharIndex(0);
      } else if (!typingLabel && charIndex < value.length) {
        setTypedValue((prev) => prev + nextChar);
        setCharIndex((prev) => prev + 1);
      } else {
        const delay = setTimeout(() => {
          setLinesToShow((prev) => prev + 1);
          setTypedLabel("");
          setTypedValue("");
          setTypingLabel(true);
          setCharIndex(0);
        }, 400);
        return () => clearTimeout(delay);
      }
    }, typingLabel ? 18 : 32);

    return () => clearTimeout(timeout);
  }, [charIndex, linesToShow, typingLabel]);

  return (
    <section className="mt-16 mb-24 px-6">
      {/* Title */}
      <div className="max-w-2xl mx-auto mb-6">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
      </div>

      <CometCard className="max-w-2xl mx-auto pt-2">
        <div
          className="
            rounded-2xl
            p-4
            w-full
            text-xs sm:text-sm
            leading-relaxed
            text-gray-700 dark:text-gray-300
            bg-gray-100 dark:bg-[#1e1e1e]
            overflow-hidden
            transition-all duration-300
          "
        >
          {/* Window controls */}
          <div className="mb-3 flex space-x-2">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
          </div>

          <div>
            {skillsOutput.slice(0, linesToShow).map((line, idx) => (
              <p key={idx}>
                {line.label && (
                  <span className={`font-medium ${line.labelColor}`}>
                    {line.label}
                  </span>
                )}
                <span className={line.valueColor}>{line.value}</span>
              </p>
            ))}

            {linesToShow < skillsOutput.length && (
              <p>
                {skillsOutput[linesToShow].label && (
                  <span className={`font-medium ${skillsOutput[linesToShow].labelColor}`}>
                    {typedLabel}
                  </span>
                )}
                <span className={skillsOutput[linesToShow].valueColor}>
                  {typedValue}
                </span>
                <span className="animate-blink font-bold align-middle">|</span>
              </p>
            )}
          </div>

          <style>{`
            @keyframes blink {
              0%, 50%, 100% { opacity: 1; }
              25%, 75% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s infinite;
            }
          `}</style>
        </div>
      </CometCard>
    </section>
  );
}