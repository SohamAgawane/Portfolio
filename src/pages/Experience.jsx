import React, { useEffect, useState } from "react";

const sentences = [
  { type: "text", content: "At PES Modern College of Engineering, I contributed to a real-time collaborative platform as a full-stack developer." },
  { type: "text", content: "Key highlights of my work include:" },
  {
    type: "bullets",
    content: [
      "Built nested comment threads with upvoting and WebSocket-based real-time features that supported seamless interactions for 50+ concurrent users.",
      "Developed a high-performance React frontend, achieving over 90% Lighthouse scores and integrating AWS S3 for efficient image/video uploads.",
      "Designed secure APIs with JWT auth and RBAC, and boosted MongoDB query speed by 75% through strategic indexing and denormalization.",
    ]
  },
  { type: "text", content: "This experience sharpened my skills in real-time systems, scalable architecture, and secure web development." },
];

const Typewriter = () => {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [bulletIndex, setBulletIndex] = useState(0);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("experienceTypedOnce");

    if (alreadySeen === "true") {
      setHasAnimated(true);
    } else {
      // Mark as seen immediately on first mount
      localStorage.setItem("experienceTypedOnce", "true");
    }
  }, []);

  useEffect(() => {
    if (hasAnimated || currentSentence >= sentences.length) return;

    const current = sentences[currentSentence];
    if (current.type === "text") {
      if (charIndex < current.content.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + current.content[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 30); // Slower typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentSentence((prev) => prev + 1);
          setTypedText("");
          setCharIndex(0);
        }, 600);
        return () => clearTimeout(timeout);
      }
    } else {
      // Handle bullet animations with a small delay between each
      if (bulletIndex < current.content.length) {
        const timeout = setTimeout(() => {
          setBulletIndex((prev) => prev + 1);
        }, 300); // Typing speed for bullet points
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentSentence((prev) => prev + 1);
          setBulletIndex(0);
        }, 600);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentSentence, hasAnimated, bulletIndex]);

  if (hasAnimated) {
    return (
      <div className="mt-4 space-y-4 text-zinc-800 dark:text-zinc-200 font-medium text-[17px] leading-relaxed">
        {sentences.map((item, idx) =>
          item.type === "text" ? (
            <p className="mt-4" key={idx}>
              {item.content}
            </p>
          ) : (
            <ul className="list-disc list-inside space-y-2 pl-4" key={idx}>
              {item.content.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )
        )}
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-4 text-zinc-800 dark:text-zinc-200 font-medium text-[17px] leading-relaxed">
      {sentences.slice(0, currentSentence).map((item, idx) =>
        item.type === "text" ? (
          <p className="mt-4" key={idx}>{item.content}</p>
        ) : (
          <ul className="list-disc list-inside space-y-2 pl-4" key={idx}>
            {item.content.slice(0, bulletIndex).map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )
      )}

      {currentSentence < sentences.length && sentences[currentSentence].type === "text" && (
        <p className="mt-4">
          {typedText}
          <span className="animate-blink font-bold text-lg align-middle">|</span>
        </p>
      )}
    </div>
  );
};

export default function Experience() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Professional Experience</h1>

      <section className="space-y-6 leading-relaxed text-zinc-800 dark:text-zinc-200 text-[17px]">
        <div>
          <h2 className="text-2xl font-semibold">Technical Intern</h2>
          <p className="text-sm text-zinc-500 italic">
            PES Modern College of Engineering · Pune, India · Dec 2023 – Feb 2024
          </p>
        </div>

        <Typewriter />
      </section>
    </div>
  );
}
