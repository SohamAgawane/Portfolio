import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import profileImage from "../../assets/photo.jpg";

export default function HeroSection({ isPlaying }) {
  const { isDark } = useTheme();
  const [imageHovered, setImageHovered] = useState(false);

  const shouldBeColorful = isPlaying || imageHovered;

  return (
    <section className="min-h-[90svh] flex items-center px-4 sm:px-6 pt-10 lg:pt-12 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 border ${isDark ? "border-white" : "border-black"
            }`}
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r ${isDark
              ? "border-white bg-[#0A0A0A]"
              : "border-black bg-[#FAFAFA]"
              }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
              FULL STACK
              <br />
              <span className="block mt-1 font-playfair italic font-medium">
                DEVELOPER
              </span>
            </h1>

            <p className="text-base sm:text-lg mb-6 leading-relaxed opacity-70">
              Building software with purpose.
              <br />
              Curiosity-driven. Detail-obsessed.
            </p>

            <div
              className={`pt-6 border-t ${isDark ? "border-white/20" : "border-black/20"
                }`}
            >
              <p className="text-base sm:text-sm leading-relaxed opacity-70 max-w-xl">
                Turning ideas into reliable, well-crafted digital experiences.
              </p>
              <p className="text-base sm:text-sm leading-relaxed opacity-70 mt-2 max-w-xl">
                Learning, building, and iterating with intent and curiosity.
              </p>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative overflow-hidden max-h-[60vh] lg:max-h-none"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-500"
              style={{
                filter: shouldBeColorful
                  ? "grayscale(0) contrast(1.1) brightness(1)"
                  : "grayscale(0.85) contrast(1.15) brightness(1.1)",
              }}
            />

            {/* GRID OVERLAY */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${imageHovered ? "opacity-30" : "opacity-0"
                }`}
            >
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#CCFF00"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
