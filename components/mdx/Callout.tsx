import { ReactNode } from "react";

export function Callout({
  children,
  type = "info",
}: {
  children: ReactNode;
  type?: "info" | "warning" | "success";
}) {
  const styles = {
    info: {
      border: "var(--border)",
      bg: "var(--surface)",
      accent: "var(--accent)",
    },
    warning: {
      border: "#b45309",
      bg: "#451a03",
      accent: "#f59e0b",
    },
    success: {
      border: "#15803d",
      bg: "#052e16",
      accent: "#22c55e",
    },
  }[type];

  return (
    <div
      className="my-6 rounded-xl border-l-4 p-5"
      style={{
        borderColor: styles.border,
        backgroundColor: styles.bg,
        borderLeftColor: styles.accent,
      }}
    >
      {children}
    </div>
  );
}
