"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : -180, opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute"
      >
        <Moon size={18} />
      </motion.div>
    </button>
  );
}
