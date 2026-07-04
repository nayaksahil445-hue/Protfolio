"use client";

import { siteConfig } from "@/data/site-config";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: siteConfig.linkedin, icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { href: siteConfig.github, icon: <Github className="w-5 h-5" />, label: "GitHub" },
    { href: `mailto:${siteConfig.email}`, icon: <Mail className="w-5 h-5" />, label: "Email" },
    { href: siteConfig.whatsapp, icon: <PhoneCall className="w-5 h-5" />, label: "WhatsApp" },
  ];

  return (
    <footer className="relative bg-[#050816] pt-16 pb-8 overflow-hidden">
      {/* SVG Wave Divider at the top of the footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] fill-[#0A0F2C]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3v80H0V56.44c58.2-11.58,115.86-14.85,173.2,0C232.22,69.57,277.67,64.55,321.39,56.44Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-8 pt-8">
        {/* Monogram logo */}
        <a href="#home" className="flex flex-col items-center group">
          <div className="w-12 h-12 rounded-full border border-primary/20 bg-card/85 flex items-center justify-center font-mono font-bold text-white text-lg group-hover:border-accent transition-colors shadow-lg">
            SN
          </div>
          <span className="text-xs uppercase tracking-widest text-text-secondary mt-2.5 font-mono font-bold">
            Sahil Nayak
          </span>
        </a>

        {/* Social Link Row */}
        <div className="flex items-center gap-4">
          {socialLinks.map((soc, i) => (
            <a
              key={i}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-card border border-primary/10 hover:border-accent/30 text-text-secondary hover:text-white transition-all shadow-md"
              title={soc.label}
            >
              {soc.icon}
            </a>
          ))}
        </div>

        {/* Info Grid */}
        <div className="w-full border-t border-primary/10 mt-4 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-text-muted font-mono">
          <span>&copy; {currentYear} Sahil Nayak. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Live Clock: Bhubaneswar, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
