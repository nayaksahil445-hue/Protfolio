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
      "Award-winning full-stack startup platform connecting local service providers with customers across Odisha.",
    longDescription:
      "Award-winning full-stack startup platform connecting local service providers with customers across Odisha. Includes authentication, admin dashboard, dynamic search, responsive UI, and MySQL database.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    features: [
      "User Authentication & Admin Dashboard",
      "Dynamic Service Search & Filtering",
      "Responsive UI with Modern Design",
      "MySQL Database Integration",
      "Real-time Service Tracking",
    ],
    liveUrl: "https://osp24.vercel.app/",
    githubUrl: "https://github.com/nayaksahil445-hue/nayaksahil445-hue",
    category: "Full Stack",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    icon: "🚀",
  },
  {
    id: "face-recognition",
    title: "Smart Attendance System",
    description:
      "AI-powered attendance system using face recognition with real-time detection and automated tracking.",
    longDescription:
      "AI-powered attendance system using Python, OpenCV, Face Recognition, and SQLite/MySQL with real-time face detection and automated attendance tracking.",
    techStack: ["Python", "OpenCV", "Face Recognition", "SQLite", "MySQL"],
    features: [
      "Real-time Face Detection & Recognition",
      "Automated Attendance Tracking",
      "Secure Authentication System",
      "Database-backed Record Keeping",
      "Live Camera Feed Processing",
    ],
    liveUrl: "https://face-recognisation-two.vercel.app/",
    githubUrl: "https://github.com/nayaksahil445-hue/nayaksahil445-hue",
    category: "AI / ML",
    gradient: "from-[#06B6D4] to-[#6366F1]",
    icon: "🤖",
  },
  {
    id: "ai-payment",
    title: "AI Payment Prediction",
    description:
      "Machine Learning based payment prediction system analyzing transaction patterns for fraud detection.",
    longDescription:
      "Machine Learning based payment prediction system that analyzes transaction patterns and user behavior to predict payment outcomes and detect potential fraud.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
    features: [
      "ML-based Payment Prediction",
      "Transaction Pattern Analysis",
      "Data Visualization Dashboard",
      "Model Training & Evaluation",
    ],
    githubUrl: "https://github.com/nayaksahil445-hue/nayaksahil445-hue",
    category: "AI / ML",
    gradient: "from-[#8B5CF6] to-[#F59E0B]",
    icon: "💳",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with product catalog, cart system, and secure checkout.",
    longDescription:
      "Modern e-commerce website with product catalog, shopping cart, user authentication, order management, and responsive design.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
    features: [
      "Product Catalog & Search",
      "Shopping Cart & Checkout",
      "User Authentication",
      "Order Management System",
    ],
    githubUrl: "https://github.com/nayaksahil445-hue/nayaksahil445-hue",
    liveUrl: "https://enterprize-sand.vercel.app/",
    category: "Full Stack",
    gradient: "from-[#10B981] to-[#06B6D4]",
    icon: "🛒",
  },
  {
    id: "tourism",
    title: "Tourism Platform",
    description:
      "Interactive tourism platform showcasing destinations with booking features and travel guides.",
    longDescription:
      "Interactive tourism platform showcasing destinations across India with booking features, travel guides, interactive maps, and user reviews.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    features: [
      "Interactive Destination Guides",
      "Booking System",
      "Travel Itinerary Planner",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/nayaksahil445-hue/nayaksahil445-hue",
    category: "Full Stack",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    icon: "✈️",
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "AI / ML",
];
