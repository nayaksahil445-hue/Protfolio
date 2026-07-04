"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Image from "next/image";
import { siteConfig, navLinks } from "@/data/site-config";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onToggleCommandPalette: () => void;
}

export default function Navbar({ onToggleCommandPalette }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

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

  /* ── Active-section observer ────────────────────────────── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.substring(1));

    const onScroll = () => {
      if (window.scrollY < 80) { setActiveSection("home"); return; }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact"); return;
      }
      lastScrollY.current = window.scrollY;
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

  /* ── Hamburger variants ─────────────────────────────────── */
  const line1 = { closed: { rotate: 0, y: 0 }, opened: { rotate: 45, y: 7 } };
  const line2 = { closed: { opacity: 1 }, opened: { opacity: 0 } };
  const line3 = { closed: { rotate: 0, y: 0 }, opened: { rotate: -45, y: -7 } };

  /* ── Sidebar stagger children ───────────────────────────── */
  const sidebarContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } },
  };
  const sidebarItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 260, damping: 22 } },
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          DESKTOP NAVBAR  ≥ 1200 px
          Floating pill, 92 % wide, centred, 70 px tall
      ══════════════════════════════════════════════════════ */}
      <motion.header
        className="fixed top-4 inset-x-0 z-[50] hidden xl:flex justify-center pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="pointer-events-auto w-[92%] max-w-[1400px] h-[70px] flex items-center justify-between px-6 rounded-2xl"
          style={{
            background: "rgba(11,16,32,0.82)",
            border: "1px solid rgba(139,92,246,0.25)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(139,92,246,0.08)",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-xl p-1 group"
            aria-label="Home"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#8B5CF6]/40 group-hover:border-[#06B6D4] transition-colors duration-300 flex-shrink-0">
              <Image src={siteConfig.profileImage} alt={siteConfig.name} fill className="object-cover" sizes="36px" priority />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold font-mono text-white text-sm tracking-widest uppercase group-hover:text-[#8B5CF6] transition-colors duration-300">
                {siteConfig.name}
              </span>
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono">CS &amp; DS Engineer</span>
            </div>
          </a>

          {/* Centred nav links */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[11px] font-semibold uppercase tracking-widest font-mono rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                    isActive ? "text-white" : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktopPill"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ background: "rgba(139,92,246,0.22)", border: "1px solid rgba(139,92,246,0.35)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 text-white/50 hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg text-[11px] font-bold font-mono uppercase tracking-widest text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
                boxShadow: "0 2px 16px rgba(139,92,246,0.4)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(139,92,246,0.65)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(139,92,246,0.4)"; }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════
          MOBILE + TABLET TOPBAR  < 1200 px
          Minimal strip: Logo · Theme · Hamburger
      ══════════════════════════════════════════════════════ */}
      <motion.header
        className="fixed top-0 inset-x-0 z-[50] xl:hidden flex items-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "64px",
          background: "rgba(11,16,32,0.88)",
          borderBottom: "1px solid rgba(139,92,246,0.18)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0"
            aria-label="Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#8B5CF6]/40 flex-shrink-0">
              <Image src={siteConfig.profileImage} alt={siteConfig.name} fill className="object-cover" sizes="32px" priority />
            </div>
            <span className="font-bold font-mono text-white text-sm tracking-wider uppercase group-hover:text-[#8B5CF6] transition-colors duration-200">
              {siteConfig.name}
            </span>
          </a>

          {/* Right side icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-full border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/45 text-white/50 hover:text-white transition-all duration-200 flex items-center justify-center focus:outline-none"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-11 h-11 rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 text-white flex flex-col items-center justify-center gap-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] transition-all duration-200 hover:border-[#8B5CF6]/50"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="w-4.5 h-[2px] bg-white block rounded-full" />
              <span className="w-4.5 h-[2px] bg-white block rounded-full" />
              <span className="w-4.5 h-[2px] bg-white block rounded-full" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════
          LEFT-SIDE DRAWER  (mobile + tablet)
      ══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[60] xl:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{ background: "rgba(5,8,22,0.72)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
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
                width: "min(340px, 85vw)",
                background: "rgba(11,16,32,0.97)",
                border: "1px solid rgba(139,92,246,0.22)",
                borderLeft: "none",
                borderRadius: "0 20px 20px 0",
                boxShadow: "4px 0 40px rgba(0,0,0,0.55), inset -1px 0 0 rgba(139,92,246,0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
              drag="x"
              dragConstraints={{ left: -400, right: 0 }}
              dragElastic={{ left: 0.25, right: 0.02 }}
              onDragEnd={(_, info) => { if (info.offset.x < -60 || info.velocity.x < -400) closeMenu(); }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              {/* ── Header row: label + action icons + close ── */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#8B5CF6]/10">
                <span className="text-[10px] font-bold font-mono tracking-[0.18em] uppercase text-white/30">
                  Navigation
                </span>

                <div className="flex items-center gap-2">
                  {/* Theme toggle inside sidebar */}
                  <button
                    onClick={toggleTheme}
                    className="w-9 h-9 rounded-full border border-[#8B5CF6]/20 text-white/40 hover:text-white hover:border-[#8B5CF6]/45 transition-all duration-200 flex items-center justify-center focus:outline-none"
                    aria-label={darkMode ? "Light mode" : "Dark mode"}
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>

                  {/* Close button */}
                  <button
                    onClick={closeMenu}
                    className="w-9 h-9 rounded-full border border-[#8B5CF6]/20 text-white/40 hover:text-white hover:border-[#8B5CF6]/45 transition-all duration-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ── Nav links ── */}
              <motion.nav
                className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-1"
                variants={sidebarContainer}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      variants={sidebarItem}
                      onClick={closeMenu}
                      className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-[13px] font-bold font-mono uppercase tracking-widest transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] border-l-2 ${
                        isActive
                          ? "text-white border-[#8B5CF6] bg-[#8B5CF6]/10"
                          : "text-white/40 border-transparent hover:text-white/75 hover:bg-white/4"
                      }`}
                      style={isActive ? { borderLeft: "2px solid #8B5CF6" } : {}}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </motion.nav>

              {/* ── Footer / CTA ── */}
              <div
                className="px-5 py-5 border-t flex flex-col gap-3"
                style={{ borderColor: "rgba(139,92,246,0.1)", paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
              >
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Hire Me */}
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center py-3 rounded-xl text-[11px] font-bold font-mono uppercase tracking-widest text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[44px]"
                    style={{
                      background: "rgba(139,92,246,0.12)",
                      border: "1px solid rgba(139,92,246,0.28)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.22)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.12)"; }}
                  >
                    Hire Me
                  </a>

                  {/* Resume */}
                  <a
                    href={siteConfig.resumePath}
                    download="Sahil_Nayak_Resume.pdf"
                    onClick={closeMenu}
                    className="flex items-center justify-center py-3 rounded-xl text-[11px] font-bold font-mono uppercase tracking-widest text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[44px]"
                    style={{
                      background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
                      boxShadow: "0 2px 14px rgba(139,92,246,0.35)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(139,92,246,0.6)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 14px rgba(139,92,246,0.35)"; }}
                  >
                    Resume
                  </a>
                </div>

                <div className="flex flex-col items-center gap-0.5 mt-1">
                  <span className="text-[10px] text-white/25 font-mono">{siteConfig.location}</span>
                  <span className="text-[9px] text-white/15 font-mono">Pull to Close →</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
