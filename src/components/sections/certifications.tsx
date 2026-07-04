"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/ui/glow-card";
import { Award, FileDown, ExternalLink, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function CertificationsSection() {
  const certificationsData = [
    {
      title: "Full-Stack Web Development Certification",
      issuer: "Apna College",
      date: "2024",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "SQL"],
    },
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "Apna College",
      date: "2024",
      skills: ["Java", "DSA", "Problem Solving"],
    },
    {
      title: "OpenCV Python for Computer Vision",
      issuer: "Self-Paced / Online",
      date: "2024",
      skills: ["OpenCV", "Python", "Image Processing"],
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "2023",
      skills: ["HTML5", "CSS3", "Responsive UI"],
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-[#050816] overflow-hidden">
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlowCard
                className="h-full border border-primary/10 hover:border-primary/30 p-5 flex flex-col justify-between relative group"
                glowColor="rgba(6, 182, 212, 0.1)"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-card border border-primary/10 rounded-xl text-accent">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-text-muted font-mono">{cert.date}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-mono leading-snug group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs text-primary-light font-mono block mt-1">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] bg-card border border-primary/5 px-2 py-0.5 rounded text-text-secondary font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-primary/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase text-text-muted font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Verified
                  </span>

                  <a
                    href={siteConfig.resumePath}
                    download
                    className="p-1.5 rounded-lg bg-card border border-primary/10 text-text-secondary hover:text-white hover:border-primary/30 transition-all"
                    title="Download Verification Details"
                  >
                    <FileDown className="w-4 h-4" />
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
