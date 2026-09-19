"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { 
  Sun, Moon, Menu, X, Command, Search, Sparkles,
  Home, User, Code2, Briefcase, GraduationCap, Award, Mail, FileText
} from "lucide-react";
import Image from "next/image";
import { siteConfig, navLinks } from "@/data/site-config";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onToggleCommandPalette: () => void;
}

const navIcons: Record<string, React.ElementType> = {
  "#home": Home,
  "#about": User,
  "#skills": Code2,
  "#projects": Briefcase,
  "#experience": Sparkles,
  "#education": GraduationCap,
  "#certifications": Award,
  "#resume": FileText,
  "#contact": Mail,
};

export default function Navbar({ onToggleCommandPalette }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ── Theme ──────────────────────────────────────────────── */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    applyTheme(isDark);
    setDarkMode(isDark);
  }, []);

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light-mode-active");
    } else {
      document.documentElement.classList.add("light-mode-active");
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    applyTheme(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  /* ── Active-section observer & Scroll Detection ────────────── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.substring(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 80) { setActiveSection("home"); return; }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact"); return;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-25% 0px -55% 0px", threshold: 0.05 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });

    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  /* ── Body-scroll lock ───────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── ESC to close + focus-trap ──────────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
      if (e.key === "Tab" && menuOpen && menuRef.current) {
        const els = menuRef.current.querySelectorAll<HTMLElement>(
          "a[href], button, input, textarea, [tabindex]:not([tabindex='-1'])"
        );
        if (!els.length) return;
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
        else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* ── Sidebar stagger variants ───────────────────────────── */
  const sidebarContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };
  const sidebarItem = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 280, damping: 24 } },
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          DESKTOP FLOATING NAVBAR ≥ 1024 px
          Sleek floating glass capsule
      ══════════════════════════════════════════════════════ */}
      <motion.header
        className="fixed top-4 inset-x-0 z-[50] hidden lg:flex justify-center pointer-events-none px-6"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`pointer-events-auto w-full max-w-[1280px] h-[64px] flex items-center justify-between px-5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#0A0E1A]/90 border border-[#2A3348] shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(67,97,238,0.2)] backdrop-blur-2xl"
              : "bg-[#0A0E1A]/70 border border-[#2A3348]/60 shadow-lg backdrop-blur-xl"
          }`}
        >
          {/* Brand Logo & Avatar */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none flex-shrink-0"
            aria-label="Home"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#4361EE]/50 group-hover:border-[#00E676] transition-colors duration-300 flex-shrink-0">
              <Image src={siteConfig.profileImage} alt={siteConfig.name} fill className="object-cover" sizes="36px" priority />
              {/* Online indicator dot */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00E676] ring-2 ring-[#0A0E1A]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold font-mono text-[#F1F1F1] text-xs tracking-wider uppercase group-hover:text-[#00E676] transition-colors duration-200">
                {siteConfig.name}
              </span>
              <span className="text-[9px] font-mono text-[#00E676] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                Available for work
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-[#131A2B]/60 border border-[#2A3348]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const Icon = navIcons[link.href] || Home;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider font-mono rounded-full transition-colors duration-200 focus:outline-none ${
                    isActive ? "text-[#F1F1F1]" : "text-[#A0A0A0] hover:text-[#F1F1F1]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#00E676]" : "text-[#A0A0A0]"}`} />
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="desktopPill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        background: "linear-gradient(135deg, rgba(67,97,238,0.35) 0%, rgba(0,230,118,0.2) 100%)",
                        border: "1px solid #4361EE",
                        boxShadow: "0 0 15px rgba(67,97,238,0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Quick Command & Theme & Hire Button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Command Palette Trigger */}
            <button
              onClick={onToggleCommandPalette}
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131A2B] border border-[#2A3348] text-[#A0A0A0] hover:text-[#F1F1F1] hover:border-[#4361EE] transition-all duration-200 text-[11px] font-mono"
              title="Search & Commands (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#4361EE]" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded text-[9px] bg-[#2A3348] text-[#F1F1F1] font-mono">⌘K</kbd>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-[#2A3348] hover:border-[#4361EE] bg-[#131A2B] text-[#A0A0A0] hover:text-[#F1F1F1] transition-all duration-200 flex items-center justify-center focus:outline-none"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            {/* Hire Me CTA Button */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#F1F1F1] bg-[#4361EE] hover:bg-[#3651D4] shadow-[0_0_20px_rgba(67,97,238,0.4)] hover:shadow-[0_0_28px_rgba(67,97,238,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════
          MOBILE + TABLET TOPBAR < 1024 px
          Clean, modern glass top header
      ══════════════════════════════════════════════════════ */}
      <motion.header
        className="fixed top-0 inset-x-0 z-[50] lg:hidden flex items-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "60px",
          background: "rgba(10,14,26,0.9)",
          borderBottom: "1px solid #2A3348",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo & Avatar */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0"
            aria-label="Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#4361EE] flex-shrink-0">
              <Image src={siteConfig.profileImage} alt={siteConfig.name} fill className="object-cover" sizes="32px" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-bold font-mono text-[#F1F1F1] text-xs tracking-wider uppercase">
                {siteConfig.name}
              </span>
              <span className="text-[8px] font-mono text-[#00E676] flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#00E676] animate-pulse" />
                Online
              </span>
            </div>
          </a>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Command Search */}
            <button
              onClick={onToggleCommandPalette}
              className="w-9 h-9 rounded-full border border-[#2A3348] bg-[#131A2B] text-[#A0A0A0] hover:text-[#F1F1F1] flex items-center justify-center focus:outline-none"
              aria-label="Search"
              title="Search commands"
            >
              <Search className="w-4 h-4 text-[#4361EE]" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-[#2A3348] bg-[#131A2B] text-[#A0A0A0] hover:text-[#F1F1F1] flex items-center justify-center focus:outline-none"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-9 h-9 rounded-full border border-[#4361EE]/40 bg-[#4361EE]/20 text-[#F1F1F1] flex items-center justify-center focus:outline-none hover:bg-[#4361EE]/30 transition-all duration-200"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu className="w-4.5 h-4.5 text-[#F1F1F1]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════
          SLIDE-OUT NAVIGATION DRAWER (Mobile + Tablet)
      ══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{ background: "rgba(10,14,26,0.85)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            {/* Drawer panel */}
            <motion.div
              ref={menuRef}
              className="absolute left-0 top-0 bottom-0 flex flex-col"
              style={{
                width: "min(340px, 86vw)",
                background: "#131A2B",
                borderRight: "1px solid #2A3348",
                borderRadius: "0 24px 24px 0",
                boxShadow: "10px 0 50px rgba(0,0,0,0.8)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
              }}
              drag="x"
              dragConstraints={{ left: -400, right: 0 }}
              dragElastic={{ left: 0.2, right: 0.02 }}
              onDragEnd={(_, info) => { if (info.offset.x < -60 || info.velocity.x < -400) closeMenu(); }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-[#2A3348]">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#4361EE]">
                    <Image src={siteConfig.profileImage} alt={siteConfig.name} fill className="object-cover" sizes="36px" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-[#F1F1F1] tracking-wider uppercase">
                      {siteConfig.name}
                    </span>
                    <span className="text-[9px] font-mono text-[#00E676]">Full Stack Developer</span>
                  </div>
                </div>

                <button
                  onClick={closeMenu}
                  className="w-9 h-9 rounded-full border border-[#2A3348] hover:border-[#4361EE] text-[#A0A0A0] hover:text-[#F1F1F1] flex items-center justify-center transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.nav
                className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1.5"
                variants={sidebarContainer}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  const Icon = navIcons[link.href] || Home;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      variants={sidebarItem}
                      onClick={closeMenu}
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-[12px] font-bold font-mono uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? "text-[#F1F1F1] bg-[#4361EE]/20 border-l-4 border-[#00E676] shadow-[0_0_15px_rgba(67,97,238,0.3)]"
                          : "text-[#A0A0A0] border-l-4 border-transparent hover:text-[#F1F1F1] hover:bg-[#2A3348]/40"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#00E676]" : "text-[#A0A0A0]"}`} />
                      <span>{link.label}</span>
                    </motion.a>
                  );
                })}
              </motion.nav>

              {/* Drawer Footer CTA */}
              <div
                className="px-5 py-5 border-t border-[#2A3348] flex flex-col gap-3"
                style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
              >
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center py-2.5 rounded-xl text-[11px] font-bold font-mono uppercase tracking-wider text-[#F1F1F1] bg-[#4361EE]/20 border border-[#4361EE] hover:bg-[#4361EE]/35 transition-all min-h-[44px]"
                  >
                    Hire Me
                  </a>
                  <a
                    href={siteConfig.resumePath}
                    download="Sahil_Nayak_Resume.pdf"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[11px] font-bold font-mono uppercase tracking-wider text-[#F1F1F1] bg-[#4361EE] shadow-lg shadow-[#4361EE]/30 min-h-[44px]"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#00E676]" />
                    Resume
                  </a>
                </div>

                <div className="flex flex-col items-center gap-0.5 mt-1">
                  <span className="text-[10px] text-[#A0A0A0] font-mono">{siteConfig.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════
          DYNAMIC MOBILE FLOATING BOTTOM DOCK < 1024 px
          Ultra-clean glass pill bar for thumb interaction
      ══════════════════════════════════════════════════════ */}
      <div className="fixed bottom-4 inset-x-0 z-[40] lg:hidden flex justify-center px-4 pointer-events-none">
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#0A0E1A]/90 border border-[#2A3348] shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(67,97,238,0.2)] backdrop-blur-2xl"
        >
          {[
            { href: "#home", label: "Home", icon: Home },
            { href: "#about", label: "About", icon: User },
            { href: "#projects", label: "Projects", icon: Briefcase },
            { href: "#contact", label: "Contact", icon: Mail },
          ].map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center w-11 h-11 rounded-full transition-all duration-200 ${
                  isActive ? "text-[#F1F1F1] bg-[#4361EE]/30 shadow-[0_0_12px_rgba(67,97,238,0.5)]" : "text-[#A0A0A0] hover:text-[#F1F1F1]"
                }`}
                title={item.label}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-[#00E676]" : ""}`} />
                <span className="sr-only">{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="mobileBottomPill"
                    className="absolute inset-0 rounded-full border border-[#4361EE] -z-10"
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
          
          <div className="w-[1px] h-6 bg-[#2A3348] mx-1" />

          {/* Menu Drawer Toggle Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#4361EE]/20 border border-[#4361EE]/50 text-[#F1F1F1] hover:bg-[#4361EE]/40 transition-all duration-200"
            aria-label="More navigation links"
            title="All Sections Menu"
          >
            <Menu className="w-5 h-5 text-[#F1F1F1]" />
          </button>
        </motion.div>
      </div>
    </>
  );
}
