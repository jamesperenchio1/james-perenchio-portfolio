"use client";

import { motion } from "framer-motion";

export function Highlights({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="not-prose my-8 grid gap-3 md:grid-cols-2">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.9, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.35,
            delay: i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-lg border p-4 transition hover:border-[var(--accent)]"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--surface)",
          }}
        >
          <h4
            className="mb-1 text-sm font-semibold"
            style={{ color: "var(--accent)" }}
          >
            {item.title}
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
