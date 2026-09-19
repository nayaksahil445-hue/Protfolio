export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "osp",
    title: "Odisha Service Point (OSP)",
    description:
      "Award-winning full-stack web startup platform connecting local service providers with customers across Odisha.",
    longDescription:
      "Award-winning full-stack web platform connecting local service providers with customers across Odisha. Features secure user authentication, role-based service listings, dynamic search functionality, admin dashboard, and MySQL database. Awarded 1st Place at BPUT Project Exhibition 2025.",
    techStack: ["HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "User Authentication & Role-Based Listings",
      "Dynamic Service Search & Provider Matching",
      "Admin Dashboard for User & Request Management",
      "Fully Responsive Desktop & Mobile UI",
      "Awarded 1st Place at BPUT Project Exhibition 2025",
    ],
    liveUrl: "https://osp24.vercel.app/",
    githubUrl: "https://github.com/nayaksahil445-hue/nayaksahil445-hue",
    category: "Full Stack",
    gradient: "from-[#4361EE] to-[#3A0CA3]",
    icon: "🚀",
  },
  {
    id: "face-recognition",
    title: "Smart Attendance System",
    description:
      "AI-powered attendance system using facial recognition with real-time detection, OpenCV, and automated tracking.",
    longDescription:
      "AI-powered attendance system using Python, OpenCV, Face Recognition technology, and SQLite/MySQL. Features real-time face detection, automated attendance logging, and tamper-resistant tracking for classrooms and organizations.",
    techStack: ["Python", "OpenCV", "Face Recognition", "SQLite", "MySQL"],
    features: [
      "Real-time Face Detection & Verification using OpenCV",
      "Automated Database Attendance Logging",
      "Proxy-resistant Attendance Tracking",
      "User-friendly Management Interface",
      "Winner TechSpire 1.0 Hackathon Highlight",
    ],
    liveUrl: "https://face-recognisation-two.vercel.app/",
    githubUrl: "https://github.com/nayaksahil445-hue/nayaksahil445-hue",
    category: "AI / ML",
    gradient: "from-[#00E676] to-[#4361EE]",
    icon: "🤖",
  },
  {
    id: "tourism",
    title: "Tourism Tech Platform",
    description:
      "TechSpire 1.0 Hackathon winning tourism platform with destination guides, booking features, and travel planning.",
    longDescription:
      "Hackathon-winning tourism platform built by Team Alpha Coders for Utkalpreneur E-Fest 2025. Features interactive destination guides, itinerary planners, booking tools, and responsive design.",
    techStack: ["HTML", "CSS", "JavaScript", "SQL"],
    features: [
      "Interactive Destination Guides",
      "Itinerary Planner & Booking System",
      "Team Alpha Coders Hackathon Winner",
      "Responsive User Experience",
    ],
    githubUrl: "https://github.com/nayaksahil445-hue/nayaksahil445-hue",
    category: "Full Stack",
    gradient: "from-[#4361EE] to-[#00E676]",
    icon: "✈️",
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "AI / ML",
];
