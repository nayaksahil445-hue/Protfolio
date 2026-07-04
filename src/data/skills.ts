export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    color: "#6366F1",
    skills: [
      { name: "HTML5", icon: "html5", level: 95 },
      { name: "CSS3", icon: "css3", level: 90 },
      { name: "JavaScript", icon: "javascript", level: 88 },
      { name: "React", icon: "react", level: 85 },
      { name: "Next.js", icon: "nextjs", level: 80 },
      { name: "Responsive Design", icon: "responsive", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    color: "#8B5CF6",
    skills: [
      { name: "Node.js", icon: "nodejs", level: 85 },
      { name: "Express.js", icon: "express", level: 82 },
      { name: "MySQL", icon: "mysql", level: 80 },
      { name: "SQL", icon: "sql", level: 78 },
    ],
  },
  {
    title: "Programming",
    icon: "Code",
    color: "#06B6D4",
    skills: [
      { name: "Python", icon: "python", level: 85 },
      { name: "Java", icon: "java", level: 75 },
      { name: "C", icon: "c", level: 72 },
    ],
  },
  {
    title: "AI & Data Science",
    icon: "Brain",
    color: "#F59E0B",
    skills: [
      { name: "Machine Learning", icon: "ml", level: 75 },
      { name: "OpenCV", icon: "opencv", level: 78 },
      { name: "Data Analytics", icon: "data", level: 72 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "Wrench",
    color: "#10B981",
    skills: [
      { name: "Git", icon: "git", level: 88 },
      { name: "GitHub", icon: "github", level: 90 },
    ],
  },
];
