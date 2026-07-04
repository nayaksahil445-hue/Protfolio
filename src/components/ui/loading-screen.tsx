"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds loading
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setComplete(true), 400);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          className="fixed inset-0 bg-[#050816] z-[99999] flex flex-col items-center justify-center p-6"
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#6366f1]/10 via-transparent to-transparent pointer-events-none" />

          {/* Sahil Nayak Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 relative z-10"
          >
            <div className="relative">
              {/* Outer Pulsing Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="w-24 h-24 rounded-full border-2 border-primary/30 flex items-center justify-center relative overflow-hidden backdrop-blur-md">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-fill-transparent font-mono">
                  SN
                </span>
                {/* Spinner Overlay */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="45"
                    className="stroke-[#0A0F2C] fill-none"
                    strokeWidth="2"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="45"
                    className="stroke-primary fill-none transition-all duration-75"
                    strokeWidth="2"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={2 * Math.PI * 45 * (1 - progress / 100)}
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-widest text-primary mt-4 uppercase font-mono">
              Sahil Nayak
            </h2>

            <div className="w-48 h-[2px] bg-card overflow-hidden rounded-full mt-2 relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-secondary"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-sm text-text-secondary font-mono">
              {Math.floor(progress)}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
