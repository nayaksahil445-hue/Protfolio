"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Monitor, Server, Brain, Wrench, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const tabIcons: Record<string, React.ReactNode> = {
    All: <Code className="w-4 h-4" />,
    Frontend: <Monitor className="w-4 h-4" />,
    Backend: <Server className="w-4 h-4" />,
    Programming: <Code className="w-4 h-4" />,
    "AI & Data Science": <Brain className="w-4 h-4" />,
    "Tools & DevOps": <Wrench className="w-4 h-4" />,
  };

  const categories = ["All", ...skillCategories.map((cat) => cat.title)];

  const displayedSkills =
    activeTab === "All"
      ? skillCategories.flatMap((cat) => cat.skills)
      : skillCategories.find((cat) => cat.title === activeTab)?.skills || [];

  return (
    <section id="skills" className="relative py-24 bg-[#0A0E1A] overflow-hidden select-none">
      {/* Background Animated Glowing Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.25, 1, 1.25],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-accent font-mono text-xs mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "90px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Tab Selector with animated sliding pill */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 font-mono focus:outline-none cursor-pointer ${
                  isActive ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#06B6D4] shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-white/20 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tabIcons[cat] || <Code className="w-4 h-4" />}
                  {cat}
                </span>
              </button>
            );
          })}
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
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.04, 0.3),
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="glass-card p-5 border border-white/10 hover:border-[#8B5CF6]/50 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] bg-[#0B1020]/70 backdrop-blur-xl"
              >
                {/* Glow backdrop on card hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#06B6D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#06B6D4]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-lg font-bold font-mono text-cyan-300 shadow-md group-hover:border-[#8B5CF6] transition-colors"
                    >
                      {skill.name.charAt(0)}
                    </motion.div>
                    <span className="font-bold text-white font-mono text-sm tracking-wide group-hover:text-cyan-200 transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  {/* Percentage level badge with hover bounce */}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-xs text-[#06B6D4] font-mono font-bold bg-[#06B6D4]/15 px-3 py-1 rounded-full border border-[#06B6D4]/30 shadow-inner"
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative h-2.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/10 p-[1px]">
                  {/* Animated Progress Bar fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + Math.min(index * 0.03, 0.25),
                    }}
                    className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#06B6D4] rounded-full relative"
                  >
                    {/* Glowing head dot at tip of progress bar */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />

                    {/* Animated shimmer light effect */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
