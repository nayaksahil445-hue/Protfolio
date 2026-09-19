"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, FileText, ExternalLink, Award, Briefcase, 
  GraduationCap, Code, CheckCircle, Mail, Phone, MapPin, Linkedin, Github, Printer, Eye, X
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    // Triggers download of resume.pdf from public directory
    const link = document.createElement("a");
    link.href = siteConfig.resumePath;
    link.download = "Sahil_Nayak_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="relative py-24 bg-[#0A0E1A] overflow-hidden select-none">
      {/* Radial Background Accents */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-[#4361EE]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-[#00E676]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4361EE]/15 border border-[#4361EE]/30 text-[#00E676] font-mono text-xs uppercase tracking-widest mb-3"
          >
            <FileText className="w-4 h-4 animate-pulse" />
            <span>Curriculum Vitae</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-[#F1F1F1] tracking-tight"
          >
            My Verified <span className="text-gradient">Resume</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A0A0A0] text-sm md:text-base max-w-2xl mx-auto mt-3 font-sans"
          >
            Comprehensive overview of professional experience, technical skills, verified certifications, award-winning projects, and academic background.
          </motion.p>

          {/* Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-[#F1F1F1] bg-[#4361EE] hover:bg-[#3651D4] shadow-[0_0_25px_rgba(67,97,238,0.45)] hover:shadow-[0_0_35px_rgba(67,97,238,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#00E676]" />
              <span>Download PDF Resume</span>
            </button>

            {/* Quick Preview Button */}
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-[#F1F1F1] bg-[#131A2B] border border-[#2A3348] hover:border-[#4361EE] hover:bg-[#1C263D] transition-all duration-200 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#4361EE]" />
              <span>Full Screen View</span>
            </button>
          </motion.div>
        </div>

        {/* Live Resume Card Document Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#131A2B] border border-[#2A3348] rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden"
        >
          {/* Top Decorative Border Pill */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#4361EE] via-[#00E676] to-[#3A0CA3]" />

          {/* Resume Header Section */}
          <div className="border-b border-[#2A3348] pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-[#F1F1F1] font-mono tracking-wider">
                SAHIL NAYAK
              </h1>
              <p className="text-lg font-bold text-[#00E676] font-mono mt-1">
                Full Stack Developer & AI Engineer
              </p>
              <p className="text-xs text-[#A0A0A0] font-mono mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4361EE]" />
                Bhubaneswar, Odisha, India
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs font-mono text-[#A0A0A0]">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[#00E676] transition-colors">
                <Mail className="w-4 h-4 text-[#4361EE]" />
                <span>{siteConfig.email}</span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-[#00E676] transition-colors">
                <Phone className="w-4 h-4 text-[#4361EE]" />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00E676] transition-colors">
                <Linkedin className="w-4 h-4 text-[#4361EE]" />
                <span>linkedin.com/in/sahil-nayak-dev</span>
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00E676] transition-colors">
                <Github className="w-4 h-4 text-[#4361EE]" />
                <span>github.com/nayaksahil445-hue</span>
              </a>
            </div>
          </div>

          {/* Resume Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Summary, Education, Achievements, Interests */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Professional Summary */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#00E676] font-mono mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E676]" />
                  Professional Summary
                </h3>
                <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed font-sans">
                  Results-driven Full Stack Developer and Computer Science & Data Science undergraduate with a strong foundation in front-end, backend, and database development. Skilled in building responsive, scalable web applications using HTML, CSS, JavaScript, and SQL, with growing expertise in MERN stack development. Delivered award-winning, real-world software including a full-stack startup platform and an AI-powered attendance system.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#00E676] font-mono mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#4361EE]" />
                  Education
                </h3>
                <div className="bg-[#0A0E1A]/80 border border-[#2A3348] p-4 rounded-xl">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-sm font-bold text-[#F1F1F1] font-mono">
                      B.Tech in Computer Science & Data Science Engineering
                    </h4>
                    <span className="text-xs font-mono text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded border border-[#00E676]/20">
                      2023 — 2027
                    </span>
                  </div>
                  <p className="text-xs text-[#4361EE] font-mono mt-1">Bhubaneswar Engineering College (BEC), BPUT</p>
                  <p className="text-xs text-[#A0A0A0] font-mono mt-2 font-semibold">CGPA: 8.00 / 10.0</p>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#00E676] font-mono mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#4361EE]" />
                  Key Achievements
                </h3>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-2.5 text-xs text-[#A0A0A0] font-sans">
                    <CheckCircle className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F1F1F1]">1st Place Winner — BPUT Project Exhibition 2025:</strong> Awarded 1st place for Odisha Service Point (OSP) startup platform.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#A0A0A0] font-sans">
                    <CheckCircle className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F1F1F1]">Winner — TechSpire 1.0 Hackathon:</strong> NIT BBSR (Team Alpha Coders, Tourism Tech Theme, Utkalpreneur E-Fest 2025).</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#A0A0A0] font-sans">
                    <CheckCircle className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F1F1F1]">2nd Place — College Coding Contest:</strong> Secured runner-up position among peers in competitive coding.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Skills, Internships, Projects */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Technical Skills */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#00E676] font-mono mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#4361EE]" />
                  Technical Skills
                </h3>
                <div className="flex flex-col gap-3 text-xs font-mono">
                  <div className="bg-[#0A0E1A]/60 border border-[#2A3348] p-3 rounded-lg">
                    <span className="text-[#4361EE] font-bold block mb-1">Languages:</span>
                    <span className="text-[#F1F1F1]">C, Java, HTML, CSS, JavaScript, SQL, Python</span>
                  </div>
                  <div className="bg-[#0A0E1A]/60 border border-[#2A3348] p-3 rounded-lg">
                    <span className="text-[#4361EE] font-bold block mb-1">Tools & Databases:</span>
                    <span className="text-[#F1F1F1]">MySQL, SQLite, MongoDB, Git, GitHub, VS Code, Eclipse</span>
                  </div>
                  <div className="bg-[#0A0E1A]/60 border border-[#2A3348] p-3 rounded-lg">
                    <span className="text-[#4361EE] font-bold block mb-1">Concepts & AI:</span>
                    <span className="text-[#F1F1F1]">Full Stack Web, REST APIs, MERN, Machine Learning, OpenCV, IoT</span>
                  </div>
                </div>
              </div>

              {/* Internships & Certifications */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#00E676] font-mono mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#4361EE]" />
                  Internships & Certifications
                </h3>
                <div className="flex flex-col gap-3 text-xs font-mono">
                  <div className="bg-[#0A0E1A]/60 border border-[#2A3348] p-3 rounded-lg">
                    <div className="flex justify-between items-center text-[#F1F1F1] font-bold">
                      <span>AI & Machine Learning Intern</span>
                      <span className="text-[10px] text-[#00E676]">2025</span>
                    </div>
                    <p className="text-[11px] text-[#A0A0A0]">Central Tool & Training Center (CTTC), Govt. of India</p>
                  </div>
                  <div className="bg-[#0A0E1A]/60 border border-[#2A3348] p-3 rounded-lg">
                    <div className="flex justify-between items-center text-[#F1F1F1] font-bold">
                      <span>Advanced C Programming Intern</span>
                      <span className="text-[10px] text-[#00E676]">2024</span>
                    </div>
                    <p className="text-[11px] text-[#A0A0A0]">Lakshya Institute of Technology, Bhubaneswar</p>
                  </div>
                  <div className="bg-[#0A0E1A]/60 border border-[#2A3348] p-3 rounded-lg">
                    <div className="flex justify-between items-center text-[#F1F1F1] font-bold">
                      <span>Front-End Dev Certification</span>
                      <span className="text-[10px] text-[#00E676]">Meta</span>
                    </div>
                    <p className="text-[11px] text-[#A0A0A0]">Coursera — HTML, CSS, JS & Responsive Design</p>
                  </div>
                </div>
              </div>

              {/* Featured Projects Highlight */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#00E676] font-mono mb-3 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#4361EE]" />
                  Featured Live Projects
                </h3>
                <div className="flex flex-col gap-2.5 text-xs font-mono">
                  <div className="p-3 bg-[#0A0E1A]/80 border border-[#2A3348] hover:border-[#4361EE] rounded-xl flex items-center justify-between group transition-all">
                    <div>
                      <span className="font-bold text-[#F1F1F1] group-hover:text-[#00E676] transition-colors block">
                        Odisha Service Point (OSP)
                      </span>
                      <span className="text-[10px] text-[#A0A0A0]">HTML, CSS, JS, MySQL · 1st Place BPUT 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="https://osp24.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[#4361EE]/20 text-[#00E676] hover:bg-[#4361EE]/40 text-[10px] font-mono flex items-center gap-1">
                        Live <ExternalLink className="w-3 h-3" />
                      </a>
                      <a href="https://vercel.com/nayaksahil445-hues-projects/osp24" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[#2A3348] text-[#F1F1F1] hover:bg-[#4361EE] text-[10px] font-mono flex items-center gap-1">
                        Vercel <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0A0E1A]/80 border border-[#2A3348] hover:border-[#4361EE] rounded-xl flex items-center justify-between group transition-all">
                    <div>
                      <span className="font-bold text-[#F1F1F1] group-hover:text-[#00E676] transition-colors block">
                        Smart Face Recognition Attendance
                      </span>
                      <span className="text-[10px] text-[#A0A0A0]">Python, OpenCV, SQLite · Live Demo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="https://face-recognisation-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[#4361EE]/20 text-[#00E676] hover:bg-[#4361EE]/40 text-[10px] font-mono flex items-center gap-1">
                        Live <ExternalLink className="w-3 h-3" />
                      </a>
                      <a href="https://vercel.com/nayaksahil445-hues-projects/face-recognisation" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[#2A3348] text-[#F1F1F1] hover:bg-[#4361EE] text-[10px] font-mono flex items-center gap-1">
                        Vercel <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Screen Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 select-text">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0A0E1A]/90 backdrop-blur-xl"
              onClick={() => setIsPreviewOpen(false)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#131A2B] border border-[#2A3348] rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2A3348] mb-4">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#F1F1F1]">
                  <FileText className="w-4 h-4 text-[#00E676]" />
                  <span>Sahil_Nayak_Resume.pdf</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#4361EE] text-[#F1F1F1] hover:bg-[#3651D4] transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#00E676]" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="p-2 rounded-full border border-[#2A3348] text-[#A0A0A0] hover:text-[#F1F1F1] hover:border-[#4361EE] transition-all cursor-pointer"
                    title="Print Resume"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 rounded-full border border-[#2A3348] text-[#A0A0A0] hover:text-[#F1F1F1] transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Printable Document View */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 text-xs text-[#F1F1F1] font-sans">
                {/* Header */}
                <div className="text-center pb-4 border-b border-[#2A3348]">
                  <h2 className="text-2xl font-bold font-mono text-[#F1F1F1]">SAHIL NAYAK</h2>
                  <p className="text-sm text-[#00E676] font-mono">Full Stack Developer</p>
                  <p className="text-xs text-[#A0A0A0] font-mono mt-1">
                    Bhubaneswar, Odisha | +91 7894838425 | nayaksahil445@gmail.com |{" "}
                    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#4361EE] hover:underline font-bold">
                      LinkedIn Profile
                    </a>{" "}
                    |{" "}
                    <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-[#4361EE] hover:underline font-bold">
                      GitHub Profile
                    </a>
                  </p>
                </div>

                {/* Summary */}
                <div>
                  <h3 className="font-mono font-bold text-[#00E676] uppercase tracking-wider mb-1 border-b border-[#2A3348] pb-1">
                    Professional Summary
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    Results-driven Full Stack Developer and Computer Science and Data Science undergraduate with a strong foundation in front-end, backend, and database development. Skilled in building responsive, scalable web applications using HTML, CSS, JavaScript, and SQL, with growing expertise in MERN stack development. Delivered award-winning, real-world software, including a full-stack startup platform and an AI-powered attendance system. Seeking a Full Stack Developer / Software Engineer role to deliver immediate, measurable impact.
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="font-mono font-bold text-[#00E676] uppercase tracking-wider mb-2 border-b border-[#2A3348] pb-1">
                    Technical Skills
                  </h3>
                  <ul className="space-y-1 text-[#A0A0A0]">
                    <li><strong className="text-[#F1F1F1]">Languages:</strong> C, Java, HTML, CSS, JavaScript, SQL</li>
                    <li><strong className="text-[#F1F1F1]">Web Technologies:</strong> HTML5, CSS3, Responsive Web Design</li>
                    <li><strong className="text-[#F1F1F1]">Tools & Databases:</strong> MySQL, SQLite, Git, GitHub, Eclipse IDE</li>
                    <li><strong className="text-[#F1F1F1]">Concepts:</strong> Full Stack Development, REST APIs, MERN Stack (Learning), Database Management, Artificial Intelligence, Internet of Things (IoT)</li>
                    <li><strong className="text-[#F1F1F1]">Operating Systems & Tools:</strong> Windows, Linux, Microsoft Office, Excel</li>
                  </ul>
                </div>

                {/* Internships & Certifications */}
                <div>
                  <h3 className="font-mono font-bold text-[#00E676] uppercase tracking-wider mb-2 border-b border-[#2A3348] pb-1">
                    Internships & Certifications
                  </h3>
                  <div className="space-y-2 text-[#A0A0A0]">
                    <div>
                      <div className="flex justify-between font-bold text-[#F1F1F1]">
                        <span>Artificial Intelligence & Machine Learning Intern | CTTC Bhubaneswar</span>
                        <span>2025</span>
                      </div>
                      <p>• Completed a one-month hands-on internship covering supervised learning, model evaluation, and AI application development.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-[#F1F1F1]">
                        <span>Advanced C Programming Intern | Lakshya Institute of Technology, Bhubaneswar</span>
                        <span>2024</span>
                      </div>
                      <p>• Completed a one-month intensive internship focused on pointers, data structures, and memory management in C.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-[#F1F1F1]">
                        <span>Front-End Development Certification | Meta (Coursera)</span>
                        <span>2024</span>
                      </div>
                      <p>• Completed certification covering HTML, CSS, responsive design, and core JavaScript fundamentals.</p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h3 className="font-mono font-bold text-[#00E676] uppercase tracking-wider mb-2 border-b border-[#2A3348] pb-1">
                    Projects
                  </h3>
                  <div className="space-y-3 text-[#A0A0A0]">
                    <div>
                      <div className="flex justify-between font-bold text-[#F1F1F1] flex-wrap gap-2">
                        <span>Odisha Service Point (OSP) - Web-Based Startup Platform</span>
                        <div className="flex items-center gap-2">
                          <a href="https://osp24.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00E676] hover:underline font-mono">
                            [Live Demo]
                          </a>
                          <span>|</span>
                          <a href="https://vercel.com/nayaksahil445-hues-projects/osp24" target="_blank" rel="noopener noreferrer" className="text-[#4361EE] hover:underline font-mono">
                            [Vercel Project]
                          </a>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#4361EE] font-mono">Tech Stack: HTML, CSS, JavaScript, MySQL</p>
                      <ul className="list-disc pl-4 space-y-0.5 mt-1">
                        <li>Designed and developed a full-stack web platform connecting local service providers with customers across Odisha.</li>
                        <li>Implemented secure user authentication, role-based service listings, and dynamic search functionality.</li>
                        <li>Built an admin dashboard for managing users, services, and requests.</li>
                        <li>Awarded 1st Place at the BPUT Project Exhibition 2025 for technical excellence and real-world applicability.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-[#F1F1F1] flex-wrap gap-2">
                        <span>Smart Attendance System Using Face Recognition</span>
                        <div className="flex items-center gap-2">
                          <a href="https://face-recognisation-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00E676] hover:underline font-mono">
                            [Live Demo]
                          </a>
                          <span>|</span>
                          <a href="https://vercel.com/nayaksahil445-hues-projects/face-recognisation" target="_blank" rel="noopener noreferrer" className="text-[#4361EE] hover:underline font-mono">
                            [Vercel Project]
                          </a>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#4361EE] font-mono">Tech Stack: Python, OpenCV, Face Recognition, SQLite/MySQL</p>
                      <ul className="list-disc pl-4 space-y-0.5 mt-1">
                        <li>Developed an AI-powered attendance system using facial recognition technology to automate identity verification.</li>
                        <li>Implemented real-time face detection and recognition using OpenCV.</li>
                        <li>Automated attendance recording and storage in a database, eliminating manual data entry.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="font-mono font-bold text-[#00E676] uppercase tracking-wider mb-1 border-b border-[#2A3348] pb-1">
                    Education
                  </h3>
                  <div className="flex justify-between font-bold text-[#F1F1F1]">
                    <span>B.Tech - Computer Science & Data Science Engineering | Bhubaneswar Engineering College</span>
                    <span>2023 - 2027</span>
                  </div>
                  <p className="text-[#A0A0A0] mt-0.5">CGPA: 8.00 / 10.0</p>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="font-mono font-bold text-[#00E676] uppercase tracking-wider mb-1 border-b border-[#2A3348] pb-1">
                    Achievements
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[#A0A0A0]">
                    <li><strong className="text-[#F1F1F1]">1st Place, BPUT Project Exhibition 2025:</strong> Awarded for the OSP (Odisha Service Point) web platform project.</li>
                    <li><strong className="text-[#F1F1F1]">Winner, Hackathon TechSpire 1.0:</strong> Nalanda Institute of Technology, Bhubaneswar (Team Alpha Coders, Theme Tourism, Utkalpreneur E-Fest 2025).</li>
                    <li><strong className="text-[#F1F1F1]">2nd Place, College-Level Coding Competition:</strong> Secured runner-up position among peers in a college coding contest.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
