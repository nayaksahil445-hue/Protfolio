"use client";

import Link from "next/link";
import { Home, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#6366f1]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center max-w-md gap-4"
      >
        <span className="text-xs font-semibold px-4.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary-light font-mono uppercase tracking-widest flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Space Error
        </span>

        <h1 className="text-8xl md:text-9xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse">
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-bold text-white font-mono uppercase tracking-wider mt-2">
          Page Lost in Orbit
        </h2>

        <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6 font-mono">
          The coordinates you entered did not resolve to a valid destination. Let's get you back on course.
        </p>

        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-mono text-sm font-semibold rounded-xl shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Home className="w-4.5 h-4.5" />
          Navigate Home
        </Link>
      </motion.div>
    </div>
  );
}
