export const site = {
  name: "James Perenchio",
  role: "IT Systems Analyst moving into Information Security",
  location: "Bangkok, Thailand (U.S. citizen)",
  hero: {
    headline: "I run IT infrastructure. Now I'm moving into security.",
    subline:
      "I'm an IT systems analyst at Chromalloy in Bangkok, looking after endpoints, identities, and export-controlled data for an aerospace manufacturer. Outside of work I build and secure my own projects: webhook verification, encryption at rest, hardened OAuth, and a homelab where every service sits behind a Cloudflare Tunnel and single sign-on. U.S. citizen.",
  },
  about:
    "My day job is keeping systems running and access controlled in a regulated aerospace environment. I patch and support the device fleet, manage Active Directory accounts, and make sure ITAR/EAR documents only reach U.S. persons. On my own time I work on the security engineering side: I build authentication, encryption, and webhook verification into the apps I ship, practice attack and defense on Hack The Box, and run a self-hosted lab where nothing is reachable without going through SSO first. I'm looking for a security role where I can own incident response, identity, and access governance.",
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
      period: "Nov 2025 - Present",
      bullets: [
        "Manage software deployment and patching across the device fleet with IBM BigFix, and provide remote support over Windows RDP. Resolved around 200 support tickets since joining.",
        "Administer identity and access in Active Directory: provisioning accounts, disabling them, and resetting credentials. These are the same containment steps used in incident response.",
        "Support access to export-controlled (ITAR / EAR) engineering documentation through the internal DocManager system, enforcing U.S. person access restrictions on sensitive data.",
        "Built an automated OCR pipeline for paper purchase orders. Scans dropped into a watched folder are OCR'd, and the key fields are translated automatically for Thai-speaking staff, which cut manual data entry and turnaround time.",
      ],
    },
    {
      title: "Systems Administrator",
      company: "KIS International School",
      location: "Bangkok, Thailand",
      industry: null,
      period: "Apr 2025 - Nov 2025",
      bullets: [
        "Administered Active Directory for 1,000+ users and managed the Apple device fleet with Jamf MDM.",
        "Migrated on-premise servers to Google Cloud Platform for backup and virtual-machine management.",
        "Automated project workflows to reduce manual errors, contributing to a 20% reduction in project costs and roughly a 25% efficiency gain.",
      ],
    },
    {
      title: "IT Support Analyst",
      company: "Monash University",
      location: "Melbourne, Australia",
      industry: null,
      period: "Feb 2024 - Feb 2025",
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
      period: "2023 - 2025",
    },
    {
      degree: "Associate Degree in Information Technology",
      institution: "RMIT University",
      note: null,
      period: "2022 - 2023",
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
    { name: "SFPC Scrum Foundation", note: "agile delivery" },
    { name: "Hack The Box", note: "ongoing offensive and defensive practice" },
  ],
};

export type Site = typeof site;
