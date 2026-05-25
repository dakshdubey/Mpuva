"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Quote } from "lucide-react";

export default function QuoteSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scaleText = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const lightLeakX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white py-20 font-sans"
    >
      {/* Dynamic Back-light Glow Leaks */}
      <motion.div 
        style={{ x: lightLeakX }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ff5100]/5 rounded-full blur-[140px] pointer-events-none" 
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#ffffff_90%)]" />

      {/* Grid Pattern Atmosphere */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Floating Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-8 text-[#ff7700]"
        >
          <Quote size={60} className="fill-[#ff7700]/5" />
        </motion.div>

        {/* Cinematic Animated Quotes */}
        <motion.div
          style={{ scale: scaleText, opacity: opacityText }}
          className="space-y-6"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#ff7700] uppercase block">
            {t.quote.badge}
          </span>

          <blockquote className="font-hindi text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-snug">
            {t.quote.text}
          </blockquote>

          <div className="flex items-center justify-center gap-3 pt-6">
            <span className="w-6 h-[1px] bg-slate-300" />
            <cite className="not-italic text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest font-english">
              {t.quote.author}
            </cite>
            <span className="w-6 h-[1px] bg-slate-300" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
