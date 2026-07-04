"use client";

import { useEffect, useRef, useState } from "react";
import { Search, FolderOpen, Send, FileDown, Phone, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // wait, we toggle it from the parent
      }
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter commands
  const commands = [
    {
      id: "projects",
      title: "View Featured Projects",
      subtitle: "Browse OSP, Attendance System, etc.",
      icon: <FolderOpen className="w-4 h-4 text-accent" />,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "resume",
      title: "Download Resume",
      subtitle: "Get Sahil Nayak's ATS Resume PDF",
      icon: <FileDown className="w-4 h-4 text-primary" />,
      action: () => {
        const link = document.createElement("a");
        link.href = siteConfig.resumePath;
        link.download = "Sahil_Nayak_Resume.pdf";
        link.click();
        onClose();
      },
    },
    {
      id: "contact",
      title: "Hire / Contact Me",
      subtitle: "Send a direct message via form",
      icon: <Send className="w-4 h-4 text-secondary" />,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "whatsapp",
      title: "Chat on WhatsApp",
      subtitle: "Instant messaging with Sahil",
      icon: <Phone className="w-4 h-4 text-green-500" />,
      action: () => {
        window.open(siteConfig.whatsapp, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      title: "LinkedIn Profile",
      subtitle: "Connect on LinkedIn",
      icon: <Linkedin className="w-4 h-4 text-blue-500" />,
      action: () => {
        window.open(siteConfig.linkedin, "_blank");
        onClose();
      },
    },
    {
      id: "github",
      title: "GitHub Repositories",
      subtitle: "Check out Sahil's open source code",
      icon: <Github className="w-4 h-4 text-white" />,
      action: () => {
        window.open(siteConfig.github, "_blank");
        onClose();
      },
    },
  ];

  // Dynamic search matching projects or commands
  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const matchedProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((tech) => tech.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] bg-[#050816]/80 backdrop-blur-md flex items-start justify-center pt-[15vh] px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          ref={containerRef}
          className="w-full max-w-xl bg-card border border-primary/20 rounded-2xl shadow-2xl overflow-hidden glass"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-primary/10">
            <Search className="w-5 h-5 text-text-secondary" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none text-white text-base outline-none placeholder:text-text-muted"
            />
            <span className="text-[10px] text-text-muted border border-primary/10 px-2 py-0.5 rounded uppercase font-mono">
              ESC
            </span>
          </div>

          {/* Results List */}
          <div className="max-h-[350px] overflow-y-auto p-2 flex flex-col gap-1">
            {filteredCommands.length > 0 && (
              <div>
                <span className="text-[10px] text-text-muted font-bold font-mono px-3 py-2 block uppercase tracking-wider">
                  Quick Commands
                </span>
                {filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full text-left flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-primary/10 hover:text-white text-text-secondary transition-all cursor-pointer group"
                  >
                    <div className="p-2 rounded-lg bg-card/80 border border-primary/5 group-hover:border-primary/20">
                      {cmd.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-accent">
                        {cmd.title}
                      </div>
                      <div className="text-xs text-text-muted">{cmd.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {matchedProjects.length > 0 && (
              <div className="mt-2">
                <span className="text-[10px] text-text-muted font-bold font-mono px-3 py-2 block uppercase tracking-wider">
                  Matched Projects
                </span>
                {matchedProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                      onClose();
                    }}
                    className="w-full text-left flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-accent/10 text-text-secondary transition-all cursor-pointer group"
                  >
                    <div className="text-xl p-2 rounded-lg bg-card/80 border border-primary/5">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white group-hover:text-accent flex items-center justify-between">
                        {project.title}
                        <span className="text-[10px] bg-primary/25 border border-primary/20 px-1.5 py-0.5 rounded text-white font-mono">
                          {project.category}
                        </span>
                      </div>
                      <div className="text-xs text-text-muted truncate max-w-[320px]">
                        {project.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {filteredCommands.length === 0 && matchedProjects.length === 0 && (
              <div className="py-8 text-center text-sm text-text-muted font-mono">
                No matching commands or projects found.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
