"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Heart, Users, ShieldAlert, Award } from "lucide-react";

export default function StorySection({ view = "all" }: { view?: "all" | "about" | "story" | "mission" }) {
  const { t, language } = useLanguage();

  return (
    <section 
      id="about" 
      className={`relative bg-white font-sans overflow-hidden ${view === "all" ? "py-24 md:py-32" : "pt-32 pb-24 md:pb-32"}`}
    >
      {/* Subtle light leaks */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#ff5100]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#ff7700]/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Section Header */}
        {(view === "all" || view === "about" || view === "story" || view === "mission") && (
          <div className="max-w-3xl mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[#ff7700] text-xs font-bold uppercase tracking-[0.25em] mb-4"
            >
              <span className="w-8 h-[1px] bg-[#ff7700]" />
              {view === "about" ? t.nav.about : view === "story" ? t.nav.stories : view === "mission" ? t.nav.mission : t.story.sectionSubtitle}
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-hindi text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
            >
              {view === "about" 
                ? (language === "hi" ? "संस्थापक विचारधारा एवं उदय" : "Ideology & Origin Story") 
                : view === "story" 
                ? (language === "hi" ? "सच्ची राष्ट्र सेवा एवं युवा जांबाज" : "Our Empowered Youth Journey") 
                : view === "mission" 
                ? (language === "hi" ? "हमारा महान संकल्प व लक्ष्य" : "Our Mission & Dedication") 
                : (language === "hi" ? "हमारे विचार, हमारा संकल्प" : "Our Vision, Our Dedication")}
            </motion.h2>
          </div>
        )}

        {/* Narrative Flow 1: Origin (Image Right, Text Left) */}
        {(view === "all" || view === "about") && (
          <div id="stories" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-36">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex p-3 rounded-xl bg-[#ff5100]/10 border border-[#ff5100]/25 text-[#ff7700] mb-2">
                <Heart size={20} />
              </div>
              
              <h3 className="font-hindi text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.story.originTitle}
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {t.story.originText}
              </p>
              
              <div className="w-12 h-[2px] bg-[#ff7700]/50 pt-2" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-200/50 shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-10" />
              <motion.img 
                src="/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.25%20AM.jpeg" 
                alt="Origin Story" 
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>
        )}

        {/* Narrative Flow 2: Youth & Unity (Image Left, Text Right) */}
        {(view === "all" || view === "story") && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-36">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 order-last lg:order-first relative group overflow-hidden rounded-2xl border border-slate-200/50 shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-10" />
              <motion.img 
                src="/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.36%20AM.jpeg" 
                alt="Youth Empowerment" 
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex p-3 rounded-xl bg-[#ff5100]/10 border border-[#ff5100]/25 text-[#ff7700] mb-2">
                <Users size={20} />
              </div>

              <h3 className="font-hindi text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.story.youthTitle}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {t.story.youthText}
              </p>

              <div className="w-12 h-[2px] bg-[#ff7700]/50 pt-2" />
            </motion.div>
          </div>
        )}

        {/* Narrative Flow 3: Split Grid for Unity & Dedication */}
        {(view === "all" || view === "mission") && (
          <div id="mission" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-2xl glass-panel border border-slate-200/50 space-y-6 hover:border-[#ff5100]/20 hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-10 w-24 h-24 bg-[#ff5100]/3 blur-xl rounded-full pointer-events-none group-hover:bg-[#ff5100]/6 transition-colors" />
              <div className="inline-flex p-3 rounded-xl bg-[#ff5100]/10 border border-[#ff5100]/20 text-[#ff7700]">
                <Award size={20} />
              </div>
              
              <h4 className="font-hindi text-xl sm:text-2xl font-bold text-slate-900">
                {t.story.unityTitle}
              </h4>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                {t.story.unityText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="p-8 md:p-10 rounded-2xl glass-panel border border-slate-200/50 space-y-6 hover:border-[#ff5100]/20 hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-10 w-24 h-24 bg-[#ff7700]/3 blur-xl rounded-full pointer-events-none group-hover:bg-[#ff7700]/6 transition-colors" />
              <div className="inline-flex p-3 rounded-xl bg-[#ff5100]/10 border border-[#ff5100]/20 text-[#ff7700]">
                <ShieldAlert size={20} />
              </div>

              <h4 className="font-hindi text-xl sm:text-2xl font-bold text-slate-900">
                {t.story.nationTitle}
              </h4>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                {t.story.nationText}
              </p>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}
