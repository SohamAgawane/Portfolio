"use client";

export default function GlowCard({ children }) {
    return (
        <div
            className="
        relative h-full rounded-2xl
        bg-neutral-100 dark:bg-neutral-900
        border border-neutral-300/60 dark:border-neutral-700/60
        p-6 md:p-7
      "
        >
            {children}
        </div>
    );
}