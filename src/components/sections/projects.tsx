"use client";

import { useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { ArrowUpRight, Github, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "@/components/ui/glow-card";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-[#050816]">
      {/* Background radial effects */}
      <div className="absolute top-[40%] left-[-15%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            Curated Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-gradient">Projects</span>
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
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 font-mono border cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary to-accent text-white border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-card/40 border-primary/5 text-text-secondary hover:text-white hover:border-primary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlowCard
                  className="h-full border border-primary/10 hover:border-primary/30 flex flex-col group relative overflow-hidden"
                  glowColor="rgba(6, 182, 212, 0.12)"
                >
                  {/* Glowing background mesh */}
                  <div
                    className={`absolute -right-20 -top-20 w-48 h-48 rounded-full bg-gradient-to-tr ${project.gradient} blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}
                  />

                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl p-2.5 rounded-xl bg-card border border-primary/15 group-hover:border-accent/40 group-hover:scale-110 transition-all font-mono">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors font-mono">
                          {project.title}
                        </h3>
                        <span className="text-[10px] bg-primary/25 border border-primary/10 text-primary-light font-mono px-2 py-0.5 rounded uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed text-sm md:text-base mb-6 flex-1">
                    {project.longDescription}
                  </p>

                  {/* Key Features List */}
                  {project.features && (
                    <div className="mb-6">
                      <span className="text-xs text-text-muted font-bold font-mono uppercase tracking-wider block mb-2.5">
                        Key Features
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-text-secondary">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-card/80 border border-primary/10 text-text-secondary text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project CTA Links */}
                  <div className="flex items-center gap-3 border-t border-primary/5 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary text-white font-mono text-xs font-bold rounded-lg shadow-lg hover:shadow-primary/25 transition-all"
                      >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-card border border-primary/10 hover:border-primary/30 hover:bg-card-hover text-text-secondary hover:text-white font-mono text-xs font-bold rounded-lg transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Code Repository
                      </a>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
