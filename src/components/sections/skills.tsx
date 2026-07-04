"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Monitor, Server, Brain, Wrench } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const tabIcons: Record<string, React.ReactNode> = {
    All: <Code className="w-4.5 h-4.5" />,
    Frontend: <Monitor className="w-4.5 h-4.5" />,
    Backend: <Server className="w-4.5 h-4.5" />,
    Programming: <Code className="w-4.5 h-4.5" />,
    "AI & Data Science": <Brain className="w-4.5 h-4.5" />,
    "Tools & DevOps": <Wrench className="w-4.5 h-4.5" />,
  };

  const categories = ["All", ...skillCategories.map((cat) => cat.title)];

  const displayedSkills =
    activeTab === "All"
      ? skillCategories.flatMap((cat) => cat.skills)
      : skillCategories.find((cat) => cat.title === activeTab)?.skills || [];

  return (
    <section id="skills" className="relative py-24 bg-[#050816]">
      {/* Glow gradient blobs */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 font-mono border cursor-pointer ${
                activeTab === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-card/40 border-primary/5 text-text-secondary hover:text-white hover:border-primary/20"
              }`}
            >
              {tabIcons[cat] || <Code className="w-4 h-4" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
                className="glass-card p-5 hover:border-primary/30 relative overflow-hidden group"
              >
                {/* Subtle radial shine */}
                <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#6366f1]/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-card border border-primary/10 flex items-center justify-center text-xl font-bold group-hover:border-primary/30 transition-all font-mono text-accent">
                      {skill.name.charAt(0)}
                    </div>
                    <span className="font-bold text-white font-mono">{skill.name}</span>
                  </div>
                  <span className="text-xs text-accent font-mono font-bold bg-accent/15 px-2.5 py-0.5 rounded-full border border-accent/25">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="h-2 w-full bg-card rounded-full overflow-hidden border border-primary/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
