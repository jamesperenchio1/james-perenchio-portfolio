export const site = {
  name: "James Perenchio",
  role: "IT Systems Analyst · Aspiring Information Security Analyst",
  location: "Bangkok, Thailand · U.S. citizen",
  hero: {
    headline: "Security, built from the infrastructure up.",
    subline:
      "Systems and infrastructure professional moving into information security. My work sits at the overlap of keeping systems running and keeping access controlled — authentication, encryption, webhook integrity, zero-trust networking, and identity governance in regulated environments. Bangkok-based, U.S. citizen.",
  },
  about:
    "Systems and infrastructure professional moving into information security, backed by hands-on applied security engineering (authentication, encryption, webhook integrity, zero-trust access control) and day-to-day management of endpoints, identities, and export-controlled data in a regulated aerospace environment. Self-directed offensive and defensive-security practitioner (Hack The Box; self-hosted SSO-gated homelab). Well suited to a global security role, and ready to take formal ownership of incident response, identity, and access governance.",
  email: "jamyangperenchio@gmail.com",
  github: "https://github.com/jamesperenchio1",
  linkedin: "https://www.linkedin.com/in/james-perenchio-50b223234/",
  resume: "/James_Perenchio_CV.pdf",
  hackthebox: {
    profile: "https://profile.hackthebox.com/profile/019f709f-affa-7325-8490-debfaa3d856a",
    badge: false,
  },
  experience: [
    {
      title: "Engineering Systems Analyst",
      company: "Chromalloy",
      location: "Bangkok, Thailand",
      industry: "Aerospace / gas-turbine components",
      period: "Nov 2025 – Present",
      bullets: [
        "Manage endpoint software deployment and patching across the device fleet with IBM BigFix and provide remote support via Windows RDP; resolved ~200 support tickets since joining.",
        "Administer identity and access through Active Directory — account provisioning, disablement, and credential resets — the same containment actions used in incident response.",
        "Support access to export-controlled (ITAR / EAR) engineering documentation through the internal DocManager system, enforcing U.S. person access restrictions on sensitive data.",
        "Built an automated OCR pipeline for inbound paper purchase orders: folder-watched ingestion → OCR extraction → auto-translation of key fields for Thai-speaking staff, cutting manual data entry and turnaround.",
      ],
    },
    {
      title: "Systems Administrator",
      company: "KIS International School",
      location: "Bangkok, Thailand",
      industry: null,
      period: "Apr 2025 – Nov 2025",
      bullets: [
        "Administered Active Directory for 1,000+ users and managed the Apple device fleet with Jamf MDM.",
        "Migrated on-premise servers to Google Cloud Platform for backup and virtual-machine management.",
        "Automated project workflows to reduce manual error, contributing to a 20% reduction in project costs and ~25% efficiency gain.",
      ],
    },
    {
      title: "IT Support Analyst",
      company: "Monash University",
      location: "Melbourne, Australia",
      industry: null,
      period: "Feb 2024 – Feb 2025",
      bullets: [
        "Diagnosed and resolved hardware and software issues across BYOD devices, minimizing downtime for students and staff.",
        "Monitored and remediated issues through Slack-integrated automations and applied IT best practices to improve productivity.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Information Technology",
      institution: "RMIT University",
      note: "Specialization in Computer Networking",
      period: "2023 – 2025",
    },
    {
      degree: "Associate Degree in Information Technology",
      institution: "RMIT University",
      note: null,
      period: "2022 – 2023",
    },
  ],
  skills: {
    "Security & Identity": [
      "Active Directory",
      "Authentik SSO / forward-auth",
      "OAuth 2.0",
      "HMAC-SHA256 signature verification",
      "AES-256-GCM encryption",
      "Secrets management",
      "Nmap",
      "ClamAV",
      "Hack The Box",
      "Splunk (academic)",
    ],
    "Endpoint & Infrastructure": [
      "IBM BigFix",
      "Jamf MDM",
      "Proxmox",
      "Cloudflare Tunnel",
      "Docker",
      "Linux",
      "Windows",
      "macOS",
      "GCP",
      "AWS",
    ],
    "Automation & Development": [
      "Python",
      "Bash",
      "TypeScript / Next.js",
      "Git",
      "REST APIs",
      "Webhook integrations",
      "OCR pipelines",
    ],
    "Governance & Compliance": [
      "Export-controlled (ITAR / EAR) document handling",
      "PCI-DSS-aware payment design",
    ],
  },
  certs: [
    { name: "CompTIA Network+", note: "networking fundamentals" },
    { name: "SFPC — Scrum Foundation", note: "agile delivery" },
    { name: "Hack The Box", note: "ongoing offensive & defensive practice" },
  ],
};

export type Site = typeof site;
