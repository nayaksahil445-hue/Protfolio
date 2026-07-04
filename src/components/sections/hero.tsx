"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import TypingAnimation from "@/components/ui/typing-animation";
import ParticleField from "@/components/ui/particle-field";
import MagneticButton from "@/components/ui/magnetic-button";
import { Github, Linkedin, Mail, PhoneCall, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const socialIcons = [
    {
      href: siteConfig.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-950/20",
    },
    {
      href: siteConfig.github,
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      color: "hover:text-white hover:border-white/50 hover:bg-white/10",
    },
    {
      href: `mailto:${siteConfig.email}`,
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      color: "hover:text-accent hover:border-accent/50 hover:bg-accent-950/20",
    },
    {
      href: siteConfig.whatsapp,
      icon: <PhoneCall className="w-5 h-5" />,
      label: "WhatsApp",
      color: "hover:text-green-400 hover:border-green-400/50 hover:bg-green-950/20",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="absolute inset-0 bg-radial-[circle_at_30%_30%] from-[#6366f1]/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[circle_at_75%_75%] from-[#06b6d4]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating Canvas Particles */}
      <ParticleField />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Animated Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary-light text-xs font-semibold uppercase tracking-wider font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Welcome to my space
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl font-bold tracking-tight text-white mb-4"
          >
            Hi, I'm{" "}
            <span className="text-gradient font-extrabold block lg:inline">
              {siteConfig.name}
            </span>
          </motion.h1>

          {/* Subheading with Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl font-mono text-text-secondary mb-6 h-[40px] flex items-center justify-center lg:justify-start"
          >
            <span className="mr-2">I am an</span>
            <TypingAnimation words={siteConfig.roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body-lg max-w-xl text-text-secondary mb-8"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <a href="#projects">
              <MagneticButton variant="accent">View Projects</MagneticButton>
            </a>
            <a href="#contact">
              <MagneticButton variant="outline">Hire Me</MagneticButton>
            </a>
            <a href={siteConfig.resumePath} download="Sahil_Nayak_Resume.pdf">
              <MagneticButton variant="primary">Download Resume</MagneticButton>
            </a>
          </motion.div>

          {/* Socials Connection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs text-text-muted uppercase tracking-widest font-mono">
              Find me on
            </span>
            <div className="flex items-center gap-3">
              {socialIcons.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border border-primary/10 text-text-secondary transition-all duration-300 ${soc.color}`}
                  title={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Animated Profile Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center"
          >
            {/* Holographic Glowing Rotator */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-2 rounded-full border border-dashed border-accent/20 animate-spin-slow [animation-duration:15s] pointer-events-none" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary to-accent blur-2xl opacity-20 pointer-events-none" />

            {/* Glowing Ring Halo */}
            <div className="absolute inset-4 rounded-full border-2 border-accent/40 shadow-[0_0_30px_rgba(6,182,212,0.4)] pointer-events-none z-10" />

            {/* Profile Frame */}
            <div className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden relative border border-primary/40 bg-card shadow-2xl">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-w-786px) 220px, 280px"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-4 right-4 bg-card/85 backdrop-blur-md border border-primary/20 px-3.5 py-1.5 rounded-2xl shadow-xl z-20 flex items-center gap-2 font-mono text-xs text-white"
            >
              <span className="text-emerald-400">●</span> Available to work
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-6 left-2 bg-card/85 backdrop-blur-md border border-primary/20 px-3.5 py-1.5 rounded-2xl shadow-xl z-20 flex items-center gap-2 font-mono text-xs text-white"
            >
              <span>🚀</span> AI Engineer
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted z-10 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
