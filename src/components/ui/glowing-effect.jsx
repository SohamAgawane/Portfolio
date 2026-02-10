"use client";

import { motion, useSpring } from "framer-motion";

export function GlowingEffect({
  mouseX,
  mouseY,
  spread = 48,
  glow = true,
  disabled = false,
}) {
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  if (disabled || !glow) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={{
        background: `
          radial-gradient(
            ${spread}px circle at ${smoothX}px ${smoothY}px,
            rgba(204, 255, 0, 0.55),
            transparent 70%
          )
        `,
      }}
    />
  );
}