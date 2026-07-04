export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "achievement" | "hackathon" | "education" | "certification";
  icon: string;
  color: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "bput-2025",
    title: "1st Place — BPUT Project Exhibition 2025",
    organization: "Biju Patnaik University of Technology",
    period: "2025",
    description:
      "Secured first place at the BPUT Project Exhibition, demonstrating excellence in technical execution, innovation, and project presentation at the university level.",
    type: "achievement",
    icon: "🏆",
    color: "#F59E0B",
  },
  {
    id: "techspire",
    title: "Winner — TechSpire 1.0 Hackathon",
    organization: "TechSpire",
    period: "2025",
    description:
      "Won the TechSpire 1.0 Hackathon with an innovative solution, proving rapid prototyping skills and the ability to deliver under pressure.",
    type: "hackathon",
    icon: "🚀",
    color: "#6366F1",
  },
  {
    id: "coding-comp",
    title: "2nd Place — College Coding Competition",
    organization: "College Level",
    period: "2024",
    description:
      "Secured second place in the college-level coding competition, demonstrating strong problem-solving abilities and competitive programming skills.",
    type: "achievement",
    icon: "🥈",
    color: "#8B5CF6",
  },
  {
    id: "btech",
    title: "B.Tech in CS & Data Science Engineering",
    organization: "University (2023–2027)",
    period: "2023 — Present",
    description:
      "Pursuing B.Tech in Computer Science & Data Science Engineering with a CGPA of 8.0. Building real-world projects alongside academics.",
    type: "education",
    icon: "🎓",
    color: "#06B6D4",
  },
];

export const stats = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Git Commits", value: 500, suffix: "+" },
  { label: "Certifications", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];
