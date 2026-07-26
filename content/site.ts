export const site = {
  name: "James Perenchio",
  role: "Information Security · IT Infrastructure",
  location: "Bangkok, Thailand · U.S. citizen",
  hero: {
    headline: "Security, built from the infrastructure up.",
    subline:
      "Infrastructure engineer moving into information security. My work sits at the overlap of keeping systems running and keeping access controlled — authentication, encryption, webhook integrity, zero-trust networking, and identity governance in regulated environments. Bangkok-based, U.S. citizen.",
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
  certs: [
    { name: "CompTIA Network+", note: "networking fundamentals" },
    { name: "SFPC — Scrum Foundation", note: "agile delivery" },
    { name: "Hack The Box", note: "ongoing offensive & defensive practice" },
  ],
};

export type Site = typeof site;
