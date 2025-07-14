import React, { useState, useEffect } from "react";

const skillsOutput = [
  {
    label: "",
    value: "> show --skills",
    labelColor: "text-red-500",
    valueColor: "text-red-500",
  },
  {
    label: "Languages:",
    value: " JavaScript, TypeScript, Python, C++",
    labelColor: "text-yellow-500",
    valueColor: "text-green-600 dark:text-green-400",
  },
  {
    label: "Frameworks:",
    value: " React.js, Next.js, Node.js, Express.js, Tailwind CSS",
    labelColor: "text-yellow-500",
    valueColor: "text-green-600 dark:text-green-400",
  },
  {
    label: "Databases:",
    value: " MongoDB, MySQL, PostgreSQL",
    labelColor: "text-yellow-500",
    valueColor: "text-green-600 dark:text-green-400",
  },
  {
    label: "Tools:",
    value: " Git, Docker, AWS, Postman, GitHub, VS Code, Vim",
    labelColor: "text-yellow-500",
    valueColor: "text-green-600 dark:text-green-400",
  },
];

export default function DevSkillsTerminal() {
  const [linesToShow, setLinesToShow] = useState(0);
  const [typedLabel, setTypedLabel] = useState("");
  const [typedValue, setTypedValue] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [typingLabel, setTypingLabel] = useState(true);

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
        }, 500);
        return () => clearTimeout(delay);
      }
    }, 15);

    return () => clearTimeout(timeout);
  }, [charIndex, linesToShow, typingLabel]);

  return (
    <div
      className="rounded-lg p-4 md:p-5 w-full max-w-5xl mx-auto shadow-md
    text-sm md:text-[15px] font-mono
    bg-gray-100 text-gray-800 dark:bg-[#1e1e1e] dark:text-green-400
    max-h-[260px] overflow-auto"
    >
      <div className="mb-4 flex space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <div>
        {skillsOutput.slice(0, linesToShow).map((line, idx) => (
          <p key={idx}>
            {line.label && <span className={`${line.labelColor} font-medium`}>{line.label}</span>}
            <span className={line.valueColor}>{line.value}</span>
          </p>
        ))}

        {linesToShow < skillsOutput.length && (
          <p>
            {skillsOutput[linesToShow].label && (
              <span className={`${skillsOutput[linesToShow].labelColor} font-medium`}>
                {typedLabel}
              </span>
            )}
            <span className={skillsOutput[linesToShow].valueColor}>{typedValue}</span>
            <span className="animate-blink font-bold text-lg align-middle">|</span>
          </p>
        )}
      </div>
    </div>
  );
}
