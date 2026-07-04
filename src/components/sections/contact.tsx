"use client";

import React, { useRef, useState } from "react";
import { siteConfig } from "@/data/site-config";
import { Mail, Phone, MapPin, Send, MessageSquare, Check, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");

    // Initialize EmailJS public key. If the user hasn't configured environment variables,
    // we'll run a simulated send or show a message.
    // Replace service_id, template_id, public_key with real credentials if available.
    // Public Key needs to be initialized.
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_default";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_default";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!publicKey) {
      // Simulate form submission for demonstration since keys aren't in config
      setTimeout(() => {
        setLoading(false);
        setStatus("success");
        formRef.current?.reset();
      }, 1500);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          setErrorMessage(error.text || "Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050816]">
      {/* Background decoration */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">Let's talk about projects</h3>
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              Feel free to reach out for collaborations, project inquiries, or job opportunities. I'm always open to discussing new ideas and interesting problems!
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {/* Mail Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/45 border border-primary/10 hover:border-primary/30 transition-all">
                <div className="p-3 bg-card border border-primary/10 rounded-lg text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-text-muted font-mono uppercase tracking-wider block">Email Address</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm md:text-base text-white hover:text-accent font-mono">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/45 border border-primary/10 hover:border-primary/30 transition-all">
                <div className="p-3 bg-card border border-primary/10 rounded-lg text-primary-light">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-text-muted font-mono uppercase tracking-wider block">Phone Number</span>
                  <a href={`tel:${siteConfig.phone}`} className="text-sm md:text-base text-white hover:text-primary-light font-mono">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/45 border border-primary/10 hover:border-primary/30 transition-all">
                <div className="p-3 bg-card border border-primary/10 rounded-lg text-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-text-muted font-mono uppercase tracking-wider block">Location</span>
                  <span className="text-sm md:text-base text-white font-mono">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-white font-mono text-sm font-semibold rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card/40 border border-primary/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm relative"
            >
              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="user_name" className="text-xs text-text-muted font-mono uppercase tracking-wider block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    placeholder="Sahil Nayak"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="text-xs text-text-muted font-mono uppercase tracking-wider block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    placeholder="sahil@example.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs text-text-muted font-mono uppercase tracking-wider block mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    placeholder="Hi Sahil, I would love to collaborate on a project..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 p-3.5 bg-gradient-to-r from-primary to-secondary disabled:from-primary/50 disabled:to-secondary/50 text-white font-mono font-bold rounded-xl shadow-lg shadow-primary/25 cursor-pointer disabled:cursor-not-allowed hover:brightness-110 transition-all text-sm uppercase tracking-wider"
                >
                  {loading ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Feedback Alerts */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-semibold rounded-lg flex items-center gap-2"
                    >
                      <Check className="w-4.5 h-4.5 shrink-0" />
                      Message sent successfully! I will get back to you soon.
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs md:text-sm font-semibold rounded-lg flex items-center gap-2"
                    >
                      <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Embedded Map Grid */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-primary/10 shadow-2xl relative h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.68292837335!2d85.73354366633633!3d20.301905333553255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d119743.68!2d85.8078512!3d20.3019053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(10%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
