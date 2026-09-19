export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "achievement" | "hackathon" | "education" | "certification" | "internship";
  icon: string;
  color: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "cttc-2025",
    title: "Artificial Intelligence & Machine Learning Intern",
    organization: "Central Tool & Training Center (CTTC), Govt. of India",
    period: "2025",
    description:
      "Completed a one-month hands-on internship covering supervised learning, model evaluation, and AI application development.",
    type: "internship",
    icon: "🤖",
    color: "#00E676",
  },
  {
    id: "lit-2024",
    title: "Advanced C Programming Intern",
    organization: "Lakshya Institute of Technology (LIT), Bhubaneswar",
    period: "2024",
    description:
      "Completed a one-month intensive internship focused on pointers, data structures, and memory management in C.",
    type: "internship",
    icon: "💻",
    color: "#4361EE",
  },
  {
    id: "bput-2025",
    title: "1st Place — BPUT Project Exhibition 2025",
    organization: "Biju Patnaik University of Technology (BPUT)",
    period: "2025",
    description:
      "Awarded 1st place for the OSP (Odisha Service Point) web platform project for technical excellence and real-world applicability.",
    type: "achievement",
    icon: "🏆",
    color: "#00E676",
  },
  {
    id: "techspire",
    title: "Winner — Hackathon TechSpire 1.0",
    organization: "Nalanda Institute of Technology, Bhubaneswar (Team Alpha Coders)",
    period: "2025",
    description:
      "Secured 1st place in Tourism Tech theme at Utkalpreneur E-Fest 2025 for outstanding creativity and technical execution.",
    type: "hackathon",
    icon: "🚀",
    color: "#4361EE",
  },
  {
    id: "coding-comp",
    title: "2nd Place — College-Level Coding Competition",
    organization: "Bhubaneswar Engineering College",
    period: "2024",
    description:
      "Secured runner-up position among peers in a competitive college-level coding contest.",
    type: "achievement",
    icon: "🥈",
    color: "#A0A0A0",
  },
  {
    id: "btech",
    title: "B.Tech in Computer Science & Data Science Engineering",
    organization: "Bhubaneswar Engineering College (2023–2027)",
    period: "2023 — 2027",
    description:
      "Pursuing B.Tech in CS & Data Science Engineering with CGPA 8.00 / 10.0. Core focus on Full Stack, ML, REST APIs, and Database Systems.",
    type: "education",
    icon: "🎓",
    color: "#4361EE",
  },
];

export const stats = [
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Git Commits", value: 500, suffix: "+" },
  { label: "CGPA (B.Tech)", value: 8.0, suffix: "" },
  { label: "Hackathons Won", value: 3, suffix: "+" },
];
