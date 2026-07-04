"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/ui/glow-card";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export default function EducationSection() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Data Science Engineering",
      institution: "Biju Patnaik University of Technology (BPUT)",
      period: "2023 — 2027",
      grade: "CGPA: 8.0",
      description: "Focusing on Core Computer Science subjects, Machine Learning, Data Structures & Algorithms, Database Management Systems, and Artificial Intelligence integrations.",
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
    },
    {
      degree: "Advanced Diploma in IT (ADIT)",
      institution: "National Institute of Electronics & Information Technology (NIELIT)",
      period: "2022 — 2023",
      grade: "Score: 81.67%",
      description: "Mastered fundamental concepts including C, C++, Java programming, web development essentials, database management, and computer network foundations.",
      icon: <BookOpen className="w-6 h-6 text-primary-light" />,
    },
  ];

  return (
    <section id="education" className="relative py-24 bg-[#050816]">
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlowCard
                className="h-full border border-primary/10 hover:border-primary/30 p-6 flex flex-col justify-between"
                glowColor="rgba(99, 102, 241, 0.1)"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-card border border-primary/10 rounded-xl">
                      {edu.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-mono mt-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-accent font-mono mt-1">
                      {edu.institution}
                    </h4>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-primary/5 flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    {edu.grade}
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
