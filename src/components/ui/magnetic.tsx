"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  range?: number;
  strength?: number;
}

export default function Magnetic({
  children,
  className = "inline-block",
  range = 60,
  strength = 0.3,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const x = clientX - centerX;
    const y = clientY - centerY;
    
    // Check if pointer is within standard active range
    const distance = Math.sqrt(x * x + y * y);
    
    if (distance < range) {
      setPosition({ x: x * strength, y: y * strength });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
