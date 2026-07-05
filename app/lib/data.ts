// Edit everything in this file to make the site yours.
// Nothing below needs touching in the component files.

export const profile = {
  name: "Apeli Samwel",
  role: "NOC Engineer — Unity Contract & Live-Ops Support",
  tagline:
    "I triage production incidents for a living. Bugs in your game don't stand a chance either — available for freelance Unity fixes, QA, and live-ops support.",
  location: "Nairobi, Kenya",
  phone: "+254 797 153 554",
  email: "apelisamwel@gmail.com",
  itchUrl: "https://samwelbrianapeli.itch.io/nyota-vanguard",
  githubUrl: "https://github.com/your-username", // update with your actual GitHub
  linkedinUrl: "https://linkedin.com/in/your-username", // update with your actual LinkedIn
  resumePdf: "/resume.pdf",
  avatarUrl: "/avatar.jpg", // drop a headshot into /public with this filename
  availability: "Open to freelance & contract work — not seeking full-time",
};

export const stats = [
  { label: "yrs production support", value: "3+" },
  { label: "countries supported", value: "13" },
  { label: "primary stack", value: "unity / c#" },
  { label: "status", value: "open to contracts" },
];

// What you're actually available for. This is the pitch, not just a tag list.
export const availableFor = [
  {
    title: "Bug fixing & QA",
    detail:
      "Reproduce, triage, and fix reported issues in an existing Unity project — the same incident-triage workflow I run daily on live production systems.",
  },
  {
    title: "Live-ops & post-launch support",
    detail:
      "Monitor, log-analyze, and patch small issues after your game ships. SLA-driven turnaround, clear incident documentation.",
  },
  {
    title: "Small feature contracts",
    detail:
      "Scoped additions to an existing game — a new enemy type, a UI screen, a save system — delivered on a fixed timeline.",
  },
  {
    title: "Game jams",
    detail:
      "Open to joining teams for jams to build fast, collaborate, and expand what's in my portfolio.",
  },
];

// Chronological log — most recent first. Order carries real information here,
// so keep it in date order rather than re-sorting by importance.
export const deployments = [
  {
    id: "log_004",
    period: "2026 — present",
    title: "Unity developer (self-directed)",
    org: "Independent",
    summary:
      "Designing and building Nyota Vanguard, a Unity space shooter, end to end — mechanics, systems, and deployment to itch.io. Applying production debugging habits from NOC work directly to game systems debugging.",
    tags: ["Unity", "C#", "Game design"],
  },
  {
    id: "log_003",
    period: "March 2025 — present",
    title: "NOC engineer",
    org: "Burn Manufacturing, Nairobi",
    summary:
      "Provide Tier 2/3 production support for backend applications, APIs, and databases. Support Laravel (PHP) applications in production, validate REST APIs with Postman, investigate transactions via SQL, monitor availability with AWS CloudWatch, and run automation via Docker.",
    tags: ["Tier 2/3 support", "REST APIs", "Log analysis", "AWS CloudWatch"],
  },
  {
    id: "log_002",
    period: "August 2023 — April 2025",
    title: "NOC engineer",
    org: "iSON Technologies, Nairobi",
    summary:
      "Supported network, voice, and service operations across 13 countries in East, West, Central, and Southern Africa. Performed advanced incident triage and log analysis, supported Cisco CUCM voice environments, and led root cause analysis on complex escalations.",
    tags: ["Incident triage", "VoIP support", "RCA", "24/7 operations"],
  },
  {
    id: "log_001",
    period: "April 2023 — September 2023",
    title: "Intern",
    org: "Public Service Commission, Nairobi",
    summary:
      "Provided first-line technical and hardware support across departments, assisted with basic network configuration and troubleshooting, and supported frontend issue diagnosis (HTML, CSS, JavaScript).",
    tags: ["IT support", "Networking basics", "Frontend debugging"],
  },
];

export const skills = {
  "game dev": [
    "Unity",
    "C#",
    "WebGL builds",
    "Bug fixing & QA testing",
  ],
  "support & ops (transfers directly)": [
    "Incident triage & log analysis",
    "SLA-driven resolution",
    "REST API testing (Postman)",
    "SQL data validation",
  ],
  tools: ["Git", "Docker", "AWS CloudWatch", "Jira / GLPI"],
};

export const education = {
  degree: "BSc, Applied Statistics with Computing",
  school: "University of Kabianga, Kericho",
  period: "September 2014 — July 2018",
};

export const project = {
  name: "Nyota Vanguard",
  tagline: "Defend the stars.",
  description:
    "An arcade-style space shooter built solo in Unity — my first shipped prototype. Core movement, shooting, and enemy wave loop are playable now, with more content in active development.",
  status: "Early prototype — actively developed",
  playUrl: profile.itchUrl,
  tech: ["Unity", "C#"],
};
