import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-xs text-zinc-500 py-6 border-t border-zinc-200 dark:border-zinc-700">
      <p>
        © {new Date().getFullYear()} Soham Agawane. All rights reserved.
      </p>
    </footer>
  );
}
