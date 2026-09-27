import { ReactNode } from "react";

function ZeroTrustSVG() {
  return (
    <svg
      viewBox="0 0 720 460"
      role="img"
      aria-label="Zero-trust request path from the internet through Cloudflare Tunnel and Cloudflare Access to a Guacamole gateway and other services on an Ubuntu host."
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <marker
          id="diagram-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
        <marker
          id="diagram-arrow-muted"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="var(--muted)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      <g fontFamily="var(--font-mono)">
        {/* Internet */}
        <rect
          x="260"
          y="16"
          width="200"
          height="44"
          rx="8"
          fill="var(--bg)"
          stroke="var(--border)"
        />
        <text
          x="360"
          y="44"
          textAnchor="middle"
          fill="var(--text)"
          fontSize="13"
          fontWeight="500"
        >
          internet / users
        </text>

        {/* Arrow down */}
        <line
          x1="360"
          y1="60"
          x2="360"
          y2="92"
          stroke="var(--accent)"
          markerEnd="url(#diagram-arrow)"
        />

        {/* Cloudflare Tunnel */}
        <rect
          x="240"
          y="92"
          width="240"
          height="56"
          rx="8"
          fill="var(--surface)"
          stroke="var(--accent)"
        />
        <text
          x="360"
          y="118"
          textAnchor="middle"
          fill="var(--text)"
          fontSize="13"
          fontWeight="500"
        >
          Cloudflare Tunnel
        </text>
        <text
          x="360"
          y="138"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="11"
        >
          no open inbound ports
        </text>

        {/* Arrow down */}
        <line
          x1="360"
          y1="148"
          x2="360"
          y2="180"
          stroke="var(--accent)"
          markerEnd="url(#diagram-arrow)"
        />

        {/* Cloudflare Access */}
        <rect
          x="240"
          y="180"
          width="240"
          height="56"
          rx="8"
          fill="var(--surface)"
          stroke="var(--accent)"
        />
        <text
          x="360"
          y="206"
          textAnchor="middle"
          fill="var(--text)"
          fontSize="13"
          fontWeight="500"
        >
          Cloudflare Access
        </text>
        <text
          x="360"
          y="226"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="11"
        >
          identity check on every hostname
        </text>

        {/* Identity provider box */}
        <rect
          x="520"
          y="180"
          width="180"
          height="56"
          rx="8"
          fill="var(--surface)"
          stroke="var(--border)"
          strokeDasharray="4 3"
        />
        <text
          x="610"
          y="202"
          textAnchor="middle"
          fill="var(--text)"
          fontSize="12"
          fontWeight="500"
        >
          Google SSO
        </text>
        <text
          x="610"
          y="218"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="10"
        >
          or emailed one-time code
        </text>

        {/* Identity arrow */}
        <line
          x1="520"
          y1="208"
          x2="480"
          y2="208"
          stroke="var(--muted)"
          markerEnd="url(#diagram-arrow-muted)"
        />

        {/* Arrow down */}
        <line
          x1="360"
          y1="236"
          x2="360"
          y2="268"
          stroke="var(--accent)"
          markerEnd="url(#diagram-arrow)"
        />

        {/* Ubuntu host */}
        <rect
          x="80"
          y="268"
          width="560"
          height="176"
          rx="16"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text
          x="360"
          y="296"
          textAnchor="middle"
          fill="var(--text)"
          fontSize="13"
          fontWeight="500"
        >
          Ubuntu host: headless Intel N100, Docker
        </text>

        {/* Services */}
        <rect
          x="120"
          y="322"
          width="136"
          height="56"
          rx="8"
          fill="var(--bg)"
          stroke="var(--accent)"
        />
        <text
          x="188"
          y="345"
          textAnchor="middle"
          fill="var(--text)"
          fontSize="12"
          fontWeight="500"
        >
          Guacamole
        </text>
        <text
          x="188"
          y="362"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="8"
        >
          Kali · DVWA · Juice Shop
        </text>

        <rect
          x="292"
          y="322"
          width="136"
          height="56"
          rx="8"
          fill="var(--bg)"
          stroke="var(--border)"
        />
        <text
          x="360"
          y="345"
          textAnchor="middle"
          fill="var(--text)"
          fontSize="12"
          fontWeight="500"
        >
          Supabase
        </text>
        <text
          x="360"
          y="362"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="9"
        >
          self-hosted
        </text>

        <rect
          x="464"
          y="322"
          width="136"
          height="56"
          rx="8"
          fill="var(--bg)"
          stroke="var(--border)"
        />
        <text
          x="532"
          y="345"
          textAnchor="middle"
          fill="var(--text)"
          fontSize="12"
          fontWeight="500"
        >
          ocis + OnlyOffice
        </text>
        <text
          x="532"
          y="362"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="9"
        >
          files &amp; docs
        </text>

        <text
          x="360"
          y="412"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="11"
        >
          + SearXNG and other Docker services
        </text>
      </g>
    </svg>
  );
}

export function Diagram({
  children,
  caption,
}: {
  children?: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <div
        className="overflow-hidden rounded-2xl border p-4 md:p-6"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        {children ?? <ZeroTrustSVG />}
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-center text-xs"
          style={{ color: "var(--muted)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
