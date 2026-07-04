"use client";

import React, { useRef, useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(99, 102, 241, 0.15)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-card p-6 relative overflow-hidden group ${className}`}
    >
      {/* Dynamic Hover Glow Light */}
      <div
        className="absolute pointer-events-none rounded-full transition-opacity duration-300"
        style={{
          width: "250px",
          height: "250px",
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(99, 102, 241, 0) 70%)`,
          left: `${coords.x - 125}px`,
          top: `${coords.y - 125}px`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
