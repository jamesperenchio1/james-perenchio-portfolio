export function Highlights({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--surface)",
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
        </div>
      ))}
    </div>
  );
}
