import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "@/components/portfolio/ThemeContext";

export default function ResumeSection() {
  const { isDark } = useTheme();

  return (
    <section id="resume" className="py-28 mt-6 mb-6">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-1"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-[var(--text-secondary)]">
            EDUCATION
          </p>
        </motion.div>

        {/* College Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                PES Modern College of Engineering
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                2021 — 2025
              </p>
            </div>

            <span className="text-sm text-[var(--text-secondary)]">
              Pune, India
            </span>
          </div>
        </motion.div>

        {/* GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <h4 className="font-mono text-xs tracking-widest text-[var(--text-secondary)] mb-4">
            GITHUB ACTIVITY
          </h4>

          <div className="flex justify-center">
            <GitHubCalendar
              username="SohamAgawane"
              blockSize={10}
              blockMargin={4}
              blockRadius={3}
              fontSize={12}

              colorScheme={isDark ? "dark" : "light"}

              theme={{
                light: [
                  "#ebedf0", // empty → light grey
                  "#9be9a8",
                  "#40c463",
                  "#30a14e",
                  "#216e39",
                ],
                dark: [
                  "#2d2d2d", // empty → dark grey
                  "#4c7a5d",
                  "#3fa66a",
                  "#2f7d57",
                  "#1f5f3a",
                ],
              }}
            />
          </div>
        </motion.div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-mono border px-4 py-2"
          >
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}