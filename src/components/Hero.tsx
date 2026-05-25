"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const { t, language } = useLanguage();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage left
      y: Math.random() * 100, // percentage top
      size: Math.random() * 5 + 2, // px
      duration: Math.random() * 10 + 10, // seconds
      delay: Math.random() * -20, // starts immediately offset
    }));
    setParticles(generated);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 font-sans"
    >
      {/* Background Cinematic Photo with Light Mask */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.05]"
        style={{ 
          backgroundImage: `url('/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.29%20AM.jpeg')`,
        }}
      />
      
      {/* Cinematic Overlays for White/Light theme */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/85 to-white/45" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/90 via-transparent to-white/75" />
      
      {/* Dynamic Saffron Light Leaks */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5100]/6 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#ff7700]/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Ash/Ember Particles System */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="particle bg-[#ff7700]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [-100, -800],
              x: [0, Math.sin(p.id) * 40, -Math.sin(p.id) * 20],
              opacity: [0, 0.5, 0.3, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center py-20">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/70 border border-slate-200/50 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7700] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5100]"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#ff7700] uppercase font-english">
            {t.quote.badge}
          </span>
        </motion.div>

        {/* Huge Saffron Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-hindi text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
        >
          <span className="text-slate-900">मध्य प्रदेश </span>
          <span className="text-gradient-saffron block mt-2 drop-shadow-[0_2px_10px_rgba(255,81,0,0.12)]">
            युवा समाज सेना
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-hindi text-slate-800 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide mb-8"
        >
          {t.hero.subtitle}
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12 font-medium"
        >
          {t.hero.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScrollTo("impact")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff5100] to-[#ff7700] hover:from-[#ff7700] hover:to-[#ff5100] shadow-[0_5px_25px_rgba(255,81,0,0.2)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer"
          >
            {t.hero.aboutBtn}
          </button>
          
          <button
            onClick={() => handleScrollTo("stories")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-700 bg-slate-100/80 border border-slate-200/80 hover:bg-slate-200/85 hover:border-slate-300 backdrop-blur-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer"
          >
            {t.hero.storyBtn}
          </button>
        </motion.div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.4, duration: 1 }}
          onClick={() => handleScrollTo("impact")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 font-english hover:text-[#ff7700] transition-colors">
            {language === "hi" ? "नीचे स्क्रॉल करें" : "Scroll Down"}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-slate-500 hover:text-[#ff7700] transition-colors"
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
