export function VideoEmbed({
  src,
  title,
}: {
  src: string;
  title?: string;
}) {
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");

  let embedUrl = src;
  if (isYouTube) {
    try {
      const url = new URL(src);
      const id = url.searchParams.get("v") || url.pathname.slice(1);
      embedUrl = `https://www.youtube.com/embed/${id}`;
    } catch {
      embedUrl = src;
    }
  }

  return (
    <figure className="my-8">
      <div
        className="overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="relative aspect-video">
          <iframe
            src={embedUrl}
            title={title || "Video embed"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
      {title && (
        <figcaption
          className="mt-2 text-center text-xs"
          style={{ color: "var(--muted)" }}
        >
          {title}
        </figcaption>
      )}
    </figure>
  );
}
