"use client";

import React from "react";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#050816]" />
      {/* Aurora effects */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-[circle_at_30%_30%] from-[#6366f1]/15 via-transparent to-transparent animate-aurora" />
      <div className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] bg-radial-[circle_at_70%_70%] from-[#06b6d4]/10 via-transparent to-transparent animate-aurora [animation-delay:-5s]" />
      <div className="absolute top-[20%] right-[10%] w-[150%] h-[150%] bg-radial-[circle_at_50%_50%] from-[#8b5cf6]/10 via-transparent to-transparent animate-aurora [animation-delay:-10s]" />
    </div>
  );
}
