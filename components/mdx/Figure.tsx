import { ReactNode } from "react";

export function Figure({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div
        className="overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--border)" }}
      >
        {children}
      </div>
      {caption && (
        <figcaption
          className="mt-2 text-center text-xs"
          style={{ color: "var(--muted)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
