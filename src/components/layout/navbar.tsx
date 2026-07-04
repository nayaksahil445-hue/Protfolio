"use client";

import { useEffect, useState } from "react";
import { Menu, X, Command, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { siteConfig, navLinks } from "@/data/site-config";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onToggleCommandPalette: () => void;
}

export default function Navbar({ onToggleCommandPalette }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add("light-mode-active");
      // Change custom css vars if light mode requested
      // We will define a light-mode-active class in app structure to override colors
      // Or we can just toggle Tailwind's dark class
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.remove("light-mode-active");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[40] transition-all duration-300 ${
          isScrolled
            ? "bg-[#050816]/75 backdrop-blur-md border-b border-primary/10 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with profile image */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/50 group-hover:border-accent transition-all duration-300">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white font-mono tracking-wider text-sm md:text-base group-hover:text-accent transition-all duration-300 uppercase">
                Sahil Nayak
              </span>
              <span className="text-[10px] text-text-secondary uppercase tracking-widest hidden md:inline font-mono">
                CS & DS Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-card/40 border border-primary/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 font-mono relative ${
                    activeSection === link.href.substring(1)
                      ? "text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary/25 to-secondary/25 border border-primary/20 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Actions Button Bar */}
          <div className="hidden md:flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={onToggleCommandPalette}
              className="p-2.5 rounded-full border border-primary/10 hover:border-primary/30 hover:bg-card/60 text-text-secondary hover:text-white transition-all cursor-pointer"
              title="Command Palette (Ctrl + K)"
            >
              <Command className="w-4.5 h-4.5" />
            </button>

            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-primary/10 hover:border-primary/30 hover:bg-card/60 text-text-secondary hover:text-white transition-all cursor-pointer"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Resume Button */}
            <a
              href={siteConfig.resumePath}
              download="Sahil_Nayak_Resume.pdf"
              className="px-5 py-2 rounded-full border border-primary text-white text-xs font-semibold uppercase tracking-wider bg-primary/10 hover:bg-primary/20 transition-all font-mono"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onToggleCommandPalette}
              className="p-2 rounded-full border border-primary/10 hover:bg-card/60 text-text-secondary hover:text-white transition-all"
            >
              <Command className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-primary/10 hover:bg-card/60 text-text-secondary hover:text-white transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-30 md:hidden glass border-b border-primary/10 shadow-2xl p-6 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium font-mono border-l-2 pl-3 py-1 ${
                    activeSection === link.href.substring(1)
                      ? "border-primary text-white font-bold"
                      : "border-transparent text-text-secondary hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-between border-t border-primary/10 pt-4">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-text-secondary hover:text-white font-mono text-sm"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-4 h-4" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" /> Dark Mode
                  </>
                )}
              </button>

              <a
                href={siteConfig.resumePath}
                download="Sahil_Nayak_Resume.pdf"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold uppercase tracking-wider text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
