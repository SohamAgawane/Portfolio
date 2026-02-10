import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    org: "The Code Culture",
    duration: "Sept 2024 — Feb 2025",
    role: "Project Intern",
    location: "Pune, India",
    details: [
      "Built and maintained backend services for an AI-assisted Learning Management System, enabling smooth course management, structured content workflows, and reliable student progress tracking.",
      "Designed RESTful APIs and scalable database schemas to support user onboarding, enrollment flows, and long-term persistence of academic data.",
      "Integrated AI-powered features such as content summarization and practice question generation, significantly reducing manual review effort while improving learner engagement.",
      "Worked closely with frontend developers to define clear API contracts, resolve data inconsistencies, and ensure seamless end-to-end feature delivery.",
      "Focused on predictable request response behavior by implementing validation, error handling, and consistent data modeling across services.",
      "Contributed to iterative feature planning and refinement, balancing technical feasibility with product usability.",
    ],
  },
  // {
  //   org: "PES Modern College of Engineering",
  //   duration: "Dec 2023 — Feb 2024",
  //   role: "Undergraduate Intern",
  //   location: "Pune, India",
  //   details: [
  //     "Enhanced backend workflows for a web-based Smart Attendance and Activity Tracking System used in academic environments.",
  //     "Improved handling of attendance records, academic activities, and course operations to ensure accurate and consistent data flow.",
  //     "Implemented real-time notification delivery for instructor announcements and attendance updates, improving system responsiveness.",
  //     "Reduced manual follow-ups by automating alerts and updates, cutting operational overhead by nearly 30%.",
  //     "Refactored data-handling logic to improve reliability and consistency across attendance and activity logs.",
  //   ],
  // },
];

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  const previewLines = exp.details.slice(0, 3);
  const remainingLines = exp.details.slice(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <div className="mx-auto max-w-3xl pl-6">

      {/* Header */}
      <div className="mb-5">
        <h3 className="font-mono text-lg sm:text-xl font-semibold">
          {exp.org}
        </h3>

        <div className="mt-2 flex flex-wrap gap-x-2 text-[11px] font-mono tracking-wide text-[var(--text-secondary)]">
          <span>{exp.role}</span>
          <span>·</span>
          <span>{exp.location}</span>
          <span>·</span>
          <span>{exp.duration}</span>
        </div>
      </div>

      {/* Always-visible description */}
      <div className="space-y-3 max-w-3xl">
        {previewLines.map((line, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed text-[var(--text-secondary)]"
          >
            {line}
          </p>
        ))}
      </div>

      {/* Expanded content */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-4 space-y-3 max-w-3xl">
          {remainingLines.map((line, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-[var(--text-secondary)]"
            >
              {line}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Toggle */}
      {remainingLines.length > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-[var(--text-secondary)] hover:text-[var(--lime)] transition"
          >
            <span>{open ? "View less" : "View more"}</span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ↓
            </motion.span>
          </button>
        </div>
      )}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
