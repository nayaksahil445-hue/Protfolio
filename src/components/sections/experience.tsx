"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import GlowCard from "@/components/ui/glow-card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-[#050816]">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-primary/20 md:border-l-0 md:before:absolute md:before:inset-y-0 md:before:left-1/2 md:before:w-[1px] md:before:bg-primary/20 max-w-4xl mx-auto flex flex-col gap-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Left/Right Card Container */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <GlowCard
                      className="border border-primary/10 hover:border-primary/30 p-6 flex flex-col gap-3 relative"
                      glowColor="rgba(99, 102, 241, 0.1)"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold px-3 py-1 bg-primary/15 border border-primary/25 rounded-full text-primary-light font-mono">
                          {exp.period}
                        </span>
                        <span className="text-xs uppercase text-text-muted font-mono tracking-widest">
                          {exp.type}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 font-mono">
                          <span>{exp.icon}</span>
                          {exp.title}
                        </h3>
                        <h4 className="text-sm font-semibold text-accent font-mono mt-1">
                          {exp.organization}
                        </h4>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {exp.description}
                      </p>
                    </GlowCard>
                  </motion.div>
                </div>

                {/* Timeline Center Point Icon (on desktop) */}
                <div className="absolute left-[-8px] top-6 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_15px_rgba(99,102,241,0.5)] border-2 border-[#050816]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
