"use client";

import { useEffect, useState } from "react";

export function ScrollProgress({ color }: { color: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full origin-left transition-transform duration-150 ease-out"
        style={{
          backgroundColor: color,
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
