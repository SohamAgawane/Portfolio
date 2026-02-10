import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function SystemToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="flex items-center gap-3">

      <div
        onClick={toggle}
        role="button"
        aria-label="Toggle theme"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggle()}
        className="
          cursor-pointer
          flex items-center justify-center
          transition
          hover:opacity-80
        "
      >
        {isDark ? (
          <Moon
            size={18}
            strokeWidth={2}
            className="text-white"
          />
        ) : (
          <Sun
            size={18}
            strokeWidth={2}
            className="text-orange-400"
          />
        )}
      </div>
    </div>
  );
}
