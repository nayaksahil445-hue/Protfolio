"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { stats } from "@/data/experience";
import AnimatedCounter from "@/components/ui/animated-counter";
import { motion } from "framer-motion";
import { BookOpen, Award, Target, Flame } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: "Achievements",
      desc: "1st Place BPUT 2025 Exhibition, TechSpire 1.0 Hackathon Winner.",
      color: "from-accent/10 to-primary/5",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      title: "Education",
      desc: "B.Tech in Computer Science & Data Science (2023-2027), CGPA 8.0.",
      color: "from-primary/10 to-secondary/5",
    },
    {
      icon: <Target className="w-5 h-5 text-secondary" />,
      title: "Current Focus",
      desc: "Deep diving into Machine Learning models, OpenCV, and full-stack platforms.",
      color: "from-secondary/10 to-accent/5",
    },
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 bg-[#050816]">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image Reveal & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            {/* Scroll-triggered Image Reveal Container */}
            <motion.div
              initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden border border-primary/20 bg-card group"
            >
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-768px) 340px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Counters / Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[340px]">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card/50 border border-primary/10 rounded-xl p-4 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-white font-mono flex justify-center items-center">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-secondary mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Flame className="w-5 h-5 text-accent animate-pulse" />
                Crafting digital experiences with precision
              </h3>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                {siteConfig.bio}
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4 mt-4">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex items-start gap-4 p-4.5 rounded-xl border border-primary/10 bg-gradient-to-r ${card.color} backdrop-blur-sm hover:border-primary/30 transition-all`}
                >
                  <div className="p-3 bg-card border border-primary/10 rounded-xl mt-1">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-mono uppercase tracking-wide">
                      {card.title}
                    </h4>
                    <p className="text-sm text-text-secondary">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
