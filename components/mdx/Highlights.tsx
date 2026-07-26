"use client";

import { motion } from "framer-motion";

export function Highlights({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="my-10 grid gap-4 md:grid-cols-2">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.85, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.4,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group rounded-xl border p-5 transition duration-300 hover:-translate-y-1"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg)",
            boxShadow: "0 0 0 0 transparent",
          }}
        >
          <h4
            className="mb-2 font-display text-base font-semibold"
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
